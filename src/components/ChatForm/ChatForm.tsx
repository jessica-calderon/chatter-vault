import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChatForm() {
    const [title, setTitle] = useState("");
    const [chatURL, setChatURL] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const newChat = {
            id: Date.now().toString(),
            title: title,
            url: chatURL,
        };

        const savedChats = JSON.parse(localStorage.getItem("savedChats") || "[]");
        savedChats.push(newChat);
        localStorage.setItem("savedChats", JSON.stringify(savedChats));

        setTitle("");
        setChatURL("");
        navigate("/");
    };

    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Add New Chat</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                />
                <input
                    type='text'
                    placeholder='Chat URL'
                    value={chatURL}
                    onChange={(e) => setChatURL(e.target.value)}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                />
                <button type='submit' className='px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
                    Save
                </button>
            </form>
        </div>
    );
}

export default ChatForm;
