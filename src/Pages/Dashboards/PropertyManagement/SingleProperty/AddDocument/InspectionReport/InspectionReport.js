// import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
import AcceptanceInspectionReport from "./AcceptanceInspectionReport";
import AcceptanceReportThree from "./AcceptanceReportThree";
// import AcceptanceReportTwo from "./AcceptanceReportTwo";

import AuthorizationForDeduction from "./AuthorizationForDeduction";
import BasicInspectionInfo from "./BasicInspectionInfo";
// import DamageMoveOutInspection from "./DamageMoveOutInspection";

import RentalPropertyCondition from "./RentalPropertyCondition";
import RepairsToBeCompleted from "./RepairsToBeCompleted";

const InspectionReport = ({ singleProperty }) => {
  // const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // setLoading(true);
    // try {
    //   const res = await axios.post(
    //     `https://nuova-property-server.onrender.com/api/inspectionReport/upload/${singleProperty._id}`,
    //     data
    //   );
    //   if (res.data) {
    //     Swal.fire(
    //       "Success!",
    //       "You successfully uploaded the details!",
    //       "success"
    //     );
    //     reset();
    //     setLoading(false);
    //     console.log(res.data);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <>
      <div className=" w-5/6 mx-auto mb-10 mt-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 divide-y-2 divide-gray-200"
        >
          <div className="space-y-8 divide-y-2 divide-gray-200 sm:space-y-5">
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

            {/* <AcceptanceReportTwo /> */}

            <AcceptanceReportThree
              register={register}
              singleProperty={singleProperty}
            />

            <AuthorizationForDeduction
              register={register}
              singleProperty={singleProperty}
            />
          </div>

          {/* <div className="pt-5">
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
                {loading ? "Updating" : "Update"}
              </button>
            </div>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default InspectionReport;
