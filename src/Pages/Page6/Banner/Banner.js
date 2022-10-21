import React from 'react';
import p6_b1_img1 from '../../../Images/Page6/Banner1/Page6 banner1 img1.png'
import p6_b1_img2 from '../../../Images/Page6/Banner1/Page6 banner1 img2.png'


import p6_b2_img1 from '../../../Images/Page6/Banner2/Page6 banner2 img1.png'
import p6_b2_img2 from '../../../Images/Page6/Banner2/Page6 banner2 img2.png'

const Banner = () => {

    const posts = [
        {
            title: 'Tenant Find',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            readingTime: '6 min',
            author: {
                name: 'Roel Aufderehar',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            title: 'Portfolio Management',
            href: '#',
            category: { name: 'Video', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',
            date: 'Mar 10, 2020',
            datetime: '2020-03-10',
            imageUrl:
                'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            readingTime: '4 min',
            author: {
                name: 'Brenna Goyette',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        {
            title: 'Full Management ',
            href: '#',
            category: { name: 'Case Study', href: '#' },
            description:
                'Property ownership and management should be seamless, easy, safe and secure and provide best experience',
            date: 'Feb 12, 2020',
            datetime: '2020-02-12',
            imageUrl:
                'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            readingTime: '11 min',
            author: {
                name: 'Daniela Metz',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        }
    ]


    return (
        <>
            <div className=" px-4 sm:px-6 lg:px-8 pb-20 relative">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className='absolute -z-20 -top-20 right-0 '>
                    <img className='' src={p6_b1_img2} alt="" />
                </div>
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}
                    <div className='grid grid-cols-2 gap-x-4' >

                        <div className='space-y-8 py-10 col-span-1 mt-28'>
                            <div className='text-[#162A43] font-semibold text-5xl font-sans'>
                                <h1 className='leading-snug'>Property management <br /> Service you can trust</h1>
                            </div>
                            <p className='text-[#565151] font-normal text-lg'>
                                Property ownership and management should be seamless, easy, safe and secure and provide best experience for all parties involved.

                            </p>
                            <div className='flex space-x-5'>
                                <button className='text-white text-base bg-[#BD8472] px-6 py-1 text-center rounded font-semibold'>Talk To Us</button>
                                <button className=' text-base px-6 py-1 text-center rounded border-2 border-gray-400 font-semibold'>Talk To Us</button>
                            </div>



                        </div>

                        <div className='col-span-1 relative -right-40'>
                            <div>
                                <img className='mt-20' src={p6_b1_img1} alt="" />
                            </div>
                        </div>



                    </div>
                </div>


            </div>



            <div className="bg-[#BD8472] px-4 sm:px-6 lg:px-8 relative">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className='absolute z-20 bottom-0 left-0 '>
                    <img className='' src={p6_b2_img1} alt="" />
                </div>
                <div className='absolute z-20 top-0 right-0 '>
                    <img className='' src={p6_b2_img2} alt="" />
                </div>
                <div className="max-w-5xl mx-auto">
                    {/* Content goes here */}

                    <div className='space-y-6 text-center p-20'>
                        <div className='text-white font-semibold text-4xl font-sans '>
                            What we do
                        </div>

                        <p className='text-white font-normal text-lg font-sans w-4/5 mx-auto'>
                            Property ownership and management should be seamless, easy, safe and secure and provide best experience for all parties involved.
                        </p>

                    </div>
                </div>


            </div>




            <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-2 lg:pb-20 lg:px-8">

                <div className="relative max-w-5xl mx-auto">
                    <div className='space-y-6 text-center p-12'>
                        <div className='text-[#162A43] font-semibold text-4xl font-sans'>
                            <h1 className='leading-snug'>Ready to get started</h1>
                        </div>

                        <p className='text-[#565151] font-normal text-lg font-sans w-4/5 mx-auto'>
                            Property ownership and management should be seamless, easy, safe and secure and provide best experience for all parties involved.

                        </p>

                    </div>


                    <div className=" max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
                        {posts.map((post) => (
                            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">

                                <div className="flex-1 bg-[#F9F9F9] p-8 flex flex-col justify-between">
                                    <div className="flex-1">

                                        <a href={post.href} className="block mt-2">
                                            <p className="text-xl font-semibold text-gray-900 text-center">{post.title}</p>
                                            <p className="mt-5 text-sm text-gray-500 text-center">{post.description}</p>
                                            <button className='mt-5 text-white text-base bg-[#BD8472] px-6 py-1 text-center rounded font-semibold w-full'>Learn More</button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




            <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">

                    {/* Content goes here */}
                    <div className='space-y-6 text-center p-12'>
                        <div className='text-[#162A43] font-semibold text-4xl font-sans'>
                            <h1 className='leading-snug'>Ready to get started</h1>
                        </div>

                        <p className='text-[#565151] font-normal text-lg font-sans w-4/5 mx-auto'>
                            Property ownership and management should be seamless, easy, safe and secure and provide best experience for all parties involved.

                        </p>

                    </div>

                    <div className='grid grid-cols-3 gap-x-16' >

                        <div className='space-y-6 p-8 col-span-1 bg-[#F9F9F9] shadow-lg'>
                            <p className="mt-5 text-sm text-gray-500 text-center">Property ownership and management should be seamless, easy, safe and
                            </p>
                            <button className='mt-5 text-black text-base px-6 py-1 border-2  text-center rounded font-semibold w-full'>Learn More</button>



                        </div>
                        <div className='space-y-6 p-8 col-span-1 bg-[#F9F9F9] shadow-lg'>
                            <p className="mt-5 text-sm text-gray-500 text-center">Property ownership and management should be seamless, easy, safe and
                            </p>
                            <button className='mt-5 text-white text-base bg-[#BD8472] px-6 py-1 text-center rounded font-semibold w-full'>Learn More</button>



                        </div>
                        <div className='space-y-6 p-8 col-span-1 bg-[#F9F9F9] shadow-lg'>
                            <p className="mt-5 text-sm text-gray-500 text-center">Property ownership and management should be seamless, easy, safe and
                            </p>
                            <button className='mt-5 text-black text-base px-6 py-1 border-2  text-center rounded font-semibold w-full'>Learn More</button>


                        </div>





                    </div>
                </div>


            </div>



            <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-5xl mx-auto">

                    {/* Content goes here */}
                    <div className='space-y-3 text-center p-8'>
                        <div className='text-[#162A43] font-semibold text-4xl font-sans'>
                            <h1 className='leading-snug'>Stay contact us</h1>
                        </div>

                        <p className='text-[#565151] font-normal text-lg font-sans w-4/5 mx-auto'>
                            Lorem Ipsum is simply dummy text of the printing and unknown printer took a galley of type and scrambled it to make a type specimen book.

                        </p>

                    </div>

                    <div className="py-5 px-6 sm:px-10 lg:col-span-2 xl:p-12 max-w-2xl mx-auto">

                        <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-500">
                                    Full Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        placeholder='Alex Jo'
                                        className="py-2 px-4 block w-full shadow-sm text-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-100 border-2 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                                    Email Address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder='example@gmail.com'
                                        className="py-2 px-4 block w-full shadow-sm text-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-100 border-2  rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-500">
                                    Subject
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="Subject"
                                        id="subject"
                                        autoComplete="family-name"
                                        placeholder='Write subject'
                                        className="py-2 px-4 block w-full shadow-sm text-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-100 border-2 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-500">
                                        Phone
                                    </label>

                                </div>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        placeholder='+874 645 312'
                                        className="py-2 px-4 block w-full shadow-sm text-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-100 border-2  rounded-md"
                                        aria-describedby="phone-optional"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <div className="flex justify-between">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-500">
                                        Your Message
                                    </label>
                                    <span id="message-max" className="text-sm text-warm-gray-500">

                                    </span>
                                </div>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="py-3 px-3 block w-full text-sm shadow-sm text-gray-500 focus:ring-teal-500 focus:border-teal-500 border border-gray-100 rounded-md"
                                        aria-describedby="message-max"
                                        defaultValue={'Write something here...'}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 sm:flex sm:justify-end lg:justify-center">
                                <button
                                    type="submit"
                                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#BD8472] hover:bg-[#BD8472] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>


                </div >


            </div >





        </>
    );
};

export default Banner;