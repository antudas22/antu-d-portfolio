import React from 'react';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import About from '../About/About';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;