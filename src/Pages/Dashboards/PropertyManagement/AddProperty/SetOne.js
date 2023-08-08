import React, { useEffect, useState } from "react";

const SetOne = ({ formData, setFormData }) => {
  const [formList, setFormList] = useState({
    addressline1: "",
    propertyName: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormList({ ...formList, [name]: value });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      propertyAddress: formList,
    });
  }, [formList]);

  return (
    <>
      <div className="max-w-5xl mx-auto pb-10 border mt-10 px-10 rounded-md shadow-md bg-white">
        {/* Form content */}
        <form className="mt-14">
          {/* Form fields */}
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="addressline1"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Address <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                type="text"
                id="addressline1"
                name="addressline1"
                className="border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="6391, Elgian St."
                required=""
                onChange={(e) => {
                  handleAddressChange(e);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="propertyName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Property Name <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                type="text"
                id="propertyName"
                name="propertyName"
                className="border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="The Rose Garden"
                required=""
                onChange={(e) => {
                  handleAddressChange(e);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                City <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="London"
                required=""
                onChange={(e) => {
                  handleAddressChange(e);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                State <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Glasgow"
                required=""
                onChange={(e) => {
                  handleAddressChange(e);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Country <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="United Kingdom"
                required=""
                onChange={(e) => {
                  handleAddressChange(e);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="zipcode"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Zipcode <span className="text-red-500 font-bold ">*</span>
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                className="border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="89B AE3"
                required=""
                onChange={(e) => {
                  handleAddressChange(e);
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SetOne;
