import React from "react";
import { CalendarIcon, AtSymbolIcon, UsersIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const RequestDeposit = () => {
  const positions = [
    {
      id: 1,
      title: "Jamie Oliver",
      type: "Paid",
      location: "jamieoliver@gmail.com",
      department: "Engineering",
      closeDate: "2020-01-07",
      closeDateFull: "January 7, 2020",
    },
    {
      id: 2,
      title: "Alex Delson",
      type: "Not Paid",
      location: "alexdelson@gmail.com",
      department: "Engineering",
      closeDate: "2020-01-07",
      closeDateFull: "January 7, 2020",
    },
    {
      id: 3,
      title: "Ben Afflick",
      type: "Not Paid",
      location: "benafflick@gmail.com",
      department: "Design",
      closeDate: "2020-01-14",
      closeDateFull: "January 14, 2020",
    },
    {
      id: 4,
      title: "Alex Joe",
      type: "Not Paid",
      location: "benafflick@gmail.com",
      department: "Design",
      closeDate: "2020-01-14",
      closeDateFull: "January 14, 2020",
    },
    {
      id: 5,
      title: "Sylvia Synthia",
      type: "Not Paid",
      location: "benafflick@gmail.com",
      department: "Design",
      closeDate: "2020-01-14",
      closeDateFull: "January 14, 2020",
    },
  ];
  return (
    <>
      <div className="bg-white shadow overflow-hidden sm:rounded-md w-5/6 mx-auto my-10">
        <ul className="divide-y divide-gray-200">
          {positions.map((position) => (
            <li key={position.id}>
              <Link to="#" className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-cyan-600 truncate">
                      {position.title}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {position.type}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <UsersIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {position.department}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <AtSymbolIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        {position.location}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <CalendarIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <p>
                        Closing on{" "}
                        <time dateTime={position.closeDate}>
                          {position.closeDateFull}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RequestDeposit;
