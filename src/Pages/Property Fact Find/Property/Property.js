import React from "react";

const Property = () => {
  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold leading-6 text-gray-900 pb-6">
            Landlord and Property Fact Find Form
          </h1>
          <p className=" text-lg text-white font-semibold bg-gray-500 pl-1">
            Section 1: Property
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
                  <label htmlFor="offers" className="font-medium text-gray-700">
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

        <h1 className="text-xl font-semibold leading-6 text-gray-900">Pets</h1>

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
              <label htmlFor="comments" className="font-medium text-gray-700">
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
              <label htmlFor="offers" className="font-medium text-gray-700">
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
              <label htmlFor="comments" className="font-medium text-gray-700">
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
              <label htmlFor="offers" className="font-medium text-gray-700">
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
              <label htmlFor="comments" className="font-medium text-gray-700">
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
              <label htmlFor="offers" className="font-medium text-gray-700">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
