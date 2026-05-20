import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom"
import { createChatRoomApi } from "../api/ApiCreateChatRoom";

export const useCreateChatRoom = () => {
    // let navigate = useNavigate();

    // const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createChatRoomApi,

        // onSuccess: () => {

        //     // 일단 주석 여기에 채팅방 데이터 가져옴
        //     //queryClient.invalidateQueries({})
        // },

        onError: (error: any) => {
            alert(error.response?.data?.message || "채팅방 실패")
        }
    })
}