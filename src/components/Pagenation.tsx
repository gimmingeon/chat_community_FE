import "../css/Posts.css"
import "../css/Pagenation.css"
import type { PostResponse } from "../type/PostResponse"

interface PostsProps {
    data: PostResponse
    setSearch: React.Dispatch<React.SetStateAction<any>>
}

export default function Pagenation({ data, setSearch }: PostsProps) {
    return (

        <div className="pagenation">

            {Array.from({ length: data.lastPage }).map((_, index) => {

                const page = index + 1

                return (
                    <button
                        className="page-button"
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

    )
}