import { useQuery } from "@tanstack/react-query"
import { getMyInfo } from "../api/ApiMyInfo"

export const useMyInfo = () => {
    return useQuery({
        queryKey: ["me"],
        queryFn: () => getMyInfo(),
        retry: false
    })
}