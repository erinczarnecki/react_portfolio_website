import React, { useState, useEffect } from 'react';
// import Logo1 from '../assets/images/icons/Logo-black.png';
import Logo2 from '../assets/images/icons/Logo-white.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';



const Navbar = () => {

    const [nav, setNav] = useState(true);
    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");

    const handleNav = () => {
        setNav(!nav);
    };

    // Change Nav bar colors
    useEffect(() => {
        const changeColor = () => {
            if (window.scroolY >= 90) {
                setColor("#ffffff");
                setTextColor("#000000");
            } else {
                setColor("transparent");
                setTextColor("white");
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);




    return (
        <div style={{ backgroundColor: `${color}` }} className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <a href="/">
                    <img src={Logo2} alt="logo" style={{ width: "50px" }} />
                </a>
            </div>

            {/* Menu */}
            <ul style={{ color: `${textColor}` }} className="hidden md:flex">
                <li className="text-xl"><Link to="home" smooth={true} duration={300} s >Home</Link></li>
                <li className="text-xl"><Link to="about" smooth={true} duration={300} >About</Link></li>
                {/* <li className="text-xl"><Link to="experience" smooth={true} duration={300}>Experience</Link></li> */}
                <li className="text-xl"><Link to="skills" smooth={true} duration={300} >Skills</Link></li>
                <li className="text-xl"><Link to="projects" smooth={true} duration={300} >Projects</Link></li>
                <li className="text-xl"><Link to="contect" smooth={true} duration={300} >Contact</Link></li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleNav} className="md:hidden z-10">
                {nav ? <FaBars size={30} /> : <FaTimes size={25} />}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex justify-center items-center"}>
                <ul>
                    <li className="py-4 text-4xl">Home</li>
                    <li className="py-4 text-4xl">About</li>
                    {/* <li className="py-4 text-4xl">Experience</li> */}
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
                            href="https://linkedin.com/in/erin-czarnecki" rel="noreferrer" target="_blank">LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-black rounded-r-full">
                        <a className="flex justify-between items-center w-full text-gray-200"
                            href="https://github.com/erinczarnecki" rel="noreferrer" target="_blank">
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
