import React, { useState } from 'react';
// import Logo1 from '../assets/images/icons/Logo-black.png';
import Logo2 from '../assets/images/icons/Logo-white.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Navbar = () => {

    const [nav, setNav] = useState(true);
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
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {nav ? <FaBars size={30} /> : <FaTimes size={25} />}
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
                </ul>
            </div>


            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-[#0077b5] rounded-r-full" >
                        <a className="flex justify-between items-center w-full text-gray-200"
                            href="https://linkedin.com/in/erin-czarnecki" target="_blank">LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-black rounded-r-full">
                        <a className="flex justify-between items-center w-full text-gray-200"
                            href="https://github.com/erinczarnecki" target="_blank">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-[#db4437] rounded-r-full">
                        <a className="flex justify-between items-center w-full text-gray-200"
                            href="/" target="_blank">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-[#d5a021] rounded-r-full">
                        <a className="flex justify-between items-center w-full text-gray-100"
                            href="/" target="_blank">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar;
