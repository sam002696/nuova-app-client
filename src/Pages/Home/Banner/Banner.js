import React from "react";
import elipse1392 from "../../../Images/Banner/Ellipse 1392.png";
import elipse1393 from "../../../Images/Banner/Ellipse 1393.png";
import rectangle from "../../../Images/Banner/Rectangle 4587.png";
import elipse1391 from "../../../Images/Banner/Ellipse 1391.png";
import mockup from "../../../Images/Banner/iPhone 12 Pro (Wooden Hands).png";
import scribbles from "../../../Images/Banner/scribbles-scribbles-20 1.png";
import frontcover from "../../../Images/Banner/FrontCover.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      {/* <div className="bg-[#F7F4FFB2] pb-12 relative">
        We've used 3xl here, but feel free to try other max-widths based on your needs
        <div className="absolute z-10 -top-24 right-0 ">
          <img className="" src={rectangle} alt="" />
        </div>
        <div className="absolute z-30 top-48  right-64">
          <img className="" src={elipse1391} alt="" />
        </div>

        <div className="absolute z-20 top-12  left-16">
          <img className="" src={elipse1393} alt="" />
        </div>
        <div className="absolute z-40 top-4  left-0">
          <img className="" src={elipse1392} alt="" />
        </div>

        <div className="max-w-5xl mx-auto">
          Content goes here
          <div className="grid grid-cols-2 gap-x-4">
            <div className="space-y-10 py-10 col-span-1 mt-28 relative z-30">
              <div className="text-[#162A43] font-bold text-5xl font-sans">
                <h1 className="leading-snug tracking-normal">
                  Nuova Property Management & Letting
                </h1>
              </div>
              <div className="pt-8">
                <p className="text-[#565151] font-normal text-lg">
                  More than just your traditional property manager, we are a
                  premium property management service here in Glasgow
                </p>
              </div>
              <div className="flex space-x-5">
                <button className="text-white text-base bg-[#BD8472] px-6 py-1 text-center rounded font-semibold">
                  Talk To Us
                </button>
                <button className=" text-base px-6 py-1 text-center rounded border-2 border-gray-400 font-semibold">
                  Watch Video
                </button>
              </div>
            </div>

            <div className="col-span-1 relative z-40 lg:-right-24 ">
              <div>
                <img className="mt-16 " src={mockup} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <main>
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="">
            <div className="relative shadow-xl sm:overflow-hidden lg:min-h-[100vh]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={frontcover}
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
                  <span className="block text-white">Nuova Property</span>
                  <span className="block text-white 2xl:leading-relaxed">
                    Management &
                  </span>
                  <span className="block text-white">Letting</span>
                </h1>
                <p className=" mt-6 max-w-lg text-left text-xl text-cyan-200 sm:max-w-3xl">
                  More than just your traditional property manager, we are a
                  premium property management service here in Glasgow
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
      </main>

      <div className="bg-[#F7F4FFB2] px-4 sm:px-6 lg:px-8 pb-20 pt-20">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}

        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-12">
            <div className="col-span-1 relative z-50">
              <div className="border-none border-white bg-[#091F3C] rounded-t-md  pt-14 pb-0 pl-14 pr-14 shadow-md">
                <div className="border-none border-white bg-[#FFFFFF] px-14 py-14 rounded-t-md relative">
                  <img
                    src={scribbles}
                    alt="Rain"
                    className="top-0 right-0 absolute w-2/6"
                  />
                  <h1 className=" font-normal text-5xl text-[#091F3C]">
                    Landlord
                  </h1>
                  <p className=" font-medium text-3xl mt-8 tracking-wider">
                    Manage With Ease
                  </p>
                  <Link to="/page3">
                    <button className="text-[#091F3C] text-base border-2 border-[#091F3C] px-6 py-3 text-center rounded w-full mt-10">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-10 col-span-1">
              <div className="border-none border-white bg-[#DABAB0] rounded-t-md  pt-14 pb-0 pl-14 pr-14 shadow-md">
                <div className="border-none border-white bg-[#FFFFFF] px-14 py-14 rounded-t-md relative">
                  <img
                    src={scribbles}
                    alt="Rain"
                    className="top-0 right-0 absolute w-2/6"
                  />
                  <h1 className=" font-normal text-5xl text-[#BD8472]">
                    Tenant
                  </h1>
                  <p className=" font-medium text-3xl mt-8 tracking-wider text-[#BD8472]">
                    Making Renting Simple
                  </p>
                  <Link to="/page2">
                    <button className="text-[#BD8472] text-base border-2 border-[#BD8472] px-6 py-3 text-center rounded w-full mt-10">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
