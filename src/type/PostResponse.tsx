import type { Post } from "./AllPostType";

export interface PostResponse {
    posts: Post[],
    total: number,
    page: number,
    lastPage: number
}