import { Router } from "express";

export const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/', (req, res) => {
    res.send('Hello World user!')
})

router.get('/:nome', (req, res) => {
    res.send('Luis')
})
