// Busca na pasta 'node_modules' a pasta express
const express = require("express");

const app = express();

// 1º Parametro - Rota
// 2º Parametro - Função (req- requisicao, res - resposta) 
app.get("/", function(req, res){
    res.send("Hello World teste")
});

app.get("/user/:nome/:idade", function(req, res){
    res.send({
        nome: req.params.nome,
        idade: req.params.idade
    })
});

app.delete("/user", function(req, res){
    res.send({
        nome:"Luis DELETADO"
    })
});

// Porta que sera listado
app.listen(8080, function(){
    console.log("Servidor Rodando")
});