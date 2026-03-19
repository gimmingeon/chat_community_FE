import { useParams } from "react-router-dom";
import DetailPost from "../components/DetailPost";
import { useDetailPostGet } from "../hooks/useDetailPostGet";
import Comments from "../components/Comments";
import { useGetComments } from "../hooks/useGetComments";

export default function DetailPostPage() {

    let { id } = useParams();

    if (!id) {
        return <div>잘못된 접근입니다</div>;
    }

    const detailPostData = useDetailPostGet(id);
    const commentData = useGetComments(id);

    if (!detailPostData.data || !commentData.data) {
        return <div>로딩 중...</div>
    }

    return (
        <div className="detail-post-container">
            <div className="detail-post-card">
                <DetailPost data={detailPostData.data} />
                <Comments data={commentData.data ?? []} />
            </div>
        </div>
    )
}