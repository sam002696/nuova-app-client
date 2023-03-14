import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AcceptanceInspectionReport from "./AcceptanceInspectionReport";
import AcceptanceReportThree from "./AcceptanceReportThree";
import AcceptanceReportTwo from "./AcceptanceReportTwo";

import AuthorizationForDeduction from "./AuthorizationForDeduction";
import BasicInspectionInfo from "./BasicInspectionInfo";

import RentalPropertyCondition from "./RentalPropertyCondition";
import RepairsToBeCompleted from "./RepairsToBeCompleted";

const InspectionReport = ({ singleProperty }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:5500/api/inspectionReport/upload/${singleProperty._id}`,
        data
      );
      if (res.data) {
        Swal.fire(
          "Success!",
          "You successfully uploaded the details!",
          "success"
        );
        setLoading(false);
        console.log(res.data);
        window.location.reload(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className=" w-5/6 mx-auto mb-10 mt-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 divide-y-2 divide-gray-200"
        >
          <div className="space-y-8  sm:space-y-5">
            <BasicInspectionInfo
              register={register}
              singleProperty={singleProperty}
            />

            <RentalPropertyCondition
              register={register}
              singleProperty={singleProperty}
            />

            <RepairsToBeCompleted
              register={register}
              singleProperty={singleProperty}
            />

            <AcceptanceInspectionReport
              register={register}
              singleProperty={singleProperty}
            />

            {/* <DamageMoveOutInspection /> */}

            <AcceptanceReportTwo register={register} />

            <AcceptanceReportThree
              register={register}
              singleProperty={singleProperty}
            />

            <AuthorizationForDeduction
              register={register}
              singleProperty={singleProperty}
            />
          </div>

          <div
            className={` ${
              singleProperty.inspectionReport
                ?.acceptanceOfInspectionReportLandlord?.signOfLandlord &&
              singleProperty.inspectionReport?.authorisationForDeduction
                ?.signOfTenantOrAgent &&
              "hidden"
            } pt-5`}
          >
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                {loading ? "Saving" : "Save"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default InspectionReport;
