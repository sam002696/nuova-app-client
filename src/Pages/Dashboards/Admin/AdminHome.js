import React, { useState } from "react";
import { Fragment } from "react";
import { CheckCircleIcon, ChevronRightIcon } from "@heroicons/react/solid";

import {
  EyeIcon,
  UserIcon,
  OfficeBuildingIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const cards = [
  {
    name: "Properties",
    href: "#",
    icon: OfficeBuildingIcon,
    amount: "24",
    color: "bg-blue-100",
    cardColor: "text-blue-400",
  },
  {
    name: "Property managers",
    href: "#",
    icon: UsersIcon,
    amount: "13",
    color: "bg-red-100",
    cardColor: "text-red-400",
  },
  {
    name: "tenants",
    href: "#",
    icon: UsersIcon,
    amount: "27",
    color: "bg-teal-100",
    cardColor: "text-teal-400",
  },
  {
    name: "landlords",
    href: "#",
    icon: UsersIcon,
    amount: "10",
    color: "bg-cyan-100",
    cardColor: "text-cyan-400",
  },
  {
    name: "Contractors",
    href: "#",
    icon: UsersIcon,
    amount: "20",
    color: "bg-gray-100",
    cardColor: "text-gray-400",
  },
  {
    name: "Applicants",
    href: "#",
    icon: UsersIcon,
    amount: "21",
    color: "bg-purple-100",
    cardColor: "text-purple-400",
  },
];
const recentActivities = [
  {
    id: 1,
    name: "Molly Sanders",
    href: "#",
    time: "13:14",
    status: "logged in",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  {
    id: 2,
    name: "John Smith",
    href: "#",
    time: "12:10",
    status: "logged out",
    date: "July 12, 2020",
    datetime: "2021-07-11",
  },
  {
    id: 3,
    name: "Allie Sanders",
    href: "#",
    time: "13:14",
    status: "logged in",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  {
    id: 4,
    name: "Allie Sanders",
    href: "#",
    time: "13:14",
    status: "logged in",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  {
    id: 5,
    name: "Allie Sanders",
    href: "#",
    time: "13:14",
    status: "logged in",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  {
    id: 6,
    name: "John Smith",
    href: "#",
    time: "12:10",
    status: "logged out",
    date: "July 12, 2020",
    datetime: "2021-07-11",
  },
  // More transactions...
];
const statusStyles = {
  "logged in": "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  "logged out": "bg-red-100 text-red-800",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const AdminHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
        <button
          type="button"
          className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <EyeIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        {/* Search bar */}
        <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div className="flex flex-1">
            <form className="flex w-full md:ml-0" action="#" method="GET">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                  aria-hidden="true"
                >
                  <EyeIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  name="search-field"
                  className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder="Search transactions"
                  type="search"
                />
              </div>
            </form>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="ml-3 hidden text-sm font-medium text-gray-700 lg:block">
                    <span className="sr-only">Open user menu for </span>
                    John Smith
                  </span>
                  <ChevronDownIcon
                    className="ml-1 hidden h-5 w-5 flex-shrink-0 text-gray-400 lg:block"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Your Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Logout
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
      {/* Page header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
            <div className="min-w-0 flex-1">
              {/* Profile */}
              <div className="flex items-center">
                <img
                  className="hidden h-16 w-16 rounded-full sm:block"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <div className="flex items-center">
                    <img
                      className="h-16 w-16 rounded-full sm:hidden"
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                      Good morning, John Smith
                    </h1>
                  </div>
                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Company</dt>
                    <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                      <EyeIcon
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
                      Admin
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
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

      <div className="mt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Overview
          </h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card */}
            {cards.map((card) => (
              <div
                key={card.name}
                className={`overflow-hidden rounded-lg  shadow-md shadow-gray-500/50 ${card.color}`}
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <card.icon
                        className={`h-6 w-6  ${card.cardColor}`}
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
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <a
                      href={card.href}
                      className="font-medium text-cyan-700 hover:text-cyan-900"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
          Recent activity
        </h2>

        {/* Activity list (smallest breakpoint only) */}
        <div className="shadow sm:hidden">
          <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
            {recentActivities.map((recentActivity) => (
              <li key={recentActivity.id}>
                <a
                  href={recentActivity.href}
                  className="block bg-white px-4 py-4 hover:bg-gray-50"
                >
                  <span className="flex items-center space-x-4">
                    <span className="flex flex-1 space-x-2 truncate">
                      <EyeIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="flex flex-col truncate text-sm text-gray-500">
                        <span className="truncate">{recentActivity.name}</span>
                        <span>
                          <span className="font-medium text-gray-900">
                            {recentActivity.time}
                          </span>{" "}
                        </span>
                        <time dateTime={recentActivity.datetime}>
                          {recentActivity.date}
                        </time>
                      </span>
                    </span>
                    <ChevronRightIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <nav
            className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
            aria-label="Pagination"
          >
            <div className="flex flex-1 justify-between">
              <Link
                to="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                Previous
              </Link>
              <Link
                to="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                Next
              </Link>
            </div>
          </nav>
        </div>

        {/* Activity table (small breakpoint and up) */}
        <div className="hidden sm:block">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mt-2 flex flex-col">
              <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        People
                      </th>
                      <th
                        className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        Time
                      </th>
                      <th
                        className="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                        scope="col"
                      >
                        Status
                      </th>
                      <th
                        className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {recentActivities.map((recentActivity) => (
                      <tr key={recentActivity.id} className="bg-white">
                        <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          <div className="flex">
                            <a
                              href={recentActivity.href}
                              className="group inline-flex space-x-2 truncate text-sm"
                            >
                              <UserIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <p className="truncate text-gray-700 group-hover:text-gray-900">
                                {recentActivity.name}
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                          <span className="font-medium text-gray-500">
                            {recentActivity.time}
                          </span>
                        </td>
                        <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                          <span
                            className={classNames(
                              statusStyles[recentActivity.status],
                              "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                            )}
                          >
                            {recentActivity.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                          <time dateTime={recentActivity.datetime}>
                            {recentActivity.date}
                          </time>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination */}
                <nav
                  className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                  aria-label="Pagination"
                >
                  <div className="hidden sm:block">
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to{" "}
                      <span className="font-medium">10</span> of{" "}
                      <span className="font-medium">20</span> results
                    </p>
                  </div>
                  <div className="flex flex-1 justify-between sm:justify-end">
                    <Link
                      to="#"
                      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Previous
                    </Link>
                    <Link
                      to="#"
                      className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Next
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
