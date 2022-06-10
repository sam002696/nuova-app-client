import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../Images/Footer/logo.png'
const HeaderNavbar = () => {
    return (
        <>
            <nav className="bg-[#F7F4FFB2] px-2 sm:px-4 py-2.5 ">
                <div className="container flex flex-wrap items-center mx-auto justify-around">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img src={logo} className="mr-2 h-6 w-6" alt="Nuova Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">Nuova</span>
                    </a>
                    <div className="flex items-center space-x-12">
                        <div className="hidden justify-between items-center w-full md:flex md:w-auto" id="mobile-menu-4">
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <Link to='/home' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 " aria-current="page">Compare</Link>
                                </li>
                                <li>
                                    <Link to='/home' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ">About Us</Link>
                                </li>
                                <li>
                                    <Link to='/home' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ">Guides</Link>
                                </li>
                                <li>
                                    <Link to='/home' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <button type="button" className="text-white text-base bg-[#BD8472] px-6 py-2 text-center rounded">Log In</button>
                    </div>

                </div>
            </nav>
        </>
    );
};

export default HeaderNavbar;