import type { CreatePostType } from "../type/CreatePostType"
import { api } from "./axios"

export const createPostApi = async (
    createPostText: {
        title: string,
        content: string,
        postType: string,
        hashTag: string[]
    })
    : Promise<CreatePostType> => {
    const res = await api.post("/post", createPostText)

    return res.data
}