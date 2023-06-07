import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function Chat() {
  const { id } = useParams();
  const savedChats = JSON.parse(localStorage.getItem("savedChats") || "[]");
  const chat = savedChats.find((c: { id: string | undefined }) => c.id === id);
  const [chatTranscript, setChatTranscript] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Added loading state

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
      setIsLoading(false); // Set loading state to false when chat transcript is fetched
    } catch (error) {
      console.error("Error fetching chat transcript:", error);
      setIsLoading(false); // Set loading state to false in case of an error
    }
  };

  return (
    <div>
      <h2>Chat Transcript</h2>
      {isLoading ? ( // Render loading message while chat is loading
        <p>Loading chat transcript...</p>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: chatTranscript }} />
      )}
    </div>
  );
}

export default Chat;
