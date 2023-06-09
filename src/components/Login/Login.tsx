import React, { useState } from "react";
import axios from "axios";
import { FaSignInAlt, FaEnvelope, FaKey } from "react-icons/fa";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        await axios.post("/login", { username, password });
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-4 flex flex-col h-full'>
            <div className='flex-grow'>
                <label className='text-[28px] font-bold text-white'>
                    Login
                </label>
                <div className='relative mt-2'>
                    <input
                        type='text'
                        placeholder='Username or Email'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white bg-gray-700 pl-8'
                    />
                    <FaEnvelope className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400' />
                </div>
            </div>
            <div className='flex-grow'>
                <div className='relative'>
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white bg-gray-700 pl-8'
                    />
                    <FaKey className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400' />
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    type='submit'
                    className='flex items-center justify-center w-full text-black bg-[#00C781] hover:bg-[#008F5A] focus:outline-none focus:ring-2 focus:ring-[#008F5A] text-white px-6 py-2 border border-1 border-black rounded-md'
                >
                    <FaSignInAlt className='mr-2' />
                    Log In
                </button>
            </div>
        </form>
    );
}

export default Login;
