import React from "react";

import { CreditCardIcon, ClipboardCheckIcon } from "@heroicons/react/solid";

const tabs = [
  { name: "Events", href: "#", icon: ClipboardCheckIcon, current: true },
  { name: "Task Description", href: "#", icon: CreditCardIcon, current: false },
];

const contractors = [
  {
    name: "Daniel Petterson",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper5645675@example.com",
    telephone: "+1-202-555-0170",
    price: "250",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    desc: "Hi there,from what you describe it sounds like the problem is having the pressure. I am available to come and tomorrow 5pm and 7pm and Thu any time after 4pm",
  },
  {
    name: "John Snow",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper8912123@example.com",
    telephone: "+1-202-555-0170",
    price: "267",
    imageUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    desc: "Hi there,from what you describe it sounds like the problem is having the pressure. I am available to come and tomorrow 5pm and 7pm and Thu any time after 4pm",
  },
  {
    name: "Rachel Berry",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper24536718@example.com",
    telephone: "+1-202-555-0170",
    price: "287",
    imageUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    desc: "Hi there,from what you describe it sounds like the problem is having the pressure. I am available to come and tomorrow 5pm and 7pm and Thu any time after 4pm",
  },
  {
    name: "Fox Jenner",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper213321@example.com",
    telephone: "+1-202-555-0170",
    price: "398",
    imageUrl:
      "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    desc: "Hi there,from what you describe it sounds like the problem is having the pressure. I am available to come and tomorrow 5pm and 7pm and Thu any time after 4pm",
  },
];
const reports = [
  {
    name: "Boiler Not Working",
    title: "Flat No-13B, Holger Street, London",
    role: "Admin",
    email: "janecooper3182378931@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    name: "Sink Replacement",
    title: "Flat No-13B567, Holger Street, Glasgow",
    role: "Admin",
    email: "janecooper313131@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80",
  },
  {
    name: "New Window Installation",
    title: "Flat No-13B, Caliber Street, Edinburg",
    role: "Admin",
    email: "janecooper310112233@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    name: "Blocked Pipe",
    title: "Street-13B, Holger Street, Bridgeton",
    role: "Admin",
    email: "janecooper3323265778@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    name: "Bathroom Repair",
    title: "Street-13B, Holger Street, Bridgeton",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ManagerMaintenance = () => {
  return (
    <div className=" max-w-9xl mx-auto mt-10 pb-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="sr-only">Profile</h1>
        {/* Main 3 column grid */}
        <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
          {/* Left column */}
          <div className="grid grid-cols-1 lg:col-span-1 ">
            <ul className="space-y-4">
              {reports.map((report) => (
                <li
                  key={report.email}
                  className="col-span-1 bg-white rounded-lg shadow-md divide-y divide-gray-200"
                >
                  <div className="w-full flex items-center justify-between px-6 py-10 space-x-6">
                    <img
                      className="w-14 h-14 bg-gray-300 rounded-md flex-shrink-0"
                      src={report.imageUrl}
                      alt=""
                    />
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-gray-900 text-xl font-semibold truncate">
                          {report.name}
                        </h3>
                        <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                          Tenant
                        </span>
                      </div>
                      <p className="mt-1 text-gray-500 text-sm truncate">
                        {report.title}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:col-span-2">
            <div className="space-y-3 mb-5 mt-2">
              <p className=" text-gray-600 font-bold text-4xl">
                Boiler not working
              </p>
              <p className=" text-gray-400 font-medium text-sm">
                Flat No-13B, Holger Street, London
              </p>
            </div>

            {/* Tabs */}

            <div className="sm:hidden mb-8">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
              <select
                id="tabs"
                name="tabs"
                className="block w-full  rounded-md"
                defaultValue={tabs.find((tab) => tab.current).name}
              >
                {tabs.map((tab) => (
                  <option key={tab.name}>{tab.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block mb-8">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      className={classNames(
                        tab.current
                          ? "border-sky-500 text-sky-600"
                          : "border-transparent text-gray-500 hover:text-gray-700",
                        "group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
                      )}
                      aria-current={tab.current ? "page" : undefined}
                    >
                      <tab.icon
                        className={classNames(
                          tab.current
                            ? "text-blue-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "-ml-0.5 mr-2 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />
                      <span>{tab.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {/* Middle column */}

              <ul className="space-y-4">
                {contractors.map((person) => (
                  <li
                    key={person.email}
                    className="col-span-1 bg-white rounded-lg shadow-md  divide-y divide-gray-200"
                  >
                    <div className="w-full flex items-center justify-between px-6 py-10 space-x-6 hover:bg-gray-50 transition">
                      <img
                        className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"
                        src={person.imageUrl}
                        alt=""
                      />
                      <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-gray-900 text-xl font-semibold truncate">
                            {person.name}
                          </h3>
                          <span className="flex-shrink-0 inline-block px-2 py-0.5 text-yellow-800 text-xs font-medium bg-yellow-100 rounded-full">
                            Contractor
                          </span>
                        </div>
                        <p className="mt-1 text-gray-500 text-sm truncate">
                          {person.title}
                        </p>
                        <p className="mt-3 text-gray-500 text-sm truncate">
                          {person.desc}
                        </p>
                      </div>
                      <p className="mt-1 text-gray-500 text-lg font-bold truncate">
                        {" "}
                        &#163;{person.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Last Column */}

              <div className="space-y-4">
                <div className="col-span-1 bg-gray-100 rounded-lg shadow-md shadow-gray-500/50 divide-gray-200">
                  <div className="w-full flex items-center justify-between px-6 py-10 space-x-6">
                    <img
                      className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                      alt=""
                    />
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-gray-900 text-xl font-semibold truncate">
                          Daniel Peterson
                        </h3>
                        <span className="flex-shrink-0 inline-block px-2 py-0.5 text-yellow-800 text-xs font-medium bg-yellow-100 rounded-full">
                          Contractor
                        </span>
                      </div>
                      <p className="mt-1 text-gray-500 text-sm truncate">
                        Bridge Bultitdia Limited
                      </p>
                    </div>
                  </div>
                  <div className="px-6 py-5 space-y-4">
                    <div className="bg-white rounded-md px-4 py-5 space-y-3">
                      <p className=" text-slate-400 text-lg font-medium">
                        Hi there,from what you describe it sounds like the
                        problem is having the pressure. I am available to come
                        and tomorrow 5pm and 7pm and Thu any time after 4pm.
                        Feel free to call me anytime.
                      </p>
                      <p className=" text-sm text-gray-400">29th, July 2022</p>
                    </div>
                    <div className="bg-sky-200 rounded-md px-4 py-5 space-y-3">
                      <p className=" text-sky-500 text-sm font-semibold">
                        You accepted the offer
                      </p>
                    </div>
                    <div className="bg-white rounded-md px-4 py-5 space-y-3 divide-y">
                      <p className=" text-green-500 text-lg font-medium py-2">
                        Job marked as completed!
                      </p>
                      <p className=" text-indigo-500 text-lg font-medium py-2">
                        Invoice to d:3365
                      </p>
                    </div>

                    <button
                      type="button"
                      className=" w-full px-6 py-3 border shadow-sm text-lg font-bold rounded-md text-white bg-gradient-to-r from-sky-800 to-cyan-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 text-center  uppercase my-5"
                    >
                      Pay invoice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerMaintenance;
