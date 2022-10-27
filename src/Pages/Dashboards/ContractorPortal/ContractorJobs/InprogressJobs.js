import React from "react";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const reports = [
  {
    name: "Boiler Fixation",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    title: "Flat No-13B, Holger Street, London",
    role: "Admin",
    telephone: "+1-202-555-0170",
    date: "12-12-2022",
    tenant_name: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
  },
  {
    name: "Sink Replacement",
    imageUrl:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80",
    title: "Flat No-13B, Holger Street, London",
    role: "Admin",
    telephone: "+1-202-555-0170",
    date: "12-12-2022",
    tenant_name: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
  },
  {
    name: "New Window Installation",
    imageUrl:
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Flat No-13B, Holger Street, London",
    role: "Admin",
    telephone: "+1-202-555-0170",
    date: "12-12-2022",
    tenant_name: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
  },
  {
    name: "Blocked Pipe",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Flat No-13B, Holger Street, London",
    role: "Admin",
    telephone: "+1-202-555-0170",
    date: "12-12-2022",
    tenant_name: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
  },
];

const InprogressJobs = () => {
  return (
    <>
      <div className="text-center mt-8">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl ">
          In-progress Jobs
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-2 ">
          {reports.map((report) => (
            <div className="px-4   pt-8">
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
                  <div className="w-full flex justify-between  space-x-6">
                    <div className="w-24 h-24 flex-shrink-0 p-6">
                      <AdjustmentsIcon className="text-gray-600" />
                    </div>
                    <div className="flex-1 truncate py-5">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-white text-sm font-semibold truncate">
                          Nuova System Jobs
                        </h3>
                        <span className="flex-shrink-0 inline-block px-2 py-0.5 text-yellow-800 text-xs font-medium bg-yellow-100 rounded-full">
                          Maintenance Issue
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <h3 className="text-white text-xl font-semibold truncate">
                          {report.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-white text-sm truncate">
                        {report.title}
                      </p>
                      <p className="mt-1 text-white text-sm truncate">
                        $10.50 - $14.00 Per Hour(Employer est.)
                      </p>
                    </div>

                    <div className="flex flex-col justify-between">
                      <button className="mt-4 flex-shrink-0 inline-block px-3 py-2 text-yellow-800 text-sm font-medium  rounded-md mr-2 bg-yellow-100 ">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav
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
        </nav>
      </div>
    </>
  );
};

export default InprogressJobs;
