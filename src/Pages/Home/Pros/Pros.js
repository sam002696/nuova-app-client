import React from 'react';
import pic1 from '../../../Images/Pros/Group 1000002265.png'
import pros1 from '../../../Images/Pros/Pros 1.png'
import pros2 from '../../../Images/Pros/Pros 2.png'
import pros3 from '../../../Images/Pros/Pros 3.png'
import pros4 from '../../../Images/Pros/Pros 4.png'
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
                    <div className='max-w-5xl mx-auto grid grid-cols-2 gap-x-20'>
                        <div className='col-span-1 mt-40'>
                            <img className=''  src={pros2} alt="" />
                        </div>
                        {/* <img className='absolute left-1/4 w-1/4' src={invoice} alt="" />
                        <img className='absolute bottom-0 left-3.5 w-1/2' src={rectangle} alt="" /> */}
                        <div className=' space-y-10 col-span-1 relative mt-32'>
                            <h1 className=' font-semibold text-4xl font-sans text-[#162A43]'>Your own single platform to monitor all of your assets</h1>
                            <p className='  font-normal text-lg text-[#565151]'>
                                Nuovas platform tracks maintenance, compliance, financials and performance to get full visibility of your portfolio.
                            </p>
                            <ul className=' space-y-4'> 
                                <li className='font-normal text-sm text-[#565151] flex items-center '>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> In App messaging with your Nuova team, enjoy from always only having one point of contact!
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> Dashboard to track rental income, expenses and tenant ratings.
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> Secure document library which stores compliance documents to make sure you are always up to date.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container relative '>
                    <div className='max-w-5xl mx-auto grid grid-cols-2 gap-x-20'>
                        <div className='  space-y-10 col-span-1 relative mt-32'>
                            <h1 className=' font-semibold text-4xl font-sans text-[#162A43]'>Unleash the potential of your portfolio</h1>
                            <p className='  font-normal text-lg text-[#565151]'>
                                Boost NOI with flexible rentals, rent by the day, the week and the month.
                            </p>
                            <p className='  font-normal text-lg text-[#565151]'>
                                Here at Nuova we will always aim to make the most out of your property porfolio, simply sit back and watch your income grow in real time. 
                            </p>
                            <ul className=' space-y-4'>
                                <li className='font-normal text-sm text-[#565151] flex items-center '>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> Increase tenant satisfaction which results to a longer average tenancy length.
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" /> Always keeping repair costs low by using our network of trusted contractors.
                                </li>
                                <li className='font-normal text-sm text-[#565151] flex items-center'>
                                    <img className=' border border-none p-1 rounded-full mr-3 backgroundColor-tickmark' src={tickMark} alt="" />With over 35 years of experience in the sector we know how to keep costs low and ensure returns are kept high.
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-1 mt-40'>
                            <img className=''  src={pros3} alt="" />
                        </div>
                        
                    </div>
                </div>

                <div className='container relative'>
                    <div className='max-w-5xl mx-auto grid grid-cols-2 gap-x-20'>
                        <div className='col-span-1 mt-20'>
                            <img className=''  src={pros4} alt="" />
                        </div>
                        {/* <img className='absolute left-1/4 w-1/4' src={invoice} alt="" />
                        <img className='absolute bottom-0 left-3.5 w-1/2' src={rectangle} alt="" /> */}
                        <div className=' space-y-10 col-span-1 relative mt-32'>
                            <h1 className=' font-semibold text-4xl font-sans text-[#162A43]'>Any time, any place, anywhere</h1>
                                <p className='  font-normal text-lg text-[#565151]'>
                                    Nuova Property Management & Letting has been designed and built with the use of 35 years of residential property experience. Our Nuova Property platform allows you to oversee your portfolio and speak with your dedicated property manager all from the touch of a button through your own personal dashboard.
                                </p>
                                <p className='  font-normal text-lg text-[#565151]'>
                                    Your tenants will be happier too, our tenant app allows them to log any issues they are having and track the progress in real time, no more waiting for a call back, they will receive timely updates and be able to talk to their property manager directly through the web app.
                                </p>
                            </div>
                    </div>
                </div>

                
            </section>
        </>
    );
};

export default Pros;