import React, { useState } from "react";
import { Fragment, useRef } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { UserAddIcon } from "@heroicons/react/outline";
import axios from "axios";
import Swal from "sweetalert2";

const LandlordModal = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5500/api/auth/register",
        data
      );

      if (res.data) {
        setLoading(false);
        Swal.fire(
          "User registration is successful!",
          "The user has been added in the system!",
          "success"
        );
        window.location.reload(false);
      }
    } catch (err) {
      console.log(err);
    }
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
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full sm:p-6">
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
                        User's Credentials
                      </Dialog.Title>
                    </div>
                    <div className="grid gap-3 mb-6 lg:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="username"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="Pete Snow"
                          {...register("username", { required: true })}
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
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="******"
                          {...register("confirmPassword", { required: true })}
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Phone No
                        </label>
                        <input
                          type="number"
                          id="phoneNo"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="******"
                          {...register("phoneNo", { required: true })}
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Role
                        </label>
                        <input
                          type="text"
                          id="role"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          value="Landlord"
                          readOnly
                          {...register("role", { required: true })}
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => setOpen(false)}
                      type="submit"
                      disabled={loading}
                      className="text-white bg-gradient-to-r from-sky-800 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-bold rounded-md text-sm w-full px-5 py-2.5 text-center disabled:bg-blue-100 disabled:cursor-not-allowed"
                    >
                      {loading ? "Adding a landlord" : "Add a landlord"}
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
