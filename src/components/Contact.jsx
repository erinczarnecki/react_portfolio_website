import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='w-full'>
            {/* Contact Container */}
            <div className=' bg-[#0a192f] flex justify-center items-center p-4 sm:h-screen'>
                <form method='POST' action="https://getform.io/f/97fa2e67-ad0f-4777-ad9d-91c5d361e6c5" className='flex flex-col max-w-[600px] w-full'>
                    <div className='pt-10 sm:pb-8'>
                        <p className='text-3xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact</p>
                        <p className='text-gray-300 py-4 text-xl'>Submit the form below or shoot me an email at <span className="italic tracking-wide text-pink-600 hover:text-pink-300 hover:bold" ><a href="mailto:erinczarnecki1@gmail.com"> erinczarnecki1@gmail.com</a></span>
                        </p>
                    </div>
                    <input className='bg-[#ccd6f6] p-2 placeholder-black' type="text" placeholder='Name' name='name' required />
                    <input className='my-4 p-2 bg-[#ccd6f6] placeholder-black' type="email" placeholder='Email' name='email' required />
                    <textarea className='bg-[#ccd6f6] placeholder-black p-2' name="message" rows="10" placeholder='Message' required></textarea>
                    <button className='text-white font-semibold tracking-wider border-2 hover:bg-pink-600 hover:border-pink-600 hover:ease-in hover:duration-300 px-4 py-3 my-8 mx-auto flex items-center' target="_blank" rel="noreferrer" >Send Message</button>
                </form>
            </div>

        </div >
    );
};

export default Contact
