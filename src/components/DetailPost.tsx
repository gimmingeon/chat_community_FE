import dayjs from "dayjs"
import type { DetailPost } from "../type/DetailPostType"
import "../css/DetailPost.css"

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
                    <span>타입: {data.postType}</span>
                    <span>작성일: {dayjs(data.createdAt).format("YYYY-MM-DD HH:mm")}</span>
                    <span>수정일: {dayjs(data.updatedAt).format("YYYY-MM-DD HH:mm")}</span>
                </div>

                <div className="detail-post-content">
                    {data.content}
                </div>

                <div>
                    {data?.postHashtag?.map((hashtag, index) => (
                        <span className="post-tag" key={index}>
                            <span>  </span>#{hashtag.hashtag}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    )
}