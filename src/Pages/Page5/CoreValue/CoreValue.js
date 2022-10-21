import React from 'react';

const CoreValue = () => {
    return (
        <>
            <section className='backdrop-filter bg-gradient-to-r from-rose-50 via-white to-sky-50'>
                <div className="max-w-5xl mx-auto pt-10 pb-12">
                    {/* Heading Start*/}
                    <div className=' space-y-6 text-center'>
                        <p className='text-[#162A43] font-sans font-bold text-3xl '>Here at Nuova we stand by our core values</p>
                        <p className='text-[#162A43] text-lg font-sans font-normal'>At Nuova we stand strongly by our 4 core values</p>
                    </div>
                    {/* Heading End*/}
                    <div className="">
                        <div className=' grid grid-cols-2 gap-x-6 my-10'>
                            <div className='col-span-1 space-y-6'>
                                <div className='bg-[#FFFFFF] border-none px-12 py-6 rounded-none shadow-md max-h-full'>
                                    <div className='py-3 px-3 space-y-3'>

                                        <p className='font-medium text-lg text-[#000000]'>
                                            Integrity
                                        </p>

                                        <p className='text-[#565656] text-sm'>
                                            We make service our top priority by giving our time, knowledge, and experience to serve the needs of our customers, community, and team members
                                        </p>

                                    </div>


                                </div>
                                <div className='bg-[#FFFFFF] border-none px-12 py-6 rounded-none shadow-md'>
                                    <div className='py-3 px-3 space-y-3'>

                                        <p className='font-medium text-lg text-[#000000]'>
                                            Service
                                        </p>

                                        <p className='text-[#565656] text-sm'>
                                            We make service our top priority by giving our time, knowledge, and experience to serve the needs of our customers, community, and team members
                                        </p>

                                    </div>


                                </div>
                            </div>
                            <div className='col-span-1 space-y-6'>
                                <div className='bg-[#FFFFFF] border-none px-12 py-6 rounded-none shadow-md'>
                                    <div className='py-3 px-3 space-y-3'>

                                        <p className='font-medium text-lg text-[#000000]'>
                                            Simplicity
                                        </p>

                                        <p className='text-[#565656] text-sm'>
                                            We aim to remove all that gets in the way of what really matters, we have designed our technology so problems get dealt with fast and efficiently.
                                        </p>

                                    </div>


                                </div>
                                <div className='bg-[#FFFFFF] border-none px-12 py-6 rounded-none shadow-md'>
                                    <div className='py-3 px-3 space-y-3'>

                                        <p className='font-medium text-lg text-[#000000]'>
                                            Professionalism
                                        </p>

                                        <p className='text-[#565656] text-sm'>
                                            We proudly present a positive, dignified, and businesslike image at all times
                                            through our appearances, behavior, and interactions with others.
                                        </p>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default CoreValue;