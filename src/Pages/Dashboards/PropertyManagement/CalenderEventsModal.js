import React from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CalendarIcon as Calender } from "@heroicons/react/outline";
import { CalendarIcon, ClipboardCheckIcon } from "@heroicons/react/solid";

const CalenderEventsModal = ({ open, setOpen, day, selectedEvents }) => {
  const cancelButtonRef = useRef(null);
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

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
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full sm:p-6">
                  <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <Calender
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="pb-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl leading-6 font-semibold text-gray-900 underline underline-offset-8 mb-4"
                      >
                        Calender Events ({convert(day)})
                      </Dialog.Title>
                    </div>
                  </div>

                  <div className="overflow-hidden bg-white shadow-lg sm:rounded-md mt-6">
                    <ul className="divide-y divide-gray-200">
                      {selectedEvents.map((event) => (
                        <li key={event._id}>
                          <div className="block hover:bg-gray-50">
                            <div className="px-4 py-4 sm:px-6">
                              <div className="flex items-center justify-between">
                                <p className="truncate text-sm font-medium text-cyan-600">
                                  {event.eventName}
                                </p>
                                <div className="ml-2 flex flex-shrink-0">
                                  <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                    {event.eventTime}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                  <p className="flex items-center text-sm text-gray-500">
                                    <ClipboardCheckIcon
                                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    {event.eventDetails}
                                  </p>
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                  <CalendarIcon
                                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <p>
                                    <time>{event.eventDate}</time>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>

            <div></div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default CalenderEventsModal;
