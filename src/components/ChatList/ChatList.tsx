import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Chat {
    id: string;
    title: string;
}

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
        <div className='bg-white rounded-lg shadow-md p-4 max-w-md mx-auto mt-6'>
            <h2 className='text-2xl font-bold mb-4'>Chat List</h2>
            {savedChats.map((chat) => (
                <div key={chat.id} className='flex items-center justify-between py-2 border-b border-gray-200'>
                    <span className='cursor-pointer text-blue-500 hover:underline flex-1' onClick={() => handleChatClick(chat)}>
                        {chat.title}
                    </span>
                    <button className='text-red-500 hover:text-red-700' onClick={() => handleChatDelete(chat.id)}>
                        <RiDeleteBin6Line />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ChatList;
