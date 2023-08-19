import React from "react";
import landlordFrontCover from "../../../Images/Page3/Banner/landlordFrontCover.png";
import p3_bimg1 from "../../../Images/Page3/Banner/Page3 banner img1.png";
import p3_bimg2 from "../../../Images/Page3/Banner/Page3 banner img2.png";
import p3_bimg3 from "../../../Images/Page3/Banner/Page3 banner img3.png";
import p3_bimg4 from "../../../Images/Page3/Banner/Page3 banner img4.png";
import p3_bimg5 from "../../../Images/Page3/Banner/Page3 banner img5.png";

import p3_b2_img1 from "../../../Images/Page3/Banner2/Page3 banner2 img1.png";
import p3_b2_img2 from "../../../Images/Page3/Banner2/Page3 banner2 img2.png";
import p3_b2_img3 from "../../../Images/Page3/Banner2/Page3 banner2 img3.png";
import p3_b2_img4 from "../../../Images/Page3/Banner2/Page3 banner2 img4.png";
import p3_b2_img5 from "../../../Images/Page3/Banner2/Page3 banner2 img5.png";

import p3_b3_img2 from "../../../Images/Page3/Banner3/Page3 banner3 img3.jpeg";

import p3_b4_img1 from "../../../Images/Page3/Banner4/Page3 banner4 img1.png";
import p3_b4_img2 from "../../../Images/Page3/Banner4/Page3 banner4 img2.png";
import p3_b4_img3 from "../../../Images/Page3/Banner4/Page3 banner4 img3.png";

import p3_b5_img1 from "../../../Images/Page3/Banner5/Page3 banner5 img1.png";
import p3_b5_img2 from "../../../Images/Page3/Banner5/Page3 banner5 img2.png";
import p3_b5_img3 from "../../../Images/Page3/Banner5/Page3 banner5 img3.png";
import p3_b5_img4 from "../../../Images/Page3/Banner5/Page3 banner5 img4.png";
import p3_b5_img5 from "../../../Images/Page3/Banner5/Page3 banner5 img5.png";
import p3_b5_img6 from "../../../Images/Page3/Banner5/Page3 banner5 img6.png";
import p3_b5_img7 from "../../../Images/Page3/Banner5/Page3 banner5 img7.png";
import p3_b5_img8 from "../../../Images/Page3/Banner5/Page3 banner5 img8.png";
import p3_b5_img9 from "../../../Images/Page3/Banner5/Page3 banner5 img9.png";
import p3_b5_img10 from "../../../Images/Page3/Banner5/Page3 banner5 img10.png";
import p3_b5_img11 from "../../../Images/Page3/Banner5/Page3 banner5 img11.png";
import p3_b5_img12 from "../../../Images/Page3/Banner5/Page3 banner5 img12.png";
import tickMark from "../../../Images/Pros/Vector.png";

