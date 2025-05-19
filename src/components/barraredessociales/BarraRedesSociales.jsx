import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const BarraRedesSociales =() => {
    return (

        <div className="fixed top-1/3 left-0 z-50 flex flex-col space-y-3 bg-white p-5 shadow-md rounded-r-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 w-6 h-14 hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 w-6 h-14 hover:scale-110 transition-transform" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 w-6 h-14 hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 w-6 h-14 hover:scale-110 transition-transform" />
            </a>

        </div>
    )
}
