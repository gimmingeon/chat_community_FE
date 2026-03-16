import type { PostResponse } from "../type/PostResponse";
import "../css/Posts.css"
import "../css/Pagenation.css"
import { PostTypeLabel } from "../type/PostTypeLabel";

interface PostsProps {
    data: PostResponse
    setSearch: React.Dispatch<React.SetStateAction<any>>
}

export default function Posts({ data }: PostsProps) {

    return (
        <div className="posts-container">

            {data?.posts?.map(post => (
                <div className="post-card" key={post.id}>
                    <div className="post-title">제목: {post.title}</div>
                    <div className="post-info">
                        <span className="post-type">{PostTypeLabel[post.postType]}</span>
                        <span>닉네임: {post.user.nickname}</span>
                        <span>작성일: {post.createdAt}</span>
                    </div>
                </div>
            ))}

        </div>

    )
}