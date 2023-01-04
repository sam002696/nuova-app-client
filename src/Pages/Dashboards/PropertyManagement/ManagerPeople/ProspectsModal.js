import React from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
const ProspectsModal = ({ open, setOpen, singleProspect }) => {
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
                <Dialog.Panel className="relative bg-gray-100 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl sm:w-full sm:p-6">
                  <div>
                    {/* Property Info */}
                    {/* 
                    <div className=" rounded-md shadow-md bg-white">
                      <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                        className="p-0 rounded-t-md"
                      />
                      <div className=" flex justify-between pt-8 p-5">
                        <div className=" space-y-2">
                          <p className=" text-lg font-medium">£2,250 pcm</p>
                          <p className="text-lg font-medium">
                            Hamilton Gardens, Glasgow, G12
                          </p>
                          <p className="text-lg font-medium">
                            Available: 14/12/22
                          </p>
                        </div>
                        <div className="">
                          <div className=" flex space-x-10">
                            <div className="flex items-center space-x-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                                className="h-7 w-7 fill-lime-600"
                              >
                                <path d="M32 32C49.67 32 64 46.33 64 64V320H288V160C288 142.3 302.3 128 320 128H544C597 128 640 170.1 640 224V448C640 465.7 625.7 480 608 480C590.3 480 576 465.7 576 448V416H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32zM96 208C96 163.8 131.8 128 176 128C220.2 128 256 163.8 256 208C256 252.2 220.2 288 176 288C131.8 288 96 252.2 96 208z" />
                              </svg>
                              <p className="font-medium text-gray-600">6</p>
                            </div>

                            <div className="flex items-center space-x-2">
                              <svg
                                className="h-6 w-6 fill-blue-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M32 384c0 28.32 12.49 53.52 32 71.09V496C64 504.8 71.16 512 80 512h32C120.8 512 128 504.8 128 496v-15.1h256V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16v-40.9c19.51-17.57 32-42.77 32-71.09V352H32V384zM496 256H96V77.25C95.97 66.45 111 60.23 118.6 67.88L132.4 81.66C123.6 108.6 129.4 134.5 144.2 153.2C137.9 159.5 137.8 169.8 144 176l11.31 11.31c6.248 6.248 16.38 6.248 22.63 0l105.4-105.4c6.248-6.248 6.248-16.38 0-22.63l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0C230.7 33.26 204.7 27.55 177.7 36.41L163.9 22.64C149.5 8.25 129.6 0 109.3 0C66.66 0 32 34.66 32 77.25v178.8L16 256C7.164 256 0 263.2 0 272v32C0 312.8 7.164 320 16 320h480c8.836 0 16-7.164 16-16v-32C512 263.2 504.8 256 496 256z" />
                              </svg>
                              <p className="font-medium text-gray-600">3</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}

                    <div className="overflow-hidden bg-white shadow-md sm:rounded-lg mt-5">
                      {/* Personal Details */}
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Personal Details
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Preferred Move In Date
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {new Date(
                                singleProspect.details?.moveindate
                              ).toDateString()}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Full Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.details?.fullName}
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.details?.emailAddress}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Mobile
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.details?.mobile}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect?.propertyDetails?.addressline1} ,{" "}
                              {singleProspect?.propertyDetails?.city} ,{" "}
                              {singleProspect?.propertyDetails?.zipcode}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      {/* Preferences */}
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Preferences
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Max Rent
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {" "}
                              £{singleProspect?.preferences?.maxRent}
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Max Beds
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect?.preferences?.maxBeds}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Furnished
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {" "}
                              {singleProspect?.preferences?.preference}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Parking
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect?.preferences?.parking}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      {/*  Extra Information */}
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Extra Information
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Is your combined household annual income more than
                              30 times the monthly rental, or can you provide a
                              UK based guarantor?
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              £{singleProspect?.extraInfo?.householdIncome}
                            </dd>
                          </div>

                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              How many adults (16 or older) will be living in
                              the property? *
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.extraInfo?.adults}
                            </dd>
                          </div>
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              How many children (15 or younger) will be living
                              in the property?
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.extraInfo?.children}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Intended length of stay in the property?
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.extraInfo?.lengthOfStay}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Current Living Arrangement
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.extraInfo?.livingArrangement}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Reason for moving
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.extraInfo?.reasonForMoving}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Current Occupation
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.extraInfo?.currentOccupation}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              What is your job title?
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.extraInfo?.jobTitle}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Total Household Income
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              £{singleProspect.extraInfo?.householdIncome}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Pets
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.extraInfo?.pets}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Smoker
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.extraInfo?.smoker}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Do you have any adverse credit?
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.extraInfo?.adverseCard}
                            </dd>
                          </div>
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">
                              Please enter any relevant information you think
                              will support your application to rent the property
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.extraInfo?.relevantInfo}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      {/* Viewing Day and Time */}
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Viewing Day and Time
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Viewing Date
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {new Date(
                                singleProspect.book?.preferredDay
                              ).toDateString()}{" "}
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Viewing Time
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {singleProspect.book?.preferredTime}
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

export default ProspectsModal;
