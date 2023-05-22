import React from 'react';

const Skills = () => {
    return (
        <div name="skills">
            <h3 className='text-3xl mt-10 mb-16 ml-4'>My Technical Skills</h3>
            <div className='grid gap-10 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className="card w-72 lg:w-96 bg-[#1D4786] shadow-xl duration-700 hover:bg-opacity-80 hover:scale-95">
                    <div className="card-body">
                        <h2 className="card-title">Front-end Development</h2>
                        <ul className='grid grid-cols-2 gap-1 mt-2'>
                            <li><p># HTML 5</p></li>
                            <li><p># CSS 3</p></li>
                            <li><p># Tailwind CSS</p></li>
                            <li><p># daisy UI</p></li>
                            <li><p># Bootstrap</p></li>
                            <li><p># React Js</p></li>
                        </ul>
                    </div>
                </div>
                <div className="card w-72 lg:w-96 bg-[#1D4786] shadow-xl duration-700 hover:bg-opacity-80 hover:scale-95">
                    <div className="card-body">
                        <h2 className="card-title">Back-end Development</h2>
                        <ul className='grid grid-cols-2 gap-1 mt-2'>
                            <li><p># Firebase</p></li>
                            <li><p># Node Js</p></li>
                            <li><p># Express Js</p></li>
                            <li><p># MongoDB</p></li>
                            <li><p># JSON Web Token</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;