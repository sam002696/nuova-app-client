import React from "react";

const StageFive = ({ register, watch }) => {
  const watchGuarantor = watch("guarantor");
  return (
    <>
      <p className=" text-lg  font-semibold pt-5 underline underline-offset-4">
        Guarantor Details
      </p>

      <div className=" grid grid-cols-2 gap-5 pt-5">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            I will be using a guarantor
          </label>
          <select
            id="smoker"
            name="smoker"
            autoComplete="smoker"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register("guarantor")}
          >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {watchGuarantor === "Yes" && (
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
                name="project-name"
                id="project-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              />
            </div>
          </div>
        )}
        {watchGuarantor === "No" && "not Clicked"}
      </div>
    </>
  );
};

export default StageFive;
