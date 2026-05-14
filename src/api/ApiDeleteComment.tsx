import { api } from "./axios"

export const deleteCommentApi = async (id: string) => {
    const res = await api.delete(`/comment/${id}`);

    return res.data
}