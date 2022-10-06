import React from "react";
import { Fragment, useRef } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { UserAddIcon } from "@heroicons/react/outline";
const TenantModal = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
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
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-5xl sm:w-full sm:p-6">
                  <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <UserAddIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="pb-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl leading-6 font-semibold text-gray-900 underline underline-offset-8 mb-4"
                      >
                        Let's add a tenant
                      </Dialog.Title>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                    <div className="pb-5 sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-md leading-6 font-medium text-gray-700 mb-2 underline underline-offset-4"
                      >
                        Account Information
                      </Dialog.Title>
                    </div>
                    <div className="grid gap-3 mb-6 lg:grid-cols-3">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="Full Name"
                          {...register("fullName", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email_address"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="example@gmail.com"
                          {...register("email", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="******"
                          {...register("password", { required: true })}
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone_no"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="(+1) 9826-2344"
                          {...register("phoneNumber", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="Glasgow 2nd Street.."
                          {...register("address", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Guarantor
                        </label>
                        <select
                          id="guarantor"
                          name="guarantor"
                          autoComplete="guarantor"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          {...register("guarantor", { required: true })}
                        >
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Combined Household Income
                        </label>
                        <input
                          type="number"
                          id="combinedHouseholdIncome"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="24000"
                          {...register("combinedHouseholdIncome", {
                            required: true,
                          })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Number of adults
                        </label>
                        <input
                          type="number"
                          id="numberOfAdults"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="16 and above"
                          {...register("numberOfAdults", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Number of children
                        </label>
                        <input
                          type="number"
                          id="numberOfChildren"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="4"
                          {...register("numberOfChildren", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Length of stay
                        </label>
                        <input
                          type="number"
                          id="lengthOfStay"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="4"
                          {...register("lengthOfStay", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Current living arrangements
                        </label>
                        <input
                          type="text"
                          id="currentlivingarrangements"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          {...register("currentLivingArrangements", {
                            required: true,
                          })}
                          placeholder="Type here.."
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Reason for moving
                        </label>
                        <input
                          type="text"
                          id="Reason for moving"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          {...register("reasonForMoving", {
                            required: true,
                          })}
                          placeholder="Type here.."
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Current Occupation
                        </label>
                        <input
                          type="text"
                          id="currentOccupation"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          {...register("currentOccupation", {
                            required: true,
                          })}
                          placeholder="nurse"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="jobtitle"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          {...register("currentOccupation", {
                            required: true,
                          })}
                          placeholder="nurse"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Smoker
                        </label>
                        <select
                          id="smoker"
                          name="smoker"
                          autoComplete="smoker"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          {...register("guarantor", { required: true })}
                        >
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Adverse Card
                        </label>
                        <select
                          id="adverseCard"
                          name="adverseCard"
                          autoComplete="adverseCard"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full"
                          {...register("adverseCard", { required: true })}
                        >
                          <option>Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Any Additional Information
                        </label>
                        <input
                          type="text"
                          id="additonalInfo"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full"
                          {...register("additionalInfo", {
                            required: true,
                          })}
                          placeholder="Type here.."
                        />
                      </div>
                    </div>

                    <div className="pb-5 sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-md leading-6 font-medium text-gray-700 mb-5 underline underline-offset-4"
                      >
                        Documents
                      </Dialog.Title>

                      <div className="grid gap-3 mb-6 lg:grid-cols-2">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Form of ID
                          </label>
                          <input
                            type="file"
                            id="formofID"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg file:bg-gray-400   file:text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full  file:rounded-l-lg file:p-1.5 file:border-none"
                            {...register("formOfId", { required: true })}
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Reference
                          </label>
                          <input
                            type="file"
                            id="reference"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg file:bg-gray-400   file:text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full  file:rounded-l-lg file:p-1.5 file:border-none"
                            {...register("reference", { required: true })}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setOpen(false)}
                      type="submit"
                      className="text-white bg-gradient-to-r from-sky-800 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-bold rounded-md text-sm w-full px-5 py-2.5 text-center"
                    >
                      Add a tenant
                    </button>
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

export default TenantModal;
