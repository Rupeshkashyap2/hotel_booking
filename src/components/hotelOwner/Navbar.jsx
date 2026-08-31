import React from "react";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () =>{
    return ( 
        <div className="flex items-center justify-between px-4 md:px-8
        border-b border-gray-300 py-3 bg-white transition-all duration-300">
            <a href="/">
                <img src={assets.logo} alt="logo" className="h-9 invert opacity-80"/>
            </a>
            <UserButton/>
        </div>
    )
}

export default Navbar