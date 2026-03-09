export interface Post {
    id: number,
    title: string,
    postType: string,
    createdAt: String,
    user: { nickname: string }
}