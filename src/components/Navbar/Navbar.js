import React from 'react';
import Scroll from 'react-scroll';
import { HiArrowDownTray } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Navbar = () => {

    let ScrollLink = Scroll.Link;


    return (
        <div className="navbar my-3">
  <div className="navbar-start mx-2">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content gap-1 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><ScrollLink to="skills" spy={true} smooth={true} duration={1000}>Skills</ScrollLink></li>
        <li><ScrollLink to="projects" spy={true} smooth={true} duration={1000}>Projects</ScrollLink></li>
        <li><ScrollLink to="contact" spy={true} smooth={true} duration={1000}>Contact</ScrollLink></li>
        <li><ScrollLink to="about" spy={true} smooth={true} duration={1000}>About</ScrollLink></li>
      </ul>
    </div>
    <Link to="/">
        <h2 className='text-3xl font-bold'><span className='text-yellow-700'>Antu</span> D.</h2>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-1">
    <li><Link to="/">Home</Link></li>
        <li><ScrollLink to="skills" spy={true} smooth={true} duration={1000}>Skills</ScrollLink></li>
        <li><ScrollLink to="projects" spy={true} smooth={true} duration={1000}>Projects</ScrollLink></li>
        <li><ScrollLink to="contact" spy={true} smooth={true} duration={1000}>Contact</ScrollLink></li>
        <li><ScrollLink to="about" spy={true} smooth={true} duration={1000}>About</ScrollLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='' alt="" className="btn mr-2 text-white">Resume <HiArrowDownTray className='ml-2' /></Link>
  </div>
</div>
    );
};

export default Navbar;