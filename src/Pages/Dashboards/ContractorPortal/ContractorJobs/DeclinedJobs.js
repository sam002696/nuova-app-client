import React from "react";
import { ShieldExclamationIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";

const DeclinedJobs = ({ getAllJobs }) => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <div className="text-center mt-8">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl ">
          Declined Jobs
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-2 ">
          {getAllJobs
            ?.filter(
              (myJobs) =>
                myJobs?.contractorBiddingEmail?.find(
                  (email) => email === currentUser.email
                ) === currentUser.email
            )
            .map((myJob) =>
              myJob?.declinedJobs
                ?.filter(
                  (declinedJob) =>
                    declinedJob?.contractorEmail === currentUser.email
                )
                .map(() => (
                  <>
                    <div className="px-4   pt-8">
                      <div className="relative overflow-hidden rounded-md bg-red-500  shadow-md shadow-gray-500/50">
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
                              className="text-red-400 text-opacity-40"
                              fill="currentColor"
                              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                            />
                            <path
                              className="text-red-700 text-opacity-40"
                              fill="currentColor"
                              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                            />
                          </svg>
                        </div>

                        <div className="rounded-lg  divide-y divide-gray-200 relative">
                          <div className="w-full flex justify-between  space-x-6">
                            <div className="w-24 h-24 flex-shrink-0 p-6">
                              <ShieldExclamationIcon className="text-gray-600" />
                            </div>
                            <div className="flex-1 truncate py-5">
                              <div className="flex items-center space-x-3">
                                <h3 className="text-white text-sm font-semibold truncate">
                                  Nuova System Jobs
                                </h3>
                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-red-800 text-xs font-medium bg-red-100 rounded-full">
                                  Maintenance Issue
                                </span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <h3 className="text-white text-xl font-semibold truncate">
                                  {myJob?.issueName}
                                </h3>
                              </div>
                              <p className="mt-1 text-white text-sm truncate">
                                {myJob?.tenantAddress}
                              </p>
                              <p className="mt-1 text-white text-sm truncate">
                                {myJob?.perHourIncome}
                              </p>
                            </div>

                            <div className="flex flex-col justify-between">
                              <button className="mt-4 flex-shrink-0 inline-block px-3 py-2 text-red-800 text-sm font-medium  rounded-md mr-2 bg-red-100 ">
                                Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))
            )}
        </div>
        {/* <nav
          className="flex items-center justify-between bg-white px-4 py-4 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">4</span> to{" "}
              <span className="font-medium">4</span> of{" "}
              <span className="font-medium">4</span> results
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
        </nav> */}
      </div>
    </>
  );
};

export default DeclinedJobs;
