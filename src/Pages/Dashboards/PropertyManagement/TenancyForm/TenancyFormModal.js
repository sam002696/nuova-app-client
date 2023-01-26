import React from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
const TenancyFormModal = ({ open, setOpen, singleTenantform }) => {
  const cancelButtonRef = useRef(null);
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
                <Dialog.Panel className="relative  rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:max-w-4xl sm:w-full sm:p-6">
                  <div>
                    {/* Property Info */}

                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg mt-5">
                      {/* Personal Details */}
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Tenant Info
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Date of birth
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {new Date(
                                singleTenantform.tenantInfo?.dob
                              ).toDateString()}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Current Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleTenantform.tenantInfo?.currentAddress}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Full Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleTenantform.tenantInfo?.fullName}
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleTenantform.tenantInfo?.email}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Mobile
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleTenantform.tenantInfo?.telephoneNo}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Nationality
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleTenantform?.tenantInfo?.nationality}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Number of Children
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleTenantform?.tenantInfo?.numberOfChildren}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Passport No
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleTenantform?.tenantInfo?.passportNo}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Pets
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleTenantform?.tenantInfo?.pets}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Smoker
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleTenantform?.tenantInfo?.smoker}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      {/* Preferences */}
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Property Applying For
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Rent
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {" "}
                              £{singleTenantform?.propertyApplyingFor?.rent}
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Deposit
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              £{singleTenantform?.propertyApplyingFor?.deposit}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Adderess of property
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {" "}
                              {
                                singleTenantform?.propertyApplyingFor
                                  ?.addressOfProperty
                              }
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Desired entry date
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {new Date(
                                singleTenantform?.propertyApplyingFor?.desiredEntryDate
                              ).toLocaleDateString()}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      {/*  Guarantor Details */}
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Guarantor Details
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Guarantor
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleTenantform.guarantorDetails?.guarantor}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Credit Score
                            </dt>
                            <dt className=" mt-3">
                              <a
                                href={
                                  singleTenantform.guarantorDetails?.creditScore
                                }
                                target="_blank"
                                rel="noreferrer"
                                className=" text-sm text-cyan-700 bg-cyan-200 p-3 rounded-md"
                              >
                                Credit Score document
                              </a>
                            </dt>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Bank Statements
                            </dt>
                            <div className="mt-3 flex space-x-3">
                              {singleTenantform.guarantorDetails?.bankStatements.map(
                                (bankstatment, index) => (
                                  <a
                                    key={index}
                                    href={bankstatment}
                                    target="_blank"
                                    rel="noreferrer"
                                    className=" text-sm text-cyan-700 bg-cyan-200 p-3 rounded-md"
                                  >
                                    Bank Statment {index + 1}
                                  </a>
                                )
                              )}
                            </div>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              PaySlips
                            </dt>
                            <div className="mt-3 flex space-x-3">
                              {singleTenantform.guarantorDetails?.payslips.map(
                                (payslip, index) => (
                                  <a
                                    key={index}
                                    href={payslip}
                                    target="_blank"
                                    rel="noreferrer"
                                    className=" text-sm text-cyan-700 bg-cyan-200 p-3 rounded-md"
                                  >
                                    Payslip {index + 1}
                                  </a>
                                )
                              )}
                            </div>
                          </div>
                        </dl>
                      </div>

                      {/* First Referee */}
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          First Referee
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {" "}
                              {singleTenantform?.firstReferee?.firstRefereeName}
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {
                                singleTenantform?.firstReferee
                                  ?.firstRefereeEmailAddress
                              }
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Relationship
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {
                                singleTenantform?.firstReferee
                                  ?.firstRefereeRelationship
                              }
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Work Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {
                                singleTenantform?.firstReferee
                                  ?.firstRefereeWorkAddress
                              }
                            </dd>
                          </div>
                        </dl>
                      </div>

                      {/* Second Referee */}
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Second Referee
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {" "}
                              {
                                singleTenantform?.secondReferee
                                  ?.secondRefereeName
                              }
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {
                                singleTenantform?.secondReferee
                                  ?.secondRefereeEmailAddress
                              }
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Relationship
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {
                                singleTenantform?.secondReferee
                                  ?.secondRefereeRelationship
                              }
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Work Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {
                                singleTenantform?.secondReferee
                                  ?.secondRefereeWorkAddress
                              }
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Next of kin details
                        </h3>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-3">
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {" "}
                              {
                                singleTenantform?.nextOfKinDetails
                                  ?.nextOfKinName
                              }
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {
                                singleTenantform?.nextOfKinDetails
                                  ?.nextOfKinEmailAddress
                              }
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Relationship
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {
                                singleTenantform?.nextOfKinDetails
                                  ?.nextOfKinRelationship
                              }
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {
                                singleTenantform?.nextOfKinDetails
                                  ?.nextOfKinAddress
                              }
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Telephone No
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {
                                singleTenantform?.nextOfKinDetails
                                  ?.nextOfKinTelNo
                              }
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

export default TenancyFormModal;
