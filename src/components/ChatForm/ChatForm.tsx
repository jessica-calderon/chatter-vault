import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChatForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const newChat = {
            title: title,
            content: content,
        };

        const savedChats = JSON.parse(localStorage.getItem("savedChats") || "[]");
        savedChats.push(newChat);
        localStorage.setItem("savedChats", JSON.stringify(savedChats));

        setTitle("");
        setContent("");
        navigate("/"); // Redirect back to the chat list page
    };

    return (
        <div>
            <h2>Add New Chat</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} />
                <button type='submit'>Save</button>
            </form>
        </div>
    );
}

export default ChatForm;
