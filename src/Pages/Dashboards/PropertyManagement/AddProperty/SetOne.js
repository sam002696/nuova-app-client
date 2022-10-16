import React, { useEffect, useState } from "react";

const SetOne = ({ formData, setFormData }) => {
  const [serviceList, setServiceList] = useState({
    street1: "",
    street2: "",
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
  console.log(formData.propertyAddress?.street1);
  return (
    <>
      <div className="max-w-5xl mx-auto">
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
                Street 1
              </label>
              <input
                type="text"
                id="Street 1"
                name="street1"
                defaultValue={formData.propertyAddress?.street1}
                className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                placeholder="Street 1"
                required=""
                onChange={(e) => {
                  handleAddressChange(e);
                }}
              />
            </div>
            <div>
              <label
                for="street2"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Street 2
              </label>
              <input
                type="text"
                id="street2"
                name="street2"
                defaultValue={formData.propertyAddress?.street2}
                className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                placeholder="Street 2"
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
                className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                defaultValue={formData.propertyAddress?.city}
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
                County
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                defaultValue={formData.propertyAddress?.state}
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
                className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                defaultValue={formData.propertyAddress?.country}
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
                className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                placeholder="10111"
                defaultValue={formData.propertyAddress?.zipcode}
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
