var express = require('express');
var jimp = require('jimp');
var fs = require('fs');

jimp.read('../img/orion.jpg').then(image => {
    return image.write('../img/orion.png');
    
}).catch(erro => {
    console.error(erro);
});

var file = 'C:/Users/rafael/Projetos/service-worker/img/orion.png';

// lê o arquivo em binário
var bitmap = fs.readFileSync(file);
// converte o binário para base64
var imageBase64 = new Buffer(bitmap).toString('base64');


var app = express();

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(request, response) {
    response.send(imageBase64);
});

app.listen(3000, function() {
    console.log('Rodando na porta 3000.');
});
