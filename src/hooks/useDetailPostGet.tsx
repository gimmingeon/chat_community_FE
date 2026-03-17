import { useQuery } from "@tanstack/react-query"
import { getDetailPost } from "../api/ApiGetDetailPost"

export const useDetailPostGet =
    (id: string) => {
        return useQuery({
            queryKey: ["detailPost", id],
            queryFn: () => getDetailPost(id)
        })
    }