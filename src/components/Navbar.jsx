import React, { useState } from 'react';
import Logo2 from '../images/icons/Logo-white.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';



const Navbar = () => {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };






    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300" >
            <div>
                <a href="/">
                    <img src={Logo2} alt="logo" style={{ width: "50px" }} />
                </a>
            </div>

            {/* Menu */}
            <ul className="hidden md:flex">
                <li className="text-xl hover:text-pink-600 hover:ease-in hover:duration-300"><Link to="home" smooth={true} duration={700}>Home</Link></li>
                <li className="text-xl hover:text-pink-600  hover:ease-in hover:duration-300"><Link to="about" smooth={true} duration={700} >About</Link></li>
                <li className="text-xl hover:text-pink-600  hover:ease-in hover:duration-300"><Link to="skills" smooth={true} duration={700} >Skills</Link></li>
                <li className="text-xl hover:text-pink-600  hover:ease-in hover:duration-300"><Link to="projects" smooth={true} duration={700} >Projects</Link></li>
                <li className="text-xl hover:text-pink-600  hover:ease-in hover:duration-300"><Link to="contact" smooth={true} duration={700} >Contact</Link></li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleNav} className="md:hidden z-10">
                {nav ? <FaBars size={30} /> : <FaTimes size={25} />}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex justify-center items-center"}>
                <ul>
                    <li className="py-4 text-4xl">
                        <Link onClick={handleNav} to='home' smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className="py-4 text-4xl">
                        <Link onClick={handleNav} to='about' smooth={true} duration={500}>About</Link>
                    </li>
                    <li className="py-4 text-4xl">
                        <Link onClick={handleNav} to='skills' smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li className="py-4 text-4xl">
                        <Link onClick={handleNav} to='projects' smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li className="py-4 text-4xl">
                        <Link onClick={handleNav} to='contact' smooth={true} duration={500}>Contact</Link>
                    </li>
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
                            href="mailto:erinczarnecki1@gmail.com">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>

                    {/* RESUME */}
                    <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-[#d5a021] rounded-r-full">
                        <a className="flex justify-between items-center w-full text-gray-100"
                            href="https://drive.google.com/file/d/1udDmVaFEhtzXom1L77BgFodycEcQOw2H/view?usp=sharing" target="_blank" rel="noreferrer">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>


                </ul>
            </div>
        </div >
    )
}

export default Navbar;
