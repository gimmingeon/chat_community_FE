import { useQuery } from "@tanstack/react-query"
import { getAllPost } from "../api/ApiGetAllPost"

export const usePostsGet =
    (search: { keyword: string; type: string; page: number }) => {
        return useQuery({
            queryKey: ["posts", search],
            queryFn: () => getAllPost(search)
        })
    }