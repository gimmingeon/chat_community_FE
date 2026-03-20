import { api } from "./axios"

export const getMyInfo = async () => {
    const res = await api.get("/user/myInfo")

    return res.data
}