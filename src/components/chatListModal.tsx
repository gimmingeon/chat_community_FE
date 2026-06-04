import type { ChattingRoomType } from "../type/ChattingListType"
import "../css/ChatListModal.css"
import { useNavigate } from "react-router-dom";

interface ChatModalProps {
    onClose: () => void,
    chattingList: ChattingRoomType[]
}

export default function ChatModal({ onClose, chattingList }: ChatModalProps) {

    let navigate = useNavigate();
    return (
        <div
            className="chatlist-modal-overlay"
            onClick={onClose}
        >
            <div
                className="chatlist-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <h2>채팅방 리스트</h2>

                <button onClick={onClose}>닫기</button>

                {chattingList.map((chatRoom, index) => (
                    <div
                        className="chatlist-item"
                        key={chatRoom.id}
                        onClick={() => navigate(`/chat/${chatRoom.id}`)}
                    >
                        <span>{index + 1}.</span>
                        <span>{chatRoom.user.nickname}의 채팅</span>
                    </div>
                ))}
            </div>
        </div>
    )
}