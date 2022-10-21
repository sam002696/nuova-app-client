import React from 'react';
import p3_bimg1 from '../../../Images/Page3/Banner/Page3 banner img1.png'
import p3_bimg2 from '../../../Images/Page3/Banner/Page3 banner img2.png'
import p3_bimg3 from '../../../Images/Page3/Banner/Page3 banner img3.png'
import p3_bimg4 from '../../../Images/Page3/Banner/Page3 banner img4.png'
import p3_bimg5 from '../../../Images/Page3/Banner/Page3 banner img5.png'

import p3_b2_img1 from '../../../Images/Page3/Banner2/Page3 banner2 img1.png'
import p3_b2_img2 from '../../../Images/Page3/Banner2/Page3 banner2 img2.png'
import p3_b2_img3 from '../../../Images/Page3/Banner2/Page3 banner2 img3.png'
import p3_b2_img4 from '../../../Images/Page3/Banner2/Page3 banner2 img4.png'

import p3_b3_img1 from '../../../Images/Page3/Banner3/Page3 banner3 img0.png'

import p3_b4_img1 from '../../../Images/Page3/Banner4/Page3 banner4 img1.png'

import p3_b5_img1 from '../../../Images/Page3/Banner5/Page3 banner5 img1.png'
import p3_b5_img2 from '../../../Images/Page3/Banner5/Page3 banner5 img2.png'
import p3_b5_img3 from '../../../Images/Page3/Banner5/Page3 banner5 img3.png'

import tickMark from '../../../Images/Pros/Vector.png'

