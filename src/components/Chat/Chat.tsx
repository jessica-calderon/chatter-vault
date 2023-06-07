import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function Chat() {
    const { id } = useParams();
    const savedChats = JSON.parse(localStorage.getItem("savedChats") || "[]");
    const chat = savedChats.find((c: { id: string | undefined }) => c.id === id);
    const [chatTranscript, setChatTranscript] = useState("");

    useEffect(() => {
        if (chat && chat.url) {
            fetchChatTranscript(chat.url);
        }
    }, [chat]);

    const fetchChatTranscript = async (url: RequestInfo | URL) => {
        try {
            const response = await fetch(url);
            const htmlResponse = await response.text();
            setChatTranscript(htmlResponse);
        } catch (error) {
            console.error("Error fetching chat transcript:", error);
        }
    };

    return (
        <div>
            <h2>Chat Transcript</h2>
            <div dangerouslySetInnerHTML={{ __html: chatTranscript }} />
        </div>
    );
}
export default Chat;
