import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ChatList() {
    const [savedChats, setSavedChats] = useState([]);

    useEffect(() => {
        const chats = JSON.parse(localStorage.getItem("savedChats") || "[]");
        setSavedChats(chats);
    }, []);

    const navigate = useNavigate();

    const handleChatClick = (chat: { id: any }) => {
        navigate(`/chat/${chat.id}`);
    };

    return (
        <div>
            <h2>Chat List</h2>
            {savedChats.map(
                (chat: {
                    id: Key | null | undefined;
                    title:
                        | string
                        | number
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                }) => (
                    <div key={chat.id} onClick={() => handleChatClick(chat)}>
                        {chat.title}
                    </div>
                )
            )}
        </div>
    );
}
export default ChatList;