import React, { useEffect, useState } from "react";
import axios from "axios";
import TenancyFormModal from "./TenancyFormModal";

const TenancyForm = () => {
  const [open, setOpen] = useState(false);
  const [tenantForms, setTenantForms] = useState([]);
  const [singleTenantform, setSingleTenantform] = useState({});
  useEffect(() => {
    const handleTenancyForms = async () => {
      try {
        const res = await axios.get(
          `https://nuova-property-server.onrender.com/api/tenancyform`
        );
        console.log(res.data);
        setTenantForms(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleTenancyForms();
  }, []);

  const handleSingletenantformView = (tenantform) => {
    setSingleTenantform(tenantform);
    setOpen(true);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 lg:py-12">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">
                Tenancy Form List
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the tenants in your account including their name,
                title, email and role.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Tenants Info
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Property Info
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Tenant Details
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Status
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {tenantForms.map((tenantform) => (
                        <tr key={tenantform._id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                                  <svg
                                    className="h-full w-full text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                </span>
                              </div>
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">
                                  {tenantform.tenantInfo?.fullName}
                                </div>
                                <div className="text-gray-500">
                                  {tenantform.tenantInfo?.email}
                                </div>
                                <div className="text-gray-500">
                                  {tenantform.tenantInfo?.telephoneNo}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {/* <div className="text-gray-900">
                              {tenantform.propertyDetails?.propertyName}
                            </div> */}
                            <div className="text-gray-500">
                              {
                                tenantform?.propertyApplyingFor
                                  ?.addressOfProperty
                              }
                            </div>
                            <div className="text-gray-500">
                              Entry Date:{" "}
                              {new Date(
                                tenantform.propertyApplyingFor?.desiredEntryDate
                              ).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="text-gray-500">
                              DOB:{" "}
                              {new Date(
                                tenantform.tenantInfo?.dob
                              ).toLocaleDateString()}{" "}
                            </div>
                            <div className="text-gray-500">
                              Nationality: {tenantform.tenantInfo?.nationality}
                            </div>
                            <div className="text-gray-500">
                              Address: {tenantform.tenantInfo?.currentAddress}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              Applied
                            </span>
                          </td>

                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <button
                              type="button"
                              onClick={() =>
                                handleSingletenantformView(tenantform)
                              }
                              className="text-cyan-600 hover:text-cyan-900"
                            >
                              View
                              {/* <span className="sr-only">, {person.name}</span> */}
                            </button>
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
        <TenancyFormModal
          singleTenantform={singleTenantform}
          setOpen={setOpen}
          open={open}
        />
      </div>
    </>
  );
};

export default TenancyForm;
