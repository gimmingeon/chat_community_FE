import axios from "axios"
import type { PostResponse } from "../type/PostResponse";

export const getAllPost = async (): Promise<PostResponse> => {
    const res = await axios.get("http://localhost:3000/post");
    return res.data;
}