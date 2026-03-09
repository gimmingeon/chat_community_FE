import { useState } from "react"

export default function SearchBar() {

    //useState로 키워드 저장하기
    const [keyword, setKeyword] = useState("")

    const handleSearch = () => {

        console.log("검색어 : ", keyword)

    }

    return (
        <div>
            <input
                // 검색창에 들어가는 타입은 텍스트, 이외에도 범위 체크박스 등등이 있음
                type="text"
                // 검색창에 들어갈 설명내용
                placeholder="검색어 입력"
                // 들어가는 값 여기서는 keyword state
                value={keyword}
                // setKeyword로 키워드를 교체함
                onChange={(e) => setKeyword(e.target.value)}
                //enter 누르면 입력
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch()
                    }
                }}
            />

            <button onClick={handleSearch}>검색</button>
        </div>
    )
}