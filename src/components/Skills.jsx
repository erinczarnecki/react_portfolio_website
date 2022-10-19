import React from 'react';
import HTML from '../images/icons/html.png';
import CSS from '../images/icons/css.png';
import JavaScript from '../images/icons/javascript.png';
import ReactImg from '../images/icons/react.png';
import Node from '../images/icons/node.png';
import AWS from '../images/icons/aws.png';
import Tailwind from '../images/icons/tailwind.png';
import Python from "../images/icons/python.png";
import Java from "../images/icons/java.png";
import PostgreSQL from "../images/icons/postgresql.png";
import Spring from "../images/icons/spring.png";
import Bootstrap from "../images/icons/bootstrap.png";



const Skills = () => {
    return (
        <div name="skills" className="w-full md:h-screen bg-[#0a192f] text-gray-200 px-4">
            {/* Skills Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

                <div className="pb-4 flex justify-left sm:justify-center">
                    <p className="text-3xl sm:text-5xl font-bold inline border-b-4 border-pink-600">Skills</p>
                </div>

                {/* Frontend */}
                <div>
                    <p className="text-xl sm:text-2xl font-semibold text-gray-300 py-4 flex sm:justify-center">Frontend</p>
                </div>

                {/* Frontend Icons */}
                <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 text-center sm:py-4 md:px-10">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-pink-600">
                        <img className='w-10 mx-auto' src={HTML} alt="HTML icon" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-pink-600">
                        <img className='w-10 mx-auto' src={CSS} alt="CSS icon" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-pink-600">
                        <img className='w-10 mx-auto' src={JavaScript} alt="JavaScript icon" />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-pink-600">
                        <img className='w-10 mx-auto' src={ReactImg} alt="React icon" />
                        <p className="my-4">REACT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-pink-600">
                        <img className='w-10 mx-auto' src={Node} alt="Node JS icon" />
                        <p className="my-4">NODE JS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-pink-600">
                        <img className='w-10 mx-auto' src={Tailwind} alt="Tailwind CSS icon" />
                        <p className="my-4">TailwindCSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-pink-600">
                        <img className='w-10 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                        <p className="my-4">Bootstrap</p>
                    </div>
                </div>

                {/* Backend */}
                <div>
                    <p className="text-xl sm:text-2xl text-gray-300 font-semibold py-4 flex sm:justify-center">Backend</p>                </div>

                {/* Backend Icons */}
                <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 text-center sm:py-4 md:px-10">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-pink-600">
                        <img className='w-10 mx-auto' src={Java} alt="Java icon" />
                        <p className="my-1">Java</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-pink-600">
                        <img className='w-10 mx-auto' src={Spring} alt="Spring icon" />
                        <p className="my-4">Spring</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-pink-600">
                        <img className='w-10 mx-auto' src={PostgreSQL} alt="PostgreSQL icon" />
                        <p className="my-4">PostgreSQL</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-pink-600">
                        <img className='w-10 mx-auto' src={Python} alt="Python icon" />
                        <p className="my-4">Python</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:shadow-pink-600">
                        <img className='w-10 mx-auto' src={AWS} alt="AWS icon" />
                        <p className="my-4">AWS</p>
                    </div>
                </div>
                {/* Tools & Methodologies */}
                <div>
                    <p className="text-xl sm:text-2xl font-semibold text-gray-300 py-4 mt-2 flex sm:justify-center">Tools & Methodologies</p>
                </div>
                <div className="text-xl flex flex-row items-center">
                    <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 py-2 px-4 md:px-12 sm:px-8 list-disc" >
                        <li className="sm:py-4">IntelliJ</li>
                        <li className="sm:py-4">GitHub</li>
                        <li className="sm:py-4">VS Code</li>
                        <li className="sm:py-4">Agile</li>
                        <li className="sm:py-4">CI/CD</li>
                        <li className="sm:py-4">Microservices</li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Skills
