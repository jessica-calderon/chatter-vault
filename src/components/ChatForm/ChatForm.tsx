import React, { useState, useEffect } from "react";
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
      <h2>Add New Chat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Chat URL"
          value={chatURL}
          onChange={(e) => setChatURL(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ChatForm;
