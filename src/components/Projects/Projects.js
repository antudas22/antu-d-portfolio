import React from 'react';
import lawyerPoint from '../../assets/lawyer-point-thumbnail.png';
import recipeFinder from '../../assets/recipe-finder.png';
import programOfOperation from '../../assets/todos-app.png';

const Projects = () => {
    return (
        <div name='projects'>
            <h2 className='text-3xl my-10 ml-4'>My Best Projects</h2>
            <div className="grid gap-10 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">

                <div className="card card-compact bg-[#1D4786] shadow-xl">
                    <figure><img src={lawyerPoint} alt="thumbnail" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lawyer Point</h2>
                        <p>Through th app users can reserve the appointment of the lawyer according to the problems.</p>
                        <div className="card-actions justify-end">
                        <button className="btn">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-[#1D4786] shadow-xl">
                    <figure><img src={recipeFinder} alt="thumbnail" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Recipe Finder</h2>
                        <p>Favorite recipe finder app.</p>
                        <div className="card-actions justify-end">
                        <button className="btn">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-[#1D4786] shadow-xl">
                    <figure><img src={programOfOperation} alt="thumbnail" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Program Of Operation</h2>
                        <p>A simple to-do app with add, edit and remove functionality.</p>
                        <div className="card-actions justify-end">
                        <button className="btn">View More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;