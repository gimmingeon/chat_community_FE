import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { deletePostApi } from "../api/ApiDeletePost";

export const useDeletePost = () => {
    const queryClient = useQueryClient();
    let navigate = useNavigate();

    return useMutation({
        mutationFn: (id: string) => deletePostApi(id),

        onSuccess: (_, id) => {
            queryClient.removeQueries({ queryKey: ["detailPost", id] });

            navigate("/");

            alert("게시글이 삭제되었습니다.")
        },

        onError: (error: any) => {
            alert(error.response?.data?.message || "게시글 삭제 실패")
        }
    })
}