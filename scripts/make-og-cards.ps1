# =============================================================================
# Regenerates the Open Graph share cards in public/images/og/.
#
# NOT part of `npm run build`. These are committed assets: the build copies
# public/ verbatim and never needs to draw anything. Run this by hand only when
# the copy on a card changes, then commit the PNGs it writes.
#
#   powershell -ExecutionPolicy Bypass -File scripts/make-og-cards.ps1
#
# Windows-only, by design. It draws with GDI+ (System.Drawing) so that
# generating a raster image costs the project no npm dependency — the
# alternative is sharp or resvg, which pull a native binary into every install
# for something that runs about twice a year.
#
# Fonts are downloaded to a temp directory on each run rather than committed:
# Fredoka and Poppins are the site's display and UI faces, and the cards look
# off-brand without them.
#
# Why raster at all: no major Open Graph consumer renders SVG. WhatsApp,
# Facebook, LinkedIn and X all show a blank preview for an SVG og:image.
# =============================================================================

Add-Type -AssemblyName System.Drawing

$root    = Split-Path -Parent $PSScriptRoot
$outDir  = Join-Path $root 'public\images\og'
$fontDir = Join-Path ([System.IO.Path]::GetTempPath()) 'brollyjuniors-og-fonts'
New-Item -ItemType Directory -Force -Path $outDir  | Out-Null
New-Item -ItemType Directory -Force -Path $fontDir | Out-Null

# --- fonts -------------------------------------------------------------------
# Static TTFs from the upstream google/fonts repo. The webfont API serves woff2
# and a wrapped format GDI+ cannot parse, so do not switch these to that.
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$base = 'https://raw.githubusercontent.com/google/fonts/main/ofl'
$needed = @(
  @{ u = "$base/poppins/Poppins-Bold.ttf";           n = 'Poppins-Bold.ttf' },
  @{ u = "$base/poppins/Poppins-Regular.ttf";        n = 'Poppins-Regular.ttf' },
  @{ u = "$base/fredoka/Fredoka%5Bwdth,wght%5D.ttf"; n = 'Fredoka-var.ttf' }
)
foreach ($f in $needed) {
  $dest = Join-Path $fontDir $f.n
  if (-not (Test-Path $dest)) {
    Write-Host "  fetching $($f.n)"
    (New-Object System.Net.WebClient).DownloadFile($f.u, $dest)
  }
}

$pfc = New-Object System.Drawing.Text.PrivateFontCollection
Get-ChildItem $fontDir -Filter *.ttf | ForEach-Object { $pfc.AddFontFile($_.FullName) }
$families = @($pfc.Families)
if (-not $families) { throw 'No fonts loaded — check the downloads in ' + $fontDir }

function Pick([string[]]$names) {
  foreach ($n in $names) {
    $f = $families | Where-Object { $_.Name -eq $n } | Select-Object -First 1
    if ($f) { return $f }
  }
  $families[0]
}

# Fredoka ships as a variable font; its SemiBold named instance is the weight
# the site uses for display type, and it registers as its own GDI+ family.
$fredoka = Pick @('Fredoka SemiBold', 'Fredoka')
$poppins = Pick @('Poppins')

# GDI+ throws rather than synthesising when a style is missing from a family.
function StyleFor($family, [System.Drawing.FontStyle]$want) {
  if ($family.IsStyleAvailable($want)) { return $want }
  [System.Drawing.FontStyle]::Regular
}

# Built from a code point, not a literal: PowerShell 5.1 reads this file as
# ANSI, so a pasted middle dot would render as mojibake in the output image.
$DOT = [string][char]0x00B7

# --- palette, from src/styles/global.css -------------------------------------
function C([string]$hex) { [System.Drawing.ColorTranslator]::FromHtml($hex) }
$CREAM   = C '#fff8e7'
$NAVY    = C '#1e293b'
$WHITE   = C '#ffffff'
$INKSOFT = [System.Drawing.Color]::FromArgb(180, 30, 41, 59)
$PALETTE = @{
  yellow = C '#ffc93c'; coral = C '#ff6b6b'; mint = C '#4ecdc4'
  lavender = C '#a78bfa'; blue = C '#2b6cb0'
}

function RoundedPath([double]$x, [double]$y, [double]$w, [double]$h, [double]$r) {
  $p = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $p.AddArc([single]$x,             [single]$y,             [single]$d, [single]$d, 180, 90)
  $p.AddArc([single]($x + $w - $d), [single]$y,             [single]$d, [single]$d, 270, 90)
  $p.AddArc([single]($x + $w - $d), [single]($y + $h - $d), [single]$d, [single]$d, 0,   90)
  $p.AddArc([single]$x,             [single]($y + $h - $d), [single]$d, [single]$d, 90,  90)
  $p.CloseFigure()
  $p
}

