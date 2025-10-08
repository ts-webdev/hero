import React from 'react';
import logo from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
        <Link to={'/'}><li className='hover:bg-gray-100 py-2 px-4 rounded-sm'>Home</li></Link>
        <Link to={'/apps'}><li className='hover:bg-gray-100 py-2 px-4 rounded-sm'>Apps</li></Link>
        <Link to={'/installation'}><li className='hover:bg-gray-100 py-2 px-4 rounded-sm'>Installation</li></Link>
    </>
    return (
        <header className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-transparent bg-clip-text bg-linear-120 from-[#632ee3] to-[#9f62f2]">
                        <img className='w-[2rem]' src={logo} alt="" />
                        HERO.IO
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-linear-120 from-[#632ee3] to-[#9f62f2] text-white flex items-center">
                        <FaGithub size={'1.2rem'}/>
                        Contribute
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;