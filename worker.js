var nameCache = 'cacheNASA';

var urlsCache = [
    './index.html',
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
            console.error('Deu erro ao instalar: ', erro);
        })
    );
});

// UPDATE
self.addEventListener('activate', function(event) {
    var cacheWhitelist = [nameCache, 'novoCacheNASA'];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// FETCH
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }

            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(function(response) {
                    // Check if we received a valid response
                    if(!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    var responseToCache = response.clone();

                    caches.open(nameCache).then(function(cache) {
                        cache.put(event.request, responseToCache);
                    });

                }
            ).catch(function(error) {
                console.error(error);
            });
        })
    );
});
