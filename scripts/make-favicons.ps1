# =============================================================================
# Regenerates the favicon set in public/ from the Brolly Juniors logo.
#
# NOT part of `npm run build` — same reasoning as scripts/make-og-cards.ps1.
# These are committed assets; run this by hand only if the logo changes.
#
#   powershell -ExecutionPolicy Bypass -File scripts/make-favicons.ps1
#
# Source: public/images/logo.png — the full lockup (umbrella above the "Brolly"
# wordmark, yellow on black).
#
# Only the umbrella is used. At 16px a favicon is about 250 pixels in total, and
# a wordmark rendered into that is an illegible smudge — the mark alone is the
# part that stays recognisable, which is the whole job of a favicon. Pass
# -Lockup to render the full logo instead and see the difference for yourself.
#
# Why this file exists at all: the site used to declare an emoji inside an SVG
# data URI as its only icon. Chrome does not reliably render emoji in SVG
# favicons, and when the declared icon fails to decode the browser silently
# falls back to requesting /favicon.ico — which did not exist, producing a 404
# on every page load. iOS also requests /apple-touch-icon.png, same problem.
#
# Writes:
#   public/favicon.ico          16 + 32 + 48, PNG-compressed inside the ICO
#   public/favicon-32.png       modern browsers prefer this over the .ico
#   public/favicon-192.png      Google's mobile-search icon; Android home screen
#   public/apple-touch-icon.png 180x180, full-bleed (iOS masks its own corners)
# =============================================================================

param(
  # Render the whole logo including the wordmark instead of the umbrella alone.
  [switch]$Lockup,
  # Write the files here instead of public/ — used to preview without committing.
  [string]$OutDir
)

Add-Type -AssemblyName System.Drawing

$root   = Split-Path -Parent $PSScriptRoot
$srcPath = Join-Path $root 'public/images/logo.png'
if (-not $OutDir) { $OutDir = Join-Path $root 'public' }
if (-not (Test-Path $srcPath)) { throw "Logo not found at $srcPath" }
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$SW = $src.Width; $SH = $src.Height

# The logo is drawn on a solid black field, so "ink" is anything meaningfully
# brighter than the background rather than a specific colour — that keeps this
# working if the mark is ever recoloured.
function Test-Ink($p) { ($p.R + $p.G + $p.B) -gt 150 }

# The background colour, sampled from a corner rather than hardcoded, so a
# re-export on a different field still produces an icon with no seam.
$BG = $src.GetPixel(2, 2)

<#
  Where the wordmark starts.

  The umbrella sits in the right half of the canvas; the wordmark is the only
  element that reaches into the left third. So the first row containing ink to
  the left of 40% of the width is the top of the wordmark, and everything above
  it is the mark. Deriving it rather than hardcoding a crop means a re-exported
  logo at a different size still cuts in the right place.
#>
function Get-WordmarkTop {
  $limit = [int]($SW * 0.40)
  for ($y = 0; $y -lt $SH; $y++) {
    for ($x = 0; $x -lt $limit; $x += 2) {
      if (Test-Ink $src.GetPixel($x, $y)) { return $y }
    }
  }
  return $SH
}

# Tight bounding box of the ink between two rows.
function Get-InkBounds([int]$top, [int]$bottom) {
  $minX = $SW; $maxX = -1; $minY = $SH; $maxY = -1
  for ($y = $top; $y -lt $bottom; $y++) {
    for ($x = 0; $x -lt $SW; $x++) {
      if (Test-Ink $src.GetPixel($x, $y)) {
        if ($x -lt $minX) { $minX = $x }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }
  if ($maxX -lt 0) { throw 'No ink found in the source image.' }
  New-Object System.Drawing.Rectangle($minX, $minY, ($maxX - $minX + 1), ($maxY - $minY + 1))
}

$wordTop = Get-WordmarkTop
$crop = if ($Lockup) { Get-InkBounds 0 $SH } else { Get-InkBounds 0 $wordTop }
"  source     {0}x{1}, wordmark starts at row {2}" -f $SW, $SH, $wordTop
"  cropping   {0} at {1},{2} {3}x{4}" -f $(if ($Lockup) { 'full lockup' } else { 'umbrella mark' }), $crop.X, $crop.Y, $crop.Width, $crop.Height

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

<#
  Composed at 512 and downscaled in one high-quality step. Drawing straight to
  16px loses the umbrella's thin ribs to aliasing; supersampling keeps them as
  soft grey rather than dropping them entirely.
#>
function New-Icon([int]$size, [bool]$rounded) {
  $S = 512
  # The mark is wider than it is tall, so the padding is applied to whichever
  # dimension binds — that keeps it optically the same size in every icon.
  $pad = if ($rounded) { 0.14 } else { 0.18 }   # full-bleed needs more inset
  $box = $S * (1 - 2 * $pad)
  $scale = [Math]::Min($box / $crop.Width, $box / $crop.Height)
  $w = $crop.Width * $scale
  $h = $crop.Height * $scale

  $bmp = New-Object System.Drawing.Bitmap($S, $S, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $g.InterpolationMode = 'HighQualityBicubic'
  $g.PixelOffsetMode = 'HighQuality'

  $br = New-Object System.Drawing.SolidBrush($BG)
  if ($rounded) {
    $p = RoundedPath 0 0 $S $S ($S * 0.22)
    $g.FillPath($br, $p); $p.Dispose()
  } else {
    $g.FillRectangle($br, 0, 0, $S, $S)   # iOS masks its own corners
  }
  $br.Dispose()

  $dest = New-Object System.Drawing.RectangleF(
    [single](($S - $w) / 2), [single](($S - $h) / 2), [single]$w, [single]$h)
  $g.DrawImage($src, $dest, $crop, [System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose()

  $out = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g2 = [System.Drawing.Graphics]::FromImage($out)
  $g2.InterpolationMode = 'HighQualityBicubic'
  $g2.PixelOffsetMode = 'HighQuality'
  $g2.SmoothingMode = 'AntiAlias'
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
    $b = New-Icon $s $true
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

Save-Ico @(16, 32, 48) (Join-Path $OutDir 'favicon.ico')

$b = New-Icon 32 $true;   Save-Png $b (Join-Path $OutDir 'favicon-32.png');       $b.Dispose()
$b = New-Icon 192 $true;  Save-Png $b (Join-Path $OutDir 'favicon-192.png');      $b.Dispose()
$b = New-Icon 180 $false; Save-Png $b (Join-Path $OutDir 'apple-touch-icon.png'); $b.Dispose()

$src.Dispose()

foreach ($n in 'favicon.ico', 'favicon-32.png', 'favicon-192.png', 'apple-touch-icon.png') {
  $f = Get-Item (Join-Path $OutDir $n)
  "  {0,-24} {1,6:N0} bytes" -f $f.Name, $f.Length
}
