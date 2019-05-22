# Usando Service Workers com JavaScript

Service Workers são usados para facilitar o carregamento de dados da sua aplicação web. Eles melhoram a performance da aplicação buscando dados alocados no armazenamento cache fazendo com que client-side faça apenas uma requisição para o servidor poupando-o.

Nesse exemplo o client recebe uma imagem de alta definição enviada pelo web server server.js que trata a imagem e envia. O client recebe essa imagem e usa Service Worker para alocar a imagem na memória cache do navegador fazendo com que não seja feito mais requisiçoes ao servidor, deixando a aplicação com um tempo de resposta mais rápido.
