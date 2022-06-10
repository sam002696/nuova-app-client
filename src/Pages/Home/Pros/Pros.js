import React from 'react';
import pic1 from '../../../Images/Pros/Group 1000002265.png'
import invoice from '../../../Images/Pros/Group 1000002263.png'
import pic3 from '../../../Images/Pros/Group 1000002281.png'
import rectangle from '../../../Images/Pros/Rectangle 4584.png'
import maintenance from '../../../Images/Pros/Group 1000002237.png'
import tickMark from '../../../Images/Pros/Vector.png'
const Pros = () => {
    return (
        <>
            <section className='bg-[#F4F6FF]'>
                <div className='container relative'>
                    <div className='flex items-center justify-evenly'>
                        <div>
                            <img className='relative' src={pic1} alt="" />
                        </div>
                        <img className='absolute left-1/4 w-1/4' src={invoice} alt="" />
                        <img className='absolute bottom-0 left-3.5 w-1/2' src={rectangle} alt="" />
                        <div className=' space-y-10 w-2/6'>
                            <h1 className=' font-semibold text-4xl font-sans text-[#162A43]'>Get more from your portfolio</h1>
                            <p className='  font-normal text-lg text-[#565151]'>
                                Monitor every aspect of your residential portfolio while we look after property management and lettings.
                            </p>
                            <ul className=' space-y-4'>
                                <li className='font-normal text-sm text-[#565151] flex items-center '>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> Increase your net profits by 10%
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> More time executing the expansion of your portfolio
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> We take ownership of your management requirements
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container mb-14'>
                    <div className='flex items-center justify-evenly'>

                        <div className=' space-y-10 w-2/6'>
                            <h1 className=' font-semibold text-4xl font-sans text-[#162A43]'>Increase profitability of your portfolio</h1>
                            <p className='  font-normal text-lg text-[#565151]'>
                                Herddle’s platform tracks maintenance, compliance, financials and performance to get full visibility of your portfolio
                            </p>
                            <ul className=' space-y-4'>
                                <li className='font-normal text-sm text-[#565151] flex items-center '>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> One flat monthly fee – no excessive lump sum costs
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> Controlled maintenance costs from quotes tendered by multiple contractors
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" />Increased tenant satisfaction resulting in an avg 2.6 years of tenancy length
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img className='' src={pic1} alt="" />
                        </div>
                    </div>
                </div>
                <div className='container relative'>
                    <div className='flex items-center justify-evenly'>
                        <div>
                            <img className='relative' src={pic3} alt="" />
                        </div>
                        <img className='absolute left-custom w-1/4' src={maintenance} alt="" />
                        <img className='absolute bottom-0 left-0' src={rectangle} alt="" />
                        <div className=' space-y-10 w-2/6'>
                            <h1 className=' font-semibold text-4xl font-sans text-[#162A43]'>Get more from your portfolio</h1>
                            <p className='  font-normal text-lg text-[#565151]'>
                                Monitor every aspect of your residential portfolio while we look after property management and lettings.
                            </p>
                            <ul className=' space-y-4'>
                                <li className='font-normal text-sm text-[#565151] flex items-center '>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> Increase your net profits by 10%
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" />More time executing the expansion of your portfolio
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" />We take ownership of your management requirements
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Pros;