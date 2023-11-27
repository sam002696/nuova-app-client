import React, { useState } from "react";
import { ChartPieIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import IncompleteJobModal from "../JobsModal/IncompleteJobModal";

const IncompleteJobs = ({ getAllJobs }) => {
  const [openIncompleteJob, setOpenIncompleteJob] = useState(false);
  const [IncompleteJobDetails, setIncompleteJobDetails] = useState({});
  const { currentUser } = useSelector((state) => state.user);

  const handleSingleIncompleteJob = (jobDetails) => {
    setIncompleteJobDetails(jobDetails);
    setOpenIncompleteJob(true);
  };
  return (
    <>
      <div className="text-center mt-8">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl mb-10">
          Incomplete Jobs
        </h2>
        {/* <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p> */}
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
              myJob?.incompleteJobs
                ?.filter(
                  (incompletedJob) =>
                    incompletedJob?.contractorEmail === currentUser.email
                )
                .map(() => (
                  <>
                    <div className="px-4   pt-8">
                      <div className="relative overflow-hidden rounded-md bg-stone-500  shadow-md shadow-gray-500/50">
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
                              className="text-stone-400 text-opacity-40"
                              fill="currentColor"
                              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                            />
                            <path
                              className="text-stone-700 text-opacity-40"
                              fill="currentColor"
                              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                            />
                          </svg>
                        </div>

                        <div className="rounded-lg  divide-y divide-gray-200 relative">
                          <div className="w-full flex justify-between  space-x-6">
                            <div className="w-24 h-24 flex-shrink-0 p-6">
                              <ChartPieIcon className="text-gray-600" />
                            </div>
                            <div className="flex-1 truncate py-5">
                              <div className="flex items-center space-x-3">
                                <h3 className="text-white text-sm font-semibold truncate">
                                  Nuova Property Management & Letting Jobs
                                </h3>
                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-stone-800 text-xs font-medium bg-stone-100 rounded-full">
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
                              <button
                                onClick={() => handleSingleIncompleteJob(myJob)}
                                className="mt-4 flex-shrink-0 inline-block px-3 py-2 text-stone-800 text-sm font-medium  rounded-md mr-2 bg-stone-100 "
                              >
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
      </div>
      <IncompleteJobModal
        open={openIncompleteJob}
        setOpen={setOpenIncompleteJob}
        singleIncompleteJobInfo={IncompleteJobDetails}
      />
    </>
  );
};

export default IncompleteJobs;
