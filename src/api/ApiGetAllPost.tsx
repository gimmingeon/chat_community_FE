import type { PostResponse } from "../type/PostResponse";
import { api } from "./axios";

export const getAllPost = async (
    search: { keyword: string; type: string; page: number })
    : Promise<PostResponse> => {

    const res = await api.get("/post", {
        params: search
    });

    return res.data;
}