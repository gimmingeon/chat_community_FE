import { api } from "./axios"

export const getComments = async (id: string) => {
    const res = await api.get(`/comment/${id}`)

    return res.data
}