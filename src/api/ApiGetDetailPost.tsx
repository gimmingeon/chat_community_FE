import { api } from "./axios"

export const getDetailPost = async (id: string) => {
    const res = await api.get(`/post/${id}`)

    return res.data;
}