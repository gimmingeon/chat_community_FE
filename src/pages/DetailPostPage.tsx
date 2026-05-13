import { useParams } from "react-router-dom";
import DetailPost from "../components/DetailPost";
import { useDetailPostGet } from "../hooks/useDetailPostGet";
import Comments from "../components/Comments";
import { useGetComments } from "../hooks/useGetComments";
import { useDeletePost } from "../hooks/useDeletePost";
import { useState } from "react";

export default function DetailPostPage() {

    let { id } = useParams();

    const [content, setContent] = useState("");

    if (!id) {
        return <div>잘못된 접근입니다</div>;
    }

    const detailPostData = useDetailPostGet(id);
    const commentData = useGetComments(id);

    const deletePostData = useDeletePost();

    const handleDeletePost = (id: string) => {
        deletePostData.mutate(id)
    }
    if (!detailPostData.data || !commentData.data) {
        return <div>로딩 중...</div>
    }

    return (
        <div className="detail-post-container">
            <div className="detail-post-card">
                <DetailPost data={detailPostData.data} handleDeletePost={() => handleDeletePost(id)} />
                <Comments
                    data={commentData.data ?? []}
                    id={id}
                    content={content}
                    setContent={setContent}
                />
            </div>
        </div>
    )
}