const Banner = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}
                    <div className='grid grid-cols-4 gap-x-5' >
                        <div className='space-y-10 py-10 col-span-2 mt-20'>
                            <div className='text-[#162A43] banner-text font-medium font-sans '>
                                We have made being a landlord easy!
                            </div>
                            <p className='text-[#565151] font-normal text-lg'>
                                AT Nuova our mission is to simply the overall process of owing a rental property. Once you are signed up you will have access to the Nuova portal which will allow you to be able to manage all of your assets in one simple place.

                            </p>
                            <div className=''>
                                <button className='text-white text-base bg-[#BD8472] px-6 py-3 text-center rounded font-semibold'>Talk To Us</button>
                            </div>


                        </div>
                        <div className='col-span-1 relative -right-40'>
                            <div>

                                <div>
                                    <img className='mt-20' src={p3_bimg1} alt="" />
                                </div>
                                <div>
                                    <img className='mt-8' src={p3_bimg4} alt="" />
                                </div>

                            </div>



                        </div>
                        <div className='col-span-1 relative -right-40'>
                            <div className='relative'>
                                <div>
                                    <img className='mt-20' src={p3_bimg2} alt="" />
                                </div>
                                <div>
                                    <img className='mt-4' src={p3_bimg5} alt="" />
                                </div>
                                <div className='absolute top-28 -left-28 -z-20'>
                                    <img className='h-40' src={p3_bimg4} alt="" />
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>



            <div className="bg-[#FAFAFA] px-4 sm:px-6 lg:px-8 pb-20">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}
                    <div className='grid grid-cols-4' >

                        <div className='col-span-1 relative -left-40'>


                            <div>
                                <img className='mt-40' src={p3_b2_img1} alt="" />
                            </div>



                        </div>
                        <div className='col-span-1 relative -left-40'>

                            <div>
                                <img className='mt-20 -ml-8' src={p3_b2_img4} alt="" />
                            </div>



                        </div>

                        <div className='space-y-8 py-10 col-span-2 mt-20'>
                            <div className='text-[#162A43] banner-text font-medium font-sans '>
                                Single platform to monitor your assets
                            </div>
                            <p className='text-[#565151] font-normal text-lg'>
                                Herddle’s platform tracks maintenance, compliance, financials and performance to get full visibility of your portfolio

                            </p>
                            <ul className=' space-y-4'>
                                <li className='font-normal text-sm text-[#565151] flex items-center '>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> 24/7 access to your Herddle team
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> Dashboard to track rental income, invoices, utilisation and void periods
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> Secure document library stores compliance documents and triggers automatic renewals
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>


            </div>



            <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}
                    <div className='grid grid-cols-2 gap-x-12' >

                        <div className='space-y-8 py-10 col-span-1 mt-28'>
                            <div className='text-[#162A43] banner-text font-medium font-sans '>
                                Increase profitability of your portfolio
                            </div>
                            <p className='text-[#565151] font-normal text-lg'>
                                Herddle’s platform tracks maintenance, compliance, financials and performance to get full visibility of your portfolio

                            </p>
                            <ul className=' space-y-4'>
                                <li className='font-normal text-sm text-[#565151] flex items-center '>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> One flat monthly fee – no excessive lump sum costs
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" />One flat monthly fee – no excessive lump sum costs
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> Increased tenant satisfaction resulting in an avg 2.6 years of tenancy length
                                </li>
                            </ul>


                        </div>

                        <div className='col-span-1 relative -right-40'>


                            <div>
                                <img className='mt-48' src={p3_b3_img1} alt="" />
                            </div>



                        </div>



                    </div>
                </div>


            </div>

            <div className="bg-[#F6FAFD] px-4 sm:px-6 lg:px-8 pb-20 ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}
                    <div className='grid grid-cols-2 gap-x-12' >

                        <div className='space-y-8 py-10 col-span-1 mt-28'>
                            <div className='text-[#162A43] banner-text font-medium font-sans '>
                                Increase profitability of your portfolio
                            </div>
                            <p className='text-[#565151] font-normal text-lg'>
                                Herddle’s platform tracks maintenance, compliance, financials and performance to get full visibility of your portfolio

                            </p>



                        </div>

                        <div className='col-span-1 relative -right-40'>


                            <div className='absolute'>
                                <img className='mt-32' src={p3_b4_img1} alt="" />
                            </div>



                        </div>



                    </div>
                </div>


            </div>



            <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">

                    {/* Content goes here */}
                    <div className='pt-16'>
                        <h1 className='text-4xl font-mono font-semibold text-center'>Nuova Offering</h1>
                    </div>
                    <div className='grid grid-cols-3 gap-x-16' >

                        <div className='space-y-3 py-10 col-span-1 mt-8 w-5/6 mx-auto'>

                            <div className=''>
                                <img className='mb-6 w-5/6 mx-auto' src={p3_b5_img1} alt="" />
                            </div>
                            <div className=''>
                                <button className='text-white text-base bg-[#BD8472] px-8 py-1 text-center rounded-2xl font-semibold'>See More</button>
                            </div>
                            <div className='text-[#162A43] font-semibold text-2xl font-sans '>
                                We find renters
                            </div>
                            <div className='text-[#162A43] font-medium text-lg font-sans '>
                                With both of our plans
                            </div>
                            <p className='text-[#565151] font-normal text-md'>
                                We find quality renter fast. Using all major property portals and innovative digital marketing methods. We find find the perfect residents for your property.

                            </p>
                            <p className='text-[#BD8472] font-normal text-lg'>
                                With both of our plans
                            </p>
                        </div>

                        <div className='space-y-3 py-10 col-span-1 mt-8 w-5/6 mx-auto'>

                            <div className=''>
                                <img className='mb-10' src={p3_b5_img2} alt="" />
                            </div>
                            <div className=''>
                                <button className='text-white text-base bg-[#BD8472] px-8 py-1 text-center rounded-2xl font-semibold'>See More</button>
                            </div>
                            <div className='text-[#162A43] font-semibold text-2xl font-sans '>
                                We find renters
                            </div>
                            <div className='text-[#162A43] font-medium text-lg font-sans '>
                                With both of our plans
                            </div>
                            <p className='text-[#565151] font-normal text-md'>
                                We find quality renter fast. Using all major property portals and innovative digital marketing methods. We find find the perfect residents for your property.

                            </p>
                            <p className='text-[#BD8472] font-normal text-lg'>
                                With both of our plans
                            </p>
                        </div>


                        <div className='space-y-3 py-10 col-span-1 mt-8 w-5/6 mx-auto'>

                            <div className=''>
                                <img className='mb-10' src={p3_b5_img3} alt="" />
                            </div>
                            <div className=''>
                                <button className='text-white text-base bg-[#BD8472] px-8 py-1 text-center rounded-2xl font-semibold'>See More</button>
                            </div>
                            <div className='text-[#162A43] font-semibold text-2xl font-sans '>
                                We find renters
                            </div>
                            <div className='text-[#162A43] font-medium text-lg font-sans '>
                                With both of our plans
                            </div>
                            <p className='text-[#565151] font-normal text-md'>
                                We find quality renter fast. Using all major property portals and innovative digital marketing methods. We find find the perfect residents for your property.

                            </p>
                            <p className='text-[#BD8472] font-normal text-lg'>
                                With both of our plans
                            </p>
                        </div>





                    </div>
                </div>


            </div>


            <div className="bg-[#F2E7DB] px-4 sm:px-6 lg:px-8 ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}

                    <div className='space-y-6 text-center p-20'>
                        <div className='text-[#162A43] font-semibold text-4xl font-sans '>
                            Speak to a Member of Our Team Now
                        </div>

                        <p className='text-[#565151] font-normal text-lg font-sans'>
                            Click here to read more about our services here at Nuova

                        </p>
                        <div className=''>
                            <button className='text-white text-base bg-[#BD8472] px-12 py-2 text-center rounded font-semibold mt-6'>Read More</button>
                        </div>
                    </div>




                </div>


            </div>
        </>
    );
};

export default Banner;