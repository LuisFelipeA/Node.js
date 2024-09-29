import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async () => {
    return await prisma.User.findMany();
}


export const createUser = async(body) => {
    return  prisma.User.create({
        data: body,
    });
}