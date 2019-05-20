var nameCache = 'cacheNASA';
var urlServer = 'http://localhost:3000/';
var urlsCache = [
    // './img/orion.jpg',
    // './img/orion2.jpg',
    // './img/saturn.jpg',
    // './css/style.css',
    // './js/app.js',
    urlServer
];

var http = new XMLHttpRequest();
http.addEventListener("load", function() {
    // console.log("RETORNO: ", this.response);
    // document.write("<img src="+this.response+">");
    document.getElementById('imagem').setAttribute('src', 'data:image/jpg;base64, '+this.response);
});
http.open("GET", urlServer, true); //Inicializa um pedido assincrono.
http.send();


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
