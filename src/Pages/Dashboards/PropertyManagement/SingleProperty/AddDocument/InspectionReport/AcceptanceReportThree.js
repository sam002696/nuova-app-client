import React from "react";

const AcceptanceReportThree = ({ register, singleProperty }) => {
  return (
    <div>
      <div className="pt-6 space-y-6 sm:pt-8 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-700">
            Acceptance of Inspection Report (Landlord)
          </h3>
        </div>
        <div className=" sm:space-y-3 space-y-3">
          {/* Acceptance of Inspection Report */}
          <div className="sm:grid sm:grid-cols-6 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-8">
            <label
              htmlFor="entryway_1"
              className="block text-md font-medium text-right text-gray-700 sm:mt-px sm:pt-2"
            >
              I
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-5 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Landlord Name"
                {...register(
                  "acceptanceOfInspectionReportLandlord.landlordName",
                  {
                    required: false,
                  }
                )}
                defaultValue={
                  singleProperty?.inspectionReport
                    ?.acceptanceOfInspectionReportLandlord?.landlordName
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-1 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-1">
            <div className="col-span-1">
              <fieldset className="space-y-3">
                <legend className="sr-only">Choose</legend>
                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="agreement1"
                      name="agreement"
                      type="radio"
                      value="AGREE that this report fairly represents the condition of
                      the rental property"
                      className="h-4 w-4  border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      {...register(
                        "acceptanceOfInspectionReportLandlord.agreement",
                        {
                          required: false,
                        }
                      )}
                      checked={
                        singleProperty?.inspectionReport
                          ?.acceptanceOfInspectionReportLandlord?.agreement &&
                        singleProperty?.inspectionReport
                          ?.acceptanceOfInspectionReportLandlord?.agreement ===
                          "AGREE that this report fairly represents the condition of the rental property" &&
                        "checked"
                      }
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      AGREE that this report fairly represents the condition of
                      the rental property
                    </label>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="agreement2"
                      name="agreement"
                      type="radio"
                      value="DO NOT AGREE that this report fairly represents the
                      condition of the rental property for the following
                      reasons"
                      className="h-4 w-4  border-gray-300 text-cyan-600 focus:ring-cyan-500"
                      {...register(
                        "acceptanceOfInspectionReportLandlord.agreement",
                        {
                          required: false,
                        }
                      )}
                      checked={
                        singleProperty?.inspectionReport
                          ?.acceptanceOfInspectionReportLandlord?.agreement &&
                        singleProperty?.inspectionReport
                          ?.acceptanceOfInspectionReportLandlord?.agreement ===
                          "DO NOT AGREE that this report fairly represents the condition of the rental property for the following reasons" &&
                        "checked"
                      }
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-700"
                    >
                      DO NOT AGREE that this report fairly represents the
                      condition of the rental property for the following
                      reasons:
                    </label>
                  </div>
                </div>

                <div>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full mx-7 rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      {...register(
                        "acceptanceOfInspectionReportLandlord.disagreeTerm",
                        {
                          required: false,
                        }
                      )}
                      defaultValue={
                        singleProperty?.inspectionReport
                          ?.acceptanceOfInspectionReportLandlord?.disagreeTerm
                      }
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start  sm:border-gray-200 sm:pt-8 mx-20">
            <div className="col-span-1">
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-700"
              >
                Signing Date
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="project-name"
                  id="project-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                  {...register(
                    "acceptanceOfInspectionReportLandlord.signingDate",
                    {
                      required: false,
                    }
                  )}
                  value={
                    singleProperty?.inspectionReport
                      ?.acceptanceOfInspectionReportLandlord?.signingDate &&
                    new Date(
                      singleProperty?.inspectionReport?.acceptanceOfInspectionReportLandlord?.signingDate
                    )
                      .toISOString()
                      .substring(0, 10)
                  }
                />
              </div>
            </div>

            <div className="col-span-1">
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-700"
              >
                Signature of Landlord
              </label>
              <div className="mt-1">
                {singleProperty?.inspectionReport
                  ?.acceptanceOfInspectionReportLandlord?.signOfLandlord ? (
                  <span
                    className={`inline-block h-16 w-72 overflow-hidden  ${
                      singleProperty?.inspectionReport
                        ?.acceptanceOfInspectionReportLandlord?.signOfLandlord
                        ? "bg-white border"
                        : "bg-gray-100"
                    }`}
                  >
                    {singleProperty?.inspectionReport
                      ?.acceptanceOfInspectionReportLandlord?.signOfLandlord ? (
                      <img
                        className=" w-full h-full"
                        src={
                          singleProperty?.inspectionReport
                            ?.acceptanceOfInspectionReportLandlord
                            ?.signOfLandlord
                        }
                        alt=""
                      />
                    ) : (
                      <p className=" text-red-400 font-bold">
                        No signature has been uploaded
                      </p>
                    )}
                  </span>
                ) : (
                  <input
                    type="file"
                    name="project-name"
                    id="project-name"
                    accept="image/*"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-400   file:text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full  file:p-1.5 file:border-none"
                    {...register(
                      "acceptanceOfInspectionReportLandlord.signOfLandlord",
                      {
                        required: false,
                      }
                    )}
                    defaultValue={
                      singleProperty?.inspectionReport
                        ?.acceptanceOfInspectionReportLandlord?.signOfLandlord
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptanceReportThree;
