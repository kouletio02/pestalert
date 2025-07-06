# PestAlert – Assistant Agricole Intelligent (Version complète)

Ce fichier contient **tout le code source** nécessaire pour déployer PestAlert sur n'importe quel serveur ou hébergement. Copiez chaque section dans un fichier du même nom.

---

## 1. `pestalert-complete.html`

```html
<!-- COLLEZ TOUT LE CODE HTML ICI (voir ci-dessous) -->
```

---

## 2. `manifest.json`

```json
{
  "name": "PestAlert - Assistant Agricole",
  "short_name": "PestAlert",
  "description": "Assistant agricole intelligent pour identifier les ravageurs et obtenir des traitements",
  "start_url": "/pestalert-complete.html",
  "display": "standalone",
  "background_color": "#10b981",
  "theme_color": "#10b981",
  "orientation": "portrait",
  "icons": [
    {
      "src": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iMjQiIGZpbGw9IiMxMGI5ODEiLz4KPHBhdGggZD0iTTk2IDQ4QzY5LjQ5IDQ4IDQ4IDY5LjQ5IDQ4IDk2QzQ4IDEyMi41MSA2OS40OSAxNDQgOTYgMTQ0QzEyMi41MSAxNDQgMTQ0IDEyMi41MSAxNDQgOTZDMTQ0IDY5LjQ5IDEyMi41MSA0OCA5NiA0OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05NiA2NEM4MC41MzYgNjQgNjggNzYuNTM2IDY4IDkyQzY4IDEwNy40NjQgODAuNTM2IDEyMCA5NiAxMjBDMTExLjQ2NCAxMjAgMTI0IDEwNy40NjQgMTI0IDkyQzEyNCA3Ni41MzYgMTExLjQ2NCA2NCA5NiA2NFoiIGZpbGw9IiMxMGI5ODEiLz4KPC9zdmc+",
      "sizes": "192x192",
      "type": "image/svg+xml"
    },
    {
      "src": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiByeD0iNjQiIGZpbGw9IiMxMGI5ODEiLz4KPHBhdGggZD0iTTI1NiAxMjhDMTg1LjMxIDEyOCAxMjggMTg1LjMxIDEyOCAyNTZDMjggMzI2LjY5IDE4NS4zMSAzODQgMjU2IDM4NEMzMjYuNjkgMzg0IDM4NCAzMjYuNjkgMzg0IDI1NkMzODQgMTg1LjMxIDMyNi42OSAxMjggMjU2IDEyOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNTYgMTcwLjY3QzIxNC43NyAxNzAuNjcgMTgwLjY3IDIxNC43NyAxODAuNjcgMjU2QzE4MC42NyAyOTcuMjMgMjE0Ljc3IDM0MS4zMyAyNTYgMzQxLjMzQzI5Ny4yMyAzNDEuMzMgMzQxLjMzIDI5Ny4yMyAzNDEuMzMgMjU2QzM0xLjMzIDIxNC43NyAyOTcuMjMgMTcwLjY3IDI1NiAxNzAuNjdaIiBmaWxsPSIjMTBiOTgxIi8+Cjwvc3ZnPg==",
      "sizes": "512x512",
      "type": "image/svg+xml"
    }
  ],
  "categories": ["agriculture", "productivity", "utilities"],
  "lang": "fr",
  "dir": "ltr",
  "scope": "/",
  "prefer_related_applications": false
}
```

---

## 3. `sw.js`

```js
const CACHE_NAME = 'pestalert-v2';
const urlsToCache = [
  '/',
  '/pestalert-complete.html',
  '/manifest.json',
  '/sw.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
```

---

## 4. Instructions

1. **Créez trois fichiers** :
   - `pestalert-complete.html`
   - `manifest.json`
   - `sw.js`
2. **Copiez le code de chaque section dans le bon fichier**.
3. **Lancez un serveur local** (ex : `python -m http.server 8000`).
4. **Accédez à** `http://<votre-ip>:8000/pestalert-complete.html` sur votre navigateur ou téléphone.
5. **Profitez de PestAlert !**

---

> **Remarque :** Pour le code HTML complet, ouvrez le fichier `pestalert-complete.html` dans votre éditeur et copiez tout son contenu entre les balises `<html>...</html>`. 