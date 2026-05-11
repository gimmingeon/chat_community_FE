import { useState } from "react";
import { useCreatePost } from "../hooks/useCreatePost";
import CreatePostBox from "../components/CreatePostBox";

export default function CreatePostPage() {
    const [inputPostText, setInputPostText] = useState({
        title: "",
        content: "",
        postType: "",
        hashTag: [] as string[]
    });

    const [tagInput, setTagInput] = useState("");

    const createPostMutation = useCreatePost();

    const handleCreatePost = () => {
        createPostMutation.mutate(inputPostText)
    }

    const handleAddTag = () => {
        if (!tagInput.trim()) {
            return;
        }

        if (inputPostText.hashTag.includes(tagInput)) {
            return;
        }

        setInputPostText((prev) => ({
            ...prev,
            hashTag: [...prev.hashTag, tagInput]
        }));

        setTagInput("")
    }

    return (
        <div>
            <CreatePostBox
                inputPostText={inputPostText}
                setInputPostText={setInputPostText}
                handleCreatePost={handleCreatePost}
                handleAddTag={handleAddTag}
                tagInput={tagInput}
                setTagInput={setTagInput}
            />
        </div>
    )

}