import React from "react";

import { XIcon, MicrophoneIcon } from "@heroicons/react/outline";

import { Link } from "react-router-dom";

// import landlord_dash_img1 from "../../../Images/LandlordPortalImages/LandLordDashboard/red_wave.png";
// import landlord_dash_img2 from "../../../Images/LandlordPortalImages/LandLordDashboard/green_wave.png";
// import landlord_dash_img3 from "../../../Images/LandlordPortalImages/LandLordDashboard/blue_wave.png";
// import landlord_dash_img4 from "../../../Images/LandlordPortalImages/LandLordDashboard/orange_wave.png";
import IncExpBarChart from "./LandlordRecharts/IncExpBarChart";
import RatingRadialBarChart from "./LandlordRecharts/RatingRadialBarChart";

const landlords = [
  {
    name: "Jane Cooper",
    title: "Property Owner",
    property_title: "Nuova Housing Society",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    Street: "54 Mill Lane",
    City: "Cambridge",
    Zip: "CB24 3QV",
    Country: "United Kingdom",
  },
];

const LandlordPortalHomeTwo = () => {
  return (
    <>
      <div className="bg-gradient-to-l from-stone-100 to-white">
        <div className="mx-auto pt-12 pb-4 grid max-w-lg gap-5 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
          <div className="bg-[#0f2e5a] rounded-lg shadow-lg">
            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8 ">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex w-0 flex-1 items-center">
                  <span className="flex rounded-lg bg-white p-2">
                    <MicrophoneIcon
                      className="h-6 w-6 text-[#2f3e83]"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="ml-3 truncate font-medium text-white">
                    <span className="md:hidden">
                      We announced a new product!
                    </span>
                    <span className="hidden md:inline">
                      Big news! We're excited to announce 10% Income Increase.
                    </span>
                  </p>
                </div>
                <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                  <Link
                    to="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-50"
                  >
                    Learn more
                  </Link>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                  <button
                    type="button"
                    className="-mr-1 flex rounded-md p-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  >
                    <span className="sr-only">Dismiss</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mx-auto  max-w-2xl   px-4 sm:px-6  lg:max-w-7xl  lg:px-8">
          <div className="grid grid-col-1 lg:grid-cols-4 gap-x-5">
            <div className="space-y-2 py-8 col-span-1 ">
              <div className="relative border-b-4 border-b-[#E63167] border border-solid border-[#E3E8EF] rounded-md bg-white">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={landlord_dash_img1}
                    alt="People working on laptops"
                  />
                </div>
                <div className="flex flex-row items-center">
                  <div className="border rounded-full p-1.5 mt-4 ml-4 bg-red-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-red-600 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                  </div>
                  <p className=" font-semibold text-2xl ml-3 mt-4 text-red-400">
                    Income
                  </p>
                </div>

                <div className=" p-3">
                  <div className="h-5">&nbsp;</div>
                  <span className=" font-bold text-xl ml-3 text-[#5A5F68]">
                    <span className="text-xl">GBP </span>
                    5000.00
                  </span>
                  <div className=" mt-1 pb-4 text-lg ml-3 text-[#5A5F68]">
                    <span className="font-semibold">1000</span>
                    <span> Monthly Income</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 py-8 col-span-1 ">
              <div className="relative border-b-4 border-b-[#29CC9E] border border-solid border-[#E3E8EF] rounded-md bg-white">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={landlord_dash_img2}
                    alt="People working on laptops"
                  />
                </div>
                <div className="flex flex-row items-center">
                  <div className="border rounded-full p-1.5 mt-4 ml-4 bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className=" font-semibold text-2xl ml-3 mt-4 text-green-400">
                    Expenses
                  </p>
                </div>
                <div className=" p-3">
                  <div className="h-5">&nbsp;</div>
                  <span className=" font-bold text-xl ml-3 text-[#5A5F68]">
                    <span className="text-xl">GBP </span>
                    2000.00
                  </span>
                  <div className=" mt-1 pb-4 text-lg ml-3 text-[#5A5F68]">
                    <span className="font-semibold">350</span>
                    <span> Monthly Expenses</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 py-8 col-span-1 ">
              <div className="relative border-b-4 border-b-[#3980E5] border border-solid border-[#E3E8EF] rounded-md bg-white">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={landlord_dash_img3}
                    alt="People working on laptops"
                  />
                </div>
                <div className="flex flex-row items-center">
                  <div className="border rounded-full p-1.5 mt-4 ml-4 bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-blue-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                      />
                    </svg>
                  </div>
                  <p className=" font-semibold text-2xl ml-3 mt-4 text-blue-400">
                    Profit
                  </p>
                </div>
                <div className=" p-3">
                  <div className="h-5">&nbsp;</div>
                  <span className=" font-bold text-xl ml-3 text-[#5A5F68]">
                    <span className="text-xl">GBP </span>
                    3000.00
                  </span>
                  <div className=" mt-1 pb-4 text-lg ml-3 text-[#5A5F68]">
                    <span className="font-semibold">750</span>
                    <span> Monthly Profit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 py-8 col-span-1 ">
              <div className="relative border-b-4 border-b-[#FF7776] border border-solid border-[#E3E8EF] rounded-md bg-white">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={landlord_dash_img4}
                    alt="People working on laptops"
                  />
                </div>
                <div className="flex flex-row items-center">
                  <div className="border rounded-full p-1.5 mt-4 ml-4 bg-orange-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-orange-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </div>
                  <p className=" font-semibold text-2xl ml-3 mt-4 text-orange-400">
                    Rating
                  </p>
                </div>
                <div className=" p-3">
                  <div className="h-5">&nbsp;</div>
                  <span className=" font-bold text-xl ml-3 text-[#5A5F68]">
                    <span className="text-xl">4.5 </span>
                    Out of 5
                  </span>
                  <div className=" mt-1 pb-4 text-lg ml-3 text-[#5A5F68]">
                    <span className="font-semibold">5.0</span>
                    <span> Monthly Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="mx-auto  max-w-2xl   px-4 sm:px-6  lg:max-w-7xl  lg:px-8">
          <div className="grid grid-col-1 lg:grid-cols-4 gap-x-12">
            <div className="space-y-2 py-8 col-span-1 ">
              <div className="rounded-2xl bg-[#f8f5fb] shadow-lg">
                <div className="pt-10 ">
                  <div className="w-1/6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-purple-500 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                  </div>
                </div>

                <div className=" p-3">
                  <div className="h-5">&nbsp;</div>
                  <div className=" font-bold text-xl ml-3 text-[#5A5F68] text-center">
                    <span className="text-xl">$ </span>
                    150 000
                  </div>
                  <div className=" mt-1 pb-4 text-lg ml-3 text-[#5A5F68] text-center">
                    <span>Monthly Income</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 py-8 col-span-1 ">
              <div className="rounded-2xl bg-[#f0f8fa] shadow-lg">
                <div className="pt-10 ">
                  <div className="w-1/6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-blue-400 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 01-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 011.422 0l.655.218a2.25 2.25 0 001.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className=" p-3">
                  <div className="h-5">&nbsp;</div>
                  <div className=" font-bold text-xl ml-3 text-[#5A5F68] text-center">
                    <span className="text-xl">$ </span>
                    28 000
                  </div>
                  <div className=" mt-1 pb-4 text-lg ml-3 text-[#5A5F68] text-center">
                    <span>Monthly Expense</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 py-8 col-span-1 ">
              <div className="rounded-2xl bg-[#ecfafc] shadow-lg">
                <div className="pt-10 ">
                  <div className="w-1/6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-sky-400 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                      />
                    </svg>
                  </div>
                </div>

                <div className=" p-3">
                  <div className="h-5">&nbsp;</div>
                  <div className=" font-bold text-xl ml-3 text-[#5A5F68] text-center">
                    <span className="text-xl">$ </span>
                    17 000
                  </div>
                  <div className=" mt-1 pb-4 text-lg ml-3 text-[#5A5F68] text-center">
                    <span>Monthly Profit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 py-8 col-span-1 ">
              <div className="rounded-2xl bg-[#fcf3e1] shadow-lg">
                <div className="pt-10 ">
                  <div className="w-1/6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-orange-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </div>
                </div>

                <div className=" p-3">
                  <div className="h-5">&nbsp;</div>
                  <div className=" font-bold text-xl ml-3 text-[#5A5F68] text-center">
                    <span className="text-xl">4.5 </span>/ 5
                  </div>
                  <div className=" mt-1 pb-4 text-lg ml-3 text-[#5A5F68] text-center">
                    <span>Monthly Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8  px-4 sm:px-6  lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          <div className="relative pt-1 pb-20 lg:pt-1 lg:pb-28">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-md bg-white">
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <p className="text-lg font-medium text-[#2f3e83] mt-4 mb-4">
                      Landlord Profile
                    </p>

                    <div className="mt-2 block">
                      <ul className="grid grid-cols-1 gap-3">
                        {landlords.map((person) => (
                          <li
                            key={person.email}
                            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow"
                          >
                            <div className="flex flex-1 flex-col p-8">
                              <img
                                className="mx-auto h-28 w-28 flex-shrink-0 rounded-full"
                                src={person.imageUrl}
                                alt=""
                              />
                              <h3 className="mt-6 text-sm font-medium text-gray-900 text-center">
                                {person.name}
                              </h3>

                              <div className=" flex flex-row  space-x-2 items-center mt-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                  />
                                </svg>

                                <p className=" text-sm text-gray-500">
                                  {person.title}
                                </p>
                              </div>

                              <div className=" flex flex-row  space-x-2 items-center mt-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                                  />
                                </svg>

                                <p className=" text-sm text-gray-500">
                                  {person.property_title}
                                </p>
                              </div>

                              <div className=" flex flex-row  space-x-2 items-center mt-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-7 h-7"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                  />
                                </svg>

                                <p className=" text-sm text-gray-500">
                                  {person.Street} , {person.City} , {person.Zip}{" "}
                                  , {person.Country}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <h2 className="text-2xl font-semibold text-gray-700 leading-2 tracking-wide">
                Built for Portfolio and HMO Landlords
              </h2>
            </div>

            <div className="mx-auto mt-8 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-64 w-full object-cover"
                    src="https://global-uploads.webflow.com/5f18a24d02bace2ac2d05bac/624b38647ce989bdbd2c056b_residential-rental-management-software.svg"
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-lg font-medium text-gray-700">
                      Shining a Light on Equity
                    </p>
                    <div className="mt-2 mb-4 block">
                      <p className="text-sm text-gray-500">
                        Learn which companies walk the walk when it comes to
                        diversity and inclusion.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-[#2f3e83] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#2f3e83] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 relative pt-1 pb-20  lg:pt-1 lg:pb-28">
            {/* <div className="mx-auto mt-12 grid max-w-lg gap-2 lg:max-w-none lg:grid-cols-1">
              <div className="divide-y divide-gray-200 rounded-lg  sm:grid sm:grid-cols-2 sm:gap-8 sm:divide-y-0 lg:grid-cols-3">
                <div className="space-y-2 col-span-1 ">
                  <div className="relative border-b-4 border-b-[#3980E5] border border-solid border-[#E3E8EF] rounded-md bg-white">
                    <div className="text-md p-4 font-mono">
                      Application submitted
                    </div>
                    <div className="flex flex-wrap justify-center items-center mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                        />
                      </svg>

                      <span className="text-2xl font-semibold mx-2">0</span>
                    </div>

                    <div className=" p-4">
                      <div className=" text-md text-[#5A5F68]">
                        <span className="font-semibold">0</span>
                        <span> this month</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 col-span-2 ">
                  <div className="relative p-3 text-center text-white rounded-md bg-[#2272E2]">
                    <div className="flex items-center justify-center font-bold tracking-wider p-3 pt-4">
                      <img
                        src="https://portal.landlordstudio.com/Content/images/shared/chewy-quote.svg"
                        className="align-bottom"
                        alt=""
                      />
                      <span className="align-text-top leading-4">
                        CREATE A LISTING
                      </span>
                      <img
                        src="https://portal.landlordstudio.com/Content/images/shared/chewy-quote-close.svg"
                        className="align-text-top"
                        alt=""
                      />
                    </div>
                    <p className="p-2">
                      Create a listing to market your property and find quality
                      tenants.
                    </p>
                    <a
                      className=" text-sm underline tracking-wider font-semibold font-mono"
                      href="PropertyListings/Create"
                    >
                      + New listing
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="mx-auto mt-12 grid max-w-lg gap-2 lg:max-w-none lg:grid-cols-1">
              <h2 className="text-2xl font-bold text-gray-700 leading-2 tracking-wide">
                Easy and Efficient System for Landlords
              </h2>
              <p className="text-md text-gray-500 leading-2 tracking-wide">
                keeping tenants happy, planning for the future, and growing your
                business.
              </p>
            </div>

            <div className="mx-auto mt-6 grid max-w-lg gap-2 lg:max-w-none lg:grid-cols-1">
              <IncExpBarChart />
            </div>

            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="divide-y divide-gray-200 rounded-lg  sm:grid sm:grid-cols-2 sm:gap-8 sm:divide-y-0 lg:grid-cols-2">
                {/* <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <p className="text-lg font-medium text-blue-800 mt-4">
                        Property Portfolios
                      </p>
                      <div className="text-center mt-4">
                        Net Gain:&nbsp;
                        <span className="dark-blue text-lg">USD </span>
                        <span className="dark-blue text-lg">0.00</span>
                      </div>

                      <div className=" text-blue-700 mt-1 flex justify-center">
                        <img
                          src="https://portal.landlordstudio.com/Content/images/dashboard/dashboard_gain.png"
                          width="20"
                          height="20"
                          className="mr-2 -mt-1"
                          alt=""
                        />
                        <span>0.00%</span>
                      </div>
                      <div className="mb-8 mt-4">
                        <div className="text-md mt-2 text-left">
                          Current Valuation
                        </div>
                        <div className="text-gray-700 font-bold text-lg mt-1.5 text-left">
                          <span className="text-sm font-medium">GBP </span>
                          0.00
                        </div>
                        <div className="mt-2.5">
                          <div className=" bg-[#2e82f0] rounded-2xl  h-5">
                            <div className=" rounded-md w-full float-left  "></div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 border-t-2 border-gray-200 pt-3">
                        <div className="text-md mt-2 text-left">
                          Purchase Price
                        </div>
                        <div className="text-gray-700 font-bold text-lg mt-1.5 text-left">
                          <span className="text-sm font-medium">GBP </span>
                          0.00
                        </div>
                        <div className="mt-2.5">
                          <div className=" bg-gray-200 rounded-2xl  h-5">
                            <div className=" rounded-md w-full float-left  "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg">
                  <RatingRadialBarChart />
                </div>
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex-shrink-0">
                    <img
                      className="h-64 w-full object-cover"
                      src="https://global-uploads.webflow.com/5f18a24d02bace2ac2d05bac/622185262a5a550cdc37edcb_621696b2df22412e03fb676f_any-format.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <p className="text-lg font-medium text-gray-700">
                        One platform, any format
                      </p>
                      <div className="mt-2 mb-4 block">
                        <p className="text-sm text-gray-500">
                          Send mass announcements that tenants will see by
                          choosing between email, phone, text, or your tenant
                          portal.
                        </p>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-[#2f3e83] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#2f3e83] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                      >
                        Start Chatting
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg gap-2 lg:max-w-none lg:grid-cols-1">
              <div className="divide-y divide-gray-200 rounded-lg  sm:grid sm:grid-cols-2 sm:gap-8 sm:divide-y-0 lg:grid-cols-3">
                <div className="space-y-2 col-span-1 ">
                  <div className="relative border-b-4 border-b-[#01cc74] border border-solid border-[#E3E8EF] rounded-md bg-white">
                    <div className="text-md p-4 font-mono">
                      Maintenance Request
                    </div>
                    <div className="flex flex-wrap justify-center items-center mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#01cc74]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                        />
                      </svg>

                      <span className="text-2xl font-semibold mx-2">5</span>
                    </div>

                    <div className=" p-4">
                      <div className=" text-md text-[#5A5F68]">
                        <span className="font-semibold">3</span>
                        <span> this month</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 col-span-1 ">
                  <div className="relative border-b-4 border-b-[#ff4998] border border-solid border-[#E3E8EF] rounded-md bg-white">
                    <div className="text-md p-4 font-mono">Task Lists</div>
                    <div className="flex flex-wrap justify-center items-center mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#ff4998]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                        />
                      </svg>

                      <span className="text-2xl font-semibold mx-2">3</span>
                    </div>

                    <div className=" p-4">
                      <div className=" text-md text-[#5A5F68]">
                        <span className="font-semibold">1</span>
                        <span> this month</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 col-span-1 ">
                  <div className="relative border-b-4 border-b-[#f29a16] border border-solid border-[#E3E8EF] rounded-md bg-white">
                    <div className="text-md p-4 font-mono">Total Occupancy</div>
                    <div className="flex flex-wrap justify-center items-center mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#f29a16]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                      </svg>

                      <span className="text-2xl font-semibold mx-2">10</span>
                    </div>

                    <div className=" p-4">
                      <div className=" text-md text-[#5A5F68]">
                        <span className="font-semibold">2</span>
                        <span> this month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-8 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1 shadow-md shadow-gray-200">
              <div className="bg-white">
                <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:py-8 lg:px-8">
                  <h2 className="inline text-xl font-bold tracking-tight text-gray-900 sm:block sm:text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-[#2f3e83]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                      />
                    </svg>
                    <span>Don't Miss Out!</span>
                  </h2>
                  <p className="inline text-md font-medium tracking-tight text-gray-400 sm:block sm:text-md">
                    Manage any rental portfolio and get more done in less time
                    so that you can focus on what matters
                  </p>
                  <form className="mt-6 sm:flex ">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full rounded-md border-gray-300 px-5 py-1 placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500 sm:max-w-xs"
                      placeholder="Enter your email"
                    />
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full rounded-md border-gray-300 px-5 py-2 placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500 sm:max-w-xs mx-8"
                      placeholder="Property Name"
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#2f3e83] px-5 py-2 text-base font-medium text-white hover:bg-[#2f3e83] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Get Free Quote
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandlordPortalHomeTwo;
