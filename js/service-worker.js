self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('age-calculator-v1').then(cache => {
      return cache.addAll([
        '/',
        'index.html',
        'css/style.css',
        'js/script.js',
        'js/date-utils.js',
        'js/chinese-zodiac.js',
        'js/i18n.js',
        'js/service-worker.js',
        'js/share.js',
        'icons/icon-192.png',
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
