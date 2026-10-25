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

        // Step 2: Accurate background identification (white backdrop + green halo + transition arc)
        const isBg = (idx: number): boolean => {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          // 1. Pure, near-white, or light off-white background
          if (r > 212 && g > 212 && b > 202) {
            return true;
          }

          // 2. Green aura / chroma glow (G strictly dominates over R and B)
          if (g > r + 3 && g > b + 2 && g > 50) {
            return true;
          }

          // 3. Pale green-to-white transition zone (bright and G >= R, B)
          if (g >= r && g >= b && g > 165) {
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
          const px = i % w;
          const py = (i / w) | 0;

          // Subject is entirely on the right 64% of the original photo; clear left side completely
          if (visited[i] || px < w * 0.36) {
            data[idx + 3] = 0; // Transparent
          } else {
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];

            // Safety check for stray background green or faint halo arc
            if ((g > r + 4 && g > b + 2 && g > 65) || (r > 215 && g > 215 && b > 205)) {
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
            if (px < minX) minX = px;
            if (px > maxX) maxX = px;
            if (py < minY) minY = py;
            if (py > maxY) maxY = py;
            hasSubjectPixels = true;
          }
        }

        ctx.putImageData(imgData, 0, 0);

        // Step 5: TIGHT CROP WITH OPTICAL LEFT-CENTER BALANCE
        if (hasSubjectPixels && maxX > minX && maxY > minY) {
          const subjW = maxX - minX + 1;
          const cropH = maxY - minY + 1;

          // Add 8% right-side balance padding so the right-heavy torso shifts slightly left into dead-center
          const cropW = Math.round(subjW * 1.08);

          const cropCanvas = document.createElement('canvas');
          cropCanvas.width = cropW;
          cropCanvas.height = cropH;
          const cropCtx = cropCanvas.getContext('2d');

          if (cropCtx) {
            cropCtx.drawImage(
              canvas,
              minX, minY, subjW, cropH,
              0, 0, subjW, cropH
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
    <div className="relative select-none pointer-events-none w-full flex flex-col items-center justify-center">
      {/* Portrait — sized and proportioned for the Bazil.fr hero stage */}
      <div
        className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[410px] lg:max-w-[450px] mx-auto flex items-start justify-center h-[270px] sm:h-[320px] md:h-[360px] lg:h-[400px]"
      >
        <img
          src={cutoutSrc || src}
          alt={alt}
          className={`w-full h-full transition-all duration-500 ease-out object-contain object-top ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            maskImage: 'linear-gradient(to bottom, black 76%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 76%, transparent 100%)',
            filter: 'drop-shadow(0 16px 32px rgba(9,9,11,0.08))',
          }}
        />
      </div>
    </div>
  );
};
