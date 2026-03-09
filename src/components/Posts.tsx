import { usePostsGet } from "../hooks/GetPostHook";

export default function Posts() {

    const { data } = usePostsGet()


    if (!data) return null

    return (
        <div>
            {data?.posts?.map(post => (
                <div key={post.id}>
                    <div>제목: {post.title}</div>
                    <div>{post.postType}</div>
                    <div>닉네임: {post.user.nickname}</div>
                    <div>작성일: {post.createdAt}</div>
                </div>
            ))}
            <div>
                <div>현재 페이지: {data?.page}</div>
                <div>총 페이지: {data?.total}</div>
                <div>마지막 페이지: {data?.lastPage}</div>


            </div>

        </div>
    )
}