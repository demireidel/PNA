# PNA Full Build Template

This is a drop-in template showing the **Client wrapper pattern** for `next/dynamic({ ssr:false })` and providing **ZIP-able builds** for:
- Standalone Node server (`standalone-build.zip`)
- Vercel Build Output (`vercel-output.zip`)
- Static export (`static-export.zip`) — only if your routes are exportable

## Quick start
```bash
npm ci
npm run dev   # http://localhost:3000
```

## Build + ZIP
```bash
npm run build:zip:standalone  # -> standalone-build.zip
npm run build:zip:vercel      # -> vercel-output.zip
npm run build:zip:static      # -> static-export.zip
```

> If your 3D page uses WebGL/three.js, keep it **client-only** or wrap it via `ClientViewer`.

## Structure
```
app/
  layout.tsx
  page.tsx
  atucha-ii/tour/
    page.tsx           (Server Component with metadata)
    ClientViewer.tsx   (Client wrapper; dynamic import with ssr:false)
    viewer.tsx         (Client 3D viewer)
    loading.tsx
    error.tsx
public/
  atucha/
    README.txt         (put your model.glb here)
scripts/
  zip-standalone.mjs
  zip-vercel-output.mjs
.github/workflows/
  build-zip.yml
```
