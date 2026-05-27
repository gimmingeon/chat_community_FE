import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";

export default function ChatPage() {

    let { id } = useParams();

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<string[]>([]);

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

        const handleMessage = (data: string) => {
            setMessages((prev) => [...prev, data]);
        };

        // 채팅룸 접속
        socket.emit("joinRoom", Number(id));
        // 메시지 가져오기
        socket.on("message", handleMessage);

        return () => {
            socket.off("message", handleMessage);

            socket.disconnect();
        };
    }, [id]);

    // 메세지 보내기
    const sendMessage = () => {
        socketRef.current?.emit("message", { roomId: Number(id), message });
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