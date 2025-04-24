// public/sw.ts
const CACHE_NAME = 'my-pwa-cache-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/js/app.js',
    '/css/app.css',
    '/manifest.json',
    '/favicon.ico',
    // Tambahkan aset lain yang ingin di-cache
];

// Install Service Worker
self.addEventListener('install', (event) => {
    console.log('sw on ');

    //event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)));
});

self.addEventListener('bookings', (event) => {
    new Notification('Notifikasi Booking', {
        body: 'Ada yang booking Bro',
        icon: '/images/logo-k16-no-bg.png',
    });
});

// Fetch Event (Cache First Strategy)
self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});
