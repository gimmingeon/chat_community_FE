import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../api/axios";

export const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            await api.post("/user/logout");
        },
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ["me"] })
        },
    });
};