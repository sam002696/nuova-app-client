import React, { useEffect, useState } from "react";
import { MailIcon } from "@heroicons/react/solid";

const Guarantors = ({ singleProperty, formData, setFormData }) => {
  const [guarantorInfo, setGuarantorInfo] = useState({
    currentIncome: "",
    fullName: "",
    email: "",
    phoneNo: "",
  });
  const handleGuarantorInfoChange = (e) => {
    const { name, value } = e.target;
    setGuarantorInfo({ ...guarantorInfo, [name]: value });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      guarantorInfo: guarantorInfo,
    });
  }, [guarantorInfo]);
  return (
    <div>
      <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Guarantor Info
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>
        </div>
        <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="current income"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Current Income <span className="text-red-500 font-bold ">*</span>
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="number"
                name="currentIncome"
                id="currentIncome"
                placeholder="50,000"
                autoComplete=""
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleGuarantorInfoChange(e);
                }}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="Full Name"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Full Name <span className="text-red-500 font-bold ">*</span>
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="fullName"
                id="fullName"
                autoComplete=""
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleGuarantorInfoChange(e);
                }}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Email <span className="text-red-500 font-bold ">*</span>
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MailIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
                onChange={(e) => {
                  handleGuarantorInfoChange(e);
                }}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="Phone No"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Phone No <span className="text-red-500 font-bold ">*</span>
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="tel"
                name="phoneNo"
                id="phoneNo"
                placeholder="+1 (555) 987-6543"
                autoComplete=""
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleGuarantorInfoChange(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guarantors;
