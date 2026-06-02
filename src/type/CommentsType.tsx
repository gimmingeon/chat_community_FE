export interface CommentsType {
    id: number,
    content: string,
    user: { id: number, nickname: string },
    post: { id: number, title: string },
    createdAt: Date
}