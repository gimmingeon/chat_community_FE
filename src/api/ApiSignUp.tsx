import type { SignupType } from "../type/SignupType";
import { api } from "./axios";

export const signupApi = async (
    signupText: {
        email: string,
        password: string,
        passwordConfirm: string,
        nickname: string
    })
    : Promise<SignupType> => {
    const res = await api.post("/user/signup", signupText)

    return res.data

}