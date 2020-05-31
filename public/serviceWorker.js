const huyCache = "ehemhuy";
const assets = [
  "index.html",
  "offline.html",
  "/offline/1.png",
  "/offline/2.png",
  "/offline/3.png",
  "/offline/4.png",
  "/offline/5.png",
  "/offline/6.png",
  "/offline/bg.png"
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
      return res || fetch(fetchEvent.request)
       .catch(() => caches.match('offline.html'))
    })
  );
});
