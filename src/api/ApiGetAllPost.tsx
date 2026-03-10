import axios from "axios"
import type { PostResponse } from "../type/PostResponse";

export const getAllPost = async (search: { keyword: string; type: string; page: number }): Promise<PostResponse> => {

    const res = await axios.get("http://localhost:3000/post", {
        params: search
    });

    return res.data;
}