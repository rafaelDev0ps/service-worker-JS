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
