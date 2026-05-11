import type { CreatePostType } from "../type/CreatePostType";

interface CreatePostProps {
    inputPostText: CreatePostType
    setInputPostText: React.Dispatch<React.SetStateAction<CreatePostType>>
    handleCreatePost: () => void
    handleAddTag: () => void
    tagInput: string,
    setTagInput: React.Dispatch<React.SetStateAction<string>>
}

export default function CreatePostBox({
    inputPostText,
    setInputPostText,
    handleCreatePost,
    handleAddTag,
    tagInput,
    setTagInput

}: CreatePostProps) {

    const handleMinusTag = (target: string) => {
        setInputPostText((prev) => ({
            ...prev,
            hashTag: prev.hashTag.filter(
                (tag) => tag !== target
            )
        }))
    }

    return (
        <div>
            <input
                type="text"
                placeholder="제목"
                value={inputPostText.title}
                onChange={(e) =>
                    setInputPostText((prev: any) => ({
                        ...prev,
                        title: e.target.value
                    }))
                }
            />

            <input
                type="text"
                placeholder="내용"
                value={inputPostText.content}
                onChange={(e) =>
                    setInputPostText((prev: any) => ({
                        ...prev,
                        content: e.target.value
                    }))
                }
            />

            <select
                value={inputPostText.postType}
                onChange={(e) =>
                    setInputPostText((prev) => ({
                        ...prev,
                        postType: e.target.value
                    }))
                }
            >
                <option value="nomal">자유</option>
                <option value="question">질문</option>
                <option value="project">프로젝트</option>
                <option value="tip">팁</option>
            </select>

            <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
            />

            <button onClick={handleAddTag}>추가</button>

            {
                inputPostText.hashTag.map((tag) => (
                    <div key={tag}>
                        {tag}
                        <button onClick={() => handleMinusTag(tag)}>
                            X
                        </button>
                    </div>
                ))
            }

            <button onClick={handleCreatePost}>
                게시글 등록
            </button>
        </div>
    )
}