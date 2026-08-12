# =============================================================================
# Regenerates the favicon set in public/.
#
# NOT part of `npm run build` — same reasoning as scripts/make-og-cards.ps1.
# These are committed assets; run this by hand only if the mark changes.
#
#   powershell -ExecutionPolicy Bypass -File scripts/make-favicons.ps1
#
# Why this exists: the site used to declare an emoji inside an SVG data URI as
# its only icon. Chrome does not reliably render emoji in SVG favicons, and when
# the declared icon fails to decode the browser silently falls back to
# requesting /favicon.ico — which did not exist, producing a 404 on every page
# load. iOS also requests /apple-touch-icon.png, which 404'd for the same reason.
#
# Writes:
#   public/favicon.ico          16 + 32 + 48, PNG-compressed inside the ICO
#   public/favicon-32.png       modern browsers prefer this over the .ico
#   public/apple-touch-icon.png 180x180, full-bleed (iOS masks its own corners)
# =============================================================================

Add-Type -AssemblyName System.Drawing

$root    = Split-Path -Parent $PSScriptRoot
$outDir  = Join-Path $root 'public'
$fontDir = Join-Path ([System.IO.Path]::GetTempPath()) 'brollyjuniors-og-fonts'
New-Item -ItemType Directory -Force -Path $fontDir | Out-Null

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$fredokaPath = Join-Path $fontDir 'Fredoka-var.ttf'
if (-not (Test-Path $fredokaPath)) {
  (New-Object System.Net.WebClient).DownloadFile(
    'https://raw.githubusercontent.com/google/fonts/main/ofl/fredoka/Fredoka%5Bwdth,wght%5D.ttf', $fredokaPath)
}
$pfc = New-Object System.Drawing.Text.PrivateFontCollection
$pfc.AddFontFile($fredokaPath)
$fam = @($pfc.Families) | Where-Object { $_.Name -eq 'Fredoka SemiBold' } | Select-Object -First 1
if (-not $fam) { $fam = @($pfc.Families)[0] }

$NAVY  = [System.Drawing.ColorTranslator]::FromHtml('#1e293b')
$CREAM = [System.Drawing.ColorTranslator]::FromHtml('#fff8e7')

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

# Drawn once at 512 and downscaled: text hinted directly at 16px turns to mush.
function New-Mark([int]$size, [bool]$rounded) {
  $S = 512
  $bmp = New-Object System.Drawing.Bitmap($S, $S, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'; $g.TextRenderingHint = 'AntiAlias'

  $br = New-Object System.Drawing.SolidBrush($NAVY)
  if ($rounded) {
    $p = RoundedPath 0 0 $S $S ($S * 0.22)
    $g.FillPath($br, $p); $p.Dispose()
  } else {
    $g.FillRectangle($br, 0, 0, $S, $S)   # full bleed: iOS masks its own corners
  }
  $br.Dispose()

  $f = New-Object System.Drawing.Font($fam, ($S * 0.62), [System.Drawing.FontStyle]::Regular, 'Pixel')
  $sf = New-Object System.Drawing.StringFormat
  $sf.Alignment = 'Center'; $sf.LineAlignment = 'Center'
  $br = New-Object System.Drawing.SolidBrush($CREAM)
  # Optical centring: the glyph box sits low, so lift it slightly.
  $rect = New-Object System.Drawing.RectangleF(0, [single](-$S * 0.045), [single]$S, [single]$S)
  $g.DrawString('B', $f, $br, $rect, $sf)
  $br.Dispose(); $f.Dispose(); $sf.Dispose(); $g.Dispose()

  $out = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g2 = [System.Drawing.Graphics]::FromImage($out)
  $g2.InterpolationMode = 'HighQualityBicubic'
  $g2.PixelOffsetMode = 'HighQuality'
  $g2.DrawImage($bmp, 0, 0, $size, $size)
  $g2.Dispose(); $bmp.Dispose()
  $out
}

function Save-Png($bmp, [string]$path) {
  $ms = New-Object System.IO.MemoryStream
  $bmp.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
  [System.IO.File]::WriteAllBytes($path, $ms.ToArray())
  $ms.Dispose()
}

# GDI+ cannot write a multi-resolution .ico, so build the container by hand.
# ICONDIR (6 bytes) + one ICONDIRENTRY (16 bytes) per image + the PNG payloads.
# PNG-inside-ICO is understood by every browser still in use.
function Save-Ico([int[]]$sizes, [string]$path) {
  $pngs = @()
  foreach ($s in $sizes) {
    $b = New-Mark $s $true
    $ms = New-Object System.IO.MemoryStream
    $b.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
    $pngs += ,@($s, $ms.ToArray())
    $ms.Dispose(); $b.Dispose()
  }

  $fs = New-Object System.IO.MemoryStream
  $bw = New-Object System.IO.BinaryWriter($fs)
  $bw.Write([uint16]0)               # reserved
  $bw.Write([uint16]1)               # type 1 = icon
  $bw.Write([uint16]$pngs.Count)

  $offset = 6 + (16 * $pngs.Count)
  foreach ($p in $pngs) {
    $size = $p[0]; $data = $p[1]
    $bw.Write([byte]$(if ($size -ge 256) { 0 } else { $size }))
    $bw.Write([byte]$(if ($size -ge 256) { 0 } else { $size }))
    $bw.Write([byte]0)               # palette count
    $bw.Write([byte]0)               # reserved
    $bw.Write([uint16]1)             # colour planes
    $bw.Write([uint16]32)            # bits per pixel
    $bw.Write([uint32]$data.Length)
    $bw.Write([uint32]$offset)
    $offset += $data.Length
  }
  foreach ($p in $pngs) { $bw.Write($p[1]) }

  $bw.Flush()
  [System.IO.File]::WriteAllBytes($path, $fs.ToArray())
  $bw.Dispose(); $fs.Dispose()
}

Save-Ico @(16, 32, 48) (Join-Path $outDir 'favicon.ico')

$b = New-Mark 32 $true;   Save-Png $b (Join-Path $outDir 'favicon-32.png');       $b.Dispose()
# Google wants a favicon that is a multiple of 48px square for the icon it shows
# beside a result in mobile search; 192 also serves Android home screens.
$b = New-Mark 192 $true;  Save-Png $b (Join-Path $outDir 'favicon-192.png');      $b.Dispose()
$b = New-Mark 180 $false; Save-Png $b (Join-Path $outDir 'apple-touch-icon.png'); $b.Dispose()

foreach ($n in 'favicon.ico', 'favicon-32.png', 'favicon-192.png', 'apple-touch-icon.png') {
  $f = Get-Item (Join-Path $outDir $n)
  "  {0,-24} {1,6:N0} bytes" -f $f.Name, $f.Length
}
