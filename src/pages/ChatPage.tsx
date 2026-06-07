import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import type { LoadMessageType } from "../type/LoadMessageType";
import dayjs from "dayjs";
import "../css/Chat.css"

export default function ChatPage() {

    let { id } = useParams();

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<LoadMessageType[]>([]);
    const [postTitle, setPostTitle] = useState("");
    const [myId, setMyId] = useState<number | null>(null);

    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {

        socketRef.current = io(
            "http://localhost:3000",
            {
                // 서버로 쿠키보냄
                withCredentials: true
            }
        );

        const socket = socketRef.current;

        const handleMessage = (data: LoadMessageType) => {
            setMessages((prev) => [...prev, data]);
        };

        const handleLoadMessage = (data: LoadMessageType[]) => {
            setMessages(data);
        }

        const handleGetTitle = (data: { title: string, userId: number }) => {
            setPostTitle(data.title);
            setMyId(data.userId);
        }

        // 채팅룸 접속
        socket.emit("joinRoom", Number(id));

        socket.emit("postTitle", Number(id));

        socket.emit("loadMessage", Number(id));

        socket.on("get-postTitle", handleGetTitle);

        socket.on("load-message", handleLoadMessage);

        // 메시지 가져오기
        // user-message에서 가져온 데이터로 handleMessage를 실행
        // 처음에는 emit을 실행되지 않기에 이벤트 수신 대기 등록 상태이다
        // 지금 당장 받는게 아님 
        // emit으로 전송될때마다 받고 다시 대기중을 반복함
        socket.on("user-message", handleMessage);

        return () => {
            socket.off("loadMessage", handleLoadMessage);
            socket.off("user-message", handleMessage);

            socket.disconnect();
        };
    }, [id]);

    // 메세지 보내기
    const sendMessage = () => {
        socketRef.current?.emit("message", { roomId: Number(id), message });
        setMessage("");
    };

    return (
        <div className="chat-container">
            <h1 className="chat-title">게시글: {postTitle}</h1>

            <div className="chat-message-list">
                {messages.map((message, index) => {

                    const myChat = message.user.id === myId;

                    return (

                        <div
                            key={index}
                            className={myChat ? "chat-message-row mine" : "chat-message-row other"}
                        >
                            <div
                                key={index}
                                className="chat-message-item"
                            >
                                <div className="chat-message-header">
                                    <span className="chat-nickname">
                                        {message.user.nickname}
                                    </span>
                                    <span className="chat-time">
                                        {dayjs(message.createdAt).format("HH:mm")}
                                    </span>
                                </div>

                                <div className="chat-content">
                                    {message.content}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="chat-input-area">
                <input
                    className="chat-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button className="chat-send-button" onClick={sendMessage}>전송</button>
            </div>
        </div>
    )
}