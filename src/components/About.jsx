import React from 'react';
import ErinImg from '../images/Erin.jpeg';
const About = () => {
    return (
        <div name="about" className="w-full h-screen text-gray-200 bg-[#0a192f]">

            <div className="flex flex-col justify-center items-center w-full">
                <div className="max-w-[1000px] w-full h-full px-4 grid grid-cols-2 gap-8">
                    <div className="md:text-right pb-10 pl-4">
                        <p className="text-3xl sm:text-5xl font-bold inline border-b-4 border-pink-600">
                            About
                        </p>
                    </div>
                </div>

                {/* About Info Cols */}
                <div className="max-w-[1000px] w-full h-full px-4 grid md:grid-cols-2 gap-8">
                    <div className="">
                        <div className="text-2xl font-bold sm:text-3xl sm:text-left mb-3">
                            <p className="px-4 mb-6 text-pink-400">Hi, I'm Erin!</p>
                        </div>
                        <div className=" px-4 text-gray-300 max-w-[95%] md:max-w-[100%]">
                            <p className="">
                                I am passionate about building software that improves the planet and lives of those around me.
                            </p>
                        </div>
                        <div className="px-4 mt-5 text-gray-300 max-w-[95%] md:max-w-[100%]">
                            <p>
                                I started coding as a hobby +5 years ago and fell in love with the challenges and ever-changing nature of technology! Recently completed a rigorous Java full-stack web developer bootcamp.
                            </p>
                        </div>
                        <div className="px-4 mt-5 text-gray-300 max-w-[95%] md:max-w-[100%]">
                            <p>
                                I love the process of learning new skills and watching my work come to life.
                            </p>
                        </div>
                        <div className="px-4 mt-5  text-gray-300 max-w-[95%] md:max-w-[100%]">
                            <p>
                                Reader, painter, knitter, baker, outdoor-enthusiast, animal-lover, and world traveler.
                                </p>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-start px-[8%] sm:px-auto sm:justify-center md:items-center ">
                        <img src={ErinImg} alt="Erin Czarnecki" className="w-[90%] max-w-[350px] md:max-w-[90%]" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