# The site's signature offset navy shadow plus hard outline.
function HardBlock($g, [double]$x, [double]$y, [double]$w, [double]$h, [double]$r, $fill, [double]$off = 10) {
  $sh = RoundedPath ($x + $off) ($y + $off) $w $h $r
  $br = New-Object System.Drawing.SolidBrush($NAVY); $g.FillPath($br, $sh)
  $br.Dispose(); $sh.Dispose()
  $p = RoundedPath $x $y $w $h $r
  $br = New-Object System.Drawing.SolidBrush($fill); $g.FillPath($br, $p); $br.Dispose()
  $pen = New-Object System.Drawing.Pen($NAVY, 4); $g.DrawPath($pen, $p)
  $pen.Dispose(); $p.Dispose()
}

function WrapText($g, [string]$text, $font, [double]$maxW) {
  $lines = @(); $cur = ''
  foreach ($w in ($text -split ' ')) {
    $try = if ($cur) { "$cur $w" } else { $w }
    if ($g.MeasureString($try, $font).Width -gt $maxW -and $cur) { $lines += $cur; $cur = $w }
    else { $cur = $try }
  }
  if ($cur) { $lines += $cur }
  ,$lines
}

function New-OgCard {
  param([string]$File, [string]$Headline, [string]$Sub, [string]$Accent = 'yellow')

  $W = 1200; $H = 630   # the size Facebook and LinkedIn both crop from cleanly
  $bmp = New-Object System.Drawing.Bitmap($W, $H, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $bmp.SetResolution(96, 96)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'; $g.TextRenderingHint = 'AntiAliasGridFit'
  $g.InterpolationMode = 'HighQualityBicubic'

  $acc = $PALETTE[$Accent]
  $br = New-Object System.Drawing.SolidBrush($CREAM)
  $g.FillRectangle($br, 0, 0, $W, $H); $br.Dispose()

  # Decorative cluster, right side. Rotated so the card does not read as a slide.
  $st = $g.Save(); $g.TranslateTransform(958, 292); $g.RotateTransform(-8)
  HardBlock $g -128 -186 256 256 34 $acc 12; $g.Restore($st)
  $st = $g.Save(); $g.TranslateTransform(902, 448); $g.RotateTransform(7)
  HardBlock $g -76 -76 152 152 26 $WHITE 10; $g.Restore($st)
  $st = $g.Save(); $g.TranslateTransform(1106, 466); $g.RotateTransform(-14)
  HardBlock $g -50 -50 100 100 20 $PALETTE['mint'] 8; $g.Restore($st)

  $L = 78; $textW = 690   # textW stops short of the decorative cluster
  $TOP = 196; $BOT = 512  # the band between the eyebrow pill and the footer rule
  $avail = $BOT - $TOP

  $fEyebrow = New-Object System.Drawing.Font($poppins, 19, (StyleFor $poppins ([System.Drawing.FontStyle]::Bold)), 'Pixel')
  $eyebrow = "BROLLY JUNIORS  $DOT  HYDERABAD"
  $ew = $g.MeasureString($eyebrow, $fEyebrow).Width
  HardBlock $g $L 72 ($ew + 44) 58 29 $WHITE 7
  $br = New-Object System.Drawing.SolidBrush($NAVY)
  $g.DrawString($eyebrow, $fEyebrow, $br, [single]($L + 22), [single]88); $br.Dispose()

  # Step the headline down until headline + sub fit the band, so a longer
  # string shrinks rather than colliding with the footer.
  $headStyle = StyleFor $fredoka ([System.Drawing.FontStyle]::Regular)
  $fSub = New-Object System.Drawing.Font($poppins, 21, [System.Drawing.FontStyle]::Regular, 'Pixel')
  $subLines = WrapText $g $Sub $fSub ($textW - 10)
  $subLh = $fSub.GetHeight($g) * 1.30
  $subH = $subLines.Count * $subLh
  $gap = 26

  $fHead = $null; $headLines = $null; $headLh = 0
  foreach ($size in 62, 56, 50, 44, 39) {
    $try = New-Object System.Drawing.Font($fredoka, $size, $headStyle, 'Pixel')
    $lines = WrapText $g $Headline $try $textW
    $lh = $try.GetHeight($g) * 1.10
    if (($lines.Count * $lh) + $gap + $subH -le $avail) {
      $fHead = $try; $headLines = $lines; $headLh = $lh; break
    }
    $try.Dispose()
  }
  if (-not $fHead) {
    $fHead = New-Object System.Drawing.Font($fredoka, 39, $headStyle, 'Pixel')
    $headLines = WrapText $g $Headline $fHead $textW
    $headLh = $fHead.GetHeight($g) * 1.10
  }

  $blockH = ($headLines.Count * $headLh) + $gap + $subH
  $y = $TOP + (($avail - $blockH) / 2)
  $br = New-Object System.Drawing.SolidBrush($NAVY)
  foreach ($ln in $headLines) { $g.DrawString($ln, $fHead, $br, [single]$L, [single]$y); $y += $headLh }
  $br.Dispose()

  $y += $gap
  $br = New-Object System.Drawing.SolidBrush($INKSOFT)
  foreach ($ln in $subLines) { $g.DrawString($ln, $fSub, $br, [single]$L, [single]$y); $y += $subLh }
  $br.Dispose()

  $pen = New-Object System.Drawing.Pen($NAVY, 3)
  $g.DrawLine($pen, [single]$L, [single]536, [single]($L + 500), [single]536); $pen.Dispose()

  $fFootB = New-Object System.Drawing.Font($poppins, 20, (StyleFor $poppins ([System.Drawing.FontStyle]::Bold)), 'Pixel')
  $fFootR = New-Object System.Drawing.Font($poppins, 20, [System.Drawing.FontStyle]::Regular, 'Pixel')
  $br = New-Object System.Drawing.SolidBrush($NAVY)
  $g.DrawString('brollyjuniors.com', $fFootB, $br, [single]$L, [single]558)
  $g.DrawString('+91 81868 44555',   $fFootR, $br, [single]($L + 320), [single]558)
  $br.Dispose()

  # Outer frame, so the card holds its edge on a white or dark chat background.
  $pen = New-Object System.Drawing.Pen($NAVY, 14)
  $g.DrawRectangle($pen, 7, 7, $W - 14, $H - 14); $pen.Dispose()

  $path = Join-Path $outDir $File
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  foreach ($o in @($fEyebrow, $fHead, $fSub, $fFootB, $fFootR)) { $o.Dispose() }
  $g.Dispose(); $bmp.Dispose()
  "  {0,-24} {1,7:N0} bytes" -f $File, (Get-Item $path).Length
}

# --- the cards ---------------------------------------------------------------
# One per section, not one per route: a share preview needs to be recognisable,
# not unique. src/lib/seo.js maps routes onto these by path prefix.
$d = " $DOT "
$cards = @(
  @{ f='default.png';          h='Kids classes in Hyderabad, where curiosity finds its feet.'; s="AI${d}Python${d}Abacus${d}Phonics${d}Vedic Maths${d}Public Speaking. Batches capped at 8."; a='yellow' },
  @{ f='ai.png';               h='AI classes for kids in Hyderabad';     s="Class 6 to 10${d}A separate 72-session curriculum for every class${d}No coding needed"; a='lavender' },
  @{ f='python.png';           h='Coding and Python classes for kids';   s="Class 6 to 10${d}Real typed Python, 72 sessions a year${d}A project every module"; a='blue' },
  @{ f='abacus.png';           h='Abacus classes in Hyderabad';          s="Ages 5 to 11${d}A 10-level Soroban pathway for focus, memory and mental maths"; a='coral' },
  @{ f='phonics.png';          h='Phonics classes in Hyderabad';         s="Ages 4 to 9${d}Six levels from letter sounds to fluent reading${d}Batches of 8"; a='mint' },
  @{ f='vedic-maths.png';      h='Vedic Maths classes in Hyderabad';     s="Ages 7 to 13${d}Pattern-based mental calculation, taught with real understanding"; a='yellow' },
  @{ f='public-speaking.png';  h='Public speaking classes for kids';     s="Class 1 to 5${d}A five-stage confidence ladder from show-and-tell to presentations"; a='coral' },
  @{ f='digital-literacy.png'; h='Creative and digital skills for kids'; s="Class 1 to 5${d}Art, storytelling, logical thinking and safe digital creation"; a='lavender' },
  @{ f='schools.png';          h='AI and coding curriculum for schools'; s="Annual programs${d}Coding clubs${d}Innovation labs${d}Teacher training in Hyderabad"; a='blue' },
  @{ f='resources.png';        h='Learning guides for parents';          s="Honest guides on phonics, abacus, Vedic Maths, AI safety and coding for children"; a='mint' }
)

Write-Host "`nWriting share cards to $outDir`n"
foreach ($c in $cards) { New-OgCard -File $c.f -Headline $c.h -Sub $c.s -Accent $c.a }
Write-Host "`nDone. Commit the PNGs, then rebuild.`n"
