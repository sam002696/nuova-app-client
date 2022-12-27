import React, { useEffect, useState } from "react";
import { MailIcon } from "@heroicons/react/solid";

const TenantInfo = ({ singleProperty, formData, setFormData }) => {
  const [tenantPersonalInfo, setTenantPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    totalOccupants: "",
    pets: "",
    petDesc: "",
    smokes: "",
    lawsuit: "",
    felony: "",
    lawsuitDesc: "",
    currentIncome: "",
    incomeAssistance: "",
    creditScore: "",
  });
  const handleTenantInfoChange = (e) => {
    const { name, value } = e.target;
    setTenantPersonalInfo({ ...tenantPersonalInfo, [name]: value });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      tenantPersonalInfo: tenantPersonalInfo,
    });
  }, [tenantPersonalInfo]);
  return (
    <div>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Tenant Personal Info
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Full Name"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Full Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="fullName"
              id="fullName"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Email
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Phone No"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Phone No
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="tel"
              name="phoneNo"
              id="phoneNo"
              placeholder="+1 (555) 987-6543"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor=" Total Occupants"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Total Occupants
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="number"
              name="totalOccupants"
              id=" totalOccupants"
              placeholder="10"
              autoComplete=""
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Pets"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Pets
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="number"
              name="pets"
              id="pets"
              placeholder="2"
              autoComplete="pets"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Pet Desc"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Pets Description
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="petDesc"
              name="petDesc"
              rows={3}
              className="max-w-lg shadow-sm block w-full focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border border-gray-300 rounded-md"
              defaultValue={""}
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            />
            <p className="mt-2 text-sm text-gray-500">
              Write a few sentences about the pets.
            </p>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Smokes"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Smokes
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="smokes"
              name="smokes"
              autoComplete="country-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Lawsuit"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Lawsuit
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="lawsuit"
              name="lawsuit"
              autoComplete="lawsuit"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Felony"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Felony
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <select
              id="felony"
              name="felony"
              autoComplete="felony"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            >
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="lawsuit desc"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Felony/Lawsuit Description
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="lawsuitDesc"
              name="lawsuitDesc"
              rows={3}
              className="max-w-lg shadow-sm block w-full focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border border-gray-300 rounded-md"
              defaultValue={""}
              placeholder="none"
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Current Income"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Current Income
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="number"
              name="currentIncome"
              id="currentIncome"
              placeholder="10,000"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Income Asssistance"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Income Asssistance
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="number"
              name="incomeAssistance"
              id="incomeAssistance"
              placeholder="none"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="Credit Score"
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Credit Score
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="number"
              name="creditScore"
              id="creditScore"
              placeholder="750 & above"
              autoComplete="given-name"
              className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => {
                handleTenantInfoChange(e);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantInfo;
