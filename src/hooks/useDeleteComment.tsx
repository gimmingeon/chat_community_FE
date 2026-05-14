import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCommentApi } from "../api/ApiDeleteComment";

export const useDeleteComment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            commentId
        }: {
            commentId: string,
            postId: string
        }) => deleteCommentApi(commentId),

        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["comment", variables.postId] });

            alert("댓글이 삭제되었습니다.")
        },
        onError: (error: any) => {
            alert(error.response?.data?.message || "댓글 삭제 실패")
        }
    })
}