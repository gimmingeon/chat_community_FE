import { useMutation } from "@tanstack/react-query"
import { loginApi } from "../api/ApiLogin"
import { useNavigate } from "react-router-dom"

export const useLoginPost = () => {

    let navigate = useNavigate();

    return useMutation({
        mutationFn: loginApi,

        onSuccess: () => {
            alert("로그인 성공")
            navigate("/")
        },

        onError: (error: any) => {
            alert(error.response?.data?.message || "로그인 실패")
        }
    })
}