import type { LoginType } from "../type/LoginType";
import { api } from "./axios";

export const loginApi = async (
    loginText: { email: string, password: string })
    : Promise<LoginType> => {
    const res = await api.post("/user/login", loginText)

    return res.data
}