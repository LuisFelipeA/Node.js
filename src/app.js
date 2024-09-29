import express from 'express';
import { userRouter } from './modules/user/user.controller.js';
import { productRouter } from './modules/products/product.controller.js';

const app = express();

app.use(express.json()); // converte o body

app.use(userRouter);

app.use(productRouter);

const port = 3000;

app.listen(port,() => {
    console.log(`Rodando: http://localhost:${port}/`)
})