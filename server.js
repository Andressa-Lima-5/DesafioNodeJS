const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(require("cors")());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    require('./src/services/mailService')(email, nome)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
})

const server = http.createServer(app);
server.listen(3000);
console.log("Servidor escutando na porta 3000...")

