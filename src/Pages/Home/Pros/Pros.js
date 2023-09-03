import React from "react";
import pic1 from "../../../Images/Pros/Group 1000002265.png";
import pros1 from "../../../Images/Pros/Pros 1.png";
import pros2 from "../../../Images/Pros/Pros 2.png";
import pros2_3 from "../../../Images/Pros/Pros 2-3.png";
import pros3 from "../../../Images/Pros/Pros 3.png";
import pros4 from "../../../Images/Pros/Pros 4.png";
import pros5 from "../../../Images/Pros/Pros 5.png";
import invoice from "../../../Images/Pros/Group 1000002263.png";
import pic3 from "../../../Images/Pros/Group 1000002281.png";
import rectangle from "../../../Images/Pros/Rectangle 4584.png";
import maintenance from "../../../Images/Pros/Group 1000002237.png";
import tickMark from "../../../Images/Pros/Vector.png";
const Pros = () => {
  return (
    <>
      <section className="bg-[#F4F6FF]">
        <div className="container relative">
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-x-20">
            <div className="col-span-1 mt-32">
              <img className="" src={pros2_3} alt="" />
            </div>
            {/* <img className='absolute left-1/4 w-1/4' src={invoice} alt="" />
                        <img className='absolute bottom-0 left-3.5 w-1/2' src={rectangle} alt="" /> */}
            <div className=" space-y-10 col-span-1 relative mt-32">
              <h1 className=" font-semibold text-4xl font-sans text-[#162A43]">
                Your own single platform to monitor all of your assets
              </h1>
              <p className="  font-normal text-lg text-[#565151]">
                Nuovas platform tracks maintenance, compliance, financials and
                performance to get full visibility of your portfolio.
              </p>
              <ul className=" space-y-4">
                <li className="font-normal text-sm text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  In App messaging with your Nuova team, enjoy from always only
                  having one point of contact!
                </li>
                <li className="font-normal text-sm text-[#565151] flex items-center">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Dashboard to track rental income, expenses and tenant ratings.
                </li>
                <li className="font-normal text-sm text-[#565151] flex items-center">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Secure document library which stores compliance documents to
                  make sure you are always up to date.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container relative ">
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-x-20">
            <div className="  space-y-10 col-span-1 relative mt-32">
              <h1 className=" font-semibold text-4xl font-sans text-[#162A43]">
                Unleash the potential of your portfolio
              </h1>
              <p className="  font-normal text-lg text-[#565151]">
                Boost NOI with flexible rentals, rent by the day, the week and
                the month.
              </p>
              <p className="  font-normal text-lg text-[#565151]">
                Here at Nuova we will always aim to make the most out of your
                property porfolio, simply sit back and watch your income grow in
                real time.
              </p>
              <ul className=" space-y-4">
                <li className="font-normal text-sm text-[#565151] flex items-center ">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Increase tenant satisfaction which results to a longer average
                  tenancy length.
                </li>
                <li className="font-normal text-sm text-[#565151] flex items-center">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />{" "}
                  Always keeping repair costs low by using our network of
                  trusted contractors.
                </li>
                <li className="font-normal text-sm text-[#565151] flex items-center">
                  <img
                    className=" border border-none p-1 rounded-full mr-3 backgroundColor-tickmark"
                    src={tickMark}
                    alt=""
                  />
                  With over 35 years of experience in the sector we know how to
                  keep costs low and ensure returns are kept high.
                </li>
              </ul>
            </div>
            <div className="col-span-1 mt-40">
              <img className="" src={pros3} alt="" />
            </div>
          </div>
        </div>

        <div className="container relative pb-12">
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-x-20">
            <div className="col-span-1 mt-32">
              <img className="w-5/6" src={pros5} alt="" />
            </div>
            {/* <img className='absolute left-1/4 w-1/4' src={invoice} alt="" />
                        <img className='absolute bottom-0 left-3.5 w-1/2' src={rectangle} alt="" /> */}
            <div className=" space-y-10 col-span-1 relative mt-32">
              <h1 className=" font-semibold text-4xl font-sans text-[#162A43]">
                Any time, any place, anywhere
              </h1>
              <p className="  font-normal text-lg text-[#565151]">
                Nuova Property Management & Letting has been designed and built
                with the use of over 35 years of residential property
                experience. Our Nuova Property platform allows you to oversee
                your portfolio and speak with your dedicated property manager
                all from the touch of a button through your own personal
                dashboard.
              </p>
              <p className="  font-normal text-lg text-[#565151]">
                Your tenants will be happier too, our tenant app allows them to
                log any issues they are having and track the progress in real
                time, no more waiting for a call back, they will receive timely
                updates and be able to talk to their property manager directly
                through the web app.
              </p>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto mt-5 pb-8 max-w-6xl sm:mt-5 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              NUOVA PROPERTY MANAGEMENT
            </h2>
            <p className="mx-auto mt-8 max-w-5xl text-lg leading-8 text-gray-300 text-justify">
              Here at Nuova, customer service is at the heart of our approach,
              we believe everything starts by having a good relationship with
              both our landlords and our tenants. We have a great team of
              proactive, passionate people who really care about our customers
              and their homes! We have seen a lack of transparency in the sector
              which is why we have invested more time into making sure both
              tenants and landlords will always be kept up to date when it comes
              to their property and their home!
            </p>

            <p className="mx-auto mt-4 max-w-5xl text-lg leading-8 text-gray-300 text-justify">
              We are always looking for ways in which to make both our landlord
              and tenants lives more convenient and straight forward.
            </p>
            <p className="mx-auto mt-4 max-w-5xl text-lg leading-8 text-gray-300 text-justify">
              Property is what we love to do!
            </p>
            {/* <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div> */}
            <div
              className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pros;
