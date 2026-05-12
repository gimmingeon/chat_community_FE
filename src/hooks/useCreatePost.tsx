import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { createPostApi } from "../api/ApiCreatePost";

export const useCreatePost = () => {
    let navigate = useNavigate();

    return useMutation({
        mutationFn: createPostApi,

        onSuccess: () => {
            // invalidateQueries: 키가 오래되었으니 다시 가져오는것
            // // 
            // queryClient.invalidateQueries({ queryKey: ["posts"] })

            navigate("/")
        },

        onError: (error: any) => {
            alert(error.response?.data?.message || "게시글 등록 실패")
        }
    })
}