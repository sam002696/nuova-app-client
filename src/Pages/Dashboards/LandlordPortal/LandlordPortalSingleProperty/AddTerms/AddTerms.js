import React from "react";
// import { PaperClipIcon } from "@heroicons/react/solid";

const AddTerms = ({ singleProperty }) => {
  return (
    <>
      <div className="w-5/6 mx-auto my-10">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Terms Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Key Terms</p>
        </div>

        {singleProperty.tenantDetails?.length !== 0 ? (
          <>
            {singleProperty?.tenantDetails?.map((tenant) => (
              <div className="mt-5 border-gray-200 bg-white p-5 shadow-md rounded-md">
                <dl className="divide-y divide-gray-200">
                  {singleProperty?.propertyType === "HMO" && (
                    <>
                      <div className="py-4 sm:grid sm:py-5 sm:grid-cols-2 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">
                          Unit No
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-1 ml-auto">
                          <button
                            type="button"
                            className="rounded bg-cyan-50 px-2 py-1 text-sm font-semibold text-cyan-600 shadow-md hover:bg-cyan-100"
                          >
                            {tenant.tenantResidency.unitNumber}
                          </button>
                        </dd>
                      </div>
                    </>
                  )}
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Tenant Name
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-auto">
                      <span className="flex-grow rounded bg-green-50 px-2 py-1 text-sm font-semibold text-green-600 shadow-md hover:bg-green-100">
                        {tenant.tenantPersonalInfo.fullName}
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Tenancy Start Date
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-auto">
                      <span className="flex-grow rounded bg-green-50 px-2 py-1 text-sm font-semibold text-green-600 shadow-md hover:bg-green-100">
                        {new Date(
                          tenant.tenantResidency.leaseStartDate
                        ).toDateString()}
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Rent Due Date
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-auto">
                      <span className="flex-grow rounded bg-green-50 px-2 py-1 text-sm font-semibold text-green-600 shadow-md hover:bg-green-100">
                        {new Date(
                          tenant.tenantResidency.leaseEndDate
                        ).toDateString()}
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Rental Amount
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-auto">
                      <span className="flex-grow rounded bg-green-50 px-2 py-1 text-sm font-semibold text-green-600 shadow-md hover:bg-green-100">
                        £{tenant.tenantResidency.monthlyRent}
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Deposit Amount
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2 ml-auto">
                      <span className="flex-grow rounded bg-green-50 px-2 py-1 text-sm font-semibold text-green-600 shadow-md hover:bg-green-100">
                        {" "}
                        £{tenant.tenantResidency.depositAmount}
                      </span>
                    </dd>
                  </div>

                  {/* <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
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
   </div> */}
                </dl>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="rounded-md bg-yellow-50 p-4 mt-8 shadow-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-yellow-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Attention needed
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      To see the terms information you need to add the tenants
                      for this property!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AddTerms;
