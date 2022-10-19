import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">

            {/* Container */}
            <div className="max-w-[1000px] px-12 m-auto flex flex-col justify-center h-full ml-10px" >
                <p className="text-pink-600 text-xl font-semibold sm:4xl px-4">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] px-3">Erin Czarnecki</h1>
                <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0] pl-3">I'm a Full Stack Developer</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px] text-2xl sm:4xl px-3">Focused on building responsive web applications that deliver a positive user experience</p>
                <div className="px-3">
                    <Link to="projects" smooth={true} duration={700}>
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center text-xl max-w-[800px] hover:bg-pink-600 hover:border-pink-600">View Coding Projects
                    <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-2" />
                        </span>
                    </button>
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default Home
