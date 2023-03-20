import React from "react";

const AcceptanceInspectionReport = ({ register, singleProperty }) => {
  return (
    <div>
      <div className="pt-6 space-y-6 sm:pt-8 sm:space-y-5 sm:border-b sm:border-gray-200 sm:pb-6">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-700">
            Acceptance of Inspection Report (Inspector)
          </h3>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-8 mx-20">
        <div className="col-span-1">
          <label
            htmlFor="signingDate"
            className="block text-sm font-medium text-gray-700"
          >
            Signing Date
          </label>
          <div className="mt-1">
            <input
              type="date"
              name="signingDate"
              id="signingDate"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("acceptanceOfInspectionReport.signingDate", {
                required: false,
              })}
              value={
                singleProperty?.inspectionReport?.acceptanceOfInspectionReport
                  ?.signingDate &&
                new Date(
                  singleProperty?.inspectionReport?.acceptanceOfInspectionReport?.signingDate
                )
                  .toISOString()
                  .substring(0, 10)
              }
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="signOfInspectorOrAgent"
            className="block text-sm font-medium text-gray-700"
          >
            Signature of Inspector (or Agent)
          </label>
          <div className="mt-1">
            <span
              className={`inline-block h-16 w-72 overflow-hidden  ${
                singleProperty?.inspectionReport?.acceptanceOfInspectionReport
                  ?.signOfInspector
                  ? "bg-white border"
                  : "bg-gray-100"
              }`}
            >
              {singleProperty?.inspectionReport?.acceptanceOfInspectionReport
                ?.signOfInspector ? (
                <img
                  className=" w-full h-full"
                  src={
                    singleProperty?.inspectionReport
                      ?.acceptanceOfInspectionReport?.signOfInspector
                  }
                  alt=""
                />
              ) : (
                <p className=" text-red-400 font-bold">
                  No signature has been uploaded
                </p>
              )}
            </span>

            <input
              type="text"
              name="signOfInspectorOrAgent"
              id="signOfInspectorOrAgent"
              className="hidden w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("acceptanceOfInspectionReport.signOfInspector", {
                required: false,
              })}
              value={
                singleProperty?.inspectionReport?.acceptanceOfInspectionReport
                  ?.signOfInspector
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptanceInspectionReport;
