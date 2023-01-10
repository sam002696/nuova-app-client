import React, { useEffect, useState } from "react";

import { XIcon, MicrophoneIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import axios from "axios";

const ContractorPortalHomeTwo = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [findAllJobs, setFindAllJobs] = useState([]);

  useEffect(() => {
    const handleReportsDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:5500/api/contractorJobs`);
        setFindAllJobs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleReportsDetails();
  }, []);

  return (
    <>
      <div className=" bg-gradient-to-l from-stone-100 to-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8  px-4 sm:px-6  lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          <div className="relative pt-4 pb-20 lg:pt-4 lg:pb-28">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-600 mt-4">
                      Contractor Profile
                    </p>

                    <div className="mt-2 block">
                      <ul className="grid grid-cols-1 gap-3">
                        <li
                          key={currentUser.email}
                          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow"
                        >
                          <div className="flex flex-1 flex-col p-8">
                            {currentUser?.profilePic ? (
                              <img
                                className="h-16 w-16 rounded-full"
                                src={
                                  currentUser?.profilePic &&
                                  currentUser?.profilePic
                                }
                                alt=""
                              />
                            ) : (
                              <span className=" h-16 w-16 overflow-hidden rounded-full bg-gray-100 ">
                                <svg
                                  className="h-full w-full text-gray-300"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </span>
                            )}
                            <div className="mt-4">
                              <h3 className=" text-sm font-medium text-gray-900">
                                {currentUser?.username}
                              </h3>
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
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                              </svg>

                              <p className=" text-sm text-gray-500">
                                {currentUser.email}
                              </p>
                            </div>

                            {currentUser?.occupation && (
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
                                  {currentUser?.occupation}{" "}
                                </p>
                              </div>
                            )}
                            {currentUser?.currentAddress &&
                              currentUser?.city &&
                              currentUser?.zipCode && (
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
                                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                  </svg>

                                  <p className=" text-sm text-gray-500">
                                    {currentUser?.currentAddress}{" "}
                                    {currentUser?.city} {currentUser?.zipCode}{" "}
                                    {currentUser?.country}{" "}
                                  </p>
                                </div>
                              )}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <h2 className="text-2xl font-semibold text-gray-700 leading-2 tracking-wide">
                Getting the Most of Nuova Contractor App
              </h2>
            </div>

            <div className="mx-auto mt-8 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-64 w-full object-cover"
                    src="https://blog-consumer.glassdoor.com/app/uploads/sites/2/signs_of_a_transparent_company.png"
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
                      className="inline-flex items-center rounded-md border border-transparent bg-green-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 relative pt-4 pb-20  lg:pt-4 lg:pb-28">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="bg-green-500">
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex w-0 flex-1 items-center">
                      <span className="flex rounded-lg bg-green-700 p-2">
                        <MicrophoneIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                      <p className="ml-3 truncate font-medium text-white">
                        <span className="md:hidden">
                          We announced a new product!
                        </span>
                        <span className="hidden md:inline">
                          Big news! We're excited to announce 20+ new jobs.
                        </span>
                      </p>
                    </div>
                    <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                      <Link
                        to="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-green-600 shadow-sm hover:bg-green-50"
                      >
                        Learn more
                      </Link>
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                      <button
                        type="button"
                        className="-mr-1 flex rounded-md p-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                      >
                        <span className="sr-only">Dismiss</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg gap-2 lg:max-w-none lg:grid-cols-1">
              <h2 className="text-3xl font-bold text-gray-700 leading-2 tracking-wide">
                Explore Jobs Near You
              </h2>
              <p className="text-lg text-gray-500 leading-2 tracking-wide">
                Recommendations are based on your profile, job preferences, and
                activity on Nuova Portal.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg gap-2 lg:max-w-none lg:grid-cols-1">
              <div className="divide-y divide-gray-200 rounded-lg  sm:grid sm:grid-cols-2 sm:gap-8 sm:divide-y-0">
                {findAllJobs.slice(0, 4).map((report) => (
                  <div
                    key={report.email}
                    className=" bg-white rounded-lg shadow-md divide-y divide-gray-200"
                  >
                    <div className="w-full flex justify-between px-6 py-6 space-x-6">
                      <img
                        className="w-10 h-10 bg-gray-300 rounded-md flex-shrink-0"
                        src={report?.issueImage}
                        alt=""
                      />
                      <div className="flex-1 truncate">
                        <div className="flex items-center space-x-1">
                          <h3 className="text-cyan-700 text-sm font-semibold truncate">
                            Nuova System Jobs
                          </h3>
                        </div>
                        <div className="flex items-center space-x-1">
                          <h3 className="text-gray-900 text-lg font-semibold truncate">
                            {report?.issueName}
                          </h3>
                        </div>
                        <p className="mt-1 text-gray-500 text-sm truncate">
                          {report?.tenantAddress}
                        </p>
                        <p className="mt-1 text-gray-500 text-sm truncate">
                          {report?.perHourIncome}
                        </p>
                      </div>

                      <div className="flex flex-col justify-between">
                        <button className="mt-2 flex-shrink-0 inline-block px-2 py-1.5 bg-green-500 text-xs font-medium text-white border-green-700 rounded-lg">
                          Apply
                        </button>
                        <div className="">
                          <p className="mt-1 text-gray-500 text-sm truncate text-right">
                            1d
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center mt-2 text-md text-blue-700">
                See All Jobs ...
              </p>
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
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                      />
                    </svg>
                    <span>Don't Miss Out!</span>
                  </h2>
                  <p className="inline text-md font-medium tracking-tight text-green-500 sm:block sm:text-md">
                    Get jobs matching your preferences as soon as they're
                    posted.
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
                      className="w-full rounded-md border-gray-300 px-5 py-1 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs"
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
                      className="w-full rounded-md border-gray-300 px-5 py-2 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs mx-8"
                      placeholder="Job Location"
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-2 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        Create Job Alert
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

export default ContractorPortalHomeTwo;
