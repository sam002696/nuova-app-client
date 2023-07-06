import React from "react";
import { PaperClipIcon } from "@heroicons/react/solid";

const AddTerms = () => {
  return (
    <>
      <div className="w-5/6 mx-auto my-10">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Terms Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Key Terms</p>
        </div>
        <div className="mt-5 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Tenancy Start Date
              </dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">12/11/2023</span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Rent Due Date
              </dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">12/11/2023</span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Rental Amount
              </dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">$122,000</span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Deposit Amount
              </dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow"> $120,000</span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    className="bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">
                Attachments for tenants
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <PaperClipIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 flex-1 w-0 truncate">
                        property_necessity.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex space-x-4">
                      <button
                        type="button"
                        className="bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      >
                        Update
                      </button>
                      <span className="text-gray-300" aria-hidden="true">
                        |
                      </span>
                      <button
                        type="button"
                        className="bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <PaperClipIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 flex-1 w-0 truncate">
                        coverletter_property1.pdf
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex space-x-4">
                      <button
                        type="button"
                        className="bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      >
                        Update
                      </button>
                      <span className="text-gray-300" aria-hidden="true">
                        |
                      </span>
                      <button
                        type="button"
                        className="bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default AddTerms;
