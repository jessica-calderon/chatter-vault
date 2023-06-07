import React, { useState } from "react";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Perform sign-up logic here
        // You can send an API request to your backend server to handle the sign-up process
        // For simplicity, we'll just log the username and password to the console
        console.log("Username:", username);
        console.log("Password:", password);

        // Clear the form fields
        setUsername("");
        setPassword("");
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
