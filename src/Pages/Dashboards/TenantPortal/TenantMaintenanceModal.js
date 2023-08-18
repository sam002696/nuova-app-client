import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Fragment, useRef } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import Swal from "sweetalert2";

const TenantMaintenanceModal = ({ open, setOpen }) => {
  const { tenantPropertyDetails } = useSelector(
    (state) => state.tenantPropertyDetails
  );
  console.log(tenantPropertyDetails);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const cancelButtonRef = useRef(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (reportData) => {
    setLoading(true);
    const data = new FormData();
    const image = reportData.issueImage[0];

    if (image) {
      data.append("file", image);

      data.append("upload_preset", "eez1w4gg");

      const uploadRes2 = await axios.post(
        "https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload",
        data
      );

      const { url: url1 } = uploadRes2.data;

      reportData.issueImage = url1;
    }

    try {
      const res = await axios.post(
        `http://localhost:5500/api/reports`,
        reportData
      );
      if (res.data) {
        setLoading(false);
        setOpen(false);
        Swal.fire("Success!", "You successfully posted the job!", "success");
        window.location.reload(false);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      Swal.fire(
        "Error",
        "There's a problem sending a maintenance request",
        "error"
      );
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
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-5xl sm:w-full sm:p-6 lg:p-24">
                  <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-cyan-600">
                      <ShieldCheckIcon
                        className="h-8 w-8 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="pb-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl leading-6 font-semibold font-sherif c text-gray-500 font-sans tracking-wider  mb-4"
                      >
                        REQUEST FOR MAINTENANCE
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
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="Pete Davidson"
                          value={currentUser.username}
                          {...register("username", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Chat User Name{" "}
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          type="text"
                          id="Chat_User_Name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="petedavidson"
                          required
                          {...register("chatusername", { required: true })}
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
                          value={currentUser.email}
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
                          value={currentUser.phoneNo}
                          {...register("phoneNo", { required: true })}
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
                          value={`${tenantPropertyDetails?.propertyAddress?.addressline1}, ${tenantPropertyDetails?.propertyAddress?.city}, ${tenantPropertyDetails?.propertyAddress?.state}, ${tenantPropertyDetails?.propertyAddress?.country}, ${tenantPropertyDetails?.propertyAddress?.zipcode}`}
                          {...register("tenantAddress", { required: true })}
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
                          value={
                            tenantPropertyDetails?.propertyAddress?.propertyName
                          }
                          {...register("propertyName", { required: true })}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Unit Name (If Any)
                        </label>
                        <input
                          type="text"
                          id="unit_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="2345"
                          value={
                            tenantPropertyDetails?.propertyType === "HMO"
                              ? tenantPropertyDetails?.tenantDetails[0]
                                  ?.tenantResidency?.unitNumber
                              : ""
                          }
                          {...register("unitName", { required: false })}
                        />
                      </div>
                      <div className=" hidden">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                          Landlord Name
                        </label>
                        <input
                          type="text"
                          id="landlordName"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full"
                          placeholder="Alex Cyton"
                          value={
                            tenantPropertyDetails?.landlordInfo?.landlordName
                          }
                          {...register("landlordName", { required: true })}
                        />
                      </div>
                      <div className=" hidden">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Landlord Email
                        </label>
                        <input
                          type="email"
                          id="landlordEmail"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                          placeholder="landlord@gmail.com"
                          value={
                            tenantPropertyDetails?.landlordInfo?.landlordEmail
                          }
                          {...register("landlordEmail", { required: true })}
                        />
                      </div>
                    </div>

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
                            Maintenance Issue{" "}
                            <span className="text-red-500 font-bold ">*</span>
                          </label>
                          <input
                            type="text"
                            id="issueName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full  "
                            placeholder="Boiler Not Working"
                            {...register("issueName", { required: true })}
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Issue Description{" "}
                            <span className="text-red-500 font-bold ">*</span>
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="issueDesc"
                              name="issueDesc"
                              rows={3}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                              placeholder="Boiler is not working for two days"
                              {...register("issueDesc", { required: true })}
                              defaultValue={""}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Issue Image{" "}
                            <span className="text-red-500 font-bold ">*</span>
                          </label>
                          <input
                            type="file"
                            id="issueImage"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-400   file:text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full  file:p-1.5 file:border-none"
                            {...register("issueImage", { required: true })}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" mx-auto mt-5 flex justify-end">
                      <button
                        // onClick={() => setOpen(false)}
                        type="submit"
                        className="text-white bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-semibold rounded-md text-md px-3 py-3 text-center"
                      >
                        {loading ? "SUBMITTING REQUEST" : "SUBMIT REQUEST"}
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
