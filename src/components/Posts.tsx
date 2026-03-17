import type { PostResponse } from "../type/PostResponse";
import "../css/Posts.css"
import "../css/Pagenation.css"
import { PostTypeLabel } from "../type/PostTypeLabel";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

interface PostsProps {
    data: PostResponse
}

export default function Posts({ data }: PostsProps) {

    let navigate = useNavigate();

    return (
        <div className="posts-container">

            {data?.posts?.map(post => (
                <div
                    className="post-card"
                    key={post.id}
                    onClick={() => navigate(`/post/${post.id}`)}
                >
                    <div className="post-title">제목: {post.title}</div>
                    <div className="post-info">
                        <span className="post-type">{PostTypeLabel[post.postType]}</span>
                        <span>닉네임: {post.user.nickname}</span>
                        <span>작성일: {dayjs(post.createdAt).format("YYYY-MM-DD HH:mm")}</span>
                    </div>
                </div>
            ))}

        </div>

    )
}