const Banner = () => {
  const posts = [
    {
      title: "Nuova Fully Managed",
      href: "#",
      category: { name: "Article", href: "#" },
      description:
        "Cloud Hosting is a good fit for those of you who are building personal websites, portfolios, blogs, and other systems",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      imageUrl: p3_b5_img10,
      readingTime: "6 min",
      author: {
        name: "Roel Aufderehar",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "Nuova HMO Management",
      href: "#",
      category: { name: "Video", href: "#" },
      description:
        "Cloud Hosting is a good fit for those of you who are building personal websites, portfolios, blogs, and other systems",
      date: "Mar 10, 2020",
      datetime: "2020-03-10",
      imageUrl: p3_b5_img11,
      readingTime: "4 min",
      author: {
        name: "Brenna Goyette",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "Short Term Let Management",
      href: "#",
      category: { name: "Case Study", href: "#" },
      description:
        "Cloud Hosting is a good fit for those of you who are building personal websites, portfolios, blogs, and other systems",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl: p3_b5_img12,
      readingTime: "11 min",
      author: {
        name: "Daniela Metz",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  return (
    <>
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="">
          <div className="relative shadow-xl sm:overflow-hidden lg:min-h-[100vh]">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={landlordFrontCover}
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#162A43]/100 via-[#162A43]/78 to-[#FFFFFF]/0 " />
            </div>

            {/* <div className="relative lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-32 lg:px-16">
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl ">
                      <span className="block leading-10">Nuova Property</span>
                      <span className="block leading-relaxed">
                        Management &
                      </span>
                      <span className="block leading-10">Letting</span>
                    </h1>
                    <p className="mt-8 text-base text-gray-300 sm:mt-5 lg:mt-12 sm:text-xl lg:text-lg xl:text-xl">
                      More than just your traditional property manager, we are a
                      premium property management service here in Glasgow
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <div className="mt-3 sm:mt-0">
                        <button
                          type="submit"
                          className="block rounded-md bg-white py-3 px-4 font-medium text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-16 2xl:py-40 2xl:px-48">
              <h1 className="text-left text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">We have made being</span>
                <span className="block text-white 2xl:leading-relaxed">
                  a landlord easy!
                </span>
                {/* <span className="block text-white">Letting</span> */}
              </h1>
              <p className=" mt-6 max-w-lg text-left text-xl text-cyan-200 sm:max-w-3xl">
                At Nuova our mission is to simplify the overall process of owing
                a rental property along with maximising the return on your
                investment. Once you are signed up with us you will have access
                to the Nuova portal which will allow you to be able to have an
                instant overview all of your assets in one simple place.
              </p>
              <div className="mt-8 sm:mt-8">
                <div className="mt-3 sm:mt-0">
                  <button
                    type="submit"
                    className="block rounded-md bg-white py-3 px-4 font-medium text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        We've used 3xl here, but feel free to try other max-widths based on your needs
        <div className="max-w-5xl mx-auto">
          Content goes here
          <div className="grid grid-cols-4 gap-x-5">
            <div className="space-y-10 py-10 col-span-2 mt-20">
              <div className="text-[#162A43] banner-text font-medium font-sans ">
                We have made being a landlord easy!
              </div>
              <p className="text-[#565151] font-normal text-lg">
                AT Nuova our mission is to simply the overall process of owing a
                rental property. Once you are signed up you will have access to
                the Nuova portal which will allow you to be able to manage all
                of your assets in one simple place.
              </p>
              <div className="">
                <button className="text-white text-base bg-[#BD8472] px-6 py-3 text-center rounded font-semibold">
                  Talk To Us
                </button>
              </div>
            </div>
            <div className="col-span-1 relative -right-40">
              <div>
                <div>
                  <img className="mt-20" src={p3_bimg1} alt="" />
                </div>
                <div>
                  <img className="mt-8" src={p3_bimg4} alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-1 relative -right-40">
              <div className="relative">
                <div>
                  <img className="mt-20" src={p3_bimg2} alt="" />
                </div>
                <div>
                  <img className="mt-4" src={p3_bimg5} alt="" />
                </div>
                <div className="absolute top-28 -left-28 -z-20">
                  <img className="h-40" src={p3_bimg4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-[#FAFAFA] px-4 sm:px-6 lg:px-8 pb-20">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-6xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="col-span-1 relative">
              <div>
                <img className="mt-20" src={p3_b2_img5} alt="" />
              </div>
            </div>

            <div className="space-y-8 col-span-1 mt-20">
              <div className="text-[#162A43] banner-text font-medium font-sans ">
                Dedicated Property Management
              </div>
              <p className="text-[#565151] font-normal text-lg">
                Here at Nuova, we wanto to allow landlords to get on with their
                life without the stress of owning a property, your own personal
                portal will allow you to ;
              </p>
              <ul className=" space-y-4">
                <li className="font-normal text-sm text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Track all safety certificates to make sure you are always
                  compliant and up to date.
                </li>
                <li className="font-normal text-sm text-[#565151] flex items-center">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Have instant access to our Nuova team to deal with any queries
                  through the owners portal!
                </li>
                <li className="font-normal text-sm text-[#565151] flex items-center">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Enjoy full transparency, provide you with real time up dates
                  to give you an extra peace of mind, never be left our of the
                  loop.
                </li>
                <li className="font-normal text-sm text-[#565151] flex items-center">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Always only have one point of contact. Here at Nuova we don’t
                  believe in having our landlords passed around several
                  different departments before an issue is dealt with, we will
                  ensure you only have one single point of contact in order to
                  save time and make sure any problems or queries are dealt with
                  in an efficient manner
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-6xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-3 gap-x-12">
            <div className="space-y-8 col-span-2 mt-20 w-5/6">
              <div className="text-[#162A43] banner-text font-medium font-sans ">
                Here at Nuova we believe it is time for a change!
              </div>
              <p className="text-[#565151] font-normal text-lg">
                At Nuova we provide a unique service in order to achieve maximum
                return on your portfolio, we aim to reduce costs and maximise
                return. We help investors extract maximum value from their
                asset. We achieve this by ;
              </p>
              <ul className=" space-y-4">
                <li className="font-normal text-sm text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Competitive pricing and unique marketing strategy.
                </li>
                <li className="font-normal text-sm text-[#565151] flex items-center">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />
                  On eligible properties we rent by the day, the week, the month
                  and the year in order to unleash the potential of your
                  property.
                </li>
                <li className="font-normal text-sm text-[#565151] flex items-center">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Our 35 years of propery experince combined with our use of
                  technology has allowed us to be able to develope a model which
                  maximises returns while also increasing tenant satisfaction.
                </li>
                <li className="font-normal text-sm text-[#565151] flex items-center">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Dedicated marketing team to ensure your property receives the
                  best possible exposure.
                </li>
              </ul>
            </div>

            <div className="col-span-1 relative">
              <div>
                <img className="mt-20 w-5/6 rounded-2xl" src={p3_b3_img2} alt="" />
              </div>
              <div className="mt-8 sm:mt-8 w-11/12 mx-auto">
                <div className="w-11/12 mx-auto">
                  <a href="./Nuova Property Brochure.pdf" download="Nuova Brochure.pdf">
                    <button className="text-white text-base bg-[#BD8472] px-6 py-3 text-center rounded font-semibold">
                      Nuova Property Brochure
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F6FAFD] px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-6xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-8 gap-x-1">
            <div className="space-y-8 col-span-5 mt-16 w-11/12">
              <div className="text-[#162A43] banner-text font-medium font-sans ">
                Nuova Makes Owning A Property Stress-free
              </div>
              <p className="text-[#565151] font-normal text-lg">
                Once signed up to Nuova, you will receive access to you own
                customised owners portal, here you will have an instant access
                to all of your essential documents, along with a chat function
                so you can speak to you dedicated property manager any time!
              </p>
              <p className="text-[#565151] font-normal text-lg">
                You will also benefit from only having one point of contact who
                will be your dedicated property manager, a simple and effective
                maintenance process to make repairs getting done a lot easier
                with our network of trusted contractors.
              </p>
            </div>

            <div className="col-span-3 relative">
              <div className="">
                <img className="mt-32" src={p3_b4_img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-4xl mx-auto">
          {/* Content goes here */}
          <div className=" space-y-8 mt-12">
            <h1 className="text-[#162A43] banner-text font-medium font-sans text-center">
              Marketing your property
            </h1>
            <p className="text-[#565151] font-normal text-lg max-w-2xl mx-auto text-center">
              Simple and effective marketing to provide your property with
              maximum exposure and ensure we find the best tenant for your
              property.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-x-12">
            <div className="space-y-3 py-2 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 mx-auto" src={p3_b5_img4} alt="" />
              </div>

              <div className="text-[#162A43] font-semibold text-xl font-sans text-center">
                Online Advertisement
              </div>
            </div>

            <div className="space-y-3 py-2 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 mx-auto" src={p3_b5_img5} alt="" />
              </div>

              <div className="text-[#162A43] font-semibold text-xl font-sans text-center">
                To Let Boards
              </div>
            </div>

            <div className="space-y-3 py-2 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 mx-auto" src={p3_b5_img6} alt="" />
              </div>

              <div className="text-[#162A43] font-semibold text-xl font-sans text-center">
                Pricing
              </div>
            </div>

            <div className="space-y-3 py-2 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 mx-auto" src={p3_b5_img7} alt="" />
              </div>

              <div className="text-[#162A43] font-semibold text-xl font-sans text-center">
                Photography & Videography
              </div>
            </div>

            <div className="space-y-3 py-2 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 mx-auto" src={p3_b5_img8} alt="" />
              </div>

              <div className="text-[#162A43] font-semibold text-xl font-sans text-center">
                Email Marketing
              </div>
            </div>

            <div className="space-y-3 py-2 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 mx-auto" src={p3_b5_img9} alt="" />
              </div>

              <div className="text-[#162A43] font-semibold text-xl font-sans text-center">
                Social Media
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="pt-16">
            <h1 className="text-4xl font-mono font-semibold text-center">
              Nuova Offering
            </h1>
          </div>
          {/* <div className="grid grid-cols-3 gap-x-16">
            <div className="space-y-3 py-10 col-span-1 mt-8 w-5/6 mx-auto">
              <div className="">
                <img className="mb-6 w-5/6 mx-auto" src={p3_b5_img1} alt="" />
              </div>
              <div className="">
                <button className="text-white text-base bg-[#BD8472] px-8 py-1 text-center rounded-2xl font-semibold">
                  See More
                </button>
              </div>
              <div className="text-[#162A43] font-semibold text-2xl font-sans ">
                We find renters
              </div>
              <div className="text-[#162A43] font-medium text-lg font-sans ">
                With both of our plans
              </div>
              <p className="text-[#565151] font-normal text-md">
                We find quality renter fast. Using all major property portals
                and innovative digital marketing methods. We find find the
                perfect residents for your property.
              </p>
              <p className="text-[#BD8472] font-normal text-lg">
                With both of our plans
              </p>
            </div>

            <div className="space-y-3 py-10 col-span-1 mt-8 w-5/6 mx-auto">
              <div className="">
                <img className="mb-10" src={p3_b5_img2} alt="" />
              </div>
              <div className="">
                <button className="text-white text-base bg-[#BD8472] px-8 py-1 text-center rounded-2xl font-semibold">
                  See More
                </button>
              </div>
              <div className="text-[#162A43] font-semibold text-2xl font-sans ">
                We find renters
              </div>
              <div className="text-[#162A43] font-medium text-lg font-sans ">
                With both of our plans
              </div>
              <p className="text-[#565151] font-normal text-md">
                We find quality renter fast. Using all major property portals
                and innovative digital marketing methods. We find find the
                perfect residents for your property.
              </p>
              <p className="text-[#BD8472] font-normal text-lg">
                With both of our plans
              </p>
            </div>

            <div className="space-y-3 py-10 col-span-1 mt-8 w-5/6 mx-auto">
              <div className="">
                <img className="mb-10" src={p3_b5_img3} alt="" />
              </div>
              <div className="">
                <button className="text-white text-base bg-[#BD8472] px-8 py-1 text-center rounded-2xl font-semibold">
                  See More
                </button>
              </div>
              <div className="text-[#162A43] font-semibold text-2xl font-sans ">
                We find renters
              </div>
              <div className="text-[#162A43] font-medium text-lg font-sans ">
                With both of our plans
              </div>
              <p className="text-[#565151] font-normal text-md">
                We find quality renter fast. Using all major property portals
                and innovative digital marketing methods. We find find the
                perfect residents for your property.
              </p>
              <p className="text-[#BD8472] font-normal text-lg">
                With both of our plans
              </p>
            </div>
          </div> */}
          <div className="mt-12 max-w-lg mx-auto grid gap-12 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden p-5 bg-white">
              <div className="flex-1 bg-white p-3 flex flex-col justify-between">
                <div className="flex-1 text-center">
                  <p className="text-md font-medium text-cyan-600">
                    Nuova HMO Management
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 bg-white">
                <img
                  className="text-center mx-auto p-3"
                  src={p3_b5_img11}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-3 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="mt-3 text-sm text-gray-500 text-justify">
                    If you are a HMO landlorfd we can help you to. We will help
                    you find great renters, manage every aspect of your property
                    and Nuova on your side make sure you are kept compliant
                    every step of the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-xl shadow-xl overflow-hidden p-5 bg-[#162A43]">
              <div className="flex-1 bg-[#162A43] p-3 flex flex-col justify-between">
                <div className="flex-1 text-center">
                  <p className="text-md font-medium text-cyan-600">
                    Nuova Fully Managed
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 bg-[#162A43]">
                <img
                  className="text-center mx-auto p-3"
                  src={p3_b5_img10}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-[#162A43] p-3 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="mt-3 text-sm text-gray-100 text-justify">
                    Our most popular plan, which is easy to see why. Our Nuova
                    team will take car of everything from a tenant checking in
                    to checking out. You can sit back and relax, watch it all
                    happen using your Nuova dashboard.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden p-5 bg-white">
              <div className="flex-1 bg-white p-3 flex flex-col justify-between">
                <div className="flex-1 text-center">
                  <p className="text-md font-medium text-cyan-600">
                    Short Term Let Management
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 bg-white">
                <img
                  className="text-center mx-auto p-3"
                  src={p3_b5_img12}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-3 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="mt-3 text-sm text-gray-500 text-justify">
                    If you are a self-managing a short-term rental or are
                    wanting to list your property as a short-term let for the
                    firs time, we can help! having Nuova on your side will make
                    sure you are always kept compliant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F2E7DB] px-4 sm:px-6 lg:px-8 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}

          <div className="space-y-6 text-center p-20">
            <div className="text-[#162A43] font-semibold text-4xl font-sans ">
              Speak to a Member of Our Team Now
            </div>

            <p className="text-[#565151] font-normal text-lg font-sans">
              Click here to read more about our services here at Nuova
            </p>
            <div className="">
              <button className="text-white text-base bg-[#BD8472] px-12 py-2 text-center rounded font-semibold mt-6">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
