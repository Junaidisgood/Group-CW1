var cacheName = 'lessonstore-v1';
var cacheFiles = [
    'index.html',
    'lessons.js',
    'lessonstore.webmanifest',
    'english.jpg',
    'icon-512.png'
];

// download cacheFiles to cache
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        }));
});

self.addEventListener('fetch', (e) => {
    console.log('[Service Worker] Fetched resource ' + e.request.url);
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        // check if the cache has the file
        caches.match(e.request).then(function (r) {
            console.log('[Service Worker] Fetching resource: '
                + e.request.url);
            // 'r' is the matching file if it exists in the cache
            return r
        })
    );
});