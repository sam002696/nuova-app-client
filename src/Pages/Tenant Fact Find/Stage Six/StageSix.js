import React from "react";

const StageSix = ({ register }) => {
  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold leading-6 text-gray-900 pb-6 pt-8 tracking-wide">
            Important to note :
          </h1>

          <ul className=" text-lg text-white font-semibold bg-gray-500 pl-1 py-2">
            <li> References cannot come from family members or friends.</li>
            <li> You must have two referees</li>
            <li>
              {" "}
              An acceptable referee is your employer, previous/present landlord
              or accountant.
            </li>
            <li> Your referees reply must be under cover of headed paper.</li>
            <li>
              All references must be able to provide proof of affordability.
            </li>
          </ul>
        </div>
      </div>

      {/* First Referee  */}

      <p className=" text-lg  font-semibold pt-5 underline underline-offset-4">
        First Referee :
      </p>

      <div className="grid grid-cols-2 gap-5 pt-8">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Name of first referee :
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("firstRefereeName")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Work address of first referee :
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("firstRefereeWorkAddress")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("firstRefereeEmailAddress")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Relationship to you
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("firstRefereeRelationship")}
            />
          </div>
        </div>
      </div>

      {/* Second Referee  */}

      <p className=" text-lg  font-semibold pt-5 underline underline-offset-4">
        Second Referee :
      </p>

      <div className="grid grid-cols-2 gap-5 pt-8">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Name of Second referee :
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("secondRefereeName")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Work address of first referee :
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("secondRefereeWorkAddress")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("secondRefereeEmailAddress")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Relationship to you
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("secondRefereeRelationship")}
            />
          </div>
        </div>
      </div>

      {/*  Next of Kin Details  */}

      <p className=" text-lg  font-semibold pt-5 underline underline-offset-4">
        Next of Kin Details :
      </p>

      <div className="grid grid-cols-2 gap-5 pt-8">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("nextOfKinName")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Relationship to you
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("nextOfKinRelationship")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Next of kin address
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("nextOfKinAddress")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Telephone Number
          </label>
          <div className="mt-1">
            <input
              type="tel"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("nextOfKinTelNo")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("nextOfKinEmailAddress")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StageSix;
