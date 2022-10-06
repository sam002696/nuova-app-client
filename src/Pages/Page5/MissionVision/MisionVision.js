import React from 'react';
import bannerImage from '../../../Images/Page5/banner_house.png'


const MisionVision = () => {
    return (
        <>
            <section className='backdrop-filter bg-gradient-to-r from-rose-50 via-white to-sky-50'>
                <div className="container mx-auto sm:px-6 lg:px-8 pt-10 pb-5">

                    <div className='flex items-center justify-evenly my-20'>
                        <div>
                            <img className=' w-3/2' src={bannerImage} alt="" />
                        </div>
                        <div className='space-y-6'>
                            <p className=' font-sans font-medium text-3xl text-[#162A43]'>
                                Our Mission
                            </p>
                            <p className='text-[#565151] font-normal'>
                                Our mission is simple we want to open up <br /> transparency in the sector along with <br /> generate higher
                                returns for our clients. We <br /> do not see enough focus of returns.
                            </p>
                        </div>

                    </div>
                    <div className='flex items-center justify-evenly my-20'>

                        <div className='space-y-6'>
                            <p className=' font-sans font-medium text-3xl text-[#162A43]'>
                                Our Vision
                            </p>
                            <p className='text-[#565151] font-normal'>
                                Property ownership and management should be <br /> seamless, easy, safe and secure and provide best <br />
                                experience for all parties involved. We are building <br /> a better future for the most valuable and most <br />
                                important asset in the world, our home!
                            </p>
                        </div>
                        <div>
                            <img className=' w-3/2' src={bannerImage} alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default MisionVision;