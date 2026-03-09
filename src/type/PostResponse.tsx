import type { Post } from "./PostType";

export interface PostResponse {
    posts: Post[],
    total: number,
    page: number,
    lastPage: number
}