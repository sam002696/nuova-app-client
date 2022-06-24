import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../Images/Footer/facebook.png';
import twitter from '../../../Images/Footer/twitter.png';
import instagram from '../../../Images/Footer/instagram.png';
import M from '../../../Images/Footer/M.png';
import logo from '../../../Images/Footer/logo.png'
import elipse21 from '../../../Images/Footer/Ellipse 21.png'
import elipse22 from '../../../Images/Footer/Ellipse 22.png'
import elipse23 from '../../../Images/Footer/Ellipse 23.png'
import elipse24 from '../../../Images/Footer/Ellipse 24.png'
import cross from '../../../Images/Page5/cross.png'
import tickmark from '../../../Images/Page5/tickmark.png'
const Different = () => {
    const people = [
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
        // More people...
    ]
    return (
        <>
            <section className='backdrop-filter bg-gradient-to-r from-rose-50 via-white to-sky-50'>
                <div className="container mx-auto sm:px-6 lg:px-8 pt-10 pb-5 py-8">
                    <div className='text-center'>
                        <p className='text-[#162A43] font-sans font-semibold text-3xl'>
                            Why Are we Different
                        </p>
                    </div>
                </div>
            </section>



            <section className='backdrop-filter bg-gradient-to-r from-rose-50 via-white to-sky-50'>
                <div className='max-w-full pt-10'>

                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 ">

                            <thead >
                                <tr>
                                    <th scope="col" class="px-6-custom py-3">
                                        <span className='border-2 border-[#162A43] p-3 text-[#000000] font-medium'>
                                            Proprietary Platform
                                        </span>
                                    </th>
                                    <th class="px-6-custom py-3 text-[#000000] font-medium">
                                        High Street
                                    </th>
                                    <th scope="col" class="px-6-custom py-3 text-[#000000] font-medium ">
                                        Nuova
                                    </th>

                                </tr>
                            </thead>
                            <div class="text-[#BD8472] font-semibold text-lg mt-5">
                                <tr>
                                    <th scope="col" class="px-6-custom py-3">
                                        App Suite
                                    </th>

                                </tr>
                            </div>
                            <tbody>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">
                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Mobile Apps
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img className='' src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>

                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Web Apps
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Real Time Updates
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                {/* Payments and Financials */}
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom pt-7 pb-3 text-[#BD8472] font-semibold text-lg">
                                        Payments & Financials
                                    </td>


                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Real-time Statements
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Unit Drill-down
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Portfolio Drill-down
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        CSV Exports
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Contractor Payments
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                {/* Reporting Analytics */}
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom pt-7 pb-3 text-[#BD8472] font-semibold text-lg">
                                        Reporting & Analytics
                                    </td>


                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Yearly Performance
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Portfolio Metrics
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        RevPAU
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                {/* Maintenance Management */}
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom pt-7 pb-3 text-[#BD8472] font-semibold text-lg">
                                        Maintenance Management
                                    </td>


                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Raise Jobs
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Track Jobs
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Competitive Quotes
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                {/* Maintenance Management */}
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom pt-7 pb-3 text-[#BD8472] font-semibold text-lg">
                                        Managed Service
                                    </td>


                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Integrated Team
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        Sophisticated Marketing
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                                <tr class=" odd:bg-[#F5F5F5] even:bg-white">

                                    <td class="px-6-custom py-4 text-[#162A43] font-normal">
                                        In-app referencing
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={cross} alt="" />
                                    </td>
                                    <td class="px-6-custom py-4">
                                        <img src={tickmark} alt="" />
                                    </td>

                                </tr>
                            </tbody>


                        </table>
                    </div>

                </div>
            </section>

            <footer class="py-28 bg-white relative">
                <img className='absolute right-0' src={elipse22} alt="" />
                <section className='container px-36'>
                    <div className='grid grid-cols-4 gap-x-14'>
                        <div className=''>
                            <div className='space-y-10'>
                                <h1 className=' font-semibold text-2xl font-sans text-[#162A43] flex items-center'> <img className='mr-2 w-7 h-7' src={logo} alt="Nuova App" /> Nuova</h1>
                                <div className='space-y-3'>
                                    <p className='font-medium text-lg text-[#162A43]'>Office Headquaters </p>
                                    <p>
                                        <span className=' font-normal text-lg text-[#000000]'>3755 Commercial St SE Salem,
                                            Corner with Sunny Boulevard, 37557,
                                            Sydney, Australia</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='space-y-10'>
                                <h1 className=' font-medium text-xl font-sans text-[#162A43]'>Company</h1>

                                <ul className=' space-y-2'>
                                    <li>
                                        <Link to='/home' className=' font-normal text-lg text-[#000000]'>About</Link>
                                    </li>
                                    <li>
                                        <Link to='/home' className=' font-normal text-lg text-[#000000]'>Site Map</Link>
                                    </li>
                                    <li>
                                        <Link to='/home' className=' font-normal text-lg text-[#000000]'>Support Center</Link>
                                    </li>
                                    <li>
                                        <Link to='/home' className=' font-normal text-lg text-[#000000]'>Terms Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to='/home' className=' font-normal text-lg text-[#000000]'>Submit Listing</Link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <div className=''>
                            <div className='space-y-10'>
                                <h1 className=' font-medium text-xl font-sans text-[#162A43]'>Quick Links</h1>

                                <ul className=' space-y-2'>
                                    <li>
                                        <Link to='/home' className=' font-normal text-lg text-[#000000]'>Rentals</Link>
                                    </li>
                                    <li>
                                        <Link to='/home' className=' font-normal text-lg text-[#000000]'>Sales</Link>
                                    </li>
                                    <li>
                                        <Link to='/home' className=' font-normal text-lg text-[#000000]'>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to='/home' className=' font-normal text-lg text-[#000000]'>Terms Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to='/home' className=' font-normal text-lg text-[#000000]'>Our blog</Link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <div className='relative'>
                            <div className='space-y-10'>
                                <h1 className=' font-medium text-xl font-sans text-[#162A43]'>About us</h1>

                                <p className=' font-normal text-lg text-[#000000]'>We are the real estate agency in Sydney, with agents available to answer any question 24/7.</p>
                                <img className='absolute top-0 right-0 ' src={elipse24} alt="" />
                                <div className='flex space-x-4'>
                                    <img src={facebook} alt="" />
                                    <img src={twitter} alt="" />
                                    <img src={instagram} alt="" />
                                    <img src={M} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className='container flex justify-evenly mt-16 relative'>
                    <p className=' font-normal text-lg text-[#000000]'>
                        Buyer’ Choice
                    </p>
                    <p className=' font-normal text-lg text-[#000000]'>
                        All rights reserved by ©Divine Creative 2021.
                    </p>
                    <div className='flex space-x-5'>
                        <p className=' font-normal text-lg text-[#000000]'>
                            privacy policy
                        </p>
                        <p className=' font-normal text-lg text-[#000000]'>
                            Terms of use
                        </p>
                        <p className=' font-normal text-lg text-[#000000]'>
                            Demo
                        </p>
                    </div>
                    <img className='mix-blend-multiply absolute right-0 -top-28' src={elipse21} alt="" />
                    <img className='mix-blend-multiply absolute right-36' src={elipse23} alt="" />
                </section>
            </footer>
        </>
    );
};

export default Different;