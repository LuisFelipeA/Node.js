// Busca na pasta 'node_modules' a pasta express
import express from "express";
import { userRouter } from "./modules/user/user.controller.js";
import { productRouter } from "./modules/product/product.controller.js";

const app = express();

app.use(userRouter);

app.use(productRouter)

// Porta que sera listado
app.listen(8080, function(){
    console.log("Servidor Rodando")
});