import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Chat {
  id: string;
  title: string;
}
// TODO: fix delete if same name, or dont allow duplicate names
function ChatList() {
  const [savedChats, setSavedChats] = useState<Chat[]>([]);

  useEffect(() => {
    const chats: Chat[] = JSON.parse(localStorage.getItem("savedChats") || "[]");
    setSavedChats(chats);
  }, []);

  const navigate = useNavigate();

  const handleChatClick = (chat: Chat) => {
    navigate(`/chat/${chat.id}`);
  };

  const handleChatDelete = (chatId: string) => {
    const updatedChats = savedChats.filter((chat) => chat.id !== chatId);
    setSavedChats(updatedChats);
    localStorage.setItem("savedChats", JSON.stringify(updatedChats));
  };

  return (
    <div>
      <h2>Chat List</h2>
      {savedChats.map((chat) => (
        <div key={chat.id}>
          <span onClick={() => handleChatClick(chat)}>{chat.title}</span>
          <button onClick={() => handleChatDelete(chat.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
