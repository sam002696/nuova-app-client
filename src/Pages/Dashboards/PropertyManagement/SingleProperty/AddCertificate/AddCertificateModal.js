import React from "react";
import { Fragment, useRef } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { FolderDownloadIcon } from "@heroicons/react/outline";

const AddCertificateModal = ({ open, setOpen }) => {
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
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-3xl sm:w-full sm:p-6 lg:p-12">
                  <div>
                    <div className="mx-auto flex items-center justify-center h-10 w-10 rounded-full bg-cyan-500">
                      <FolderDownloadIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="pb-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl leading-6 font-semibold font-sherif c text-gray-500 font-sans tracking-wider  mb-4"
                      >
                        Upload Certificate
                      </Dialog.Title>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                    <div className="grid gap-5 mb-6 lg:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Certificate's Name
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
                          Certificate Provider's Name
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
                          Certificate Provider's Email
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
                          Certificate Provider's Phone
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
                          Upload Certificate
                        </label>
                        <input
                          type="file"
                          id="certificatefile"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-cyan-500   file:text-white focus:outline-none focus:border-cyan-500 block w-full file:p-2 file:border-none  file:focus:border-cyan-500 "
                          placeholder="document"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Certificate Added By
                        </label>
                        <input
                          type="text"
                          id="certificateadder"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="Glasgow 2nd Street.."
                        />
                      </div>
                    </div>

                    <div className="w-1/3 mx-auto mt-10">
                      <button
                        onClick={() => setOpen(false)}
                        type="submit"
                        className="text-white bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-semibold rounded-md text-md  px-2 py-3 text-center w-full"
                      >
                        Upload Certificate
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

export default AddCertificateModal;
