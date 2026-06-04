export interface ChattingRoomType {
    id: number,
    postId: number,
    postUserId: number,
    myId: number,
    user: { nickname: string }
}