import React from "react";

const Property = ({ register }) => {
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
                {...register("property.propertyFloor")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <fieldset className="space-y-5">
              <legend className="sr-only">Choose</legend>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    type="radio"
                    id="furnishChoice1"
                    className="h-4 w-4 rounded-full border-gray-300 text-cyan-600 focus:ring-cyan-500"
                    name="propertyFurnished"
                    value="furnsished"
                    {...register("property.propertyFurnished")}
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
                    type="radio"
                    id="furnishChoice2"
                    className="h-4 w-4 rounded-full border-gray-300 text-cyan-600 focus:ring-cyan-500"
                    name="propertyFurnished"
                    value="unfurnished"
                    {...register("property.propertyFurnished")}
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
          <div className=" mt-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Property Name
            </label>
            <input
              type="text"
              id="propertyName"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("property.propertyName")}
            />
          </div>
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
                {...register("property.propertyAddress")}
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
              {...register("property.councilTaxBand")}
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
                {...register("property.availabilityDate")}
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
                {...register("property.city")}
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
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("property.postcode")}
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
                id="petsYes"
                name="petsPermission"
                type="radio"
                value="I/We would consider allowing tenants to have pets"
                className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register("property.petsPermission")}
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
                id="petsNo"
                name="petsPermission"
                type="radio"
                value="I/We would not permit any pets within this property"
                className="h-4 w-4  border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register("property.petsPermission")}
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
                id="studentsAcceptance"
                name="studentsAccept"
                type="radio"
                value="yes"
                className="h-4 w-4  border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register("property.studentsAccept")}
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
                id="studentsAcceptance"
                name="studentsAccept"
                type="radio"
                value="no"
                className="h-4 w-4  border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register("property.studentsAccept")}
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
                id="tolet1"
                name="toLet"
                type="radio"
                value="yes"
                className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register("property.toLet")}
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
                id="tolet2"
                name="toLet"
                type="radio"
                value="no"
                className="h-4 w-4 border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register("property.toLet")}
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
