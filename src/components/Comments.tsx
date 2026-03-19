import dayjs from "dayjs"
import type { CommentsType } from "../type/CommentsType"
import "../css/Comments.css"

interface CommentsProps {
    data: CommentsType[]
}

export default function Comments({ data }: CommentsProps) {

    if (!data || data.length === 0) {
        return <div className="comments">댓글 없음</div>
    }

    return (
        <div className="comments">
            <div className="comments-title">댓글</div>
            {data.map((comment) => (
                <div className="comment" key={comment.id}>
                    <div className="comment-header">
                        <span className="nickname">
                            {comment.user?.nickname ?? "알 수 없음"}
                        </span>
                        <span className="date">
                            {dayjs(comment.createdAt).format("YYYY-MM-DD HH:mm")}
                        </span>
                    </div>
                    <div className="content">
                        {comment.content}
                    </div>
                </div>
            ))}
        </div>
    )
}