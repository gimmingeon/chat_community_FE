import { useMutation, useQueryClient } from "@tanstack/react-query"
import { loginApi } from "../api/ApiLogin"
import { useNavigate } from "react-router-dom"

export const useLoginPost = () => {

    let navigate = useNavigate();

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: loginApi,

        onSuccess: () => {
            alert("로그인 성공")

            // me : 데이터의 키와 같다
            // queryClient.invalidateQueries : me라는 키를 이용해서 me 데이터를 가져온다.
            queryClient.invalidateQueries({ queryKey: ["me"] });
            navigate("/")
        },

        onError: (error: any) => {
            alert(error.response?.data?.message || "로그인 실패")
        }
    })
}