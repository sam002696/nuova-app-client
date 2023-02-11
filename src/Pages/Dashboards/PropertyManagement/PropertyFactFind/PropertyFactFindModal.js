import React, { useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Property from "./PropertyFactFindTabs/Property";
import PropertyDetails from "./PropertyFactFindTabs/PropertyDetails";
import OwnershipDetails from "./PropertyFactFindTabs/OwnershipDetails";
import PropertyMaintenance from "./PropertyFactFindTabs/PropertyMaintenance";
import Engagement from "./PropertyFactFindTabs/Engagement";
const PropertyFactFindModal = ({
  open,
  setOpen,
  property,
  propertyDetails,
  ownershipDetails,
  propertyMaintenance,
  marketResearch,
  engagementOfNuova,
}) => {
  const [openTab, setOpenTab] = useState(1);
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
                <Dialog.Panel className="relative  rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:max-w-5xl sm:w-full sm:p-6">
                  <div className="overflow-hidden bg-white shadow-md sm:rounded-lg mt-5">
                    <div className="flex flex-wrap">
                      <div className="w-full">
                        <ul
                          className="flex mb-0 list-none flex-wrap pt-0 pb-4 flex-row"
                          role="tablist"
                        >
                          <li className="-mb-px  last:mr-0 flex-auto text-center">
                            <a
                              className={
                                "text-xs font-bold uppercase px-5 py-3  block leading-normal " +
                                (openTab === 1
                                  ? "text-teal-600 bg-teal-100 border-b-4 border-teal-500"
                                  : "text-teal-600 bg-white")
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(1);
                              }}
                              data-toggle="tab"
                              href="#link1"
                              role="tablist"
                            >
                              Property
                            </a>
                          </li>
                          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                              className={
                                "text-xs font-bold uppercase px-5 py-3  block leading-normal " +
                                (openTab === 2
                                  ? "text-teal-600 bg-teal-100 border-b-4 border-teal-500"
                                  : "text-teal-600 bg-white")
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(2);
                              }}
                              data-toggle="tab"
                              href="#link2"
                              role="tablist"
                            >
                              Property Details
                            </a>
                          </li>
                          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                              className={
                                "text-xs font-bold uppercase px-5 py-3  block leading-normal " +
                                (openTab === 3
                                  ? "text-teal-600 bg-teal-100 border-b-4 border-teal-500"
                                  : "text-teal-600 bg-white")
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(3);
                              }}
                              data-toggle="tab"
                              href="#link3"
                              role="tablist"
                            >
                              Ownership Details
                            </a>
                          </li>
                          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                              className={
                                "text-xs font-bold uppercase px-5 py-3  block leading-normal " +
                                (openTab === 4
                                  ? "text-teal-600 bg-teal-100 border-b-4 border-teal-500"
                                  : "text-teal-600 bg-white")
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(4);
                              }}
                              data-toggle="tab"
                              href="#link4"
                              role="tablist"
                            >
                              Property Maintenance
                            </a>
                          </li>
                          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                              className={
                                "text-xs font-bold uppercase px-5 py-3  block leading-normal " +
                                (openTab === 5
                                  ? "text-teal-600 bg-teal-100 border-b-4 border-teal-500"
                                  : "text-teal-600 bg-white")
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(5);
                              }}
                              data-toggle="tab"
                              href="#link5"
                              role="tablist"
                            >
                              Market Research & Engagement
                            </a>
                          </li>
                        </ul>
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded">
                          <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                              <div
                                className={openTab === 1 ? "block" : "hidden"}
                                id="link1"
                              >
                                <Property property={property} />
                              </div>
                              <div
                                className={openTab === 2 ? "block" : "hidden"}
                                id="link2"
                              >
                                <PropertyDetails
                                  propertyDetails={propertyDetails}
                                />
                              </div>
                              <div
                                className={openTab === 3 ? "block" : "hidden"}
                                id="link3"
                              >
                                <OwnershipDetails
                                  ownershipDetails={ownershipDetails}
                                  engagementOfNuova={engagementOfNuova}
                                />
                              </div>
                              <div
                                className={openTab === 4 ? "block" : "hidden"}
                                id="link4"
                              >
                                <PropertyMaintenance
                                  propertyMaintenance={propertyMaintenance}
                                />
                              </div>

                              <div
                                className={openTab === 5 ? "block" : "hidden"}
                                id="link5"
                              >
                                <Engagement
                                  engagementOfNuova={engagementOfNuova}
                                  propertyMaintenance={propertyMaintenance}
                                  marketResearch={marketResearch}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
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

export default PropertyFactFindModal;
