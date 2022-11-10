import React, { useEffect, useState } from "react";

const SetThree = ({ formData, setFormData }) => {
  const services = [
    { unitName: "", beds: "", baths: "", size: "", marketRent: "" },
  ];
  const [serviceList, setServiceList] = useState(services);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([
      ...serviceList,
      { unitName: "", beds: "", baths: "", size: "", marketRent: "" },
    ]);
  };
  useEffect(() => {
    setFormData({
      ...formData,
      units: serviceList,
    });
  }, [serviceList]);

  const [propertyDetails, setPropertyDetails] = useState({
    availibilityDate: "",
    propertyFurnished: "",
    bathrooms: "",
    gas: "",
    smokeAlarm: "",
    solidBurning: "",
  });
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({ ...propertyDetails, [name]: value });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      propertyAddress: propertyDetails,
    });
  }, [propertyDetails]);
  console.log(propertyDetails);
  return (
    <>
      {formData?.propertyType === "HMO" ? (
        <div className="max-w-7xl mx-auto">
          <div className="space-y-5 text-center mt-14">
            <h1 className=" font-medium text-2xl text-[#162A43] underline underline-offset-4">
              Let's add the units for the property
            </h1>
            <p className="  font-normal text-lg text-[#565151] mt-5 underline underline-offset-4">
              Add all your units below
            </p>
          </div>
          <form className="pt-14 relative pl-20">
            {serviceList.map((singleService, index) => (
              <>
                <div class="grid gap-6 mb-6 lg:grid-cols-7">
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      No.
                    </label>
                    <div class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 ">
                      {index}
                    </div>
                  </div>
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Unit Name
                    </label>
                    <input
                      type="text"
                      name="unitName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                      placeholder="unit 1"
                      required=""
                      onChange={(e) => handleServiceChange(e, index)}
                    />
                  </div>
                  <div>
                    <label
                      for="last_name"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Beds
                    </label>
                    <input
                      type="text"
                      name="beds"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                      placeholder="3"
                      onChange={(e) => handleServiceChange(e, index)}
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="company"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Baths
                    </label>
                    <input
                      type="text"
                      name="baths"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                      placeholder="2"
                      required=""
                      onChange={(e) => handleServiceChange(e, index)}
                    />
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Size
                    </label>
                    <input
                      type="tel"
                      name="size"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                      placeholder="2000"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required=""
                      onChange={(e) => handleServiceChange(e, index)}
                    />
                  </div>
                  <div>
                    <label
                      for="website"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Market Rent
                    </label>
                    <input
                      type="url"
                      name="marketRent"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                      placeholder="$2000.00"
                      required=""
                      onChange={(e) => handleServiceChange(e, index)}
                    />
                  </div>
                  {serviceList.length !== index && (
                    <div className="mb-5">
                      <label
                        for="website"
                        class="block mb-4 text-sm font-medium text-gray-900 "
                      >
                        Action
                      </label>
                      <button
                        type="button"
                        disabled={serviceList.length - 1 === 0}
                        onClick={() => handleServiceRemove(index)}
                        className=" disabled:cursor-not-allowed"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6  text-center"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="red"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>

                {serviceList.length - 1 === index && (
                  <div className=" w-1/6 absolute right-0">
                    <button
                      type="button"
                      onClick={handleServiceAdd}
                      className=" flex flex-row items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#0088A3"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <span className="text-cyan-600 underline underline-offset-1 text-lg font-semibold">
                        Add Another Unit
                      </span>
                    </button>
                  </div>
                )}
              </>
            ))}
          </form>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto">
          <div className="space-y-5 text-center mt-14">
            <h1 className=" font-medium text-2xl text-[#162A43] underline underline-offset-4">
              Property details
            </h1>
            <p className="  font-normal text-lg text-[#565151] mt-5">
              Add your property details
            </p>
          </div>
          <div className=" mt-8">
            {/* <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="Street 1"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  When it is available from?
                </label>
                <input
                  type="date"
                  id="availibilityDate"
                  name="availibilityDate"
                  className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
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
                  Is the property furnished?
                </label>
                <select
                  id="furnished"
                  name="furnished"
                  autoComplete="adverseCard"
                  className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                  onChange={(e) => {
                    handleAddressChange(e);
                  }}
                >
                  <option>Select</option>
                  <option>Furnished</option>
                  <option>Unfurnished</option>
                  <option>Partially Furnished</option>
                </select>
              </div>
              <div>
                <label
                  for="city"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Bathrooms
                </label>
                <input
                  type="number"
                  id="bathrooms"
                  name="bathrooms"
                  className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                  required=""
                  onChange={(e) => {
                    handleAddressChange(e);
                  }}
                  placeholder="3"
                />
              </div>
              <div>
                <label
                  for="state"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Does the property have gas?
                </label>
                <select
                  id="gas"
                  name="gas"
                  autoComplete="adverseCard"
                  className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                  onChange={(e) => {
                    handleAddressChange(e);
                  }}
                >
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <label
                  for="country"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Does the property have a smoke alarm on each floor?
                </label>
                <select
                  id="smokeAlarm"
                  name="smokeAlarm"
                  autoComplete="adverseCard"
                  className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                  onChange={(e) => {
                    handleAddressChange(e);
                  }}
                >
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <label
                  for="zipcode"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Does the property have a solid burning?
                </label>
                <select
                  id="solidBurning"
                  name="solidBurning"
                  autoComplete="adverseCard"
                  className="bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 "
                  onChange={(e) => {
                    handleAddressChange(e);
                  }}
                >
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div> */}
            <div className="space-y-6">
              <div>
                <p className=" text-2xl text-gray-700 font-semibold underline pl-1">
                  Property
                </p>
              </div>

              {/* Property Floor */}

              <div className="grid grid-cols-2 gap-x-5">
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Property floor (e.g. ground floor)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <fieldset className="space-y-5">
                    <legend className="sr-only">Choose</legend>
                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-700"
                        >
                          Furnished
                        </label>
                      </div>
                    </div>

                    <div className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="offers"
                          aria-describedby="offers-description"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="offers"
                          className="font-medium text-gray-700"
                        >
                          Unfurnished
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              {/* Property Address */}

              <div className="grid grid-cols-2 gap-x-5 pt-3">
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Property address (as registered with local authority)
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Council Tax band
                  </label>
                  <select
                    id="adverseCard"
                    name="adverseCard"
                    autoComplete="adverseCard"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                  >
                    <option>Select</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>F</option>
                    <option>G</option>
                    <option>H</option>
                  </select>
                  <div className=" mt-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Availability date
                    </label>
                    <input
                      type="date"
                      id="jobtitle"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Town/city & Post Code */}

              <div className="grid grid-cols-2 gap-x-5 pt-3">
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Town / City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postcode
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Pets */}

              <h1 className="text-xl font-semibold leading-6 text-gray-900">
                Pets
              </h1>

              <div className="grid grid-cols-2 gap-x-2">
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      I/We would consider allowing tenants to have pets
                    </label>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      I/We would not permit any pets within this property
                    </label>
                  </div>
                </div>
              </div>

              {/* Students */}

              <h1 className="text-xl font-semibold leading-6 text-gray-900">
                Students
              </h1>

              <div className="grid grid-cols-3 gap-x-2">
                <div className="font-medium text-gray-700 text-sm">
                  Are students accepted?
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      Yes
                    </label>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              {/* To Let */}

              <h1 className="text-xl font-semibold leading-6 text-gray-900">
                To Let
              </h1>
              <div className="grid grid-cols-3 gap-x-2">
                <div className="font-medium text-gray-700 text-sm">
                  Can a ‘To Let’ board be used?
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      Yes
                    </label>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="pt-20">
                <p className="text-2xl text-gray-700 font-semibold underline pl-1">
                  Property Details
                </p>
              </div>

              {/* Rooms */}

              <div>
                <h1 className="text-xl font-semibold leading-6 text-gray-900">
                  Rooms
                </h1>
                <p className=" italic text-lg pt-3">Number as appropriate</p>
              </div>

              <div className="grid grid-cols-4 gap-x-2">
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      Double bedroom
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Living/Sitting room
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Bathroom (with shower)
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Shower room
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Single bedroom
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Open plan kitchen/Living
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Bathroom (with bath only)
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Separate WC
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Box room
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Separate kitchen
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      En-suite bathroom
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Utility room
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Study/Office
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Dining room
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      En-suite shower room
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700 pb-2 mr-5"
                >
                  Other (please specify)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="project-name"
                    id="project-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <hr className=" border-1 border-gray-400" />

              {/* Features and Appliances */}

              <div>
                <h1 className="text-xl font-semibold leading-6 text-gray-900">
                  Features and Appliances
                </h1>
              </div>
              <div className="grid grid-cols-4 gap-x-2">
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      Gas central heating
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      White meter heating
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Electric central heating
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Under floor heating
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Double glazing
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Tumble dryer
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Dishwasher
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      TV
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Balcony/Terrace
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Private garden
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Shared Garden
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Washing machine
                    </label>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-2 gap-5 pt-5">
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Other (please specify)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Other external areas/facilities included with the let
                    property?
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Any shared areas/facilities included with the let property?
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Any excluded area/facilities?
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <hr className=" border-1 border-gray-400" />

              {/* Parking */}

              <div>
                <h1 className="text-xl font-semibold leading-6 text-gray-900">
                  Parking
                </h1>
              </div>

              <div className="grid grid-cols-4 gap-x-2">
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      Gas central heating
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      White meter heating
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Electric central heating
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Under floor heating
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Double glazing
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Tumble dryer
                    </label>
                  </div>
                </div>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="offers"
                      aria-describedby="offers-description"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      Dishwasher
                    </label>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-3 gap-5 pt-5">
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Permit supplied by
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Space number
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    No. of permits per property
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Space location
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Entry Code
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-900 ">
                    Remote/Fob required
                  </label>
                  <select
                    id="smoker"
                    name="smoker"
                    autoComplete="smoker"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                  >
                    <option>Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="project-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Supplied by
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <hr className=" border-1 border-gray-400" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SetThree;
