import React from 'react';
import ReactAppImg from '../images/project-images/ReactAppImg.png';
import HuddleImg from '../images/project-images/HuddleImg.png'
import PreviewImg from '../images/project-images/PreviewImg.png'

const Projects = () => {
    return (
        <div name='projects' className='w-full sm:h-screen text-gray-300 bg-[#0a192f]'>

            <div className='max-w-[1000px] sm:h-screen mx-auto p-4 flex flex-col justify-center w-full h-full'>

                {/*  flex justify-left sm:justify-center" */}
                <div className='pb-8 sm:text-center'>
                    <p className='text-3xl md:text-5xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                    <p className='py-6 text-xl sm:text-2xl'>Check out some of my recent work</p>
                </div>


                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


                    {/* Project 1*/}
                    <div
                        style={{ backgroundImage: `url(${ReactAppImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application</span>

                            {/* App Link */}
                            <div className='pt-8 text-center'>
                                <a href='https://erinczar-responsive-react-css-modules.netlify.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#0a192f] hover:text-white'>
                                        Demo</button>
                                </a>

                                {/* GitHub Link */}
                                <a href='https://github.com/erinczarnecki/Responsive_React_Website-CSS_Modules' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#0a192f] hover:text-white'>
                                        Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                    {/* Project 2 */}
                    <div
                        style={{ backgroundImage: `url(${HuddleImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' id="huddle-img">

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Huddle Landing Page</span>
                            <div className='pt-8 text-center'>
                                <a href='https://erinczarnecki.github.io/FEM_Huddle-Landing-Page/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#0a192f] hover:text-white'>
                                        Demo</button>
                                </a>
                                <a href='https://github.com/erinczarnecki/FEM_Huddle-Landing-Page' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#0a192f] hover:text-white'>
                                        Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                    {/* Project 3 */}
                    <div
                        style={{ backgroundImage: `url(${PreviewImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider text-center'>
                                Product Preview Card</span>
                            <div className='pt-8 text-center'>
                                <a href='https://erinczarnecki.github.io/FEM_Product-Preview-Card/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#0a192f] hover:text-white'>
                                        Demo</button>
                                </a>
                                <a href='https://github.com/erinczarnecki/FEM_Product-Preview-Card' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#0a192f] hover:text-white'>
                                        Code</button>
                                </a>
                            </div>
                        </div>
                    </div>



                    {/* Project 4 */}
                    {/* <div
                        style={{ backgroundImage: `url(${ReactAppImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> */}

                    {/* Hover Effects */}
                    {/* <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application</span>
                            <div className='pt-8 text-center'>
                                <a href='https://erinczar-responsive-react-css-modules.netlify.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo</button>
                                </a>
                                <a href='https://github.com/erinczarnecki/Responsive_React_Website-CSS_Modules' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code</button>
                                </a>
                            </div>
                        </div>
                    </div> */}


                    {/* Project 5 */}
                    {/* <div
                        style={{ backgroundImage: `url(${ReactAppImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> */}

                    {/* Hover Effects
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application</span>
                            <div className='pt-8 text-center'>
                                <a href='https://erinczar-responsive-react-css-modules.netlify.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo</button>
                                </a>
                                <a href='https://github.com/erinczarnecki/Responsive_React_Website-CSS_Modules' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code</button>
                                </a>
                            </div>
                        </div>
                    </div> */}



                    {/* Project 6 */}
                    {/* <div
                        style={{ backgroundImage: `url(${ReactAppImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> */}

                    {/* Hover Effects
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application</span>
                            <div className='pt-8 text-center'>
                                <a href='https://erinczar-responsive-react-css-modules.netlify.app/' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo</button>
                                </a>
                                <a href='https://github.com/erinczarnecki/Responsive_React_Website-CSS_Modules' target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code</button>
                                </a>
                            </div>
                        </div>
                    </div> */}





                </div>
            </div>
        </div>
    );
};

export default Projects
