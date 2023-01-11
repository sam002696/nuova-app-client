import React from "react";

const AcceptanceInspectionReport = ({ register }) => {
  return (
    <div>
      <div className="pt-6 space-y-6 sm:pt-8 sm:space-y-5 sm:border-b sm:border-gray-200 sm:pb-6">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-700">
            Acceptance of Inspection Report{" "}
          </h3>
        </div>
        <div className=" sm:space-y-3 space-y-3 hidden">
          {/* Acceptance of Inspection Report */}
          <div className="sm:grid sm:grid-cols-6 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-8">
            <label
              htmlFor="name"
              className="block text-md font-medium text-right text-gray-700 sm:mt-px sm:pt-2"
            >
              I
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-5 ">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder=""
                {...register("acceptanceOfInspectionReport.name", {
                  required: false,
                })}
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
                      id="agree"
                      aria-describedby="agree-description"
                      name="agree"
                      type="checkbox"
                      value="AGREE that this report fairly represents the condition of
                      the rental property and that the smoke and carbon monoxide
                      alarms were tested in my presence and their testing
                      procedure was explained to me."
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      {...register("acceptanceOfInspectionReport.agree", {
                        required: false,
                      })}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="agree"
                      className="font-medium text-gray-700"
                    >
                      AGREE that this report fairly represents the condition of
                      the rental property and that the smoke and carbon monoxide
                      alarms were tested in my presence and their testing
                      procedure was explained to me.
                    </label>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="disagree"
                      aria-describedby="disagree-description"
                      name="disagree"
                      type="checkbox"
                      value="DO NOT AGREE that this report fairly represents the
                      condition of the rental property for the following
                      reasons:"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      {...register("acceptanceOfInspectionReport.disagree", {
                        required: false,
                      })}
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
                      id="disagreeTerm"
                      name="disagreeTerm"
                      rows={3}
                      className="block w-full mx-7 rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      defaultValue={""}
                      {...register(
                        "acceptanceOfInspectionReport.disagreeTerm",
                        {
                          required: false,
                        }
                      )}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-8 mx-20">
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
                <input
                  type="text"
                  name="signOfInspectorOrAgent"
                  id="signOfInspectorOrAgent"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                  {...register(
                    "acceptanceOfInspectionReport.signOfInspectorOrAgent",
                    {
                      required: false,
                    }
                  )}
                />
              </div>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="signOfTenantOrAgent"
                className="block text-sm font-medium text-gray-700"
              >
                Signature of Tenant (or Agent)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="signOfTenantOrAgent"
                  id="signOfTenantOrAgent"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                  {...register(
                    "acceptanceOfInspectionReport.signOfTenantOrAgent",
                    {
                      required: false,
                    }
                  )}
                />
              </div>
            </div>
          </div>
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
            <input
              type="text"
              name="signOfInspectorOrAgent"
              id="signOfInspectorOrAgent"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register(
                "acceptanceOfInspectionReport.signOfInspectorOrAgent",
                {
                  required: false,
                }
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptanceInspectionReport;
