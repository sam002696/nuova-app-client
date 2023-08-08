import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TenantResidency = ({ formData, setFormData }) => {
  const { singlePropertyDetails } = useSelector(
    (state) => state.singlePropertyDetails
  );
  const { propertyAddress } = singlePropertyDetails;
  const [tenantResidency, setTenantResidency] = useState({
    propertyName: propertyAddress.propertyName,
    address: propertyAddress.addressline1,
    city: propertyAddress.city,
    state: propertyAddress.state,
    country: propertyAddress.country,
    postCode: "",
    unitNumber: "",
    monthlyRent: "",
    depositAmount: "",
    leaseStartDate: "",
    leaseEndDate: "",
    tenancyDueDate: "",
  });
  const handleTenantResidencyChange = (e) => {
    const { name, value } = e.target;
    setTenantResidency({ ...tenantResidency, [name]: value });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      tenantResidency: tenantResidency,
    });
  }, [tenantResidency]);

  return (
    <div>
      <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Tenant Residency
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Use the same address as property address while adding tenant.
          </p>
        </div>
        <div className="space-y-6 sm:space-y-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="Property Name"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Property Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="propertyName"
                id="propertyName"
                autoComplete="Property Name"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleTenantResidencyChange(e);
                }}
                value={propertyAddress?.propertyName}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Street Address
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="given-name"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleTenantResidencyChange(e);
                }}
                value={propertyAddress.addressline1}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              City
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="city"
                className="block max-w-lg w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleTenantResidencyChange(e);
                }}
                value={propertyAddress.city}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              State
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                id="state"
                name="state"
                type="text"
                autoComplete="state"
                className="block max-w-lg w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleTenantResidencyChange(e);
                }}
                value={propertyAddress.state}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Country
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                id="country"
                name="country"
                type="text"
                autoComplete="country"
                className="block max-w-lg w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleTenantResidencyChange(e);
                }}
                value={propertyAddress.country}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="Post Code"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Post Code <span className="text-red-500 font-bold ">*</span>
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="postCode"
                id="postCode"
                autoComplete="post-code"
                className="block max-w-lg w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleTenantResidencyChange(e);
                }}
              />
            </div>
          </div>

          {singlePropertyDetails?.propertyType === "HMO" && (
            <>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="Unit Number"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Unit Number <span className="text-red-500 font-bold ">*</span>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="unitNumber"
                    id="unitNumber"
                    autoComplete="unit-number"
                    placeholder="Apt. #2A"
                    className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      handleTenantResidencyChange(e);
                    }}
                  />
                </div>
              </div>
            </>
          )}

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="monthly rent"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Monthly Rent <span className="text-red-500 font-bold ">*</span>
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="number"
                name="monthlyRent"
                id="monthlyRent"
                autoComplete="address-level2"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleTenantResidencyChange(e);
                }}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="Deposit Amount"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Deposit Amount <span className="text-red-500 font-bold ">*</span>
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="number"
                name="depositAmount"
                id="depositAmount"
                autoComplete="deposit-amount"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleTenantResidencyChange(e);
                }}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="Lease Start Date"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Lease Start Date{" "}
              <span className="text-red-500 font-bold ">*</span>
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="leaseStartDate"
                id="leaseStartDate"
                autoComplete="address-level1"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleTenantResidencyChange(e);
                }}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="Lease End Date"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Lease End Date <span className="text-red-500 font-bold ">*</span>
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="leaseEndDate"
                id="leaseEndDate"
                autoComplete="postal-code"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleTenantResidencyChange(e);
                }}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="Tenancy Due Date"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Tenancy Due Date{" "}
              <span className="text-red-500 font-bold ">*</span>
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="tenancyDueDate"
                id="tenancyDueDate"
                autoComplete="postal-code"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={(e) => {
                  handleTenantResidencyChange(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantResidency;
