let express = require('express')
let app = express()
let port = 3000

app.get('/imagens', (request, response) => {
    response.send('Imagens');
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})