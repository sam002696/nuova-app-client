import React from 'react';
import bannerImage from '../../../Images/Page5/banner_house.png'

import p5_b1_img1 from '../../../Images/Page5/Banner1/Page5 banner1 img1.png'


const Banner = () => {
    return (
        <>

            <div className="backdrop-filter bg-gradient-to-r from-rose-50 via-white to-sky-50 ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}

                    <div className='space-y-6 text-center pt-20 pb-4'>
                        <div className='text-[#162A43] font-semibold text-4xl font-sans'>
                            <h1 className='leading-snug'>Changing the way in which residential <br /> property is managed</h1>
                        </div>

                        <p className='text-[#565151] font-normal text-2xl font-sans'>
                            Making renting better for everyone
                        </p>

                    </div>

                </div>

            </div>

            <div className="backdrop-filter bg-gradient-to-r from-rose-50 via-white to-sky-50 pb-32 ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}
                    <div className='grid grid-cols-2 gap-x-12' >

                        <div className='space-y-8 py-10 col-span-1 mt-28'>
                            <div className='text-[#162A43] banner-text font-medium font-sans '>
                                Nuova Property
                            </div>
                            <p className='text-[#565151] font-normal text-lg'>
                                Here at Nuova we have combined 35 years of residential property experience with technology to
                                completely change the way in which residential property is managed.
                            </p>



                        </div>

                        <div className='col-span-1 relative -right-32'>


                            <div className='absolute'>
                                <img className='mt-12 w-5/6' src={p5_b1_img1} alt="" />
                            </div>



                        </div>



                    </div>
                </div>


            </div>









        </>
    );
};

export default Banner;