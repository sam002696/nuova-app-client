import React, { useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/outline";
import axios from "axios";
import Swal from "sweetalert2";

const ViewTenantModal = ({
  open,
  setOpen,
  singleTenant,
  singlePropertyId,
  tenantDetails,
  setTenantDetails,
}) => {
  const publishingOptions = [
    {
      title: "Current Tenant",
      description: "This job posting can be viewed by anyone who has the link.",
      current: true,
    },
    {
      title: "Past Tenant",
      description: "This job posting will no longer be publicly accessible.",
      current: false,
    },
    {
      title: "Wrong Credential",
      description: "This job posting will no longer be publicly accessible.",
      current: false,
    },
    {
      title: "Future Tenant",
      description: "This job posting will no longer be publicly accessible.",
      current: false,
    },
    {
      title: "Irregular Tenant",
      description: "This job posting will no longer be publicly accessible.",
      current: false,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const cancelButtonRef = useRef(null);
  const [selected, setSelected] = useState("");
  console.log(singleTenant);

  const handleStatusChange = async (status) => {
    try {
      const res = await axios.put(
        `http://localhost:5500/api/uploadTenants/update/${singleTenant._id}?tenantStatus=${status}`
      );
      if (res.data) {
        window.location.reload(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleTenantDelete = async () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      html: `<span class="text-sm"> ${singleTenant.tenantPersonalInfo?.fullName} will be removed from this property.</span>`,
      confirmButtonText: "Yes, remove",
      showCancelButton: true,
      buttonsStyling: true,
      customClass: {
        confirmButton: "btn btn-danger py-2 mr-4 px-4",
        cancelButton: "btn-regular py-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5500/api/uploadTenants/${singleTenant._id}/${singlePropertyId}`;
        axios
          .delete(url)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              const remainingTenants = tenantDetails.filter(
                (filteruser) => filteruser._id !== singleTenant._id
              );

              setTenantDetails(remainingTenants);
              window.location.reload(true);
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };
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
                  <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 flex justify-between">
                      <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Tenant Information
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          Personal details and application.
                        </p>
                      </div>
                      <div className=" flex justify-center items-center space-x-3">
                        <div>
                          <Listbox value={selected} onChange={setSelected}>
                            {({ open }) => (
                              <>
                                <Listbox.Label className="sr-only">
                                  Change published status
                                </Listbox.Label>
                                <div className="relative">
                                  <div className="inline-flex divide-x divide-cyan-700 rounded-md shadow-sm">
                                    <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-cyan-600 px-3 py-2 text-white shadow-sm">
                                      <CheckIcon
                                        className="-ml-0.5 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      <p className="text-sm font-semibold">
                                        {singleTenant.status
                                          ? singleTenant.status
                                          : "Set Status"}
                                      </p>
                                    </div>
                                    <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-cyan-600 p-2 hover:bg-cyan-700 focus:outline-none focus:ring-offset-gray-50">
                                      <span className="sr-only">
                                        Change published status
                                      </span>
                                      <ChevronDownIcon
                                        className="h-5 w-5 text-white"
                                        aria-hidden="true"
                                      />
                                    </Listbox.Button>
                                  </div>

                                  <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Listbox.Options className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                      {publishingOptions.map((option) => (
                                        <Listbox.Option
                                          onClick={() =>
                                            handleStatusChange(option.title)
                                          }
                                          key={option.title}
                                          className={({ active }) =>
                                            classNames(
                                              active
                                                ? "bg-cyan-600 text-white"
                                                : "text-gray-900",
                                              "cursor-pointer select-none p-4 text-sm"
                                            )
                                          }
                                          value={option}
                                        >
                                          {({ selected, active }) => (
                                            <div className="flex flex-col">
                                              <div className="flex justify-between">
                                                <p
                                                  className={
                                                    selected
                                                      ? "font-semibold"
                                                      : "font-normal"
                                                  }
                                                >
                                                  {option.title}
                                                </p>
                                                {selected ? (
                                                  <span
                                                    className={
                                                      active
                                                        ? "text-white"
                                                        : "text-cyan-600"
                                                    }
                                                  >
                                                    <CheckIcon
                                                      className="h-5 w-5"
                                                      aria-hidden="true"
                                                    />
                                                  </span>
                                                ) : null}
                                              </div>
                                              <p
                                                className={classNames(
                                                  active
                                                    ? "text-cyan-200"
                                                    : "text-gray-500",
                                                  "mt-2"
                                                )}
                                              >
                                                {option.description}
                                              </p>
                                            </div>
                                          )}
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </>
                            )}
                          </Listbox>
                        </div>
                        <button
                          onClick={() => handleTenantDelete()}
                          className="p-2 bg-red-100 rounded-full cursor-pointer hover:bg-red-200"
                        >
                          {" "}
                          <TrashIcon
                            className="h-6 w-6  text-red-600"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                      <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Full name
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {singleTenant.tenantPersonalInfo?.fullName}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Credit Score
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {singleTenant.tenantPersonalInfo?.creditScore}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Email address
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {singleTenant.tenantPersonalInfo?.email}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Salary
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            £{singleTenant.tenantPersonalInfo?.currentIncome}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Income Assistance
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            £{singleTenant.tenantPersonalInfo?.incomeAssistance}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Phone No
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {singleTenant.tenantPersonalInfo?.phoneNo}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            felony
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {singleTenant.tenantPersonalInfo?.felony}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Lawsuit
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {singleTenant.tenantPersonalInfo?.lawsuit}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Lawsuit Description
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {singleTenant.tenantPersonalInfo?.lawsuitDesc}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Pets
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {singleTenant.tenantPersonalInfo?.pets}
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Pets Description
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            {singleTenant.tenantPersonalInfo?.petDesc}
                          </dd>
                        </div>
                      </dl>
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

export default ViewTenantModal;
