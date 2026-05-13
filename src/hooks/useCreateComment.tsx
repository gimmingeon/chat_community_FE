import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCommentApi } from "../api/ApiCreateComment";

export const useCreateComment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            id, content
        }: {
            id: string, content: string
        }) => createCommentApi(id, content),

        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["comment", variables.id] });
        },

        onError: (error: any) => {
            alert(error.response?.data?.message || "댓글 생성 실패");
        }
    })
}