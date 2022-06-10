import React from 'react';
import elipse1392 from '../../../Images/Banner/Ellipse 1392.png'
import elipse1393 from '../../../Images/Banner/Ellipse 1393.png'
import rectangle from '../../../Images/Banner/Rectangle 4587.png'
import elipse1391 from '../../../Images/Banner/Ellipse 1391.png'
import mockup from '../../../Images/Banner/iPhone 12 Pro (Wooden Hands).png';
import scribbles from '../../../Images/Banner/scribbles-scribbles-20 1.png'
const Banner = () => {
    return (
        <>
            <div className='bg-[#F7F4FFB2]'>
                <div className=''>
                    <img className='absolute mix-blend-multiply left-0' src={elipse1392} alt="Elipse" />
                    <img className='absolute mix-blend-multiply w-1/4  left-5' src={elipse1393} alt="Elipse" />
                    <img className='absolute mix-blend-multiply top-0 right-0 w-2/5 ' src={rectangle} alt="Elipse" />
                    <img className='absolute mix-blend-lighten right-20 bottom-20 w-2/6' src={elipse1391} alt="Elipse" />

                </div>

                <section className='flex  items-center justify-around py-10 relative'>
                    <div className='space-y-10 w-2/5'>
                        <div className='text-[#162A43] banner-text font-semibold font-sans '>
                            Compare Money Transfers From All Over The World
                        </div>
                        <p className='text-[#565151] font-normal text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut consequuntur, rerum in voluptatibus velit commodi voluptates reiciendis exercitationem et, ducimus corrupti quisquam adipisci, tenetur molestiae quae eveniet voluptatem veritatis!
                        </p>
                        <div className='flex space-x-5'>
                            <button className='text-white text-base bg-[#BD8472] px-6 py-3 text-center rounded'>Get Started</button>
                            <button className='text-[#BD8472] text-base border-2 border-[#BD8472] px-6 py-3 text-center rounded'>Watch Video</button>
                        </div>
                    </div>
                    <div >
                        <img src={mockup} alt="iphone screen right-20" />
                    </div>
                </section>

                <section className='container  pb-10'>
                    <div className='flex justify-center space-x-3'>
                        <div className='border-none border-white bg-[#DABAB0] rounded-t-md  pt-14 pb-0 pl-14 pr-14 w-2/6 shadow-md'>
                            <div className='border-none border-white bg-[#FFFFFF] px-14 py-28 rounded-t-md relative'>
                                <img src={scribbles} alt="Rain" className='top-0 right-0 absolute w-2/6' />
                                <h1 className=' font-normal text-5xl text-[#BD8472]'>Agent</h1>
                                <p className=' font-light text-4xl mt-5 text-[#BD8472]'>
                                    Grow Your Business
                                </p>

                                <button className='text-[#BD8472] text-base border-2 border-[#BD8472] px-6 py-3 text-center rounded w-full mt-10'>Watch Video</button>


                            </div>
                        </div>
                        <div className='border-none border-white bg-[#091F3C] rounded-t-md  pt-14 pb-0 pl-14 pr-14 w-2/6 shadow-md'>
                            <div className='border-none border-white bg-[#FFFFFF] px-14 py-28 rounded-t-md relative'>
                                <img src={scribbles} alt="Rain" className='top-0 right-0 absolute w-2/6' />
                                <h1 className=' font-normal text-5xl text-[#091F3C]'>Landlord</h1>
                                <p className=' font-light text-4xl text-[#091F3C] mt-5'>
                                    Manage With Ease
                                </p>

                                <button className='text-[#091F3C] text-base border-2 border-[#091F3C] px-6 py-3 text-center rounded w-full mt-10'>Watch Video</button>


                            </div>
                        </div>
                    </div>


                </section>
            </div>


        </>
    );
};

export default Banner;