import React from "react";
import { Fragment, useRef } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { UserAddIcon } from "@heroicons/react/outline";

const LandlordModal = ({ open, setOpen }) => {
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
                        Let's add a landlord
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
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="Pete"
                          {...register("firstName", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="Davidson"
                          {...register("lastName", { required: true })}
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
                    </div>

                    <div className="pb-5 sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-md leading-6 font-medium text-gray-700 mb-2 underline underline-offset-4"
                      >
                        Payment details
                      </Dialog.Title>
                    </div>

                    <div className="grid gap-3 mb-6 lg:grid-cols-3">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Name on account
                        </label>
                        <input
                          type="text"
                          id="account_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="Pete Davidson"
                          {...register("accountName", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Account No
                        </label>
                        <input
                          type="number"
                          id="account_no"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="213456"
                          {...register("accountNo", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Sort Code
                        </label>
                        <input
                          type="number"
                          id="sort_code"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="2345"
                          {...register("sortCode", { required: true })}
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 mb-6 lg:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Bank Name
                        </label>
                        <input
                          type="text"
                          id="bank_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="Barclays"
                          {...register("bankName", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Account Type
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          {...register("accountType", { required: true })}
                        >
                          <option>Select</option>
                          <option>Personal</option>
                          <option>Business</option>
                        </select>
                      </div>
                    </div>

                    <div className="pb-5 sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-md leading-6 font-medium text-gray-700 mb-5 underline underline-offset-4"
                      >
                        Documents
                      </Dialog.Title>
                      <div className="grid gap-3 mb-6 lg:grid-cols-3">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Proof of address
                          </label>
                          <input
                            type="file"
                            id="address_file"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg file:bg-gray-400   file:text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full  file:rounded-l-lg file:p-1.5 file:border-none"
                            {...register("accountName", { required: true })}
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            EPC
                          </label>
                          <input
                            type="file"
                            id="epc"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg file:bg-gray-400   file:text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full  file:rounded-l-lg file:p-1.5 file:border-none"
                            placeholder="213456"
                            {...register("epc", { required: true })}
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            EICR
                          </label>
                          <input
                            type="file"
                            id="eicr"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg file:bg-gray-400   file:text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full  file:rounded-l-lg file:p-1.5 file:border-none"
                            {...register("eicr", { required: true })}
                          />
                        </div>
                      </div>

                      <div className="grid gap-3 mb-6 lg:grid-cols-2">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            PAT
                          </label>
                          <input
                            type="file"
                            id="pat"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg file:bg-gray-400   file:text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full  file:rounded-l-lg file:p-1.5 file:border-none"
                            {...register("pat", { required: true })}
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Gas Safety
                          </label>
                          <input
                            type="file"
                            id="gas_safety"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg file:bg-gray-400   file:text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full  file:rounded-l-lg file:p-1.5 file:border-none"
                            {...register("gas_safety", { required: true })}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setOpen(false)}
                      type="submit"
                      className="text-white bg-gradient-to-r from-sky-800 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-bold rounded-md text-sm w-full px-5 py-2.5 text-center"
                    >
                      Add a landlord
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

export default LandlordModal;
