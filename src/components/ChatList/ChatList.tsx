import React from "react";
import { Link } from "react-router-dom";

function ChatList() {
    const savedChats = JSON.parse(localStorage.getItem("savedChats") || "[]");

    return (
        <div>
            <h1>My Chat Notebook</h1>
            <Link to='/new'>Add New Chat</Link>
            <ul>
                {savedChats.map(
                    (
                        chat: {
                            title:
                                | string
                                | number
                                | boolean
                                | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                                | React.ReactFragment
                                | React.ReactPortal
                                | null
                                | undefined;
                        },
                        index: React.Key | null | undefined
                    ) => (
                        <li key={index}>
                            <Link to={`/chat/${index}`}>{chat.title}</Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default ChatList;
