import dayjs from "dayjs"
import type { CommentsType } from "../type/CommentsType"
import "../css/Comments.css"
import { useCreateComment } from "../hooks/useCreateComment"

interface CommentsProps {
    data: CommentsType[],
    id: string,
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>
}

export default function Comments({ data, id, content, setContent }: CommentsProps) {

    const createComment = useCreateComment();

    const handleCreateComment = (id: string, content: string) => {
        createComment.mutate(
            { id, content },
            {
                onSuccess: () => {
                    setContent("");
                }
            }
        )
    }

    if (!data || data.length === 0) {
        return (
            <div className="comments">
                <div className="comments-title">댓글</div>

                <textarea
                    className="comments-content-input"
                    placeholder="내용"
                    value={content}
                    onChange={(e) =>
                        setContent(e.target.value)
                    }
                />

                <button
                    className="comments-register-button"
                    onClick={() => handleCreateComment(id, content)}
                >등록</button>

                <div className="comments-empty">댓글 없음</div>
            </div>
        )
    }

    return (
        <div className="comments">
            <div className="comments-title">댓글</div>

            <textarea
                className="comments-content-input"
                placeholder="내용"
                value={content}
                onChange={(e) =>
                    setContent(e.target.value)
                }
            />

            <button
                className="comments-register-button"
                onClick={() => handleCreateComment(id, content)}
            >등록</button>

            {data.map((comment) => (
                <div className="comment" key={comment.id}>
                    <div className="comment-header">
                        <span className="nickname">
                            {comment.user?.nickname ?? "알 수 없음"}
                        </span>
                        <span className="date">
                            {dayjs(comment.createdAt).format("YYYY-MM-DD HH:mm")}
                            <button className="comment-update-button">수정</button>
                            <button className="comment-delete-button">삭제</button>
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