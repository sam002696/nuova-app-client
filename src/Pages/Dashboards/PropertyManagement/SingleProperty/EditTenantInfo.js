import React, { useEffect, useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const EditTenantInfo = ({ open, setOpen, tenantInfo, singleProperty }) => {
  const [loading, setLoading] = useState(false);
  const cancelButtonRef = useRef(null);
  const { handleSubmit, control, reset } = useForm();

  useEffect(() => {
    reset(tenantInfo);
  }, [tenantInfo, reset]);

  const onSubmit = (data) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      // html: `<span class="text-sm"> ${document.certificateName} will be removed from this property.</span>`,
      confirmButtonText: "Yes, update",
      showCancelButton: true,
      buttonsStyling: true,
      customClass: {
        confirmButton: "btn btn-danger py-2 mr-4 px-4",
        cancelButton: "btn-regular py-2",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          const res = await axios.put(
            `https://nuova-property-server.onrender.com/api/uploadTenants/tenantDetails/${tenantInfo._id}`,
            data
          );
          if (res.status === 200) {
            setLoading(false);
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "You updated the tenant successfully!",
              confirmButtonText: "OK",
              showCancelButton: false,
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = `/single-property/${singleProperty._id}`;
              }
            });
          }
        } catch (err) {
          setLoading(false);
          console.log(err);
          Swal.fire(
            "Error",
            "There's a problem updating the tenant in this property",
            "error"
          );
        }
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
                  <div className="text-center mb-10 bg-yellow-50 mx-auto w-1/2 p-1 rounded-md shadow-md">
                    <p className=" font-semibold text-gray-600">
                      Update Form For{" "}
                      <span className="text-cyan-500">
                        {tenantInfo?.tenantPersonalInfo?.fullName}
                      </span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-5">
                      Tenant Personal Info
                    </h3>

                    <div className="grid grid-cols-4 gap-2">
                      <div className="col-span-1">
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Email
                        </label>
                        <Controller
                          name="tenantPersonalInfo.email"
                          control={control}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="email"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Email"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Full Name
                        </label>
                        <Controller
                          name="tenantPersonalInfo.fullName"
                          control={control}
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

                      <div className="col-span-1">
                        <label
                          htmlFor="phoneNo"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Phone No
                        </label>
                        <Controller
                          name="tenantPersonalInfo.phoneNo"
                          control={control}
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

                      <div className="col-span-1">
                        <label
                          htmlFor="totalOccupants"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Total Occupants
                        </label>
                        <Controller
                          name="tenantPersonalInfo.totalOccupants"
                          control={control}
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
                          htmlFor="pets"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Pets
                        </label>
                        <Controller
                          name="tenantPersonalInfo.pets"
                          control={control}
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
                          htmlFor="petDesc"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Pets Desc
                        </label>
                        <Controller
                          name="tenantPersonalInfo.petDesc"
                          control={control}
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
                          name="tenantPersonalInfo.smokes"
                          control={control}
                          render={({ field }) => (
                            <select
                              {...field}
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              defaultChecked={
                                tenantInfo?.tenantPersonalInfo?.smokes
                              }
                            >
                              <option value="">Select</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
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
                          name="tenantPersonalInfo.lawsuit"
                          control={control}
                          render={({ field }) => (
                            <select
                              {...field}
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              defaultChecked={
                                tenantInfo?.tenantPersonalInfo?.lawsuit
                              }
                            >
                              <option value="">Select</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
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
                          name="tenantPersonalInfo.felony"
                          control={control}
                          render={({ field }) => (
                            <select
                              {...field}
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              defaultChecked={
                                tenantInfo?.tenantPersonalInfo?.felony
                              }
                            >
                              <option value="">Select</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="lawsuitDesc"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Felony/Lawsuit Desc
                        </label>
                        <Controller
                          name="tenantPersonalInfo.lawsuitDesc"
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
                          htmlFor="currentIncome"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Current Income
                        </label>
                        <Controller
                          name="tenantPersonalInfo.currentIncome"
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
                          name="tenantPersonalInfo.incomeAssistance"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="incomeAssistance"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="creditScore"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Credit Score
                        </label>
                        <Controller
                          name="tenantPersonalInfo.creditScore"
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
                      <div className="hidden">
                        <div className="col-span-1">
                          <label
                            htmlFor="propertyName"
                            className="block text-xs font-medium text-gray-700 pb-1"
                          >
                            Property Name
                          </label>
                          <Controller
                            name="tenantResidency.propertyName"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                {...field}
                                type="text"
                                className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                                placeholder="The Laurels"
                              />
                            )}
                          />
                        </div>

                        <div className="col-span-1">
                          <label
                            htmlFor="address"
                            className="block text-xs font-medium text-gray-700 pb-1"
                          >
                            Street Address
                          </label>
                          <Controller
                            name="tenantResidency.address"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                {...field}
                                type="text"
                                className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                                placeholder="The Laurels"
                              />
                            )}
                          />
                        </div>

                        <div className="col-span-1">
                          <label
                            htmlFor="city"
                            className="block text-xs font-medium text-gray-700 pb-1"
                          >
                            City
                          </label>
                          <Controller
                            name="tenantResidency.city"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                {...field}
                                type="text"
                                className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                                placeholder="London"
                              />
                            )}
                          />
                        </div>

                        <div className="col-span-1">
                          <label
                            htmlFor="state"
                            className="block text-xs font-medium text-gray-700 pb-1"
                          >
                            State
                          </label>
                          <Controller
                            name="tenantResidency.state"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                {...field}
                                type="text"
                                className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                                placeholder="Glasgow"
                              />
                            )}
                          />
                        </div>

                        <div className="col-span-1">
                          <label
                            htmlFor="country"
                            className="block text-xs font-medium text-gray-700 pb-1"
                          >
                            Country
                          </label>
                          <Controller
                            name="tenantResidency.country"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                              <input
                                {...field}
                                type="text"
                                className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                                placeholder="UK"
                              />
                            )}
                          />
                        </div>
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="postCode"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Post Code
                        </label>
                        <Controller
                          name="tenantResidency.postCode"
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
                          htmlFor="monthlyRent"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Monthly Rent
                        </label>
                        <Controller
                          name="tenantResidency.monthlyRent"
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

                      <div className="col-span-1">
                        <label
                          htmlFor="depositAmount"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Deposit Amount
                        </label>
                        <Controller
                          name="tenantResidency.depositAmount"
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

                      <div className="col-span-1">
                        <label
                          htmlFor="leaseStartDate"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Lease Start Date
                        </label>
                        <Controller
                          name="tenantResidency.leaseStartDate"
                          control={control}
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
                          htmlFor="leaseEndDate"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Lease End Date
                        </label>
                        <Controller
                          name="tenantResidency.leaseEndDate"
                          control={control}
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
                          htmlFor="tenancyDueDate"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Tenancy Due Date
                        </label>
                        <Controller
                          name="tenantResidency.tenancyDueDate"
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
                          name="guarantorInfo.currentIncome"
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
                          htmlFor="fullName"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Full Name
                        </label>
                        <Controller
                          name="guarantorInfo.fullName"
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

                      <div className="col-span-1">
                        <label
                          htmlFor="Deposit Amount"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Email
                        </label>
                        <Controller
                          name="guarantorInfo.email"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <input
                              {...field}
                              type="email"
                              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                              placeholder="Email"
                            />
                          )}
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="phoneNo"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Phone No
                        </label>
                        <Controller
                          name="guarantorInfo.phoneNo"
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
                        disabled={loading}
                        type="submit"
                        className="bg-cyan-50 text-cyan-600 px-4 py-2 rounded-md hover:bg-blue-100 shadow-md font-semibold disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
                      >
                        {loading ? "Updating" : "Update"}
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
