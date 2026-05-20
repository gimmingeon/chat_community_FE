import { api } from "./axios"

export const createChatRoomApi = async (
    chatRoomText: { postId: number, postUserId: number }
) => {
    const res = await api.post("/chat/chatroom", chatRoomText);

    return res.data;
}