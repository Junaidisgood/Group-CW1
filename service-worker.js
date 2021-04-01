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