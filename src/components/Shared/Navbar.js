import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar px-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Item 1</Link></li>
                            <li><Link to="/">Item 1</Link></li>
                            <li><Link to="/">Item 1</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl uppercase font-black text-primary">Md Warej Ali</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-bold">
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/contact">CONTACT</NavLink></li>
                        <li><NavLink to="/about">ABOUT ME</NavLink></li>
                        <li><NavLink to="/blog">BLOGS</NavLink></li>
                        <li><a href="https://drive.google.com/file/d/1IwCmB17840fFmXv23bQL88CUkSns94GH/view?usp=sharing" target="_blank">RESUME</a></li>
                        <li><a href="https://waraj.com" target="_blank">WEBSITE</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;