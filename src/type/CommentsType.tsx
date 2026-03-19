export interface CommentsType {
    id: number,
    content: string,
    user: { id: number, nickname: string },
    createdAt: Date
}