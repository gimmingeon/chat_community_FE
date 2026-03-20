import "../css/TypeButton.css"

interface Props {
    setSearch: React.Dispatch<React.SetStateAction<any>>
}

export default function TypeButton({ setSearch }: Props) {

    const postType = [
        { label: "전체", value: "all" },
        { label: "자유", value: "nomal" },
        { label: "질문", value: "question" },
        { label: "프로젝트", value: "project" },
        { label: "팁", value: "tip" }
    ]

    return (
        <div>
            <div className="type-button-container">
                {postType.map((type) => (
                    <button
                        className="type-button"
                        onClick={() => {
                            setSearch((prev: any) => ({
                                ...prev,
                                type: type.value,
                                page: 1
                            }));
                        }}
                        key={type.value}
                        value={type.value}
                    >
                        {type.label}
                    </button>
                ))}

                <button className="register-post-button">게시글 등록</button>
            </div>
        </div>
    )
}