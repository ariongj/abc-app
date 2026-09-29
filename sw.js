// ABC service worker: works offline after the first visit and shows push notifications.
//  - pages: network first, the cached app shell when offline;
//  - assets/* (hashed build files, fonts): cache first — they never change;
//  - api/*: never cached.
const VERSION = 'abc-v5';
// the folder the app is served from: "/" on its own server, "/<repo>/" on GitHub Pages
const ROOT = new URL(self.registration.scope).pathname;
const at = (p) => ROOT + p.replace(/^\//, '');
const ASSETS = at('/assets/');
const SHELL = ['/', '/manifest.webmanifest', '/favicon.svg', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/apple-touch-icon.png'].map(at);

/**
 * Every file of the build, from the manifest Vite writes.
 *
 * index.html names only the entry: the child app, the portals and the school plans load on
 * demand, so without this list they would never be cached — and worse, the sweep at the end of
 * cacheBuild would delete them again after each visit.
 */
async function buildFiles() {
  try {
    const manifest = await (await fetch(at('/assets-manifest.json'), { cache: 'no-store' })).json();
    const out = new Set();
    for (const entry of Object.values(manifest)) {
      for (const f of [entry.file, ...(entry.css || []), ...(entry.assets || [])]) if (f) out.add(at(f));
    }
    return [...out];
  } catch {
    return []; // development server, or a build without the manifest
  }
}

/**
 * Cache the built files and the Albanian font faces they use, so the app opens offline after a
 * single visit, and drop the files of older builds.
 */
async function cacheBuild(html) {
  const cache = await caches.open(VERSION);
  const fromPage = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((m) => m[1]).filter((f) => f.startsWith(ASSETS));
  if (!fromPage.length) return; // development server: files are cached as they load
  const assets = [...new Set([...fromPage, ...(await buildFiles())])];
  // hashed file names never change content: fetch only what is not cached yet, and let a single
  // failure (a file pulled from the server mid-deploy) leave the rest cached
  const addMissing = async (paths) => {
    for (const p of paths) {
      if (await cache.match(p)) continue;
      try {
        await cache.add(p);
      } catch {
        /* keep going: the fetch handler will cache it when it is actually used */
      }
    }
  };
  await addMissing(assets);
  const keep = new Set(assets);
  for (const css of assets.filter((a) => a.endsWith('.css'))) {
    const hit = await cache.match(css);
    if (!hit) continue;
    const text = await hit.text();
    const fonts = [...new Set([...text.matchAll(/url\(([^)]+\.woff2)\)/g)].map((m) => m[1]).filter((f) => f.startsWith(ASSETS) && /latin/.test(f)))];
    await addMissing(fonts);
    fonts.forEach((f) => keep.add(f));
  }
  for (const req of await cache.keys()) {
    const path = new URL(req.url).pathname;
    if (path.startsWith(ASSETS) && !keep.has(path)) await cache.delete(req);
  }
}

async function precache() {
  const cache = await caches.open(VERSION);
  await cache.addAll(SHELL);
  try {
    await cacheBuild(await (await fetch(ROOT, { cache: 'no-store' })).text());
  } catch {
    /* offline during install: assets are cached as they load */
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith('/api/') || url.pathname.startsWith(at('/api/'))) return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok && (res.headers.get('content-type') || '').includes('text/html')) {
            const copy = res.clone();
            event.waitUntil(
              copy
                .text()
                .then(async (html) => {
                  const cache = await caches.open(VERSION);
                  await cache.put(ROOT, new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } }));
                  await cacheBuild(html);
                })
                .catch(() => undefined),
            );
          }
          return res;
        })
        .catch(async () => (await caches.match(ROOT)) || Response.error()),
    );
    return;
  }

  if (url.pathname.startsWith(ASSETS) || url.pathname.startsWith(at('/icons/'))) {
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok) {
              const copy = res.clone();
              caches.open(VERSION).then((c) => c.put(req, copy));
            }
            return res;
          }),
      ),
    );
  }
});

self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { body: event.data ? event.data.text() : '' };
  }
  event.waitUntil(
    self.registration.showNotification(data.title || 'ABC', {
      body: data.body || '',
      icon: at('/icons/icon-192.png'),
      badge: at('/icons/icon-192.png'),
      tag: data.tag || 'abc',
      data: { url: at(data.url || '/app') },
      lang: 'sq',
    }),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = new URL((event.notification.data && event.notification.data.url) || at('/app'), self.location.origin).href;
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((wins) => {
      const open = wins.find((w) => new URL(w.url).pathname.startsWith(at('/app')));
      if (open) return open.focus();
      return self.clients.openWindow(target);
    }),
  );
});
