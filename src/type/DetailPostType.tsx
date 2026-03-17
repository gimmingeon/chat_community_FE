import type { PostHashtag } from "./PostHashtagType";

export interface DetailPost {
    id: number,
    title: string,
    content: string,
    postType: string,
    createdAt: Date,
    updatedAt: Date,
    postHashtag: PostHashtag[],
    user: { id: number, nickname: string }
}