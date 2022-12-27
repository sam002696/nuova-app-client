import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";

import { Link } from "react-router-dom";
import LandlordModal from "./UsersModals/LandlordModal";
import TenantModal from "./UsersModals/TenantModal";
import ContractorModal from "./UsersModals/ContractorModal";
import PropertyManagerModal from "./UsersModals/PropertyManagerModal";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
];

const AdminAddUsers = () => {
  const [open, setOpen] = useState(false);
  const [tenant, setTenant] = useState(false);
  const [contractor, setContractor] = useState(false);
  const [propertyManager, setPropertyManager] = useState(false);
  return (
    <>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Add tenants, landlords , contractors
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti
          consectetur.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-5">
        <div className="grid grid-cols-4 gap-1 ">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="px-4   pt-8"
          >
            <div className="relative overflow-hidden rounded-md bg-cyan-500  shadow-md shadow-gray-500/50">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-cyan-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-cyan-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>

              <div className="rounded-lg  divide-y divide-gray-200 relative">
                <div className="w-full">
                  <div className="text-center  py-10">
                    <h3 className="text-white text-sm font-semibold flex items-center justify-center">
                      <div>
                        <PlusIcon className=" h-6 mr-2" />
                      </div>{" "}
                      <span className="text-2xl"> Add a landlord</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button
            type="button"
            onClick={() => setTenant(true)}
            className="px-4   pt-8"
          >
            <div className="relative overflow-hidden rounded-md bg-orange-500  shadow-md shadow-gray-500/50">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-orange-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-orange-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>

              <div className="rounded-lg  divide-y divide-gray-200 relative">
                <div className="w-full">
                  <div className="text-center  py-10">
                    <h3 className="text-white text-sm font-semibold flex items-center justify-center">
                      <div>
                        <PlusIcon className=" h-6 mr-2" />
                      </div>{" "}
                      <span className="text-2xl"> Add a tenant</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button
            type="button"
            onClick={() => setContractor(true)}
            className="px-4   pt-8"
          >
            <div className="relative overflow-hidden rounded-md bg-emerald-500  shadow-md shadow-gray-500/50">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-emerald-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-emerald-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>

              <div className="rounded-lg  divide-y divide-gray-200 relative">
                <div className="w-full">
                  <div className="text-center  py-10">
                    <h3 className="text-white text-sm font-semibold flex items-center justify-center">
                      <div>
                        <PlusIcon className=" h-6 mr-2" />
                      </div>{" "}
                      <span className="text-2xl"> Add a Contractor</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button
            type="button"
            onClick={() => setPropertyManager(true)}
            className="px-4   pt-8"
          >
            <div className="relative overflow-hidden rounded-md bg-purple-500  shadow-md shadow-gray-500/50">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-purple-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-purple-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>

              <div className="rounded-lg  divide-y divide-gray-200 relative">
                <div className="w-full">
                  <div className="text-center  py-10">
                    <h3 className="text-white text-sm font-semibold flex items-center justify-center">
                      <div>
                        <PlusIcon className=" h-6 mr-2" />
                      </div>{" "}
                      <span className="text-2xl"> Add a Manager</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <LandlordModal setOpen={setOpen} open={open} />
        <TenantModal setOpen={setTenant} open={tenant} />
        <ContractorModal setOpen={setContractor} open={contractor} />
        <PropertyManagerModal
          setOpen={setPropertyManager}
          open={propertyManager}
        />
      </div>

      {/* People */}

      <div className="px-4 sm:px-6 lg:px-8 mt-12">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            {/* <h1 className="text-xl font-semibold text-gray-900">Users</h1> */}
            <p className="mt-2 text-lg text-gray-700 underline underline-offset-2">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
        </div>
        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
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
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Role
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {people.map((person) => (
                <tr key={person.email}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {person.name}
                  </td>
                  <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    {person.title}
                  </td>
                  <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {person.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.role}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <Link to="#" className="text-cyan-600 hover:text-cyan-900">
                      Edit<span className="sr-only">, {person.name}</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminAddUsers;
