import React, { useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MaintenanceReportUpdateModal = ({
  open,
  setOpen,
  singleReportUpdate,
}) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (singleReport) => {
    setLoading(true);
    try {
      const res = await axios.put(
        `http://localhost:5500/api/contractorJobs/singlecontractorjob/${singleReportUpdate._id}`,
        singleReport
      );
      if (res.data) {
        setLoading(false);
        Swal.fire("Success!", "You updated the job successfully!", "success");
        window.location.reload(false);
        console.log(res.data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      Swal.fire(
        "Error",
        "There's a problem updating the maintenance report",
        "error"
      );
    }
    console.log(singleReport);
  };

  console.log(singleReportUpdate);

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

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Update {singleReportUpdate?.issueName}
                      </Dialog.Title>

                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 mt-4"
                      >
                        JobId : {singleReportUpdate?._id}
                      </Dialog.Title>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                      <div className="mt-2">
                        <div className=" grid grid-cols-2 gap-5 pt-5">
                          <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700">
                              Issue Name
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="issueName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                                placeholder="Issue Name"
                                defaultValue={singleReportUpdate?.issueName}
                                {...register("issueName", { required: true })}
                              />
                            </div>
                          </div>
                          <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700">
                              Required Experience{" "}
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="requiredExperience"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                                placeholder="5 years"
                                defaultValue={
                                  singleReportUpdate?.requiredExperience
                                    ? singleReportUpdate?.requiredExperience
                                    : ""
                                }
                                {...register("requiredExperience", {
                                  required: false,
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700">
                              Work Completion Timeline{" "}
                              <span className="text-red-500 font-bold ">*</span>
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="timeline"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                                placeholder="3 days"
                                defaultValue={
                                  singleReportUpdate?.timeline
                                    ? singleReportUpdate?.timeline
                                    : ""
                                }
                                {...register("timeline", {
                                  required: true,
                                })}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700">
                              Per Hour Income Rate{" "}
                              <span className="text-red-500 font-bold ">*</span>
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="perHourIncome"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                                placeholder="£30"
                                defaultValue={
                                  singleReportUpdate?.perHourIncome
                                    ? singleReportUpdate?.perHourIncome
                                    : ""
                                }
                                {...register("perHourIncome", {
                                  required: true,
                                })}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700">
                              JobId
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                id="jobid"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                                placeholder="Job Id"
                                value={
                                  singleReportUpdate?._id
                                    ? singleReportUpdate?._id
                                    : ""
                                }
                                {...register("jobid", {
                                  required: true,
                                })}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mx-auto mt-5">
                          <button
                            disabled={loading}
                            type="submit"
                            className="text-white bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-semibold rounded-md text-md  px-2 py-2 text-center w-full"
                          >
                            {loading ? "Submitting Request" : "Submit Request"}
                          </button>
                        </div>
                      </div>
                    </form>
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

export default MaintenanceReportUpdateModal;
