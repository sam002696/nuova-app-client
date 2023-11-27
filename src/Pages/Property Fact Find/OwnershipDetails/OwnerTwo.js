import React from "react";

const OwnerTwo = ({ register }) => {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-xl font-semibold leading-6 text-gray-900 ">
          Owner 2 (if any)
        </h1>
        <p className="text-base leading-6 text-gray-900 italic">
          Or secondary point of contact if company owned
        </p>
        <div className=" grid grid-cols-2 gap-5 pt-2">
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("ownershipDetails.ownerTwo.title")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Company name (if company owned)
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("ownershipDetails.ownerTwo.companyName")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("ownershipDetails.ownerTwo.firstName")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Primary email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("ownershipDetails.ownerTwo.emailAddress")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Surname
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("ownershipDetails.ownerTwo.surname")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Landline telephone
            </label>
            <div className="mt-1">
              <input
                type="tel"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("ownershipDetails.ownerTwo.landlineNo")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Correspondence address
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("ownershipDetails.ownerTwo.correspondenceAddress")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile telephone
            </label>
            <div className="mt-1">
              <input
                type="tel"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("ownershipDetails.ownerTwo.mobileTelephone")}
              />
            </div>
          </div>
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
                {...register("ownershipDetails.ownerTwo.townCity")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Landlord registration number
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register(
                  "ownershipDetails.ownerTwo.landlordRegistrationNumber"
                )}
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
                {...register("ownershipDetails.ownerTwo.postCode")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              OR Landlord registration application submitted and pending
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register(
                  "ownershipDetails.ownerTwo.landlordRegistrationApplication"
                )}
              />
            </div>
          </div>
        </div>

        {/* Agreed contact methods and updates */}

        <div className="grid grid-cols-2 gap-5 pt-2 bg-gray-200 px-2 py-3">
          <div className=" col-span-1">
            <p className=" text-gray-900 text-base pt-2">
              Agreed contact method(s)
            </p>
          </div>
          <div className="col-span-1 pt-3">
            <fieldset className="grid grid-cols-3 gap-x-3">
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="agreedContactMethod"
                    aria-describedby="agreedContactMethod-description"
                    name="agreedContactMethod"
                    type="checkbox"
                    value="Email"
                    className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                    {...register(
                      "ownershipDetails.contactMethod.agreedContactMethod"
                    )}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="agreedContactMethod"
                    className="font-medium text-gray-700"
                  >
                    Email
                  </label>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="agreedContactMethod"
                    aria-describedby="agreedContactMethod-description"
                    name="agreedContactMethod"
                    type="checkbox"
                    value="Mobile"
                    className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                    {...register(
                      "ownershipDetails.contactMethod.agreedContactMethod"
                    )}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="offers" className="font-medium text-gray-700">
                    Mobile
                  </label>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="agreedContactMethod"
                    aria-describedby="agreedContactMethod-description"
                    name="agreedContactMethod"
                    type="checkbox"
                    value="Landline"
                    className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                    {...register(
                      "ownershipDetails.contactMethod.agreedContactMethod"
                    )}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="offers" className="font-medium text-gray-700">
                    Landline
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className=" col-span-1">
            <p className=" text-gray-900 text-base pt-2">
              Please contact me with Nuova Property news, updates and special
              events
            </p>
          </div>
          <div className="col-span-1 pt-3">
            <fieldset className="grid grid-cols-3 gap-x-3">
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="contactMe"
                    aria-describedby="contactMe-description"
                    name="contactMe"
                    value="Only when necessary"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                    {...register("ownershipDetails.contactMethod.contactMe")}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-700"
                  >
                    Only when necessary
                  </label>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="contactMe"
                    aria-describedby="contactMe-description"
                    name="contactMe"
                    type="checkbox"
                    value="Every now and then"
                    className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                    {...register("ownershipDetails.contactMethod.contactMe")}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="offers" className="font-medium text-gray-700">
                    Every now and then
                  </label>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="contactMe"
                    aria-describedby="contactMe-description"
                    name="contactMe"
                    type="checkbox"
                    value="Regular updates"
                    className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                    {...register("ownershipDetails.contactMethod.contactMe")}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="offers" className="font-medium text-gray-700">
                    Regular updates
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerTwo;
