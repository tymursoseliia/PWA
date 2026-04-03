self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // На старте можно оставить пустым, но событие должно быть объявлено
  e.respondWith(fetch(e.request));
});
