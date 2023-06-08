import React from "react";

function Footer() {
    return (
        <footer className='bg-gray-800 text-white text-center py-4'>
            <p>
                Created by{" "}
                <a
                    href='https://github.com/jessica-calderon'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-gray-400'
                >
                    Jessica Calderon
                </a>{" "}
                2023
            </p>
        </footer>
    );
}

export default Footer;
