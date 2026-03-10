interface Props {
    setSearch: React.Dispatch<React.SetStateAction<any>>
}

export default function TypeButton({ setSearch }: Props) {

    const postType = [
        { label: "자유", value: "nomal" },
        { label: "질문", value: "question" },
        { label: "프로젝트", value: "project" },
        { label: "팁", value: "tip" }
    ]

    return (
        <div>
            <div>
                {postType.map((type) => (
                    <button
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
            </div>
        </div>
    )
}