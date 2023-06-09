import React, { useState } from "react";
import Login from "../Login/Login";
import Signup from "../SignUp/SignUp";

function AuthForm() {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <div className='bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center'>
            <div className='max-w-sm mx-auto bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col h-full'>
                {showLoginForm ? <Login /> : <Signup />}
                <p className='text-center text-white mt-4'>
                    {showLoginForm ? "Don't have an account? " : "Already have an account? "}
                    <span className='text-white cursor-pointer hover:text-gray-300' onClick={toggleForm}>
                        {showLoginForm ? "Sign up" : "Log in"}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default AuthForm;
