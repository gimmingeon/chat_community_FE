import type { CreatePostType } from "../type/CreatePostType"
import { api } from "./axios"

export const updatePostApi = async (
    createPostText: {
        title: string,
        content: string,
        postType: string,
        hashTag: string[],
    },
    id: string)
    : Promise<CreatePostType> => {
    const res = await api.patch(`/post/${id}`, createPostText)

    return res.data
}