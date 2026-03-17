import dayjs from "dayjs"
import type { DetailPost } from "../type/DetailPostType"

interface DetailPostProps {
    data: DetailPost
}

export default function DetailPost({ data }: DetailPostProps) {

    return (
        <div>
            <div>
                <span>제목: {data.title}</span>
                <span>닉네임: {data.user.nickname}</span>
                <span>내용: {data.content}</span>
                <span>타입: {data.postType}</span>
                <span>작성일: {dayjs(data.createdAt).format("YYYY-MM-DD HH:mm")}</span>
                <span>수정일: {dayjs(data.updatedAt).format("YYYY-MM-DD HH:mm")}</span>
                <span>tag</span>
                {data?.postHashtag?.map(hashtag => (
                    <span>{hashtag.hashtag}</span>
                ))}
            </div>
        </div>
    )
}