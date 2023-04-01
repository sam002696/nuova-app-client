import React from "react";

import p4_b3_img1 from "../../../Images/Page4/Banner3/Page4 banner3 img1.png";

import p4_TI_img1 from "../../../Images/Page4/Table/Page4 Table img rec1.png";
import p4_TI_img2 from "../../../Images/Page4/Table/Page4 Table img rec2.png";

import p4_b7_V0_img0 from "../../../Images/Page4/Banner7/Page4 banner7 V0 img0.png";
import p4_b7_V1_img1 from "../../../Images/Page4/Banner7/Page4 banner7 V1 img1.png";
import p4_b7_V2_img2 from "../../../Images/Page4/Banner7/Page4 banner7 V2 img2.png";
import p4_b7_V3_img3 from "../../../Images/Page4/Banner7/Page4 banner7 V3 img3.png";
import p4_b7_Rec_img1 from "../../../Images/Page4/Banner7/Page4 banner7 Rectangle img1.png";

const Banner = () => {
  const posts = [
    {
      title: "Boost your conversion rate",
      href: "#",
      category: { name: "Article", href: "#" },
      description:
        "Cloud Hosting is a good fit for those of you who are building personal websites, portfolios, blogs, and other systems",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "6 min",
      author: {
        name: "Roel Aufderehar",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "How to use search engine optimization to drive sales",
      href: "#",
      category: { name: "Video", href: "#" },
      description:
        "Cloud Hosting is a good fit for those of you who are building personal websites, portfolios, blogs, and other systems",
      date: "Mar 10, 2020",
      datetime: "2020-03-10",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "4 min",
      author: {
        name: "Brenna Goyette",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "Improve your customer experience",
      href: "#",
      category: { name: "Case Study", href: "#" },
      description:
        "Cloud Hosting is a good fit for those of you who are building personal websites, portfolios, blogs, and other systems",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "11 min",
      author: {
        name: "Daniela Metz",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "Improve your customer experience",
      href: "#",
      category: { name: "Case Study", href: "#" },
      description:
        "Cloud Hosting is a good fit for those of you who are building personal websites, portfolios, blogs, and other systems",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "11 min",
      author: {
        name: "Daniela Metz",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  const people = [
    {
      no: "1",
      service: "Listing Creation",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "2",
      service: "Pricing Optimisation",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "3",
      service: "Cleaning + Laundry & Linen",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "4",
      service: "Guest Screening",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "5",
      service: "Full Communication",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "6",
      service: "24 Hour Check-ins",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "7",
      service: "Stocking up Consumables",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "8",
      service: "24 Hour Maintenance Support",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "9",
      service: "Guest Experience",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    // More people...
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="bg-[#F7F1E9] px-4 sm:px-6 lg:px-8 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}

          <div className="space-y-6 text-center p-20">
            <div className="text-[#162A43] font-semibold text-5xl font-sans">
              <h1 className="leading-snug">
                To put it simply we take the <br /> hassle out of hosting
              </h1>
            </div>

            <p className="text-[#565151] font-normal text-lg font-sans">
              We are dedicated to helping property owners maximise their
              short-term property rental opportunities via Airbnb and other
              leading booking sites. We take care of every single detail 365
              days a year so you don’t have to, handling your property’s set up
              and online profile, photography, bookings and price optimisation
              to achieve maximum revenue.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-[#F7F1E9] pt-16 pb-20 px-4 sm:px-6 lg:pt-4 lg:pb-28 lg:px-8">
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl text-[#162A43] font-bold sm:text-3xl font-sans">
              We have got you covered
            </h2>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0 bg-white">
                  <img
                    className="h-48 w-full p-3 object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-3 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="mt-3 text-sm text-gray-500">
                        {post.description}
                      </p>
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
          <div className="grid grid-cols-2 gap-x-12">
            <div className="space-y-8 py-10 col-span-1 mt-36 relative -left-20">
              <div className="text-[#162A43] text-4xl font-semibold font-sans">
                Increase profitability of your portfolio
              </div>
              <p className="text-[#565151] font-normal text-lg text-justify">
                Herddle’s platform tracks maintenance, compliance, financials
                and performance to get full visibility of your portfolio. One
                monthly fee – no excessive lump sum. costs Controlled
                maintenance costs from quotes tendered by multiple contractors
              </p>
            </div>

            <div className="col-span-1 relative">
              <div>
                <img className="mt-20" src={p4_b3_img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="col-span-1 relative -left-32">
              <div>
                <img className="mt-20" src={p4_b3_img1} alt="" />
              </div>
            </div>

            <div className="space-y-8 py-10 col-span-1 mt-36 ">
              <div className="text-[#162A43] text-4xl font-semibold font-sans">
                Increase profitability of your portfolio
              </div>
              <p className="text-[#565151] font-normal text-lg text-justify">
                Herddle’s platform tracks maintenance, compliance, financials
                and performance to get full visibility of your portfolio. One
                monthly fee – no excessive lump sum. costs Controlled
                maintenance costs from quotes tendered by multiple contractors
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="space-y-8 py-10 col-span-1 mt-36 relative -left-20">
              <div className="text-[#162A43] text-4xl font-semibold font-sans">
                Increase profitability of your portfolio
              </div>
              <p className="text-[#565151] font-normal text-lg text-justify">
                Herddle’s platform tracks maintenance, compliance, financials
                and performance to get full visibility of your portfolio. One
                monthly fee – no excessive lump sum. costs Controlled
                maintenance costs from quotes tendered by multiple contractors
              </p>
            </div>

            <div className="col-span-1 relative">
              <div>
                <img className="mt-20" src={p4_b3_img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="col-span-1 relative -left-32">
              <div>
                <img className="mt-20" src={p4_b3_img1} alt="" />
              </div>
            </div>

            <div className="space-y-8 py-10 col-span-1 mt-36 ">
              <div className="text-[#162A43] text-4xl font-semibold font-sans">
                Increase profitability of your portfolio
              </div>
              <p className="text-[#565151] font-normal text-lg text-justify">
                Herddle’s platform tracks maintenance, compliance, financials
                and performance to get full visibility of your portfolio. One
                monthly fee – no excessive lump sum. costs Controlled
                maintenance costs from quotes tendered by multiple contractors
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-col ">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                <table
                  className="min-w-full border-separate"
                  style={{ borderSpacing: 0 }}
                >
                  <thead className="bg-[#BD8472]">
                    <tr className="bg-[#BD8472]">
                      <th
                        scope="col"
                        className=" border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-center text-lg font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-36"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className=" hidden border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter sm:table-cell"
                      >
                        Service
                      </th>
                      <th
                        scope="col"
                        className=" hidden border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter lg:table-cell"
                      >
                        Premium Management (15.7% + Vat)
                      </th>
                      <th
                        scope="col"
                        className=" border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter"
                      >
                        Individually Priced (Optional)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {people.map((person, personIdx) => (
                      <tr
                        key={person.email}
                        className={
                          personIdx % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"
                        }
                      >
                        <td
                          className={classNames(
                            personIdx !== people.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap py-4 pl-4 pr-3 text-md font-medium text-gray-900 sm:pl-6 lg:pl-36 text-center"
                          )}
                        >
                          {person.no}
                        </td>
                        <td
                          className={classNames(
                            personIdx !== people.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap p-3 py-4 text-md text-gray-900 hidden sm:table-cell"
                          )}
                        >
                          {person.service}
                        </td>
                        <td
                          className={classNames(
                            personIdx !== people.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-32 py-4 text-sm text-gray-500 hidden lg:table-cell"
                          )}
                        >
                          <img className="" src={person.management} alt="" />
                        </td>
                        <td
                          className={classNames(
                            personIdx !== people.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-28 py-4 text-sm text-gray-500"
                          )}
                        >
                          <img className="" src={person.individually} alt="" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="pt-16">
            <h1 className="text-4xl font-mono font-semibold text-center">
              Easy Steps
            </h1>
          </div>
          <div className="pt-4">
            <img className="w-1/3 mx-auto" src={p4_b7_V0_img0} alt="" />
          </div>

          <div className="grid grid-cols-3 gap-x-12">
            <div className="space-y-3 py-10 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 " src={p4_b7_Rec_img1} alt="" />
                <div className="absolute z-20 top-10 left-20">
                  <img
                    className="mb-6 w-2/3 mx-auto"
                    src={p4_b7_V1_img1}
                    alt=""
                  />
                </div>
              </div>

              <div className="text-[#162A43] font-semibold text-xl font-sans ">
                Step 1 Tell us About Your Property
              </div>

              <p className="text-[#565151] font-normal text-md">
                We find quality renter fast. Using all major property portals
                and innovative digital marketing methods. We find find the
                perfect residents for your property.
              </p>
            </div>
            <div className="space-y-3 py-10 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 " src={p4_b7_Rec_img1} alt="" />
                <div className="absolute z-20 top-12 left-28">
                  <img
                    className="mb-6 w-2/3 mx-auto"
                    src={p4_b7_V2_img2}
                    alt=""
                  />
                </div>
              </div>

              <div className="text-[#162A43] font-semibold text-xl font-sans ">
                Step 1 Tell us About Your Property
              </div>

              <p className="text-[#565151] font-normal text-md">
                We find quality renter fast. Using all major property portals
                and innovative digital marketing methods. We find find the
                perfect residents for your property.
              </p>
            </div>
            <div className="space-y-3 py-10 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 " src={p4_b7_Rec_img1} alt="" />
                <div className="absolute z-20 top-12 left-24">
                  <img
                    className="mb-6 w-2/3 mx-auto"
                    src={p4_b7_V3_img3}
                    alt=""
                  />
                </div>
              </div>

              <div className="text-[#162A43] font-semibold text-xl font-sans ">
                Step 1 Tell us About Your Property
              </div>

              <p className="text-[#565151] font-normal text-md">
                We find quality renter fast. Using all major property portals
                and innovative digital marketing methods. We find find the
                perfect residents for your property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
