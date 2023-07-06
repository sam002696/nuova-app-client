import React from "react";

const StageFour = ({ register }) => {
  return (
    <>
      <p className=" text-lg  font-semibold pt-5 underline underline-offset-4">
        Employment Details :
      </p>
      <div className="grid grid-cols-2 gap-5 pt-8">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Occupation :
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("workDetailsChange.occupation")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Length of time at this job :
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("workDetailsChange.lengthOfTime")}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Annual Income :
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("workDetailsChange.annualIncome")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Previous Employer :
          </label>
          <div className="mt-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("workDetailsChange.previousEmployer")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StageFour;
