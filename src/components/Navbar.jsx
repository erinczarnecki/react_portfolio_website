import React, { useState } from 'react';
import Logo1 from '../assets/images/icons/Logo-black.png';
import Logo2 from '../assets/images/icons/Logo-white.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [nav, setNav] = useState();
    const handleClick = () => setNav(!nav);


    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo2} alt="logo image" style={{ width: "50px" }} />
            </div>

            {/* Menu */}
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                <FaBars />
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex justify-center items-center"}>
                <ul>
                    <li className="py-4 text-4xl">Home</li>
                    <li className="py-4 text-4xl">About</li>
                    <li className="py-4 text-4xl">Experience</li>
                    <li className="py-4 text-4xl">Skills</li>
                    <li className="py-4 text-4xl">Projects</li>
                    <li className="py-4 text-4xl">Contact</li>
                    <li className="py-4 text-4xl">Resume</li>
                </ul>
            </div>


            {/* Social Icons */}
            <div className="hidden">
                <ul>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar;
