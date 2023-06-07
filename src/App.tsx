import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatList from "./components/ChatList/ChatList";
import Chat from "./components/Chat/Chat";
import ChatForm from "./components/ChatForm/ChatForm";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/LogIn/LogIn";

function App() {
    return (
        <Router>
            <div className='App'>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Chat List</Link>
                        </li>
                        <li>
                            <Link to='/new'>Add New Chat</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Sign Up</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/' element={<ChatList />} />
                    <Route path='/chat/:id' element={<Chat />} />
                    <Route path='/new' element={<ChatForm />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
