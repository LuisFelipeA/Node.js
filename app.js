const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:nome/idade/:idade', (req,res)=>{
    res.send({
        nome: req.params.nome,
        idade: req.params.idade
    })
})

app.listen(port,() => {
    console.log(`Rodando: http://localhost:${port}/`)
})