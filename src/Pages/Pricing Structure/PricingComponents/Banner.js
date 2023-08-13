import React from "react";

import p6_b1_img3 from "../../../Images/Page6/Banner1/Page6 banner1 img3.png";
import p6_b1_img4 from "../../../Images/Page6/Banner1/Page6 banner1 img4.png";

const Banner = () => {
  return (
    <>
      <div className="relative bg-[#162A43] lg:min-h-[100vh]">
        {/* <img className="absolute -top-36" src={p6_b1_img4} alt="" /> */}
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-6xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-20">
            <div className="space-y-8 py-10 col-span-1 mt-16 relative z-10">
              <div className="text-white banner-text font-medium font-sans ">
                Property management Service you can trust
              </div>
              <p className="text-[#DEE1E5] font-normal text-lg">
                Property ownership and management should be seamless, easy,
                safe, secure and provide best experience for everyone involved.
              </p>
              <div className="">
                <button className="text-white text-base bg-[#BD8472] px-6 py-3 text-center rounded font-semibold">
                  Talk To Us
                </button>
              </div>
            </div>

            <div className="col-span-1 relative ">
              <div className="">
                <img className="w-5/6 mx-auto mt-16" src={p6_b1_img3} alt="" />
              </div>
            </div>
            {/* <div className='col-span-1 relative -right-40'>
            <div className='relative'>

                <div>
                    <img className='mt-20' src={p2_b1_img1} alt="" />
                </div>
                <div>
                    <img className='' src={p2_b1_img3} alt="" />
                </div>
                <div className='absolute -top-8 -left-12 -z-10'>
                    <img className='' src={p2_b1_img5} alt="" />
                </div>

            </div>
        </div> */}
            {/* <div className='col-span-1 relative -right-32'>
            <div className=''>
                <div>
                    <img className='mt-8' src={p2_b1_img2} alt="" />
                </div>
                <div>
                    <img className='' src={p2_b1_img4} alt="" />
                </div>


            </div>



        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
