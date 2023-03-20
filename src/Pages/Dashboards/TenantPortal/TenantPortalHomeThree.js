import React from "react";

import {
  CurrencyPoundIcon,
  CalendarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChatAltIcon,
  ShieldCheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";

import { BookmarkIcon } from "@heroicons/react/solid";

import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";

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

const TenantPortalHomeThree = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [tenantProperty, setTenantProperty] = useState({});

  useEffect(() => {
    const handleTenantProperty = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5500/api/properties/tenantproperty/tenant?email=${currentUser.email}`
        );
        setTenantProperty(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleTenantProperty();
  }, [currentUser.email]);
  console.log(tenantProperty);

  const getNextRentalPaymentDueDate = (leaseStartDate) => {
    const startTimestamp = new Date(leaseStartDate).getTime();
    let nextTimestamp = startTimestamp + 30 * 24 * 60 * 60 * 1000; // set to 30 days after lease start date
    const currentDate = new Date();

    while (nextTimestamp <= currentDate.getTime()) {
      nextTimestamp += 30 * 24 * 60 * 60 * 1000; // add 30 days until next rental payment due date is greater than current date
    }

    return new Date(nextTimestamp).toDateString();
  };
  return (
    <>
      <div className=" bg-gradient-to-l from-stone-100 to-white">
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
            <div className="py-8 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
              <div className="min-w-0 flex-1">
                {/* Profile */}
                <div className="flex items-center">
                  {currentUser?.profilePic ? (
                    <img
                      className="hidden h-12 w-12 rounded-full sm:block"
                      src={currentUser?.profilePic && currentUser?.profilePic}
                      alt=""
                    />
                  ) : (
                    <span className="hidden sm:block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                  )}

                  <div>
                    <div className="flex items-center">
                      {currentUser?.profilePic ? (
                        <img
                          className="h-12 w-12 rounded-full sm:hidden"
                          src={
                            currentUser?.profilePic && currentUser?.profilePic
                          }
                          alt=""
                        />
                      ) : (
                        <span className=" h-12 w-12 overflow-hidden rounded-full bg-gray-100 sm:hidden">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                      )}
                      <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                        Welcome, {currentUser?.username}
                      </h1>
                    </div>

                    <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                      <dt className="sr-only">Company</dt>
                      <dd className="flex items-center text-sm font-medium lowercase text-gray-500 sm:mr-6">
                        <BookmarkIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        {currentUser?.email}
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
                <Link
                  to="/tenant-portal-dashboard/tenant-my-profile"
                  className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8  px-4 sm:px-6  lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          <div className="relative pt-4 pb-20 lg:pt-4 lg:pb-28">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <Link to="/tenant-portal-dashboard/tenant-property">
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex-shrink-0">
                    <img
                      className="h-64 w-full object-cover"
                      src={tenantProperty?.images?.pictureFirst}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        {tenantProperty?.propertyAddress?.propertyName}
                      </p>
                      <div className="mt-2 block">
                        <p className="text-lg font-semibold tracking-wider text-gray-700">
                          {tenantProperty?.propertyAddress?.addressline1},{" "}
                          {tenantProperty?.propertyAddress?.city},{" "}
                          {tenantProperty?.propertyAddress?.state},{" "}
                          {tenantProperty?.propertyAddress?.country},{" "}
                          {tenantProperty?.propertyAddress?.zipcode}
                        </p>
                        <div className="flex flex-row justify-between mt-4">
                          <p className="text-md font-medium text-cyan-600">
                            Size
                          </p>
                          <p className="text-md font-medium text-gray-600">
                            {tenantProperty?.propertyDetails?.livingArea} sq.
                            ft.
                          </p>
                        </div>

                        <div className="flex flex-row justify-between mt-3 border-t-2 pt-3">
                          <p className="text-md font-medium text-cyan-600">
                            Bedrooms
                          </p>
                          <p className="text-md font-medium text-gray-600">
                            {tenantProperty?.propertyDetails?.bedroom}
                          </p>
                        </div>

                        <div className="flex flex-row justify-between mt-3 border-t-2 pt-3">
                          <p className="text-md font-medium text-cyan-600">
                            Status
                          </p>
                          <p className="text-md font-medium text-gray-600">
                            {tenantProperty?.propertyDetails?.propertyFurnished}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* <div className="mx-auto mt-12 grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-1">
              {tenantProperty?.tenantDetails
                ?.filter(
                  (singletenant) =>
                    singletenant.tenantPersonalInfo.email === currentUser.email
                )
                .map((filteredTenant) => (
                  <>
                    <div
                      className="overflow-hidden rounded-lg bg-white shadow-md shadow-teal-500/40"
                      key={filteredTenant._id}
                    >
                      <div className="p-8">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <CurrencyPoundIcon
                              className="h-8 w-8 text-white bg-cyan-500 rounded-lg p-1"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="truncate text-sm font-medium text-gray-500">
                                Tenant Rental Amount
                              </dt>
                              <dd>
                                <div className="text-lg font-medium text-gray-900">
                                  $
                                  {filteredTenant?.tenantResidency?.monthlyRent}{" "}
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="bg-teal-50 px-5 py-3">
                        <div className="text-sm">
                          <Link
                            to=""
                            className="font-medium text-cyan-700 hover:text-cyan-900"
                          ></Link>
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-lg bg-white shadow-md shadow-teal-500/40">
                      <div className="p-8">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <CalendarIcon
                              className="h-8 w-8 text-white bg-cyan-500 rounded-lg p-1"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="truncate text-sm font-medium text-gray-500">
                                Tenancy Due Date
                              </dt>
                              <dd>
                                <div className="text-lg font-medium text-gray-900">
                                  <span className="mx-2">
                                    <time>
                                      {new Date(
                                        filteredTenant?.tenantResidency?.leaseStartDate
                                      ).getFullYear()}
                                      -
                                      {new Date(
                                        filteredTenant?.tenantResidency?.leaseStartDate
                                      ).getMonth()}
                                      -
                                      {new Date(
                                        filteredTenant?.tenantResidency?.leaseStartDate
                                      ).getDate()}
                                    </time>
                                  </span>
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="bg-teal-50 px-5 py-3">
                        <div className="text-sm">
                          <Link
                            to=""
                            className="font-medium text-cyan-700 hover:text-cyan-900"
                          ></Link>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div> */}
          </div>

          <div className="relative pt-4 pb-20  lg:pt-4 lg:pb-28">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-600 mt-4">
                      Lease Terms
                    </p>

                    {tenantProperty?.tenantDetails
                      ?.filter(
                        (singletenant) =>
                          singletenant.tenantPersonalInfo.email ===
                          currentUser.email
                      )
                      .map((filteredTenant) => (
                        <>
                          <div className="mt-2 block" key={filteredTenant._id}>
                            <p className="flex items-center text-2xl font-semibold font-mono text-green-600">
                              {" "}
                              <CurrencyPoundIcon
                                className="h-6 w-6 text-green-600 rounded-lg"
                                aria-hidden="true"
                              />
                              {filteredTenant?.tenantResidency?.monthlyRent}{" "}
                            </p>
                            <p className="text-sm font-medium text-gray-400">
                              Monthly Rent (payment is secured)
                            </p>

                            <div className="flex flex-row justify-between mt-3 border-t-2 pt-3">
                              <p className="text-md font-medium text-green-600">
                                Next Rental Payment Due
                              </p>
                              <p className="text-md font-medium text-gray-600">
                                <span>
                                  <time>
                                    {/* {new Date(
                                      filteredTenant?.tenantResidency?.leaseStartDate
                                    ).toDateString()} */}

                                    {getNextRentalPaymentDueDate(
                                      filteredTenant?.tenantResidency
                                        ?.leaseStartDate
                                    )}
                                  </time>
                                </span>
                              </p>
                            </div>
                            <div className="flex flex-row justify-between mt-3 border-t-2 pt-3">
                              <p className="text-md font-medium text-green-600">
                                Next Renewal
                              </p>
                              <p className="text-md font-medium text-gray-600">
                                <span>
                                  <time>
                                    {new Date(
                                      filteredTenant?.tenantResidency?.leaseEndDate
                                    ).toDateString()}
                                  </time>
                                </span>
                              </p>
                            </div>
                          </div>
                        </>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-600 mt-4">
                      Tenants
                    </p>

                    <div className="mt-2 block">
                      <ul className="grid grid-col-1 gap-3">
                        {tenantProperty?.tenantDetails?.map((tenant) => (
                          <li
                            key={tenant?._id}
                            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                          >
                            <div className="flex w-full items-center justify-between space-x-6 p-4">
                              <div className="flex-1 truncate">
                                <div className="flex items-center space-x-3">
                                  <h3 className="truncate text-sm font-medium text-gray-900">
                                    {tenant?.tenantPersonalInfo?.fullName}
                                  </h3>
                                  <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                    Tenant
                                  </span>
                                </div>
                                <p className="mt-1 truncate text-sm text-gray-500">
                                  {tenant?.tenantResidency?.propertyName}
                                </p>
                              </div>
                              <img
                                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                                src={currentUser?.profilePic}
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="-mt-px flex divide-x divide-gray-200">
                                <div className="flex w-0 flex-1">
                                  <a
                                    href={`mailto:${tenant?.tenantResidency?.email}`}
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
                                    href={`tel:${tenant?.tenantResidency?.phoneNo}`}
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
                          <Link
                            to="/tenant-portal-dashboard/tenant-portal-maintenance"
                            className="inline-flex items-center rounded-full border border-transparent bg-sky-400 p-1 text-white text-sm shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-3"
                          >
                            <PlusIcon className="h-4 w-4" aria-hidden="true" />
                            <span className="mx-2">Create One</span>
                          </Link>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-sky-600 mt-4">
                      Deposit Details
                    </p>

                    {tenantProperty?.tenantDetails
                      ?.filter(
                        (singletenant) =>
                          singletenant.tenantPersonalInfo.email ===
                          currentUser.email
                      )
                      .map((filteredTenant) => (
                        <div className="mt-2 block" key={filteredTenant._id}>
                          <p className="flex items-center text-2xl font-semibold font-mono text-sky-600">
                            {" "}
                            <CurrencyPoundIcon
                              className="h-6 w-6 text-sky-700 rounded-lg"
                              aria-hidden="true"
                            />
                            {filteredTenant?.tenantResidency?.depositAmount}{" "}
                          </p>
                          <p className="text-sm font-medium text-gray-400">
                            Available Deposit (Your Split 50%)
                          </p>
                          <div className="flex flex-row justify-between mt-3 border-t-2 pt-3">
                            <p className="text-md font-medium text-sky-600">
                              Start Date
                            </p>
                            <p className="text-md font-medium text-gray-600">
                              <time>
                                {new Date(
                                  filteredTenant?.tenantResidency?.leaseStartDate
                                ).getFullYear()}
                                -
                                {new Date(
                                  filteredTenant?.tenantResidency?.leaseStartDate
                                ).getMonth()}
                                -
                                {new Date(
                                  filteredTenant?.tenantResidency?.leaseStartDate
                                ).getDate()}
                              </time>
                            </p>
                          </div>
                          <div className="flex flex-row justify-between mt-3 border-t-2 pt-3">
                            <p className="text-md font-medium text-sky-600">
                              Estimated Approval Date
                            </p>
                            <p className="text-md font-medium text-gray-600">
                              <time>
                                {new Date(
                                  filteredTenant?.tenantResidency?.leaseEndDate
                                ).toDateString()}
                              </time>
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantPortalHomeThree;
