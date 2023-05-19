import React from 'react';
import antu from '../../assets/antu.jpg'
import { Link } from 'react-router-dom';
import { HiArrowDownTray } from 'react-icons/hi2';

const About = () => {
    return (
        <div name="about">
            <h3 className='text-3xl mt-10 mb-16 ml-4'>About Me</h3>
            <div className="hero">
            <div className="hero-content gap-10 lg:gap-40 flex-col lg:flex-row-reverse">
                <img className='rounded-2xl w-2/3 lg:w-1/4'  src={antu} alt='' />
                <div className='lg:w-1/2'>
                <h1 className="text-3xl font-bold">Antu Das</h1>
               <div>
               <p className="py-6">A passionate web developer have acquired a solid understanding of HTML, CSS, and JavaScript, along with frameworks and libraries like React, Tailwind CSS, daisyUI and Bootstrap.I am dedicated to staying up-to-date with the latest industry trends and best practices to create innovative and efficient web solutions.</p>
                <p>I am driven by a constant desire to learn and grow, and I enjoy tackling new challenges that push the boundaries of my knowledge. In addition to web development, I also know few things about back-end. Already I have done a project with a little bit of back-end.</p>
               </div>
               <Link to='' alt="" className="btn mt-6 text-white">Download CV <HiArrowDownTray className='ml-2' /></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;