import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distIndexHtml = path.resolve(distDir, 'index.html');

async function prerender() {
  if (!fs.existsSync(distIndexHtml)) {
    console.error('[prerender] dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  console.log('[prerender] Starting Vite SSR instance...');
  const vite = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom'
  });

  try {
    const { App } = await vite.ssrLoadModule('/src/App.tsx');

    const appHtml = renderToString(React.createElement(App));
    console.log(`[prerender] Successfully rendered App (${appHtml.length} characters)`);

    let template = fs.readFileSync(distIndexHtml, 'utf-8');
    
    // Inject rendered HTML into root div
    if (template.includes('<div id="root"></div>')) {
      template = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    } else if (template.includes('<div id="root">')) {
      template = template.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${appHtml}</div>`);
    }

    fs.writeFileSync(distIndexHtml, template, 'utf-8');
    console.log('[prerender] Injected prerendered HTML into dist/index.html successfully!');
  } catch (err) {
    console.error('[prerender] Error during prerendering:', err);
    process.exit(1);
  } finally {
    await vite.close();
  }
}

prerender();
