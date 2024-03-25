// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

// workbox.routing.registerRoute(
//     ({ request }) => request.destination === 'image',
//     new workbox.strategies.CacheFirst(),
// );

self.addEventListener('install', () => {
    console.log('service worker installed');
});

self.addEventListener('activate', () => {
    console.log('service worker activated');
});

self.addEventListener('fetch', (event) => {
    console.log('fetch event', event);
});

