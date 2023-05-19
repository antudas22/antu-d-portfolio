import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/antu-banner.png';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className='flex-wrap lg:flex justify-around mt-6'>
        <div className='flex justify-center items-center w-full lg:w-3/6'>
            <img className='w-3/4 lg:w-11/12' src={banner} alt="" />
        </div>
            <div className='my-auto p-10 lg:p-0 text-start md:text-center lg:text-start'>
                <h2 className='text-4xl md:text-6xl lg:text-6xl font-bold my-5 w-full'>Hi! I'm Antu
                <span className='text-yellow-700'>
                <Typewriter
                        options={{
                            strings: ['Web Developer', 'React Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
                </h2>
                    
                <p className='mb-8 text-white'>I can develop websites with HTML5, CSS3, Tailwind CSS, daisy UI,<br/>Bootstrap, JavaScript, React, Firebase, Node Js, Express Js, MongoDB, JWT...</p>
                <Link className='btn text-white'>Hire Me</Link>
            </div>
        </div>
    );
};

export default Banner;