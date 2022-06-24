import React from 'react';
import backgroundImage from '../../../Images/Page2/Banner/background.png'
import camera from '../../../Images/Page2/Banner/camera.png'
import rectangle from '../../../Images/Page2/Banner/Rectangle 4641.png'
import logoblue from '../../../Images/Page2/Banner/logoblue.png'
// import mobile_message from '../../../Images/Page2/Banner/mobile_message.png'
import scribbles from '../../../Images/Banner/scribbles-scribbles-20 1.png'
import union from '../../../Images/Page2/Banner/Union.png'
import phoneBgScreen from '../../../Images/Page2/Banner/phone_group.png'
import double_icon from '../../../Images/Page2/Banner/double_icon.png'
import box_icon from '../../../Images/Page2/Banner/box_icon.png'
import userIcon from '../../../Images/Page2/Banner/user.png'
import manPhoto from '../../../Images/Page2/Banner/manPhoto.png'
import property from '../../../Images/Page2/Banner/property.png'
import switching from '../../../Images/Page2/Banner/switching.png'
import movers from '../../../Images/Page2/Banner/movers.png'
import report from '../../../Images/Page2/Banner/report.png'
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
const Banner = () => {
    return (
        <>
            <div className='relative max-w-full'>

                {/* Banner Start */}
                <img className='absolute' src={backgroundImage} alt="" />
                <div className="absolute">

                    <div className='grid grid-cols-4 gap-x-5 lg:px-20' >
                        <div className='space-y-10 py-10 col-span-2 mt-10'>
                            <div className='text-[#162A43] banner-text font-medium font-sans '>
                                Renting Made Easy With Nuova
                            </div>
                            <p className='text-[#565151] font-normal text-lg'>
                                From renting a home in just a few clicks to simple and <br /> effective property management that gets jobs done, <br />Herddle tenants benefit
                            </p>
                            <div className='flex space-x-5'>
                                <button className='text-white text-base bg-[#BD8472] px-6 py-3 text-center rounded font-semibold'>Talk To Us</button>
                            </div>


                        </div>
                        <div className='col-span-1'>
                            <div>
                                {/* <div className=' bg-[#FFFFFF] border-none px-1 py-10 rounded-2xl my-24 shadow-md'>
                                    <p className=' font-medium text-2xl text-center text-[#BD8573]'>
                                        Make informed
                                    </p>
                                </div> */}
                                <div>
                                    <img className='mt-10' src={property} alt="" />
                                </div>
                                <div>
                                    <img className='' src={switching} alt="" />
                                </div>
                                {/* <div className=' bg-[#FFFFFF] border-none px-1 py-10 rounded-2xl my-24 shadow-md '>

                                    <p className=' font-medium text-2xl text-center text-[#BD8573]'>
                                        Make informed
                                    </p>
                                </div> */}
                            </div>



                        </div>
                        <div className='col-span-1'>
                            <div>
                                <div>
                                    <img className='mt-5' src={movers} alt="" />
                                </div>
                                <div>
                                    <img className='' src={report} alt="" />
                                </div>
                                {/* <div className=' bg-[#FFFFFF] border-none px-1 py-10 rounded-2xl my-24 shadow-md '>

                                    <p className=' font-medium text-2xl text-center text-[#BD8573]'>
                                        Make informed
                                    </p>
                                </div>
                                <div className=' bg-[#FFFFFF] border-none px-1 py-10 rounded-2xl my-24 shadow-md '>

                                    <p className=' font-medium text-2xl text-center text-[#BD8573]'>
                                        Make informed
                                    </p>
                                </div> */}
                            </div>



                        </div>
                    </div>

                    {/* Banner Extra Start */}

                    <div className='max-w-7xl mx-auto px-4 sm:px-6  mt-20 lg:px-20'>
                        <div>
                            <p className='text-center font-semibold text-[#162A43] text-2xl'>Renting made easy with Nuova</p>
                        </div>

                        <div className='grid grid-cols-4 mt-8 gap-x-5 px-5 relative' >
                            <img className='absolute' src={rectangle} alt="" />

                            <div className='border-0 shadow-lg rounded-md space-y-3 py-10 z-10 mt-4 bg-white'>

                                <img className='mx-auto border p-5 rounded-3xl bg-[#E7EAFF]' src={camera} alt="" />
                                <p className=' text-[#162A43] font-sans font-bold text-center'>
                                    Transparent Viewings
                                </p>
                            </div>
                            <div className='border-0 shadow-lg rounded-md space-y-3 py-10 z-10 mt-4 bg-white'>

                                <img className='mx-auto border p-5 rounded-3xl bg-[#E7EAFF]' src={logoblue} alt="" />
                                <p className=' text-[#162A43] font-sans font-bold text-center'>
                                    Seamless Renting
                                </p>
                            </div>
                            <div className='border-0 shadow-lg rounded-md space-y-3 py-10 z-10 mt-4 bg-white'>

                                <img className='mx-auto border p-5  rounded-3xl bg-[#E7EAFF]' src={camera} alt="" />
                                <p className=' text-[#162A43] font-sans font-bold text-center'>
                                    Simple Management
                                </p>
                            </div>
                            <div className='border-0 shadow-lg rounded-md space-y-3 py-10 z-10 mt-4 bg-white'>

                                <img className='mx-auto border p-5  rounded-3xl bg-[#E7EAFF]' src={userIcon} alt="" />
                                <p className=' text-[#162A43] font-sans font-bold text-center'>
                                    Trouble-free Living
                                </p>
                            </div>

                        </div>



                    </div>

                    {/* Banner Extra End */}

                    {/* Banner Extra One Start */}

                    <div className='grid grid-cols-4 gap-x-5 my-20 lg:px-20'>
                        <div className='space-y-10 py-10 col-span-2 mt-10'>
                            <div className='text-[#162A43] banner-text font-medium  font-sans '>
                                A property manager just for you
                            </div>
                            <p className='text-[#565151] font-normal text-lg'>
                                From renting a home in just a few clicks to simple <br /> and effective property management that gets <br />jobs done, Herddle tenants.
                            </p>



                        </div>
                        <div className='col-span-1'>
                            <div className='mt-10'>
                                <div>
                                    <img src={scribbles} alt="" />
                                </div>
                                <div className=' bg-[#FFFFFF] border-none px-1 py-3 rounded-md  shadow-xl shadow-[#E7EAFF]'>
                                    <div className='py-3 px-3 space-y-3'>
                                        <div className=' flex items-center'>
                                            <img className='mr-3 w-1/6' src={manPhoto} alt="" />
                                            <p className='font-medium text-lg text-[#000000]'>
                                                Amy king
                                            </p>
                                        </div>
                                        <p className='text-[#565656] text-sm'>
                                            From renting a home in just a few clicks to simple and effective.
                                        </p>
                                        <p className='text-[#AFAFAF] text-sm'>
                                            Today.2:28pm
                                        </p>
                                        <button className='text-white text-base bg-[#BD8472] px-6 py-3 text-center rounded w-full font-semibold'>Get Started</button>
                                    </div>


                                </div>

                            </div>



                        </div>
                        <div className='col-span-1 -ml-10'>
                            <div className='mt-20'>
                                <div className=' bg-[#FFFFFF] border-none px-1 py-3 rounded-md shadow-xl shadow-[#E7EAFF]'>
                                    <div className='py-3 px-3 space-y-3'>
                                        <div className=' flex items-center'>
                                            <img className='mr-3 w-1/6' src={manPhoto} alt="" />
                                            <p className='font-medium text-lg text-[#000000]'>
                                                Amy king
                                            </p>
                                        </div>
                                        <p className='text-[#565656] text-sm'>
                                            From renting a home in just a few clicks to simple and effective.
                                        </p>
                                        <p className='text-[#AFAFAF] text-sm'>
                                            Today.2:28pm
                                        </p>
                                    </div>


                                </div>

                            </div>

                            <div>
                                <img className='mx-auto' src={scribbles} alt="" />
                            </div>

                        </div>
                    </div>

                    {/* Banner Extra One End */}
                    <div className='bg-[#FAFAFA] max-w-full'>
                        <div className='lg:px-20 '>
                            <div className='grid grid-cols-4 gap-x-5 mt-10'>
                                <div className='space-y-10 py-10 col-span-2 mt-20'>
                                    <div className='text-[#162A43] banner-text font-medium  font-sans '>
                                        Seamless move-in <br /> and move-outs
                                    </div>
                                    <p className='text-[#565151] font-normal w-1/2 text-justify tracking-tight text-lg'>
                                        Whether you need help finding removal people, switching utilities or simply need information about your new
                                    </p>



                                </div>
                                <div className='col-span-1'>
                                    <div className='mt-10'>
                                        <div>
                                            <img className='mx-auto mb-5' src={union} alt="" />
                                        </div>
                                        <div className=' bg-[#FFFFFF] border-none px-1 py-3 rounded-md  shadow-xl shadow-[#E7EAFF]'>
                                            <div className='py-3 px-3 space-y-3 '>
                                                <div className=''>
                                                    <img className='mx-auto' src={double_icon} alt="" />

                                                </div>
                                                <p className='text-[#162A43] text-sm text-center'>
                                                    Recommendes Untillties
                                                </p>
                                                <p className='text-[#162A43] text-lg font-medium text-center'>
                                                    Untility Swiching Service
                                                </p>
                                                <button className='text-white text-base bg-[#BD8472] px-6 py-3 text-center rounded w-full font-semibold'>Change contract</button>
                                            </div>


                                        </div>

                                    </div>



                                </div>
                                <div className='col-span-1 '>
                                    <div className='mt-20'>
                                        <div className=' bg-[#FFFFFF] border-none px-1 py-3 rounded-md  shadow-xl shadow-[#E7EAFF]'>
                                            <div className='py-3 px-3 space-y-3'>
                                                <div className=''>
                                                    <img className='mx-auto' src={box_icon} alt="" />

                                                </div>
                                                <p className='text-[#162A43] text-sm text-center'>
                                                    Recommendes Untillties
                                                </p>
                                                <p className='text-[#162A43] text-lg font-medium text-center'>
                                                    Untility Swiching Service
                                                </p>
                                                <div className='text-[#BD8472] text-base border-2 border-[#BD8472] px-6 py-3  rounded w-full font-semibold flex justify-between'>
                                                    <span>
                                                        18 ARP
                                                    </span>
                                                    <span>
                                                        Move In
                                                    </span>
                                                </div>
                                            </div>


                                        </div>

                                    </div>

                                    <div>
                                        <img className='mx-auto mt-5' src={union} alt="" />
                                    </div>

                                </div>



                            </div>
                            <div className='grid grid-cols-2 gap-x-5 mt-24'>
                                <div className='space-y-10 py-10 col-span-1 mt-10'>
                                    <div className='text-[#162A43] banner-text font-medium  font-sans '>
                                        Report maintenance issues hassle free
                                    </div>
                                    <p className='text-[#565151] font-normal text-lg'>
                                        Use the Herddle app to report any maintenance issues.<br /> Take a photo, write a description and your property manager will <br /> take care of the rest.
                                    </p>



                                </div>
                                <div className='col-span-1'>
                                    <div className=''>
                                        <img className='mx-auto' src={phoneBgScreen} alt="" />

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <footer class="py-28 bg-[#FAFAFA]">
                        <img className='absolute right-0' src={elipse22} alt="" />
                        <section className='container px-16'>
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
                            {/* <img className='mix-blend-multiply absolute ' src={elipse21} alt="" />
                            <img className='mix-blend-multiply absolute right-36' src={elipse23} alt="" /> */}
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

                </div>
                {/* Banner End */}

            </div>


        </>
    );
};

export default Banner;