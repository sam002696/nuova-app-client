import React from 'react';
import bannerImage from '../../../Images/Page5/banner_house.png'
const Banner = () => {
    return (
        <>
            <section className=' backdrop-filter bg-gradient-to-r from-rose-50 via-white to-sky-50'>
                <div className="container mx-auto sm:px-6 lg:px-8 pt-10 pb-5">
                    <div className=' space-y-6 text-center'>
                        <p className='text-[#162A43] font-sans font-semibold text-4xl '>Changing the way in which residential <br /> property is managed</p>
                        <p className='text-[#162A43] text-xl font-sans font-medium'>Making renting better for everyone</p>
                    </div>

                    <div className='flex items-center my-20 justify-center lg:ml-32'>
                        <div className='space-y-6'>
                            <p className=' font-sans font-medium text-3xl text-[#162A43]'>
                                Nuova Property
                            </p>
                            <p className='text-[#565151] font-normal'>
                                Here at Nuova we have combined 35 years <br /> of residential property experience with <br /> technology to
                                completely change the way <br /> in which residential property is managed.
                            </p>
                        </div>
                        <div>
                            <img className=' w-1/2 mx-auto' src={bannerImage} alt="" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Banner;