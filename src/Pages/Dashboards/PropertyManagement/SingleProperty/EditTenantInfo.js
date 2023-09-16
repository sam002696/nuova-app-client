import React, { useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm, Controller } from "react-hook-form";

const EditTenantInfo = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
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
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-5">
                      Tenant Personal Info
                    </h3>

                    <div className="grid grid-cols-4 gap-2">
                      {/* Field 1 */}
                      <div className="col-span-1">
                        <label
                          htmlFor="field4"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Email
                        </label>
                        <Controller
                          name="field1"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Email"
                            />
                          )}
                        />
                      </div>

                      {/* Field 2 */}
                      <div className="col-span-1">
                        <label
                          htmlFor="field4"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Full Name
                        </label>
                        <Controller
                          name="field2"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Full Name"
                            />
                          )}
                        />
                      </div>

                      {/* Field 3 */}
                      <div className="col-span-1">
                        <label
                          htmlFor="field4"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Phone No
                        </label>
                        <Controller
                          name="field3"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Phone No"
                            />
                          )}
                        />
                      </div>

                      {/* Field 4 */}
                      <div className="col-span-1">
                        <label
                          htmlFor="field4"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Total Occupants
                        </label>
                        <Controller
                          name="field4"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Total Occupants"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="field4"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Pets
                        </label>
                        <Controller
                          name="field4"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="pets"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="Pets Desc"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Pets Desc
                        </label>
                        <Controller
                          name="field4"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <textarea
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Pets Desc"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="smokes"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Smokes
                        </label>
                        <Controller
                          name="smokes"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <select
                              {...field}
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            >
                              <option value="">Select</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="lawsuit"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Lawsuit
                        </label>
                        <Controller
                          name="lawsuit"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <select
                              {...field}
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            >
                              <option value="">Select</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="felony"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Felony
                        </label>
                        <Controller
                          name="felony"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <select
                              {...field}
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            >
                              <option value="">Select</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="Felony/Lawsuit Desc"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Felony/Lawsuit Desc
                        </label>
                        <Controller
                          name="field4"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <textarea
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Felony/Lawsuit Desc"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="Felony/Lawsuit Desc"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Current Income
                        </label>
                        <Controller
                          name="field4"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Current Income"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="Income Assistance"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Income Assistance
                        </label>
                        <Controller
                          name="field4"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Income Assistance"
                            />
                          )}
                        />
                      </div>
                      <div className="col-span-1">
                        <label
                          htmlFor="Credit Score"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Credit Score
                        </label>
                        <Controller
                          name="field4"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Credit Score"
                            />
                          )}
                        />
                      </div>
                    </div>

                    <h3 className="text-lg leading-6 font-medium text-gray-900 my-5">
                      Tenant Residency
                    </h3>

                    <div className="grid grid-cols-4 gap-2">
                      <div className="col-span-1">
                        <label
                          htmlFor="Post Code"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Post Code
                        </label>
                        <Controller
                          name="field1"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Post Code"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="Monthly Rent"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Monthly Rent
                        </label>
                        <Controller
                          name="field2"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Monthly Rent"
                            />
                          )}
                        />
                      </div>

                      {/* Field 3 */}
                      <div className="col-span-1">
                        <label
                          htmlFor="Deposit Amount"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Deposit Amount
                        </label>
                        <Controller
                          name="field3"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Deposit Amount"
                            />
                          )}
                        />
                      </div>

                      {/* Field 4 */}
                      <div className="col-span-1">
                        <label
                          htmlFor="Lease Start Date"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Lease Start Date
                        </label>
                        <Controller
                          name="field4"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="date"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="field4"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Lease End Date
                        </label>
                        <Controller
                          name="field4"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="date"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="Deposit Amount"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Deposit Amount
                        </label>
                        <Controller
                          name="Deposit Amount"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="10,000"
                            />
                          )}
                        />
                      </div>
                    </div>

                    <h3 className="text-lg leading-6 font-medium text-gray-900 my-5">
                      Guarantor Info
                    </h3>

                    <div className="grid grid-cols-4 gap-2">
                      <div className="col-span-1">
                        <label
                          htmlFor="Post Code"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Current Income
                        </label>
                        <Controller
                          name="Current Income"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Current Income"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="Monthly Rent"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Full Name
                        </label>
                        <Controller
                          name="Full Name"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Full Name"
                            />
                          )}
                        />
                      </div>

                      {/* Field 3 */}
                      <div className="col-span-1">
                        <label
                          htmlFor="Deposit Amount"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Email
                        </label>
                        <Controller
                          name="field3"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="email"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder=" Email"
                            />
                          )}
                        />
                      </div>

                      {/* Field 4 */}
                      <div className="col-span-1">
                        <label
                          htmlFor="Phone No"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Phone No
                        </label>
                        <Controller
                          name="Phone No"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                            />
                          )}
                        />
                      </div>
                    </div>

                    <div className="mt-10 text-right">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 "
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default EditTenantInfo;
