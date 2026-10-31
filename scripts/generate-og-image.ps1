Add-Type -AssemblyName System.Drawing

$csharpCode = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class ImageProcessorSafe3 {
    public static Bitmap ProcessPortrait(string path) {
        using (Bitmap src = new Bitmap(path)) {
            int w = src.Width;
            int h = src.Height;
            Bitmap dst = new Bitmap(w, h, PixelFormat.Format32bppArgb);
            BitmapData srcData = src.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
            BitmapData dstData = dst.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);
            
            int stride = srcData.Stride;
            int bytes = stride * h;
            
            byte[] srcBuf = new byte[bytes];
            byte[] dstBuf = new byte[bytes];
            Marshal.Copy(srcData.Scan0, srcBuf, 0, bytes);
            
            int minX = w, maxX = 0, minY = h, maxY = 0;
            bool hasSubject = false;
            
            for (int y = 0; y < h; y++) {
                int rowOffset = y * stride;
                for (int x = 0; x < w; x++) {
                    int idx = rowOffset + (x * 4);
                    
                    byte b = srcBuf[idx];
                    byte g = srcBuf[idx + 1];
                    byte r = srcBuf[idx + 2];
                    byte a = srcBuf[idx + 3];
                    
                    // 1. Transparent or semi-transparent background
                    if (a < 100 || x < w * 0.44 || x > w * 0.98 || y < 15) {
                        dstBuf[idx] = 0;
                        dstBuf[idx + 1] = 0;
                        dstBuf[idx + 2] = 0;
                        dstBuf[idx + 3] = 0;
                        continue;
                    }
                    
                    // 2. White or green aura background
                    if ((r > 205 && g > 205 && b > 195) ||
                        (g > r + 3 && g > 45) ||
                        (g >= r && g >= b && g > 155)) {
                        dstBuf[idx] = 0;
                        dstBuf[idx + 1] = 0;
                        dstBuf[idx + 2] = 0;
                        dstBuf[idx + 3] = 0;
                        continue;
                    }
                    
                    // Despill green fringe around hair and edges
                    int avgRB = (r + b) / 2;
                    byte cleanG = (g > avgRB) ? (byte)avgRB : g;
                    
                    // Rec 709 luminance for editorial B&W matching portfolio
                    double lum = 0.2126 * r + 0.7152 * cleanG + 0.0722 * b;
                    double graded;
                    if (lum < 128) {
                        graded = Math.Pow(lum / 128.0, 1.25) * 128.0;
                    } else {
                        graded = 255.0 - Math.Pow((255.0 - lum) / 127.0, 1.22) * 127.0;
                    }
                    byte tone = (byte)Math.Max(0, Math.Min(255, (int)Math.Round(graded)));
                    
                    // Bottom fade to transparent
                    double alphaFactor = (a / 255.0);
                    if (y > h * 0.80) {
                        alphaFactor *= Math.Max(0.0, 1.0 - ((y - (h * 0.80)) / (h * 0.20)));
                    }
                    
                    dstBuf[idx] = tone;
                    dstBuf[idx + 1] = tone;
                    dstBuf[idx + 2] = tone;
                    dstBuf[idx + 3] = (byte)(255 * alphaFactor);
                    
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                    hasSubject = true;
                }
            }
            
            Marshal.Copy(dstBuf, 0, dstData.Scan0, bytes);
            src.UnlockBits(srcData);
            dst.UnlockBits(dstData);
            
            if (hasSubject && maxX > minX && maxY > minY) {
                int cropW = maxX - minX + 1;
                int cropH = maxY - minY + 1;
                Bitmap cropped = new Bitmap(cropW, cropH, PixelFormat.Format32bppArgb);
                using (Graphics gCrop = Graphics.FromImage(cropped)) {
                    gCrop.DrawImage(dst, new Rectangle(0, 0, cropW, cropH), minX, minY, cropW, cropH, GraphicsUnit.Pixel);
                }
                dst.Dispose();
                return cropped;
            }
            
            return dst;
        }
    }
}
"@

Add-Type -TypeDefinition $csharpCode -Language CSharp -ReferencedAssemblies System.Drawing

$width = 1200
$height = 630

$bmp = New-Object System.Drawing.Bitmap $width, $height
$g = [System.Drawing.Graphics]::FromImage($bmp)

$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Background: Crisp White
$g.Clear([System.Drawing.Color]::FromArgb(255, 255, 255, 255))

# Outer subtle border frame
$framePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 228, 228, 231), 1.5)
$frameRect = New-Object System.Drawing.Rectangle(24, 24, 1152, 582)

function Get-RoundedRectPath($rect, $radius) {
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $diameter = $radius * 2
    $arc = New-Object System.Drawing.Rectangle $rect.X, $rect.Y, $diameter, $diameter

    $path.AddArc($arc, 180, 90)
    $arc.X = $rect.Right - $diameter
    $path.AddArc($arc, 270, 90)
    $arc.Y = $rect.Bottom - $diameter
    $path.AddArc($arc, 0, 90)
    $arc.X = $rect.Left
    $path.AddArc($arc, 90, 90)

    $path.CloseFigure()
    return $path
}

$framePath = Get-RoundedRectPath $frameRect 24
$g.DrawPath($framePen, $framePath)

