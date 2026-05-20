import { useNavigate, useParams } from "react-router-dom";
import DetailPost from "../components/DetailPost";
import { useDetailPostGet } from "../hooks/useDetailPostGet";
import Comments from "../components/Comments";
import { useGetComments } from "../hooks/useGetComments";
import { useDeletePost } from "../hooks/useDeletePost";
import { useState } from "react";
import { useCreateChatRoom } from "../hooks/useCreateChatRoom";

export default function DetailPostPage() {

    let navigate = useNavigate();

    let { id } = useParams();

    const [content, setContent] = useState("");

    if (!id) {
        return <div>잘못된 접근입니다</div>;
    }

    const detailPostData = useDetailPostGet(id);
    const commentData = useGetComments(id);
    const chattingRoomHook = useCreateChatRoom();

    const deletePostData = useDeletePost();

    const handleDeletePost = (id: string) => {
        deletePostData.mutate(id)
    }

    const handleChattingRoom = async (postId: number, postUserId: number) => {
        const chatRoomId = await chattingRoomHook.mutateAsync({ postId, postUserId });

        navigate(`/chat/${chatRoomId}`);
    }

    if (!detailPostData.data || !commentData.data) {
        return <div>로딩 중...</div>
    }

    return (
        <div className="detail-post-container">
            <div className="detail-post-card">
                <DetailPost
                    data={detailPostData.data}
                    handleDeletePost={() => handleDeletePost(id)}
                    handleChattingRoom={handleChattingRoom}
                />
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