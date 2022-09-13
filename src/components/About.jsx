import React from 'react';

const About = () => {
    return (
        <div name="about" className="w-full h-screen text-gray-200 bg-[#0a192f]">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-pink-600">
                            About
                        </p>
                    </div>

                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="text-2xl inline font-bold sm:text-3xl sm:text-right ">
                        <p>Hi, I'm Erin, nice to meet you.</p>
                    </div>
                    <div className="">
                        <p className="text-xl sm:text-2xl text-gray-300">
                            I am passionate about building software that improves the planet and lives of those around me.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