# Right side: Ambient Glow & Clean Cutout Portrait
$portraitPath = "public\hero-portrait.png"
if (Test-Path $portraitPath) {
    # Soft subtle ambient backlight
    $glowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $glowRect = New-Object System.Drawing.Rectangle 720, 90, 440, 440
    $glowPath.AddEllipse($glowRect)
    $glowBrush = New-Object System.Drawing.Drawing2D.PathGradientBrush $glowPath
    $glowBrush.CenterColor = [System.Drawing.Color]::FromArgb(110, 240, 240, 242)
    $glowBrush.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 255, 255, 255))
    $g.FillEllipse($glowBrush, $glowRect)
    $glowBrush.Dispose()

    # Process and crop portrait with transparent background
    $cleanPortrait = [ImageProcessorSafe3]::ProcessPortrait((Resolve-Path $portraitPath).Path)
    
    # Scale height to 555px
    $targetH = 555
    $scale = $targetH / $cleanPortrait.Height
    $targetW = [int]($cleanPortrait.Width * $scale)
    
    # Position anchored cleanly on right side
    $targetX = 1176 - $targetW - 10
    $targetY = 630 - $targetH
    
    $g.DrawImage($cleanPortrait, $targetX, $targetY, $targetW, $targetH)
    $cleanPortrait.Dispose()
}

# Left side content
$leftX = 72
$topY = 74

# 1. Top Badge: "JAVOHIRBEK.ME  PORTFOLIO"
$badgeRect = New-Object System.Drawing.Rectangle $leftX, $topY, 260, 36
$badgePath = Get-RoundedRectPath $badgeRect 18
$badgeBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 244, 244, 245))
$badgeBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 228, 228, 231), 1)
$g.FillPath($badgeBgBrush, $badgePath)
$g.DrawPath($badgeBorderPen, $badgePath)

# Status dot (Emerald)
$dotBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 16, 185, 129))
$g.FillEllipse($dotBrush, ($leftX + 16), ($topY + 13), 10, 10)

# Badge text
$badgeFont = New-Object System.Drawing.Font("Consolas", 11, [System.Drawing.FontStyle]::Bold)
$badgeTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 82, 82, 91))
$g.DrawString("JAVOHIRBEK.ME   PORTFOLIO", $badgeFont, $badgeTextBrush, ($leftX + 34), ($topY + 9))

# 2. Main Name: "Javohirbek Maxmutov."
$nameFont = New-Object System.Drawing.Font("Segoe UI", 42, [System.Drawing.FontStyle]::Bold)
$nameBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 9, 9, 11))
$nameY = $topY + 60
$g.DrawString("Javohirbek Maxmutov.", $nameFont, $nameBrush, $leftX, $nameY)

# 3. Subtitle / Positioning: "Full-Stack Developer & Data Analytics"
$roleY = $nameY + 84
$roleFont = New-Object System.Drawing.Font("Segoe UI", 23, [System.Drawing.FontStyle]::Bold)
$roleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 39, 39, 42))
$g.DrawString("Full-Stack Developer & Data Analytics", $roleFont, $roleBrush, $leftX, $roleY)

# 4. Description line
$descY = $roleY + 48
$descFont = New-Object System.Drawing.Font("Segoe UI", 14.5, [System.Drawing.FontStyle]::Regular)
$descBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 113, 113, 122))
$descText = "Building performant web applications with React, TypeScript & Node.js,`nand extracting actionable insights with Python & SQL."
$g.DrawString($descText, $descFont, $descBrush, $leftX, $descY)

# 5. Technology Stack Pills
$pillsY = $descY + 68
$skills = @("Python", "SQL & PostgreSQL", "React", "TypeScript", "Node.js", "Data Analytics")
$pillFont = New-Object System.Drawing.Font("Consolas", 10.5, [System.Drawing.FontStyle]::Regular)
$pillBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 250, 250, 250))
$pillBorderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 228, 228, 231), 1)
$pillTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 39, 39, 42))

$curPillX = $leftX
foreach ($skill in $skills) {
    $textW = $g.MeasureString($skill, $pillFont).Width
    $pillW = [int]($textW + 20)
    $pillH = 32
    
    $pRect = New-Object System.Drawing.Rectangle $curPillX, $pillsY, $pillW, $pillH
    $pPath = Get-RoundedRectPath $pRect 8
    $g.FillPath($pillBgBrush, $pPath)
    $g.DrawPath($pillBorderPen, $pPath)
    
    $g.DrawString($skill, $pillFont, $pillTextBrush, ($curPillX + 10), ($pillsY + 7))
    $curPillX += ($pillW + 10)
}

# 6. Bottom row: URL & details
$bottomY = 538
$linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 244, 244, 245), 1)
$g.DrawLine($linePen, $leftX, ($bottomY - 18), ($leftX + 610), ($bottomY - 18))

$bottomFontBold = New-Object System.Drawing.Font("Consolas", 11, [System.Drawing.FontStyle]::Bold)
$bottomFontReg = New-Object System.Drawing.Font("Consolas", 11, [System.Drawing.FontStyle]::Regular)
$bottomDarkBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 9, 9, 11))
$bottomGrayBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 113, 113, 122))

$bullet = [char]0x2022
$g.DrawString("https://javohirbek.me", $bottomFontBold, $bottomDarkBrush, $leftX, $bottomY)
$bottomText = " $bullet  Tashkent, Uzbekistan  $bullet  Open for opportunities"
$g.DrawString($bottomText, $bottomFontReg, $bottomGrayBrush, ($leftX + 185), $bottomY)

# Save to public\og-image.png and dist\og-image.png
$outputPublic = "public\og-image.png"
$bmp.Save($outputPublic, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "[og-image] Successfully generated: $outputPublic"

if (Test-Path "dist") {
    $outputDist = "dist\og-image.png"
    $bmp.Save($outputDist, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "[og-image] Successfully generated: $outputDist"
}

# Clean up
$g.Dispose()
$bmp.Dispose()
