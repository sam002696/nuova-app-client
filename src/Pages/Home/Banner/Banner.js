import React from "react";
import elipse1392 from "../../../Images/Banner/Ellipse 1392.png";
import elipse1393 from "../../../Images/Banner/Ellipse 1393.png";
import rectangle from "../../../Images/Banner/Rectangle 4587.png";
import elipse1391 from "../../../Images/Banner/Ellipse 1391.png";
import mockup from "../../../Images/Banner/iPhone 12 Pro (Wooden Hands).png";
import scribbles from "../../../Images/Banner/scribbles-scribbles-20 1.png";
const Banner = () => {
  return (
    <>
      <div className="bg-[#F7F4FFB2] pb-12 relative">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
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
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-4">
            <div className="space-y-10 py-10 col-span-1 mt-28 relative z-40">
              <div className="text-[#162A43] font-bold text-5xl font-sans">
                <h1 className="leading-snug tracking-normal">
                  Earn More. Stress Less
                </h1>
              </div>
              <div className="pt-16">
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

            <div className="col-span-1 relative z-50 -right-80 lg:-right-32">
              <div>
                <img className="mt-16 " src={mockup} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F4FFB2] px-4 sm:px-6 lg:px-8 pb-20">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}

        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-6">
            <div className="space-y-10 col-span-1">
              <div className="border-none border-white bg-[#DABAB0] rounded-t-md  pt-14 pb-0 pl-14 pr-14 shadow-md">
                <div className="border-none border-white bg-[#FFFFFF] px-14 py-14 rounded-t-md relative">
                  <img
                    src={scribbles}
                    alt="Rain"
                    className="top-0 right-0 absolute w-2/6"
                  />
                  <h1 className=" font-normal text-5xl text-[#BD8472]">
                    Agent
                  </h1>
                  <p className=" font-medium text-4xl mt-8 tracking-wider text-[#BD8472]">
                    Grow Your Business
                  </p>

                  <button className="text-[#BD8472] text-base border-2 border-[#BD8472] px-6 py-3 text-center rounded w-full mt-10">
                    Watch Video
                  </button>
                </div>
              </div>
            </div>

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
                  <p className=" font-medium text-4xl mt-8 tracking-wider">
                    Manage With Ease
                  </p>

                  <button className="text-[#091F3C] text-base border-2 border-[#091F3C] px-6 py-3 text-center rounded w-full mt-10">
                    Watch Video
                  </button>
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
