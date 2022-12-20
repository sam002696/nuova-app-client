import React from "react";

import {
  CurrencyPoundIcon,
  CalendarIcon,
  ArrowRightIcon,
  OfficeBuildingIcon,
  CheckCircleIcon,
  ChatAltIcon,
  ShieldCheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";

import { BookmarkIcon } from "@heroicons/react/solid";

import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Tenant",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cody Fisher",
    title: "Product Directives Officer",
    role: "Tenant",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cody Fisher",
    title: "Product Directives Officer",
    role: "Tenant",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
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

const cards = [
  {
    name: "Tenant Rental Amount",
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
  // {
  //     name: "Property / Unit",
  //     href: "#",
  //     icon: LocationMarkerIcon,
  //     amount: "16182 RIO BAILEY / A2",
  // },
  // More items...
];

const TenantPortalHomeThree = () => {
  return (
    <>
      <div className=" bg-gradient-to-l from-stone-100 to-white">
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
            <div className="py-8 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
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

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8  px-4 sm:px-6  lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          <div className="relative pt-4 pb-20 lg:pt-4 lg:pb-28">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-64 w-full object-cover"
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      Your Property Details
                    </p>
                    <div className="mt-2 block">
                      <p className="text-lg font-semibold tracking-wider text-gray-700">
                        St. James Park 921b, <br /> London W1T tRJ, England
                      </p>
                      <div className="flex flex-row justify-between mt-4">
                        <p className="text-md font-medium text-cyan-600">
                          Size
                        </p>
                        <p className="text-md font-medium text-gray-600">
                          1038 sq. ft.
                        </p>
                      </div>

                      <div className="flex flex-row justify-between mt-3 border-t-2 pt-3">
                        <p className="text-md font-medium text-cyan-600">
                          Bedrooms
                        </p>
                        <p className="text-md font-medium text-gray-600">5</p>
                      </div>

                      <div className="flex flex-row justify-between mt-3 border-t-2 pt-3">
                        <p className="text-md font-medium text-cyan-600">
                          Status
                        </p>
                        <p className="text-md font-medium text-gray-600">
                          Furnished
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-1">
              {cards.map((card) => (
                <div
                  key={card.name}
                  className="overflow-hidden rounded-lg bg-white shadow-md shadow-teal-500/40"
                >
                  <div className="p-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <card.icon
                          className="h-8 w-8 text-white bg-cyan-500 rounded-lg p-1"
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
                      <Link
                        to={card.href}
                        className="font-medium text-cyan-700 hover:text-cyan-900"
                      ></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative pt-4 pb-20  lg:pt-4 lg:pb-28">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-600 mt-4">
                      Lease Terms
                    </p>
                    <div className="mt-2 block">
                      <p className="flex items-center text-2xl font-semibold font-mono text-green-600">
                        {" "}
                        <CurrencyPoundIcon
                          className="h-6 w-6 text-green-600 rounded-lg"
                          aria-hidden="true"
                        />
                        1,699{" "}
                      </p>
                      <p className="text-sm font-medium text-gray-400">
                        Monthly Rent (payment is secured)
                      </p>
                      <div className="flex flex-row justify-between mt-8">
                        <p className=" flex items-center text-md font-medium text-gray-600">
                          <CalendarIcon
                            className="h-6 w-6 text-green-400 rounded-lg"
                            aria-hidden="true"
                          />{" "}
                          <span className="mx-2">01 June, 2022</span>
                        </p>
                        <p className=" flex items-center text-md font-medium text-cyan-600">
                          <ArrowRightIcon
                            className="h-4 w-6 text-gray-700 rounded-lg"
                            aria-hidden="true"
                          />{" "}
                          <span></span>
                        </p>
                        <p className="flex text-md font-medium text-gray-600">
                          <span>01 June, 2023</span>
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-400 mt-1">
                        Tenancy Period (12 Months)
                      </p>

                      <div className="flex flex-row justify-between mt-3 border-t-2 pt-3">
                        <p className="text-md font-medium text-green-600">
                          Next Renewal
                        </p>
                        <p className="text-md font-medium text-gray-600">
                          June, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-600 mt-4">
                      Tenants (3)
                    </p>

                    <div className="mt-2 block">
                      <ul className="grid grid-col-1 gap-3">
                        {people.map((person) => (
                          <li
                            key={person.email}
                            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                          >
                            <div className="flex w-full items-center justify-between space-x-6 p-4">
                              <div className="flex-1 truncate">
                                <div className="flex items-center space-x-3">
                                  <h3 className="truncate text-sm font-medium text-gray-900">
                                    {person.name}
                                  </h3>
                                  <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                    {person.role}
                                  </span>
                                </div>
                                <p className="mt-1 truncate text-sm text-gray-500">
                                  {person.title}
                                </p>
                              </div>
                              <img
                                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                                src={person.imageUrl}
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="-mt-px flex divide-x divide-gray-200">
                                <div className="flex w-0 flex-1">
                                  <a
                                    href={`mailto:${person.email}`}
                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
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
                                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                                  >
                                    <PhoneIcon
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">Call</span>
                                  </a>
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

            {/* <div className="mx-auto mt-12 grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-1">
              <div className="overflow-hidden rounded-lg bg-white shadow-md shadow-teal-500/40">
                <div className="p-8">
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <OfficeBuildingIcon
                        className="h-8 w-8 text-white bg-green-500 rounded-full p-1"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="truncate text-lg font-medium text-green-500">
                          Nuova Property Management
                        </dt>
                        <dd>
                          <div className="text-sm font-medium text-gray-400">
                            nuova@example.com
                          </div>
                        </dd>
                        <dd>
                          <div className="text-sm font-medium text-gray-400">
                            +71 444 333 125
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="relative pt-4 pb-20  lg:pt-4 lg:pb-28">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-sky-600 mt-4">
                      Property Managers
                    </p>

                    <div className="mt-2 block">
                      <ul className="grid grid-cols-1 gap-3">
                        {propertymanager.map((person) => (
                          <li
                            key={person.email}
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
                                    <ChatAltIcon
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

            <div className="mx-auto mt-12 grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-1">
              <div className="overflow-hidden rounded-lg bg-white shadow-md shadow-teal-500/40">
                <div className="p-8">
                  {/* <p className="text-sm font-medium text-green-600 mt-4 mb-2">
                                        <a href='#' className="hover:underline">
                                            Agency
                                        </a>
                                    </p> */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <ShieldCheckIcon
                        className="h-8 w-8 text-white bg-sky-500 rounded-full p-1"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="truncate text-lg font-medium text-sky-500">
                          Quick Maintenance Request
                        </dt>
                        <dd>
                          <button
                            type="button"
                            className="inline-flex items-center rounded-full border border-transparent bg-sky-400 p-1 text-white text-sm shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-3"
                          >
                            <PlusIcon className="h-4 w-4" aria-hidden="true" />
                            <span className="mx-2">Create One</span>
                          </button>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-sky-600 mt-4">
                      Deposit Details
                    </p>
                    <div className="mt-2 block">
                      <p className="flex items-center text-2xl font-semibold font-mono text-sky-600">
                        {" "}
                        <CurrencyPoundIcon
                          className="h-6 w-6 text-sky-700 rounded-lg"
                          aria-hidden="true"
                        />
                        1,200{" "}
                      </p>
                      <p className="text-sm font-medium text-gray-400">
                        Available Deposit (Your Split 50%)
                      </p>
                      <div className="flex flex-row justify-between mt-3 border-t-2 pt-3">
                        <p className="text-md font-medium text-sky-600">
                          Start Date
                        </p>
                        <p className="text-md font-medium text-gray-600">
                          June, 2022
                        </p>
                      </div>
                      <div className="flex flex-row justify-between mt-3 border-t-2 pt-3">
                        <p className="text-md font-medium text-sky-600">
                          Estimated Approval Date
                        </p>
                        <p className="text-md font-medium text-gray-600">
                          July, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantPortalHomeThree;
