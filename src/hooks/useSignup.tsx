import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { signupApi } from "../api/ApiSignUp";

export const useSignup = () => {
    let navigate = useNavigate();

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: signupApi,

        onSuccess: () => {
            alert("회원가입 성공")

            // me : 데이터의 키와 같다
            // queryClient.invalidateQueries : me라는 키를 이용해서 me 데이터를 가져온다.
            queryClient.invalidateQueries({ queryKey: ["me"] });
            navigate("/")
        },

        onError: (error: any) => {
            alert(error.response?.data?.message || "회원가입 실패")
        }



    })
}