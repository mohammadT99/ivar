'use server'

import prismadb from "@/libs/prismadb";
import { toast } from "react-toastify";

export const CreatePostActions = async (formdata: FormData) => {
    try {

        const { title, price, image } = Object.fromEntries(formdata);
        const address = String(title).split('').join('-')
        const post = await prismadb.post.create({
            data: {
                title: title as string,
                price: price as string,
                image: image as string,
            }
        })
        if (!post) {
            return ({
                succces: false,

            })
        }
    } catch (error) {
        console.log('CreatePostActions', error)
    }
}

export const DeletePostActions = async (id: number) => {
    try {

        const deletePost = await prismadb.post.delete({
            where:{
                id
            }
        })

    } catch (error) {

    }
}