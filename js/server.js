var express = require('express');
var app = express();

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(request, response) {
    response.sendFile('D:/Projetos/service-worker/img/orion.jpg');
});

app.listen(3000, function() {
    console.log('Rodando na porta 3000.');
});