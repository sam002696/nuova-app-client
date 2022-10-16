import React from 'react';
import { Fragment, useRef } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/outline";

const TenantMaintenanceModal = ({ open, setOpen }) => {
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
                                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-5xl sm:w-full sm:p-6 lg:p-24">
                                    <div>
                                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-cyan-600">
                                            < ShieldCheckIcon
                                                className="h-8 w-8 text-white"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="pb-3 text-center sm:mt-5">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-2xl leading-6 font-semibold font-sherif c text-gray-500 font-sans tracking-wider  mb-4"
                                            >
                                                REQUEST  FOR  MAINTENANCE
                                            </Dialog.Title>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                                        <div className="pb-5 sm:mt-5">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-xl leading-6 font-semibold font-mono tracking-wider text-gray-700 mb-2"
                                            >
                                                Tenant's Required Information
                                            </Dialog.Title>
                                        </div>
                                        <div className="grid gap-3 mb-6 lg:grid-cols-2">
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
                                                    Chat User Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="Chat_User_Name"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                                                    placeholder="petedavidson"
                                                    {...register("chatUse", { required: true })}
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
                                                className="text-xl leading-6 font-semibold font-mono tracking-wider text-gray-700 mb-2"
                                            >
                                                Property details
                                            </Dialog.Title>
                                        </div>

                                        <div className="grid gap-3 mb-6 lg:grid-cols-2">
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                                                    Property Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="property_name"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                                                    placeholder="Houston Villa"
                                                    {...register("propertyName", { required: true })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                                                    Landlord Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="landlord_name"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                                                    placeholder="Alex Cyton"
                                                    {...register("landlordName", { required: true })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                                                    Unit Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="unit_name"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                                                    placeholder="2345"
                                                    {...register("unitName", { required: true })}
                                                />
                                            </div>
                                        </div>

                                        {/* <div className="grid gap-3 mb-6 lg:grid-cols-2">
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
                                        </div> */}

                                        <div className="pb-5 sm:mt-5">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-xl leading-6 font-semibold font-mono tracking-wider text-gray-700 mb-6"
                                            >
                                                Maintenance Issue
                                            </Dialog.Title>

                                            <div className="grid gap-3 mb-6 lg:grid-cols-2">
                                                <div>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                                                        Maintenance Issue
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="subject_name"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                                                        placeholder="Boiler Not Working"
                                                        {...register("unitName", { required: true })}
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                                        Issue Description
                                                    </label>
                                                    <div className="mt-1">
                                                        <textarea
                                                            id="description"
                                                            name="description"
                                                            rows={3}
                                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                                            placeholder="Boiler is not working for two days"
                                                            defaultValue={''}
                                                        />
                                                    </div>

                                                </div>
                                                <div>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                                                        Tenancy Proof
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="tenancyProof"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-400   file:text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full file:p-1.5 file:border-none"
                                                        placeholder="document"
                                                        {...register("tenancyProof", { required: true })}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                                                        Issue Image
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="issueImage"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-400   file:text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full  file:p-1.5 file:border-none"
                                                        {...register("issueImage", { required: true })}
                                                    />
                                                </div>
                                            </div>


                                        </div>
                                        <div className='w-1/4 mx-auto mt-4'>
                                            <button
                                                onClick={() => setOpen(false)}
                                                type="submit"
                                                className="text-white bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-semibold rounded-md text-md  px-2 py-3 text-center w-full"
                                            >
                                                SUBMIT REQUEST
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

export default TenantMaintenanceModal;