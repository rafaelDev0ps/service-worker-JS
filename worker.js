var nameCache = 'cacheNASA';
var urlsCache = [
    './img/orion.jpg',
    './img/orion2.jpg',
    './img/saturn.jpg',
    './css/style.css',
    './js/app.js'
];

// INSTALL
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(nameCache).then(function(cache) {
            console.log('Cache aberta');
            return cache.addAll(urlsCache);
            
        }).catch(function(erro) {
            console.log('Deu erro ao instalar: ', erro);
        })
    );
});

// FETCH
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if(response) {
                return response;
            }
            console.log('Fetching data into cache');
            return fetch(event.request);

        }).catch(function(error) {
            console.log('Deu erro ao realizar fetch: ', erro);
        })
    );
});
