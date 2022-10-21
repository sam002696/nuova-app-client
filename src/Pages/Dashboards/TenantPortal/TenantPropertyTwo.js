import React from "react";
import { PaperClipIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const TenantPropertyTwo = () => {
  return (
    <>
      <div className=" bg-gray-50">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-12">
            <div className="overflow-hidden bg-white shadow-md shadow-cyan-500/50 rounded-md">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Tenant's Property Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Personal details and application.
                </p>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Property Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      Houston Housing Society
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Property Address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      St. James Park 921b, London W1T tRJ, England
                    </dd>
                  </div>
                  <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Property Manager
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ol>
                        <h1 className="text-cyan-600 mb-2">
                          Property Manager Details
                        </h1>
                        <li>Name : Mark Swan</li>
                        <li>Email : mark@gmail.com</li>
                        <li>Phone : +41 888 777 632</li>
                      </ol>
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Property Owner
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      Alex Adam
                    </dd>
                  </div>
                  <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Lanlord Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      margotfoster@example.com
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Tenants
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ol>
                        <h1 className="text-cyan-600 mb-2">Tenant 1</h1>
                        <li>Name : Mark Swan</li>
                        <li>Email : mark@gmail.com</li>
                        <li>Phone : +41 888 777 632</li>
                      </ol>
                    </dd>
                  </div>
                  <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Guarantor (if any)
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ol>
                        <h1 className="text-cyan-600 mb-2">Guarantor</h1>
                        <li>Name : Pablo Matt</li>
                        <li>Email : pablo@gmail.com</li>
                        <li>Phone : +41 888 777 632</li>
                      </ol>
                    </dd>
                  </div>

                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Bedrooms & Bathrooms
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      5 & 3
                    </dd>
                  </div>

                  <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Rental Amount
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      5000$
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Next Payment Date
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      01-December-2022
                    </dd>
                  </div>
                  <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Tenancy Started
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      01-May-2022
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Tenancy Renewal Date
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      01-May-2023
                    </dd>
                  </div>
                  <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Terms & Conditions
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ol>
                        <li>
                          1. Fugiat ipsum ipsum deserunt culpa aute sint do
                          nostrud anim incididunt cillum culpa consequat.
                          Excepteur qui ipsum aliquip consequat sint. Sit id
                          mollit nulla mollit nostrud in ea officia proident.
                          Irure nostrud pariatur mollit ad adipisicing
                          reprehenderit deserunt qui eu.
                        </li>
                        <br />
                        <li>
                          2. Fugiat ipsum ipsum deserunt culpa aute sint do
                          nostrud anim incididunt cillum culpa consequat.
                          Excepteur qui ipsum aliquip consequat sint. Sit id
                          mollit nulla mollit nostrud in ea officia proident.
                          Irure nostrud pariatur mollit ad adipisicing
                          reprehenderit deserunt qui eu.
                        </li>
                        <br />
                        <li>
                          3. Fugiat ipsum ipsum deserunt culpa aute sint do
                          nostrud anim incididunt cillum culpa consequat.
                          Excepteur qui ipsum aliquip consequat sint. Sit id
                          mollit nulla mollit nostrud in ea officia proident.
                          Irure nostrud pariatur mollit ad adipisicing
                          reprehenderit deserunt qui eu.
                        </li>
                        <br />
                        <li>
                          4. Fugiat ipsum ipsum deserunt culpa aute sint do
                          nostrud anim incididunt cillum culpa consequat.
                          Excepteur qui ipsum aliquip consequat sint. Sit id
                          mollit nulla mollit nostrud in ea officia proident.
                          Irure nostrud pariatur mollit ad adipisicing
                          reprehenderit deserunt qui eu.
                        </li>
                      </ol>
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Certificates
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                          <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-2 w-0 flex-1 truncate">
                              resume_back_end_developer.pdf
                            </span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <Link
                              to="#"
                              className="font-medium text-cyan-600 hover:text-cyan-500"
                            >
                              Download
                            </Link>
                          </div>
                        </li>
                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                          <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-2 w-0 flex-1 truncate">
                              coverletter_back_end_developer.pdf
                            </span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <Link
                              to="#"
                              className="font-medium text-cyan-600 hover:text-cyan-500"
                            >
                              Download
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                  <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Documents
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                          <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-2 w-0 flex-1 truncate">
                              resume_back_end_developer.pdf
                            </span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <Link
                              to="#"
                              className="font-medium text-cyan-600 hover:text-cyan-500"
                            >
                              Download
                            </Link>
                          </div>
                        </li>
                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                          <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-2 w-0 flex-1 truncate">
                              coverletter_back_end_developer.pdf
                            </span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <Link
                              to="#"
                              className="font-medium text-cyan-600 hover:text-cyan-500"
                            >
                              Download
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantPropertyTwo;
