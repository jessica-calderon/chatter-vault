import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiChatAlt2 } from "react-icons/hi";
import { FaUserPlus, FaSignInAlt, FaEnvelope } from "react-icons/fa";

type AuthFormProps = {
    formTitle: string;
    submitButtonText: string;
    onSubmit: (username: string, password: string) => void;
    onLogin: any;
};

function AuthForm({ formTitle, submitButtonText, onSubmit, onLogin }: AuthFormProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(username || email, password);
        setUsername("");
        setEmail("");
        setPassword("");
    };

    const handleToggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500'>
            <div className='max-w-md w-full mx-auto'>
                <div className='bg-white p-8 shadow-md rounded-md'>
                    <h2 className='text-2xl font-bold mb-4'>{isSignUp ? "Sign Up" : formTitle}</h2>
                    <form onSubmit={handleSubmit}>
                        {isSignUp && (
                            <div className='mb-4 relative'>
                                <input
                                    id='email'
                                    type='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10'
                                />
                                <FaEnvelope className='text-gray-500 absolute left-3 top-3 mt-px' />
                            </div>
                        )}
                        <div className='mb-4 relative'>
                            <input
                                id='username'
                                type='text'
                                placeholder={isSignUp ? "Username" : "Username or Email"}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10'
                            />
                            <FaUserPlus className='text-gray-500 absolute left-3 top-3' />
                        </div>
                        <div className='mb-4 relative'>
                            <input
                                id='password'
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10'
                            />
                            <HiChatAlt2 className='text-gray-500 absolute left-3 top-3' />
                        </div>
                        <button
                            type='submit'
                            className={`w-full ${isSignUp ? "bg-green-500" : "bg-blue-500"} text-white py-2 px-4 rounded-md hover:bg-blue-600`}
                        >
                            {isSignUp ? "Sign Up" : submitButtonText}
                        </button>
                    </form>
                    <p className='mt-4'>
                        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                        <button className='text-blue-500 hover:text-blue-700 flex items-center' onClick={handleToggleForm}>
                            {isSignUp ? (
                                <>
                                    <FaSignInAlt className='text-blue-500 mr-1' />
                                    Log in
                                </>
                            ) : (
                                <>
                                    <FaUserPlus className='text-blue-500 mr-1' />
                                    Sign up
                                </>
                            )}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;
