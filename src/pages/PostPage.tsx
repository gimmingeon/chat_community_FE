import { useState } from "react";
import Posts from "../components/Posts";
import { usePostsGet } from "../hooks/usePostGet";
import TypeButton from "../components/TypeButton";
import SearchBar from "../components/SearchBar";

export default function PostPage() {

    const [search, setSearch] = useState({
        keyword: "", // 실제 검색용
        type: "",
        page: 1
    })
    const [inputKeyword, setInputKeyword] = useState("") // 입력중

    const { data } = usePostsGet(search)

    if (!data) return null

    return (
        <div>
            <TypeButton setSearch={setSearch} />
            <SearchBar
                inputKeyword={inputKeyword}
                setInputKeyword={setInputKeyword}
                setSearch={setSearch}
            />
            <Posts data={data} setSearch={setSearch} />
        </div>
    )
}