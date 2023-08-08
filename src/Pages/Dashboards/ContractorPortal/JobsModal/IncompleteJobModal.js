import React from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
const IncompleteJobModal = ({ open, setOpen, singleIncompleteJobInfo }) => {
  const cancelButtonRef = useRef(null);
  if (!singleIncompleteJobInfo?.incompleteJobs?.length) {
    return null;
  }

  const {
    BiddingAmount,
    contractorChatUserId,
    contractorEmail,
    contractorName,
    contractorOccupation,
    contractorPhone,
    desc,
  } = singleIncompleteJobInfo.incompleteJobs[0];

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-gray-100 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl sm:w-full sm:p-6">
                  <div>
                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg mt-5">
                      {/* Job Info */}
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Job Info -{" "}
                          <span className=" text-cyan-500  capitalize">
                            {singleIncompleteJobInfo?.issueName}
                          </span>
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Issue Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleIncompleteJobInfo?.issueName}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Timeline
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleIncompleteJobInfo?.timeline}
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Per Hour Income
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleIncompleteJobInfo?.perHourIncome}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Job Id
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleIncompleteJobInfo?.jobid}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      {/* Tenant Info */}
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Tenant Info
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Tenant Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleIncompleteJobInfo?.username}
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Tenant Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleIncompleteJobInfo?.email}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Tenant Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleIncompleteJobInfo?.tenantAddress}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Tenant Phone No
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleIncompleteJobInfo?.phoneNo}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Tenant chatUserId
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleIncompleteJobInfo?.chatusername}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      {/*  Contractor Info */}
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Contractor Info
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Contractor Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {contractorName}
                            </dd>
                          </div>

                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Contractor Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {contractorEmail}
                            </dd>
                          </div>
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Contractor Phone
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {contractorPhone}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Contractor ChatUserId
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {contractorChatUserId}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Contractor Occupation
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {contractorOccupation}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Job Bidding Amount
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              £{BiddingAmount}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Contractor Job Description
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {desc}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default IncompleteJobModal;
