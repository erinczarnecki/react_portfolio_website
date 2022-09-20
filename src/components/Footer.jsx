import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="p-4 sm:p-6 bg-[#0a192f]">
                <hr className="mb-6 sm:mx-auto border-gray-700 lg:my-8" />
                <div>
                    <div>
                        <div>
                            <h2 className="flex flex-row justify-center items-center mb-2 text-sm font-semibold uppercase text-pink-500 text-center">Connect with Me</h2>
                            <ul className="text-gray-300 flex flex-row justify-between items-center">

                                <li>
                                    <a className="text-gray-300  hover:text-pink-600 hover:font-bold"
                                        href="https://github.com/erinczarnecki" rel="noreferrer" target="_blank" >Github</a>
                                </li>
                                <li>
                                    <a className="text-gray-300  hover:font-bold hover:text-pink-600"
                                        href="https://linkedin.com/in/erin-czarnecki" rel="noreferrer" target="_blank" >LinkedIn</a>
                                </li>

                                <li>
                                    <a className="text-gray-300  hover:font-bold hover:text-pink-600"
                                        href="mailto:erinczarnecki1@gmail.com">
                                        Email
                        </a>
                                </li>

                                {/* RESUME */}
                                <li>
                                    <a className="text-gray-300  hover:font-bold hover:text-pink-600"
                                        href="https://drive.google.com/file/d/129DVSph6TXsoDMT1MCoYnLBCq6Z6Uge2/view?usp=sharing" target="_blank" rel="noreferrer">
                                        Resume
                        </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>


                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Erin Czarnecki - All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
