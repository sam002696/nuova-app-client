import React from 'react';
import scribbles from '../../../Images/Banner/scribbles-scribbles-20 1.png'
import pic2 from '../../../Images/Benefits/Group 1000002250.png'
import pic1 from '../../../Images/Benefits/Group 1000002256.png'
import pic3 from '../../../Images/Benefits/Vector2.png'
import pic4 from '../../../Images/Benefits/Vector.png'
const Benefits = () => {
    return (
        <>
            <section className='bg-[#F9F5F6]'>
                <div className='container'>
                    <div className='flex justify-center py-32 space-x-5'>
                        <div className='w-1/5'>
                            <div className='space-y-10'>
                                <h1 className=' font-semibold text-5xl text-[#162A43]'>Benefits of using Nuova</h1>
                                <p className='  font-normal text-lg text-[#565151] mt-5'>
                                    Included in our service, each customer gets in-house software to access live financial dashboards.
                                </p>
                            </div>
                            <div className=' bg-[#FFFFFF] border-none px-5 py-14 rounded-2xl mt-20 shadow-md'>
                                <img src={pic1} alt="" className='w-2/6 mx-auto mb-3' />
                                <p className=' font-medium text-2xl text-center text-[#BD8573]'>
                                    Make informed decisions with data insights
                                </p>
                            </div>
                        </div>
                        <div className='w-1/5'>
                            <div className=' bg-[#FFFFFF] border-none px-5 py-14 rounded-2xl mt-16 shadow-md'>
                                <p className=' font-medium text-2xl text-center text-[#282421]'>
                                    <img src={pic3} alt="" className='w-2/6 bg-[#F5EDEA] mx-auto mb-3 border border-none rounded-full px-5 py-4' />
                                    Reduce operational
                                    costs by a third
                                </p>
                            </div>
                            <div className=' bg-[#FFFFFF] border-none px-5 py-14 rounded-2xl mt-16 shadow-md'>
                                <p className=' font-medium text-2xl text-center text-[#BD8573]'>
                                    <img src={pic2} alt="" className='w-2/6 mx-auto mb-3' />
                                    Improve tenant
                                    experience
                                </p>
                            </div>
                        </div>

                        <div className='w-1/5'>
                            <img src={scribbles} alt="rain drop" className=' ml-32' />
                            <div className=' bg-[#FFFFFF] border-none px-5 py-14 rounded-2xl mb-20 shadow-md'>
                                <img src={pic4} alt="" className='w-2/6 bg-[#F5EDEA] mx-auto mb-3 border border-none rounded-full px-5 py-4' />
                                <p className=' font-medium text-2xl text-center text-[#282421]'>
                                    Cut admin time
                                    in half
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Benefits;