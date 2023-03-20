import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import AcceptanceInspectionReport from "./AcceptanceInspectionReport";
import AcceptanceReportThree from "./AcceptanceReportThree";
// import AcceptanceReportTwo from "./AcceptanceReportTwo";
import AuthorizationForDeduction from "./AuthorizationForDeduction";
import BasicInspectionInfo from "./BasicInspectionInfo";
import RentalPropertyCondition from "./RentalPropertyCondition";
import RepairsToBeCompleted from "./RepairsToBeCompleted";
import { updateInspectionReport } from "../../../../../Redux/singlePropertySlice";

const InspectionReport = ({ singleProperty }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (form) => {
    console.log(form.rentalPropertyInformation?.address);
    console.log(form.acceptanceOfInspectionReport?.signOfInspector);
    console.log(form);
    form.acceptanceOfInspectionReport.signOfInspector =
      singleProperty?.acceptanceOfInspectionReport.signOfInspector;
    console.log(form.acceptanceOfInspectionReport.signOfInspector);
    setLoading(true);
    const data = new FormData();
    const data1 = new FormData();
    if (form?.acceptanceOfInspectionReportLandlord?.signOfLandlord[0]) {
      data.append(
        "file",
        form?.acceptanceOfInspectionReportLandlord?.signOfLandlord[0]
      );
      //upload presets
      data.append("upload_preset", "eez1w4gg");

      const uploadRes1 = await axios.post(
        "https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload",
        data
      );
      const { url: url1 } = uploadRes1.data;
      form.acceptanceOfInspectionReportLandlord.signOfLandlord = url1;
    }
    if (form?.authorisationForDeduction?.signOfTenantOrAgent[0]) {
      data1.append(
        "file",
        form?.authorisationForDeduction?.signOfTenantOrAgent[0]
      );
      //upload presets
      data1.append("upload_preset", "eez1w4gg");

      const uploadRes1 = await axios.post(
        "https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload",
        data1
      );
      const { url: url1 } = uploadRes1.data;
      form.authorisationForDeduction.signOfTenantOrAgent = url1;
    }
    console.log(form.authorisationForDeduction.signOfTenantOrAgent);
    try {
      const res = await axios.put(
        `http://localhost:5500/api/inspectionReport/${singleProperty?._id}`,
        form
      );
      if (res.data) {
        Swal.fire(
          "Success!",
          "You successfully uploaded the details!",
          "success"
        );
        setLoading(false);
        console.log(res.data);
        dispatch(updateInspectionReport(res.data));
        // window.location.reload(false);
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

            {/* <AcceptanceReportTwo register={register} /> */}

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
              singleProperty?.acceptanceOfInspectionReportLandlord
                ?.signOfLandlord &&
              singleProperty?.authorisationForDeduction?.signOfTenantOrAgent &&
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
