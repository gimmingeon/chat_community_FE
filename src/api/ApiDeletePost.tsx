import { api } from "./axios"

export const deletePostApi = async (id: string) => {
    const res = await api.delete(`/post/${id}`)

    return res.data
}