import { useQuery } from "@tanstack/react-query"
import { getAllPost } from "../api/ApiGetAllPost"
import type { PostResponse } from "../type/PostResponse"

export const usePostsGet = () => {
    return useQuery<PostResponse>({
        queryKey: ["posts"],
        queryFn: getAllPost
    })
}