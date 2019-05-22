// REGISTER
if('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./worker.js').then(function(registration) {
            console.log('Registro deu certo para ', registration.scope);
        }).catch(function(erro) {
            console.log('Deu erro ao registrar: ', erro);
        });
    })
}
var urlServer = 'http://localhost:3000/';

var options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};

var requestServer = new Request(urlServer);

fetch(requestServer, options).then((response) => {
    response.text().then((data) => {
        document.getElementById('imagem').setAttribute('src', 'data:image/png;base64, ' + data);
    })
}).catch(function(error) {
    console.error("error: ", error);
});
