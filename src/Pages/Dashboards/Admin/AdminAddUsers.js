import React, { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import axios from "axios";
import LandlordModal from "./UsersModals/LandlordModal";
import TenantModal from "./UsersModals/TenantModal";
import ContractorModal from "./UsersModals/ContractorModal";
import PropertyManagerModal from "./UsersModals/PropertyManagerModal";
import AdminModal from "./UsersModals/AdminModal";
import Swal from "sweetalert2";

const AdminAddUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  const [open, setOpen] = useState(false);
  const [tenant, setTenant] = useState(false);
  const [contractor, setContractor] = useState(false);
  const [propertyManager, setPropertyManager] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleRemoveUser = (user) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      html: `<span class="text-sm"> ${user.username} will be removed permanently.</span>`,
      confirmButtonText: "Yes, delete",
      showCancelButton: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn-regular bg-red-500 py-2 mr-4",
        cancelButton: "btn-regular py-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5500/api/users/${user._id}`;
        axios
          .delete(url)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              const remainingUsers = allUsers.filter(
                (filteruser) => filteruser._id !== user._id
              );

              setAllUsers(remainingUsers);
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  useEffect(() => {
    const handleFetchAllUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:5500/api/users`);
        setAllUsers(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetchAllUsers();
  }, []);

  console.log(allUsers);
  return (
    <>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Add tenants, landlords, contractors, property managers
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt
          neque velit voluptas blanditiis iure consectetur, aut possimus
          voluptatem repellat.
        </p>
      </div>

      {/* Add users */}

      <div className="max-w-7xl mx-auto mt-5">
        <div className="grid grid-cols-3 gap-1 ">
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
                      <span className="text-xl"> Add a landlord</span>
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
                      <span className="text-xl"> Add a tenant</span>
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
                      <span className="text-xl"> Add a Contractor</span>
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
                      <span className="text-xl"> Add a Manager</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button
            type="button"
            onClick={() => setAdmin(true)}
            className="px-4   pt-8"
          >
            <div className="relative overflow-hidden rounded-md bg-yellow-500  shadow-md shadow-gray-500/50">
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
                    className="text-yellow-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-yellow-700 text-opacity-40"
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
                      <span className="text-xl"> Add an Admin</span>
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
        <AdminModal setOpen={setAdmin} open={admin} />
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
                  Phone No
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
              {allUsers.map((person) => (
                <tr key={person._id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {person.username}
                  </td>
                  <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    {person.phoneNo}
                  </td>
                  <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                    {person.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {person.role}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  text-red-500"
                      onClick={() => handleRemoveUser(person)}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
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
