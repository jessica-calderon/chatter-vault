import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import LandingPage from "./pages/LandingPage/LandingPage";
import ChatList from "./components/ChatList/ChatList";
import Chat from "./components/Chat/Chat";
import ChatForm from "./components/ChatForm/ChatForm";
import AuthForm from "./components/AuthForm/AuthForm";
import "./index.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogout() {
        setIsLoggedIn(false);
    }

    async function handleLogin(username: any, password: any) {
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email: username,
                password,
              });
              
             
              
            const { token, userId, name } = response.data;
            // Save the token, userId, and name to local storage or state as needed
            // ...
            setIsLoggedIn(true);
        } catch (error) {
            console.error("Error during login:", error);
            // Handle error, show error message, etc.
        }
    }

    async function handleFormSubmit(username: any, password: any) {
        try {
            const response = await axios.post("http://localhost:3000/signup", {
                email: username,
                password,
              });
            const { token, userId, name } = response.data;
            // Save the token, userId, and name to local storage or state as needed
            // ...
            setIsLoggedIn(true);
        } catch (error) {
            console.error("Error during signup:", error);
            // Handle error, show error message, etc.
        }
    }

    return (
        <Router>
            <div className='min-h-screen bg-gray-100'>
                <nav className='bg-gray-800'>
                    <div className='container mx-auto'>
                        <div className='flex items-center justify-between px-4 py-3'>
                            <div>
                                <Link to='/' className='text-white text-lg font-bold'>
                                    ChatterVault
                                </Link>
                            </div>
                            <ul className='flex items-center space-x-4'>
                                {isLoggedIn ? (
                                    <>
                                        <li>
                                            <Link to='/' className='text-white hover:text-gray-300'>
                                                Chat List
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/new' className='text-white hover:text-gray-300'>
                                                Add New Chat
                                            </Link>
                                        </li>
                                        <li>
                                            <span className='text-white'>Logged in</span>
                                            <button onClick={handleLogout} className='text-white hover:text-gray-300 ml-2'>
                                                Logout
                                            </button>
                                        </li>
                                    </>
                                ) : (
                                    <li>
                                        <Link to='/login' className='text-white hover:text-gray-300'>
                                            Login/Sign Up
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path='/' element={isLoggedIn ? <ChatList /> : <LandingPage />} />
                    {isLoggedIn && <Route path='/chat/:id' element={<Chat />} />}
                    {isLoggedIn && <Route path='/new' element={<ChatForm />} />}
                    {!isLoggedIn && (
                        <Route
                            path='/login'
                            element={<AuthForm />}
                        />
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
