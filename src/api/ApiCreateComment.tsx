import { api } from "./axios"

export const createCommentApi = async (id: string, content: string) => {
    const res = await api.post(`/comment/${id}`, { content });

    return res.data
}