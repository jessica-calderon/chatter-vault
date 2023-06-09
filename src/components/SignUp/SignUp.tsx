import React, { useState } from "react";
import axios from "axios";
import { FaUserPlus, FaEnvelope, FaKey } from "react-icons/fa";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        await axios.post("/signup", { username, email, password });
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-4 flex flex-col h-full'>
            <div className='flex-grow'>
                <label className='text-[28px] font-bold text-white'>Sign Up</label>
                <div className='relative mt-2'>
                    <input
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white bg-gray-700 pl-8'
                    />
                    <FaUserPlus className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400' />
                </div>
            </div>
            <div className='flex-grow'>
                <div className='relative'>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
            <div>
                <button
                    type='submit'
                    className='w-full px-6 py-2 border border-1 border-black rounded-md bg-[#00C781] hover:bg-[#008F5A] focus:outline-none focus:ring-2 focus:ring-[#008F5A]'
                >
                    Sign Up
                </button>
            </div>
        </form>
    );
}

export default Signup;
