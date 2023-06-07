import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatList from "./components/ChatList/ChatList";
import Chat from "./components/Chat/Chat";
import ChatForm from "./components/ChatForm/ChatForm";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Chat List</Link>
            </li>
            <li>
              <Link to="/new">Add New Chat</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ChatList />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/new" element={<ChatForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
