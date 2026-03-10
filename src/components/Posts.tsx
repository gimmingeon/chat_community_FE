import type { PostResponse } from "../type/PostResponse";

interface PostsProps {
    data: PostResponse
    setSearch: React.Dispatch<React.SetStateAction<any>>
}

export default function Posts({ data, setSearch }: PostsProps) {

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

                {Array.from({ length: data.lastPage }).map((_, index) => {

                    const page = index + 1

                    return (
                        <button
                            key={page}
                            onClick={() =>
                                setSearch((prev: any) => ({
                                    ...prev,
                                    page
                                }))
                            }
                        >
                            {page}
                        </button>
                    )
                })}

            </div>

        </div>

    )
}