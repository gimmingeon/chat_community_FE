import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function ChatPage() {

    let { id } = useParams();

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {

        const handleMessage = (data: string) => {
            setMessages((prev) => [...prev, data]);
        }

        socket.emit("joinRoom", Number(id));
        // 메시지 가져오기
        socket.on("message", handleMessage);

        return () => {
            socket.off("message", handleMessage);
        };
    }, [id]);

    // 메세지 보내기
    const sendMessage = () => {
        socket.emit("message", { roomId: Number(id), message });
        setMessage("");
    };

    return (
        <div>
            <h1>채팅</h1>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        {message}
                    </div>
                ))}
            </div>

            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button onClick={sendMessage}>전송</button>
        </div>
    )
}