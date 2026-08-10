/**
 * After `vite build`, write a static index.html for each artwork route with
 * Open Graph / Twitter meta tags so link previews (iMessage, Slack, etc.) work
 * on GitHub Pages (crawlers do not run the SPA JS).
 */
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';

// projects.tsx uses JSX; tsx needs React in scope when loading it
(globalThis as unknown as { React: typeof React }).React = React;

const { Artworks, getArtworkPath, ProjectNamesEnum, Projects } = await import(
  '../src/projects'
);

const SITE = 'https://www.sarahransohoff.com';
const DIST = path.resolve('dist');

function escapeAttr(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildDescription(artwork: {
  medium: string;
  dimensions?: string;
  available?: boolean;
}) {
  const parts = [artwork.medium];
  if (artwork.dimensions) parts.push(artwork.dimensions);
  if (artwork.available) parts.push('Available');
  return parts.join(' · ');
}

function injectMeta(
  html: string,
  {
    title,
    description,
    url,
    image,
  }: { title: string; description: string; url: string; image: string }
) {
  const meta = `
    <title>${escapeAttr(title)}</title>
    <meta name="description" content="${escapeAttr(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sarah Ransohoff" />
    <meta property="og:title" content="${escapeAttr(title)}" />
    <meta property="og:description" content="${escapeAttr(description)}" />
    <meta property="og:url" content="${escapeAttr(url)}" />
    <meta property="og:image" content="${escapeAttr(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(title)}" />
    <meta name="twitter:description" content="${escapeAttr(description)}" />
    <meta name="twitter:image" content="${escapeAttr(image)}" />
`;

  return html
    .replace(/<title>[^<]*<\/title>\s*/g, '')
    .replace(/<meta\s+name="description"[^>]*>\s*/gi, '')
    .replace(/<meta\s+(?:property|name)="(?:og|twitter):[^"]+"[^>]*>\s*/gi, '')
    .replace('</head>', `${meta}</head>`);
}

const indexHtmlPath = path.join(DIST, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found — run vite build first');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');
let count = 0;

for (const projectName of Object.values(ProjectNamesEnum)) {
  const artworks = Artworks[projectName];
  const project = Projects[projectName];

  for (const artwork of artworks) {
    const route = getArtworkPath(artwork, projectName);
    const pageDir = path.join(DIST, ...route.split('/'));
    const imagePath = artwork.images[0];
    if (!imagePath) continue;

    const title = `${artwork.title} – Sarah Ransohoff`;
    const description = buildDescription(artwork);
    const url = `${SITE}/${route}`;
    const image = imagePath.startsWith('http')
      ? imagePath
      : `${SITE}${imagePath}`;

    const html = injectMeta(baseHtml, { title, description, url, image });
    fs.mkdirSync(pageDir, { recursive: true });
    fs.writeFileSync(path.join(pageDir, 'index.html'), html);
    count += 1;
  }

  // Project listing pages
  if (project) {
    const route = `project/${projectName}`;
    const pageDir = path.join(DIST, ...route.split('/'));
    const firstImage = artworks[0]?.images[0];
    const title = `${project.title} – Sarah Ransohoff`;
    const description = `Artwork by Sarah Ransohoff — ${project.title}`;
    const url = `${SITE}/${route}`;
    const image = firstImage
      ? firstImage.startsWith('http')
        ? firstImage
        : `${SITE}${firstImage}`
      : `${SITE}/favicon.ico`;

    const html = injectMeta(baseHtml, { title, description, url, image });
    fs.mkdirSync(pageDir, { recursive: true });
    fs.writeFileSync(path.join(pageDir, 'index.html'), html);
    count += 1;
  }
}

console.log(`Generated OG preview HTML for ${count} pages`);
