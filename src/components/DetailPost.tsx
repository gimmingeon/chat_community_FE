import dayjs from "dayjs"
import type { DetailPost } from "../type/DetailPostType"
import "../css/DetailPost.css"
import { PostTypeLabel } from "../type/PostTypeLabel"

interface DetailPostProps {
    data: DetailPost
}

export default function DetailPost({ data }: DetailPostProps) {

    return (
        <div className="detail-post-container">
            <div className="detail-post-card">
                <div className="detail-post-title">
                    {data.title}
                </div>

                <div className="detail-post-meta">
                    <span>닉네임: {data.user.nickname}</span>
                    <span>타입: {PostTypeLabel[data.postType]}</span>
                    <span>작성일: {dayjs(data.createdAt).format("YYYY-MM-DD HH:mm")}</span>
                    {data.updatedAt !== data.createdAt && (
                        <span>수정일: {dayjs(data.updatedAt).format("YYYY-MM-DD HH:mm")}</span>
                    )}

                    <button className="post-update-button">게시글 수정</button>
                    <button className="post-delete-button">게시글 삭제</button>
                </div>
                <hr />

                <div className="detail-post-content">
                    {data.content}
                </div>

                <hr />

                <div>
                    {data.postHashtag?.map((hashtag, index) => (
                        <span className="post-tag" key={index}>
                            <span>#{hashtag.hashtag}  </span>
                        </span>
                    ))}
                </div>

                <hr />

            </div>
        </div>
    )
}