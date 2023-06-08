import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className='bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center'>
            <div className='max-w-3xl mx-auto p-8'>
                <h1 className='text-4xl sm:text-5xl text-white font-bold mb-6'>Welcome to ChatterVault</h1>
                <p className='text-lg sm:text-xl text-white mb-8'>An easy way to save your most important AI chats 🤖</p>
                <div className='flex space-x-4'>
                    <Link
                        to='/login'
                        className='px-6 py-3 text-lg bg-white text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200 focus:outline-none'
                    >
                        Get Started
                    </Link>
                    <button className='px-6 py-3 text-lg bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-blue-500 transition duration-200 focus:outline-none'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
