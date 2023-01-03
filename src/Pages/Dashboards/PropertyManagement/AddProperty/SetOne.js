import React, { useEffect, useState } from "react";

const SetOne = ({ formData, setFormData }) => {
  const [serviceList, setServiceList] = useState({
    addressline1: "",
    propertyName: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setServiceList({ ...serviceList, [name]: value });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      propertyAddress: serviceList,
    });
  }, [serviceList]);
  return (
    <>
      <div className=" max-w-5xl mx-auto pb-10 border mt-10 px-10 rounded-md  shadow-md bg-white">
        <div className="space-y-5 text-center mt-14">
          <h1 className=" font-medium text-2xl text-[#162A43]">
            Property address
          </h1>
          <p className="  font-normal text-lg text-[#565151] mt-5">
            What's the property address?
          </p>
        </div>
        <form className=" mt-14">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="Street 1"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Street
              </label>
              <input
                type="text"
                id="Street 1"
                name="addressline1"
                className=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                placeholder="6391, Elgian St."
                required=""
                onChange={(e) => {
                  handleAddressChange(e);
                }}
              />
            </div>
            <div>
              <label
                for="propertyName"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Property Name
              </label>
              <input
                type="text"
                id="propertyName"
                name="propertyName"
                className=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                placeholder="The Rose Garden"
                required=""
                onChange={(e) => {
                  handleAddressChange(e);
                }}
              />
            </div>
            <div>
              <label
                for="city"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                placeholder="London"
                required=""
                onChange={(e) => {
                  handleAddressChange(e);
                }}
              />
            </div>
            <div>
              <label
                for="state"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                placeholder="Glasgow"
                required=""
                onChange={(e) => {
                  handleAddressChange(e);
                }}
              />
            </div>
            <div>
              <label
                for="country"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                placeholder="United Kingdom"
                required=""
                onChange={(e) => {
                  handleAddressChange(e);
                }}
              />
            </div>
            <div>
              <label
                for="zipcode"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Post code
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                className=" border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
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
