import type { PostType } from "./PostTypeLabel";

export interface Post {
    id: number,
    title: string,
    postType: PostType,
    createdAt: String,
    user: { nickname: string }
}