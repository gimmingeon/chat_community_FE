import { useNavigate } from "react-router-dom";
import type { MyInfoType } from "../type/Myinfo/MyInfoType.tsx";
import "../css/MyInfoBox.css"

interface MyInfpProps {
    data: MyInfoType
}

export default function MyInfoBox({ data }: MyInfpProps) {

    let navigate = useNavigate()

    return (
        <div className="myinfo-container">
            <div className="myinfo-title">마이페이지</div>

            <div className="myinfo-user">
                <span>이메일: {data.email}</span>
                <span>닉네임: {data.nickname}</span>
            </div>

            <div className="myinfo-post-list">
                {
                    data?.post?.length === 0 && (
                        <div className="myinfo-empty">
                            작성한 게시글이 없습니다.
                        </div>
                    )
                }
                {data?.post?.map(post => (
                    <div
                        className="myinfo-post-card"
                        key={post.id}
                        onClick={() => navigate(`/post/${post.id}`)}
                    >
                        <span className="myinfo-post-title">제목: {post.title}</span>
                        <span className="myinfo-post-type">타입: {post.postType}</span>
                    </div>
                ))}
            </div>


        </div>
    )
}