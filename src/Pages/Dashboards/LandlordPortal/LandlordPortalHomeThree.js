import React from "react";

import { ChatAltIcon } from "@heroicons/react/outline";

import { Link } from "react-router-dom";
import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/solid";

import {
  BadgeCheckIcon,
  UsersIcon,
  ShieldCheckIcon,
  DocumentAddIcon,
} from "@heroicons/react/outline";

const actions = [
  {
    title: "Maintenance",
    href: "/landlord-portal-dashboard/landlord-portal-maintenance",
    icon: ShieldCheckIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    notification: "15",
    information:
      "As a landlord, you can view all of your properties maintenances in one place",
  },
  {
    title: "Task",
    href: "/landlord-portal-dashboard/landlord-portal-tasks",
    icon: DocumentAddIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    notification: "10",
    information:
      "Our property managers are always active to solve any issues by assigning the task",
  },
  {
    title: "Total Occupancy",
    href: "/landlord-portal-dashboard/landlord-property",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    notification: "4",
    information:
      "Track all the tenant occupants in your properties from our portal in ease",
  },
  {
    title: "Property Rating",
    href: "#",
    icon: BadgeCheckIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    notification: "5",
    information:
      "Rating of your property helps you earn more and increase the value of your property",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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

const propertymanager = [
  {
    name: "Jane Cooper",
    title: "Nuova Maintenance Executive",
    role: "Property Manager",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const LandlordPortalHomeThree = () => {
  return (
    <>
      <div className="bg-gradient-to-l from-stone-100 to-white">
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

              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-sky-600 mt-4">
                      Property Manager
                    </p>

                    <div className="mt-2 block">
                      <ul className="grid grid-cols-1 gap-3">
                        {propertymanager.map((person) => (
                          <li
                            key={person._id}
                            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                          >
                            <div className="flex flex-1 flex-col p-8">
                              <img
                                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                                src={person.imageUrl}
                                alt=""
                              />
                              <h3 className="mt-6 text-sm font-medium text-gray-900">
                                {person.name}
                              </h3>
                              <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <dd className="text-sm text-gray-500">
                                  {person.title}
                                </dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="mt-3">
                                  <span className="rounded-full bg-sky-200 px-2 py-1 text-xs font-medium text-sky-800">
                                    {person.role}
                                  </span>
                                </dd>
                              </dl>
                            </div>
                            <div>
                              <div className="-mt-px flex divide-x divide-gray-200">
                                <div className="flex w-0 flex-1">
                                  <a
                                    href={`mailto:${person.email}`}
                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                  >
                                    <AtSymbolIcon
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">Email</span>
                                  </a>
                                </div>
                                <div className="-ml-px flex w-0 flex-1">
                                  <a
                                    href={`tel:${person.telephone}`}
                                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                  >
                                    <PhoneIcon
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">Call</span>
                                  </a>
                                </div>
                                <div className="-ml-px flex w-0 flex-1">
                                  <Link
                                    to="/tenant-portal-dashboard/tenant-portal-inbox"
                                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                  >
                                    <ChatAltIcon
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">Chat</span>
                                  </Link>
                                </div>
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
          </div>

          <div className="col-span-2 relative pt-1 pb-20  lg:pt-1 lg:pb-28">
            {/* <div className="mx-auto mt-12 grid max-w-lg gap-2 lg:max-w-none lg:grid-cols-1">
              <h2 className="text-2xl font-semibold text-gray-700 leading-2">
                Easy and Efficient System for Landlords
              </h2>
              <p className="text-md text-gray-500 leading-2 tracking-wide">
                keeping tenants happy, planning for the future, and growing your
                business.
              </p>
            </div> */}

            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="divide-y divide-gray-200 rounded-lg  sm:grid sm:grid-cols-1 sm:gap-8 sm:divide-y-0 lg:grid-cols-1">
                <div className="divide-y divide-gray-200 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-2 sm:divide-y-0">
                  {actions.map((action, actionIdx) => (
                    <div
                      key={action.title}
                      className={classNames(
                        actionIdx === 0
                          ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                          : "",
                        actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                        actionIdx === actions.length - 2
                          ? "sm:rounded-bl-lg"
                          : "",
                        actionIdx === actions.length - 1
                          ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                          : "",
                        "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                      )}
                    >
                      <div>
                        <span
                          className={classNames(
                            action.iconBackground,
                            action.iconForeground,
                            "inline-flex rounded-lg p-3 ring-4 ring-white"
                          )}
                        >
                          <action.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">
                          <Link to={action.href} className="focus:outline-none">
                            {/* Extend touch target to entire panel */}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            {action.title}
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 ml-2">
                              <svg
                                className="-ml-0.5 mr-1.5 h-2 w-2 text-blue-400"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx={4} cy={4} r={3} />
                              </svg>
                              {action.notification}
                            </span>
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          {action.information}
                        </p>
                      </div>
                      {/* <span
                        className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                      </span> */}
                    </div>
                  ))}
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

export default LandlordPortalHomeThree;
