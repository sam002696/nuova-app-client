import React from "react";
import { CheckCircleIcon, MailIcon, UserIcon } from "@heroicons/react/solid";
import AddDocumentModal from "./AddDocumentModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import InspectionReport from "../InspectionReport/InspectionReport";

const AddDocument = ({ singleProperty }) => {
  const [open, setOpen] = useState(false);

  const tabs = [
    { name: "Property Inspection Report", href: "#", current: false },
    { name: "Inventorty Document", href: "#", current: true },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav
            className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
            aria-label="Tabs"
          >
            {tabs.map((tab, tabIdx) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700",
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    tab.current ? "bg-indigo-500" : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="sm:flex sm:items-center mx-10 mt-8">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Property Inspection Report
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the certificates in your account including their dates
            and description.
          </p>
        </div>
        {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:w-auto"
          >
            Add a Report
          </button>
        </div> */}
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md w-5/6 mx-auto my-10">
        <InspectionReport />
      </div>

      {/* Inventory */}
      <div className="sm:flex sm:items-center mx-10 mt-8">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Inventory Document
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the certificates in your account including their dates
            and description.
          </p>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md w-5/6 mx-auto my-10">
        <Inventory />
      </div>
      <AddDocumentModal
        setOpen={setOpen}
        open={open}
        singleProperty={singleProperty}
      />
    </>
  );
};

export default AddDocument;
