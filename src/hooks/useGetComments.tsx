import { useQuery } from "@tanstack/react-query"
import { getComments } from "../api/ApiGetComments"

export const useGetComments = (id: string) => {
    return useQuery({
        queryKey: ["comment", id],
        queryFn: () => getComments(id)
    })
}