import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import TenantModal from "../PropertyManagement/ManagerPeople/TenantModal";
import { useForm } from "react-hook-form";

const people = [
  {
    name: "Lindsay Walton",
    month: "January",
    email: "lindsay@example.com",
    role: "Tenant",
    payment_date: "05-01-2022",
    status: "Paid",
    status_color: "green",
  },
  {
    name: "Lindsay Walton",
    month: "February",
    email: "lindsay@example.com",
    role: "Tenant",
    payment_date: "05-02-2022",
    status: "Paid",
    status_color: "green",
  },
  {
    name: "Lindsay Walton",
    month: "March",
    email: "lindsay@example.com",
    role: "Tenant",
    payment_date: "05-03-2022",
    status: "Pending",
    status_color: "yellow",
  },
  {
    name: "Lindsay Walton",
    month: "April",
    email: "lindsay@example.com",
    role: "Tenant",
    payment_date: "05-04-2022",
    status: "Pending",
    status_color: "yellow",
  },
  {
    name: "Lindsay Walton",
    month: "May",
    email: "lindsay@example.com",
    role: "Tenant",
    payment_date: "05-05-2022",
    status: "Pending",
    status_color: "yellow",
  },
  {
    name: "Lindsay Walton",
    month: "June",
    email: "lindsay@example.com",
    role: "Tenant",
    payment_date: "05-06-2022",
    status: "Pending",
    status_color: "yellow",
  },
  {
    name: "Lindsay Walton",
    month: "July",
    email: "lindsay@example.com",
    role: "Tenant",
    payment_date: "05-07-2022",
    status: "Pending",
    status_color: "yellow",
  },
  {
    name: "Lindsay Walton",
    month: "August",
    email: "lindsay@example.com",
    role: "Tenant",
    payment_date: "05-08-2022",
    status: "Pending",
    status_color: "yellow",
  },
  {
    name: "Lindsay Walton",
    month: "September",
    email: "lindsay@example.com",
    role: "Tenant",
    payment_date: "05-09-2022",
    status: "Pending",
    status_color: "yellow",
  },
  {
    name: "Lindsay Walton",
    month: "October",
    email: "lindsay@example.com",
    role: "Tenant",
    payment_date: "05-10-2022",
    status: "Pending",
    status_color: "yellow",
  },
  {
    name: "Lindsay Walton",
    month: "November",
    email: "lindsay@example.com",
    role: "Tenant",
    payment_date: "05-11-2022",
    status: "Pending",
    status_color: "yellow",
  },
  {
    name: "Lindsay Walton",
    month: "December",
    email: "lindsay@example.com",
    role: "Tenant",
    payment_date: "05-12-2022",
    status: "Pending",
    status_color: "yellow",
  },
];

const TenantPortalFinanceTwo = () => {
  const [open, setOpen] = useState(false);
  const { register } = useForm();
  // const onSubmit = (data) => {
  //     console.log(data);
  return (
    <>
      <div className="bg-gray-50">
        <div className="pt-8 sm:pt-16 lg:pt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl">
                Simple Nuova Finance System
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                If you're not satisfied, contact us within the first 14 days and
                we'll send you a full refund.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <form className="">
                <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
                  <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                      Payment Verification Request
                    </h3>
                    <p className="mt-6 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consect etur adipisicing elit.
                      Itaque amet indis perferendis blanditiis repellendus etur
                      quidem assumenda.
                    </p>

                    <div className="mt-8 grid gap-5 mb-6 lg:grid-cols-3">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          className="bg-cyan-50 border border-cyan-300 text-cyan-700 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  placeholder:text-cyan-700"
                          placeholder="Full Name"
                          {...register("fullName", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email_address"
                          className="bg-cyan-50 border border-cyan-300 text-cyan-700 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  placeholder:text-cyan-700"
                          placeholder="example@gmail.com"
                          {...register("email", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone_no"
                          className="bg-cyan-50 border border-cyan-300 text-cyan-700 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  placeholder:text-cyan-700"
                          placeholder="(+1) 9826-2344"
                          {...register("phoneNumber", { required: true })}
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Rent Month
                        </label>
                        <select
                          id="rent-month"
                          name="rent-month"
                          autoComplete="rent-month"
                          className="bg-cyan-50 border border-cyan-300 text-cyan-700 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          {...register("rent-month", { required: true })}
                        >
                          <option>Select</option>
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                        </select>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Payment Date
                        </label>
                        <input
                          type="date"
                          id="payment-date"
                          className="bg-cyan-50 border border-cyan-300 text-cyan-700 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  placeholder:text-cyan-700"
                          placeholder="payment-date"
                          {...register("payment-date", { required: true })}
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Transaction Id
                        </label>
                        <input
                          type="text"
                          id="transaction-id"
                          className="bg-cyan-50 border border-cyan-300 text-cyan-700 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  placeholder:text-cyan-700"
                          placeholder="Transaction Id"
                          {...register("transaction-id", { required: true })}
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Transaction Mode
                        </label>
                        <select
                          id="transaction-mode"
                          name="transaction-mode"
                          autoComplete="transaction-mode"
                          className="bg-cyan-50 border border-cyan-300 text-cyan-700 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          {...register("transaction-mode", { required: true })}
                        >
                          <option>Select</option>
                          <option>Online</option>
                          <option>Offline</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Upload Payment Receipt
                        </label>
                        <input
                          type="file"
                          id="UploadPaymentDoc"
                          className="bg-cyan-50 border border-cyan-300 text-cyan-700 text-sm rounded-lg file:bg-cyan-50   file:text-cyan-800 focus:ring-cyan-500 focus:border-cyan-500 block w-full  file:rounded-l-lg file:p-1.5 file:border-none"
                          {...register("UploadPaymentDoc", { required: true })}
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Any Additional Information
                        </label>
                        <input
                          type="text"
                          id="additonalInfo"
                          className="bg-cyan-50 border border-cyan-300 text-cyan-700 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full placeholder:text-cyan-700"
                          {...register("additionalInfo", {
                            required: true,
                          })}
                          placeholder="Type here.."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg font-medium leading-6 text-gray-900">
                      Pay Rent, At your Convenience
                    </p>
                    <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                      <span>$349</span>
                      <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">
                        GBP
                      </span>
                    </div>
                    <p className="mt-4 text-sm">
                      <Link
                        to="#"
                        className="font-medium text-gray-500 underline"
                      >
                        Learn about our membership policy
                      </Link>
                    </p>
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <button
                          onClick={() => setOpen(false)}
                          type="submit"
                          className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900 w-full"
                        >
                          Payment Check Request
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      <Link to="#" className="font-medium text-gray-900">
                        Get Reviewed By Manager
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:pb-20">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">
                All Payments
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the payments in your account including your name,
                title, email and role.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Rent Month
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Payment Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="pl-3 pr-8 py-3.5 text-right text-sm font-semibold text-gray-900"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {people.map((person, personIdx) => (
                        <tr
                          key={person.email}
                          className={
                            personIdx % 2 === 0 ? undefined : "bg-gray-50"
                          }
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {person.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.month}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.payment_date}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.email}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.role}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <Link
                              to="#"
                              className={`${person.status_color === "green"
                                ? "text-teal-600 bg-teal-100 px-2 py-1 rounded-full text-sm "
                                : "text-sky-600  bg-sky-100 px-2 py-1 rounded-full text-sm"
                                }`}
                            >
                              {person.status}
                            </Link>
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
        <TenantModal setOpen={setOpen} open={open} />
      </div>
    </>
  );
};

export default TenantPortalFinanceTwo;
