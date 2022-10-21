import React from 'react';
import bannerImage from '../../../Images/Page5/banner_house.png'

import p5_b3_img1 from '../../../Images/Page5/Banner3/Page5 banner3 img1.png'
import p5_b4_img1 from '../../../Images/Page5/Banner4/Page5 banner4 img1.png'


const MisionVision = () => {
    return (
        <>
            <div className="backdrop-filter bg-gradient-to-r from-rose-50 via-white to-sky-50 pb-32 ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}
                    <div className='grid grid-cols-2 gap-x-12' >

                        <div className='col-span-1 relative left-12'>
                            <div className='absolute'>
                                <img className='mt-12 w-5/6' src={p5_b3_img1} alt="" />
                            </div>
                        </div>

                        <div className='space-y-8 py-10 col-span-1 mt-28 relative -right-12 w-5/6 mx-auto'>
                            <div className='text-[#162A43] text-4xl font-medium font-sans '>
                                Our Mission
                            </div>
                            <p className='text-[#565151] font-normal text-lg'>
                                Our mission is simple we want to open up transparency in the sector along with generate higher
                                returns for our clients. We do not see enough focus of returns.
                            </p>

                        </div>





                    </div>
                </div>


            </div>

            <div className="backdrop-filter bg-gradient-to-r from-rose-50 via-white to-sky-50 pb-32 ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}
                    <div className='grid grid-cols-2 gap-x-12' >

                        <div className='space-y-8 py-10 col-span-1 mt-28 relative left-12'>
                            <div className='text-[#162A43] text-4xl font-medium font-sans '>
                                Our Vision
                            </div>
                            <p className='text-[#565151] font-normal text-lg'>
                                Property ownership and management should be seamless, easy, safe and secure and provide best
                                experience for all parties involved. We are building a better future for the most valuable and most
                                important asset in the world, our home!
                            </p>



                        </div>

                        <div className='col-span-1 relative -right-20'>
                            <div className='absolute'>
                                <img className='mt-12 w-5/6' src={p5_b4_img1} alt="" />
                            </div>
                        </div>



                    </div>
                </div>


            </div>
        </>
    );
};

export default MisionVision;