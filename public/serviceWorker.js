const huyCache = "ehemhuy";
const assets = [
  "index.html"
];

const self = this
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(huyCache).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(huyCache);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});