import React from "react";

import { Fragment } from "react";


import {
  ArrowCircleUpIcon,


  ServerIcon,

  FastForwardIcon,
  CheckCircleIcon,
  UserAddIcon,
  CurrencyPoundIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

import {
  BookmarkIcon,

} from "@heroicons/react/solid";



const cards = [
  {
    name: "Tenant Rent Amount",
    href: "#",
    icon: CurrencyPoundIcon,
    amount: "$3659.00",
  },
  {
    name: "Tenancy Due Date",
    href: "#",
    icon: CalendarIcon,
    amount: "01-12-2022",
  },
  {
    name: "Property / Unit",
    href: "#",
    icon: LocationMarkerIcon,
    amount: "16182 RIO BAILEY / A2",
  },
  // More items...
];

const features = [
  {
    name: "Rent Per Month",
    value: "$3500.00",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus..",
    icon: CurrencyPoundIcon,
  },
  {
    name: "Up To Date",
    value: "Yes",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus..",
    icon: CheckCircleIcon,
  },
  {
    name: "Tenancy Remaining",
    value: "12 Months",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus..",
    icon: ArrowCircleUpIcon,
  },
  {
    name: "Total Occupants",
    value: "5 Person",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus..",
    icon: UserAddIcon,
  },
  {
    name: "Next Payment",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus..",
    value: "01-Jan-2023",
    icon: FastForwardIcon,
  },
  {
    name: "Database Backups",
    value: "Updated",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus..",
    icon: ServerIcon,
  },
];



const TenantPortalHomeTwo = () => {
  return (
    <>
      <div className="">
        {/* <div className="bg-white">
                    <main>

                        <div className="relative mb-2">
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                            <div className="mx-auto max-w-9xl sm:px-6 lg:px-8">
                                <div className="relative shadow-xl sm:overflow-hidden">
                                    <div className="absolute inset-0">
                                        <img
                                            className="h-full w-full object-cover"
                                            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                            alt="People working on laptops"
                                        />
                                        <div className="absolute inset-0 bg-cyan-700 mix-blend-multiply" />
                                    </div>
                                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                            <span className="block text-white">Nuova Tenant management</span>
                                            <span className="block text-cyan-200">Portal Benefits</span>
                                        </h1>
                                        <p className="mx-auto mt-6 max-w-lg text-center text-xl text-cyan-200 sm:max-w-3xl">
                                            Make it easier than ever to manage every aspect of tenant relations, from ledgers to leases, and stay on top of all important updates with an easy-to-use tenant portal.
                                        </p>
                                        <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                                            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-cyan-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                                                >
                                                    Get started
                                                </a>
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-cyan-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                                                >
                                                    Live demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </main>
                </div> */}

        <main className="flex-1 pb-8">
          {/* Page header */}
          <div className="bg-white shadow">
            <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
              <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                <div className="min-w-0 flex-1">
                  {/* Profile */}
                  <div className="flex items-center">
                    <img
                      className="hidden h-16 w-16 rounded-full sm:block"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                      alt=""
                    />
                    <div>
                      <div className="flex items-center">
                        <img
                          className="h-16 w-16 rounded-full sm:hidden"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                          alt=""
                        />
                        <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                          Good morning, Emilia Birch
                        </h1>
                      </div>
                      <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                        <dt className="sr-only">Company</dt>
                        <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                          <BookmarkIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          Duke street studio
                        </dd>
                        <dt className="sr-only">Account status</dt>
                        <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                          <CheckCircleIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                            aria-hidden="true"
                          />
                          Verified account
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  {/* <button
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                    >
                                        Add money
                                    </button> */}
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 ">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Overview
              </h2>
              <div className="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                {cards.map((card) => (
                  <div
                    key={card.name}
                    className="overflow-hidden rounded-lg bg-white shadow-md shadow-teal-500/40"
                  >
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <card.icon
                            className="h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="truncate text-sm font-medium text-gray-500">
                              {card.name}
                            </dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900">
                                {card.amount}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="bg-teal-50 px-5 py-3">
                      <div className="text-sm">

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <div className="relative bg-white py-8 sm:py-24 lg:py-12 ">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-lg font-semibold text-cyan-600">Tenant Info</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to maintain your Nuova Tenancy
            </p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
              A tenant management software allows you to keep track of all your
              prospective, active, and old tenants.
            </p>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 shadow-md shadow-cyan-500/40">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center rounded-md bg-cyan-500 p-3 shadow-lg">
                            <feature.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                          {feature.name}
                        </h3>
                        <h3 className="mt-2 text-md font-medium tracking-tight text-cyan-500">
                          {feature.value}
                        </h3>
                        <p className="mt-4 text-base text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantPortalHomeTwo;
