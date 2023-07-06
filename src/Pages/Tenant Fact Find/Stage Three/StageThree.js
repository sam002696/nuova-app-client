import React from "react";

const StageThree = ({ register, watch }) => {
  const selectedProofOfAddress = watch("proofOfAddress");

  const handleProofOfAddressChange = (event) => {};
  return (
    <>
      <p className=" text-lg  font-semibold pt-5 underline underline-offset-4">
        Tenant Info (Tenant 1) :
      </p>
      <div className="grid grid-cols-2 gap-5 pt-8">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Title(Mr/Mrs)
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("tenantInfo.title")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("tenantInfo.fullName")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Date of birth
          </label>
          <div className="mt-1">
            <input
              type="date"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("tenantInfo.dob")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Nationality
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("tenantInfo.nationality")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Passport No
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("tenantInfo.passportNo")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Telephone No
          </label>
          <div className="mt-1">
            <input
              type="tel"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("tenantInfo.telephoneNo")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("tenantInfo.email")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Current Address (Years at present address)
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("tenantInfo.currentAddress")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Number of children
          </label>
          <div className="mt-1">
            <input
              type="number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("tenantInfo.numberOfChildren")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Smoker
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("tenantInfo.smoker")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Pets
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("tenantInfo.pets")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="photographicId"
            className="block text-sm font-medium text-gray-700"
          >
            Please upload photographic ID :
          </label>
          <div className="mt-1">
            <input
              type="file"
              name="photographicId"
              id="photographicId"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500   file:text-white focus:outline-none focus:border-gray-500 block w-full file:p-2 file:border-none  file:focus:border-gray-500 "
              {...register("tenantInfo.photographicId")}
            />
          </div>
        </div>

        <div className="col-span-2">
          <label
            htmlFor="photographicId"
            className="block text-sm font-medium text-gray-700"
          >
            Proof of address:
          </label>
          <div className="mt-1">
            <select
              type="text"
              name="proofOfAddress"
              id="proofOfAddress"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500 file:text-white focus:outline-none focus:border-gray-500 block w-full file:p-2 file:border-none file:focus:border-gray-500"
              onChange={handleProofOfAddressChange}
              {...register("proofOfAddress")}
            >
              <option value="">Select</option>
              <option value="Bank Statement">
                Personal Bank statement (hardcopy issued or PDF within the past
                90 days)
              </option>
              <option value="Utility Bill">
                Utility bill (Gas/Electricity/Water) hardcopy issued or PDF
                within the past 90 days
              </option>
              <option value="Council Tax Statement">
                Council tax statement (hardcopy issued or PDF within the past 90
                days)
              </option>
            </select>
          </div>
        </div>

        {/* Rendering based on proof of address */}

        {selectedProofOfAddress && (
          <>
            <div className="col-span-1">
              <label
                htmlFor="photographicId"
                className="block text-sm font-medium text-gray-700"
              >
                {selectedProofOfAddress && selectedProofOfAddress !== ""
                  ? `${selectedProofOfAddress}:`
                  : ""}
              </label>
              <div className="mt-1">
                <input
                  type="file"
                  name="proofOfAddress"
                  id="proofOfAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500 file:text-white focus:outline-none focus:border-gray-500 block w-full file:p-2 file:border-none file:focus:border-gray-500"
                  {...register("tenantInfo.proofOfAddress")}
                />
              </div>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="photographicId"
                className="block text-xs font-bold text-red-700 mt-6"
              >
                *Please do not attach any other document to this section as a
                <span className="text-red-500"> proof of address</span> , only
                the above can be accepted.*
              </label>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StageThree;
