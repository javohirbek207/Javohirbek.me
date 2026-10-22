import React, { useEffect, useState } from 'react';

interface HeroPortraitProps {
  src: string;
  alt: string;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({ src, alt }) => {
  const [cutoutSrc, setCutoutSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      if (isCancelled) return;

      try {
        const w = img.naturalWidth;
        const h = img.naturalHeight;

        // Step 1: Draw source image onto an offscreen canvas
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        if (!ctx) {
          setCutoutSrc(src);
          setIsLoaded(true);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        // Step 2: Accurate background identification (white backdrop + green halo)
        const isBg = (idx: number): boolean => {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          // 1. Pure or near-white background
          if (r > 230 && g > 230 && b > 230 && Math.abs(r - g) < 22 && Math.abs(g - b) < 22) {
            return true;
          }

          // 2. Green aura / chroma glow (G dominates over R)
          if (g > r + 3 && g > 50) {
            return true;
          }

          // 3. Bright pastel green or high luminance background tint
          if (g > 145 && g >= r && g > b) {
            return true;
          }

          // 4. Washed out near-white background
          if (r > 215 && g > 215 && b > 210) {
            return true;
          }

          return false;
        };

        const totalPixels = w * h;
        const visited = new Uint8Array(totalPixels);
        const queue = new Int32Array(totalPixels);
        let head = 0;
        let tail = 0;

        // Step 3: Seed Flood-Fill from all 4 outer borders
        for (let x = 0; x < w; x++) {
          const topIdx = x;
          if (isBg(topIdx * 4)) {
            visited[topIdx] = 1;
            queue[tail++] = topIdx;
          }
          const btmIdx = (h - 1) * w + x;
          if (isBg(btmIdx * 4)) {
            visited[btmIdx] = 1;
            queue[tail++] = btmIdx;
          }
        }

        for (let y = 0; y < h; y++) {
          const lIdx = y * w;
          if (!visited[lIdx] && isBg(lIdx * 4)) {
            visited[lIdx] = 1;
            queue[tail++] = lIdx;
          }
          const rIdx = y * w + (w - 1);
          if (!visited[rIdx] && isBg(rIdx * 4)) {
            visited[rIdx] = 1;
            queue[tail++] = rIdx;
          }
        }

        // BFS traversal
        while (head < tail) {
          const cur = queue[head++];
          const cx = cur % w;
          const cy = (cur / w) | 0;

          if (cy > 0) {
            const up = cur - w;
            if (!visited[up] && isBg(up * 4)) {
              visited[up] = 1;
              queue[tail++] = up;
            }
          }
          if (cy < h - 1) {
            const down = cur + w;
            if (!visited[down] && isBg(down * 4)) {
              visited[down] = 1;
              queue[tail++] = down;
            }
          }
          if (cx > 0) {
            const left = cur - 1;
            if (!visited[left] && isBg(left * 4)) {
              visited[left] = 1;
              queue[tail++] = left;
            }
          }
          if (cx < w - 1) {
            const right = cur + 1;
            if (!visited[right] && isBg(right * 4)) {
              visited[right] = 1;
              queue[tail++] = right;
            }
          }
        }

        // Step 4: Make background transparent, despill green, and tone to site's monochrome palette!
        let minX = w, maxX = 0, minY = h, maxY = 0;
        let hasSubjectPixels = false;

        for (let i = 0; i < totalPixels; i++) {
          const idx = i * 4;

          if (visited[i]) {
            data[idx + 3] = 0; // Transparent
          } else {
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];

            // Safety check for stray background green
            if (g > r + 6 && g > 70) {
              data[idx + 3] = 0;
              continue;
            }

            // Despill green fringe around hair and edges
            const avgRB = (r + b) / 2;
            const cleanG = g > avgRB ? Math.round(avgRB) : g;

            // Rec. 709 Luminance
            const lum = 0.2126 * r + 0.7152 * cleanG + 0.0722 * b;

            // S-curve contrast grading tailored for Vogue/Bazil minimalist editorial style
            let graded: number;
            if (lum < 128) {
              graded = Math.pow(lum / 128, 1.28) * 128;
            } else {
              graded = 255 - Math.pow((255 - lum) / 127, 1.22) * 127;
            }

            const finalTone = Math.max(0, Math.min(255, Math.round(graded)));

            data[idx] = finalTone;
            data[idx + 1] = finalTone;
            data[idx + 2] = finalTone;

            // Track bounding box of subject
            const px = i % w;
            const py = (i / w) | 0;
            if (px < minX) minX = px;
            if (px > maxX) maxX = px;
            if (py < minY) minY = py;
            if (py > maxY) maxY = py;
            hasSubjectPixels = true;
          }
        }

        ctx.putImageData(imgData, 0, 0);

        // Step 5: PERFECT SYMMETRICAL DEAD-CENTER CROPPING
        // Calculate the horizontal center of the face/head region (top 35% of subject)
        if (hasSubjectPixels && maxX > minX && maxY > minY) {
          const headBottomY = minY + (maxY - minY) * 0.35;
          let headMinX = w, headMaxX = 0;
          let headPixelCount = 0;

          for (let py = minY; py <= headBottomY; py++) {
            for (let px = minX; px <= maxX; px++) {
              const idx = (py * w + px) * 4;
              if (data[idx + 3] > 0) {
                if (px < headMinX) headMinX = px;
                if (px > headMaxX) headMaxX = px;
                headPixelCount++;
              }
            }
          }

          // Find head/face center axis
          const headCenterX = headPixelCount > 0 ? (headMinX + headMaxX) / 2 : (minX + maxX) / 2;

          // Compute symmetrical width so headCenterX is EXACTLY at 50% dead-center
          const distLeft = headCenterX - minX;
          const distRight = maxX - headCenterX;
          const maxHalfWidth = Math.max(distLeft, distRight);

          const cropW = Math.round(maxHalfWidth * 2);
          const cropH = maxY - minY + 1;

          const cropCanvas = document.createElement('canvas');
          cropCanvas.width = cropW;
          cropCanvas.height = cropH;
          const cropCtx = cropCanvas.getContext('2d');

          if (cropCtx) {
            // Offset source with optical left-shift (-8% of halfWidth) so face & body sit dead-center
            const opticalShift = Math.round(maxHalfWidth * 0.08);
            const destX = Math.max(0, Math.round(maxHalfWidth - distLeft - opticalShift));
            cropCtx.drawImage(
              canvas,
              minX, minY, (maxX - minX + 1), cropH,
              destX, 0, (maxX - minX + 1), cropH
            );

            const croppedUrl = cropCanvas.toDataURL('image/png');
            if (!isCancelled) {
              setCutoutSrc(croppedUrl);
              setIsLoaded(true);
            }
            return;
          }
        }

        const processedUrl = canvas.toDataURL('image/png');
        if (!isCancelled) {
          setCutoutSrc(processedUrl);
          setIsLoaded(true);
        }
      } catch (err) {
        console.warn('Canvas cutout processing failed, using fallback:', err);
        if (!isCancelled) {
          setCutoutSrc(src);
          setIsLoaded(true);
        }
      }
    };

    img.onerror = () => {
      if (!isCancelled) {
        setCutoutSrc(src);
        setIsLoaded(true);
      }
    };

    return () => {
      isCancelled = true;
    };
  }, [src]);

  return (
    <div className="relative group select-none pointer-events-none w-full flex flex-col items-center justify-center">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[600px] h-[80%] max-h-[600px] rounded-full bg-gradient-to-b from-zinc-200/50 via-zinc-100/25 to-transparent blur-3xl pointer-events-none -z-10 group-hover:from-zinc-300/50 transition-all duration-700"
        aria-hidden="true"
      />

      {/* Portrait — centered, large, fully visible within viewport */}
      <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[540px] xl:max-w-[600px] mx-auto flex items-end justify-center"
        style={{ height: 'clamp(260px, 52vh, 560px)' }}
      >
        <img
          src={cutoutSrc || src}
          alt={alt}
          className={`w-full h-full pointer-events-auto cursor-pointer transition-all duration-500 ease-out group-hover:scale-[1.012] group-hover:contrast-[1.04] ${
            cutoutSrc ? 'object-contain object-bottom' : 'object-cover object-[center_10%]'
          } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            filter: 'drop-shadow(0 18px 36px rgba(9,9,11,0.09))',
          }}
        />
      </div>
    </div>
  );
};
