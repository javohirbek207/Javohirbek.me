import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Plugin to automatically copy uploaded portrait and asset to public/
function assetSyncPlugin() {
  return {
    name: 'asset-sync-plugin',
    configResolved() {
      try {
        const publicDir = path.resolve(__dirname, 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true });
        }

        const sourcePortrait = 'C:\\Users\\temirodam\\.gemini\\antigravity\\brain\\52011c52-ef54-4047-9a15-91631bf74e3e\\.user_uploaded\\media_1792491887776_1a031673.png';
        const targetPortrait = path.resolve(publicDir, 'hero-portrait.png');

        if (fs.existsSync(sourcePortrait)) {
          fs.copyFileSync(sourcePortrait, targetPortrait);
          console.log('[asset-sync] Successfully copied new hero-portrait.png to public/');
        }

        const sourceBazil = 'C:\\Users\\temirodam\\.gemini\\antigravity\\brain\\52011c52-ef54-4047-9a15-91631bf74e3e\\.user_uploaded\\media_1792480497930_be745680.png';
        const targetBazil = path.resolve(publicDir, 'bazil-ref.png');
        if (fs.existsSync(sourceBazil)) {
          fs.copyFileSync(sourceBazil, targetBazil);
        }
      } catch (err) {
        console.warn('[asset-sync] Note:', err);
      }
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const urlPath = req.url ? req.url.split('?')[0] : '';
        if (urlPath === '/hero-portrait.png' || urlPath === '/portrait.png') {
          const sourcePortrait = 'C:\\Users\\temirodam\\.gemini\\antigravity\\brain\\52011c52-ef54-4047-9a15-91631bf74e3e\\.user_uploaded\\media_1792491887776_1a031673.png';
          if (fs.existsSync(sourcePortrait)) {
            res.setHeader('Content-Type', 'image/png');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
            fs.createReadStream(sourcePortrait).pipe(res);
            return;
          }
        }
        next();
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), assetSyncPlugin()],
  server: {
    port: 3000,
    open: true
  }
});
