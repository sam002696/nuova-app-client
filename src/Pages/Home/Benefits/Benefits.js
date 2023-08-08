import React from 'react';
import circle from '../../../Images/Benefits/circle.png'
import cash from '../../../Images/Benefits/Vector2.png'
import timer from '../../../Images/Benefits/Vector.png'
import smile from '../../../Images/Benefits/smile.png'
import statistics from '../../../Images/Benefits/statistics.png'

const Benefits = () => {
    return (
        <>
            <section className='bg-[#F9F5F6] py-20'>
                <div className='space-y-5 text-center'>
                    <h1 className=' font-semibold text-4xl text-[#162A43]'>Benefits of using Nuova</h1>
                    <p className='  font-normal text-lg text-[#565151] mt-5'>
                        Included in our service, each customer gets in-house software to access live financial dashboards.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

                    <div className="max-w-5xl mx-auto grid grid-cols-4 gap-x-5">

                        <div className=' bg-[#FFFFFF] border-none px-5 py-10 rounded-2xl mt-10 shadow-lg relative'>
                            <div className='relative'>
                                <img className='mx-auto relative' src={circle} alt="" />
                                <img className='mx-auto absolute top-6 inset-x-20 w-1/5' src={timer} alt="" />
                            </div>
                            <p className=' font-medium text-xl text-center text-[#282421] mt-5'>
                                Enjoy a fully transparent service & a single point of contact 
                            </p>
                        </div>
                        <div className=' bg-[#FFFFFF] border-none px-5 py-10 rounded-2xl mt-10 shadow-lg relative'>
                            <div className='relative'>
                                <img className='mx-auto relative' src={circle} alt="" />
                                <img className='mx-auto absolute top-6 inset-x-20 w-1/5' src={cash} alt="" />
                            </div>
                            <p className=' font-medium text-xl text-center text-[#282421] mt-5'>
                                Have a full insight to your portfolio at the touch of a button
                            </p>
                        </div>
                        <div className=' bg-[#FFFFFF] border-none px-5 py-10 rounded-2xl mt-10 shadow-lg relative'>
                            <div className='relative'>
                                <img className='mx-auto relative' src={circle} alt="" />
                                <img className='mx-auto absolute top-6 inset-x-20 w-1/5' src={smile} alt="" />
                            </div>
                            <p className=' font-medium text-xl text-center text-[#282421] mt-5'>
                                Over 40 Years of residential property experience
                            </p>
                        </div>
                        <div className=' bg-[#FFFFFF] border-none px-5 py-10 rounded-2xl mt-10 shadow-lg relative'>
                            <div className='relative'>
                                <img className='mx-auto relative' src={circle} alt="" />
                                <img className='mx-auto absolute top-6 inset-x-20 w-1/5' src={statistics} alt="" />
                            </div>
                            <p className=' font-medium text-xl text-center text-[#282421] mt-5'>
                                A proactive team always looking to gain more from your portfolio
                            </p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
};

export default Benefits;