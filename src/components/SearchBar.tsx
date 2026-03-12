import "../css/SearchBar.css"

interface Props {
    inputKeyword: string
    setInputKeyword: (keyword: string) => void
    setSearch: React.Dispatch<React.SetStateAction<any>>
}

export default function SearchBar({ inputKeyword, setInputKeyword, setSearch }: Props) {

    const handleSearch = () => {

        setSearch((prev: any) => ({
            ...prev,
            keyword: inputKeyword,
            page: 1
        }))
    }

    return (
        <div className="searchBar-container">
            <input
                className="searchBar-input"
                // 검색창에 들어가는 타입은 텍스트, 이외에도 범위 체크박스 등등이 있음
                type="text"
                // 검색창에 들어갈 설명내용
                placeholder="검색어 입력"
                // 들어가는 값 여기서는 inputKeyword state
                value={inputKeyword}
                // setInputKeyword로 키워드를 교체함
                onChange={(e) => setInputKeyword(e.target.value)}
                //enter 누르면 입력
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch()
                    }
                }}
            />

            <button className="searchBar-button" onClick={handleSearch}>검색</button>
        </div>
    )
}