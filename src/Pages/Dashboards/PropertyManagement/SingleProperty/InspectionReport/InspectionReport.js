import React from "react";
import { useForm } from "react-hook-form";
import AcceptanceInspectionReport from "./AcceptanceInspectionReport";

import AuthorizationForDeduction from "./AuthorizationForDeduction";
import BasicInspectionInfo from "./BasicInspectionInfo";

import RentalPropertyCondition from "./RentalPropertyCondition";
import RepairsToBeCompleted from "./RepairsToBeCompleted";

const InspectionReport = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <div className=" w-5/6 mx-auto mb-10 mt-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 divide-y-2 divide-gray-200"
        >
          <div className="space-y-8 divide-y-2 divide-gray-200 sm:space-y-5">
            <BasicInspectionInfo register={register} />

            <RentalPropertyCondition register={register} />

            <RepairsToBeCompleted register={register} />

            <AcceptanceInspectionReport register={register} />

            {/* <DamageMoveOutInspection /> */}

            {/* <AcceptanceReportTwo /> */}

            <AuthorizationForDeduction register={register} />
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Save & Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default InspectionReport;
