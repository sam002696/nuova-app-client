import React from "react";

const AuthorizationForDeduction = ({ register, singleProperty }) => {
  return (
    <div>
      <div className="pt-6 space-y-6 sm:pt-8 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-700">
            Authorisation for Deduction (If Applicable){" "}
          </h3>
        </div>
        <div className=" sm:space-y-3 space-y-3">
          {/* Authorisation for Deduction (If Applicable) */}
          <div className="sm:grid sm:grid-cols-6 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-8">
            <label
              htmlFor="i"
              className="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2 text-right"
            >
              I
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder=""
                {...register("authorisationForDeduction.name", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inspectionReport?.authorisationForDeduction
                    ?.name
                }
              />
            </div>
            <label
              htmlFor="desc"
              className="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2 col-span-3"
            >
              agree to the following deductions :
            </label>
          </div>

          {/* Authorisation for Deduction (If Applicable) */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5">
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-2">
              <input
                type="text"
                name="amountDeducted"
                id="amountDeducted"
                autoComplete="amountDeducted"
                className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300"
                placeholder="Amount Deducted"
                {...register(
                  "authorisationForDeduction.amountDeposit.0.amountDeducted",
                  {
                    required: false,
                  }
                )}
                defaultValue={
                  singleProperty?.inspectionReport?.authorisationForDeduction
                    ?.amountDeposit?.[0].amountDeducted
                }
              />
              <input
                type="text"
                name="desOfDeposit"
                id="desOfDeposit"
                autoComplete="desOfDeposit"
                className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500  sm:text-sm border-gray-300 "
                placeholder="Description of Deposit (e.g. security, pet, etc.)"
                {...register(
                  "authorisationForDeduction.amountDeposit.0.desOfDeposit",
                  {
                    required: false,
                  }
                )}
                defaultValue={
                  singleProperty?.inspectionReport?.authorisationForDeduction
                    ?.amountDeposit?.[0].desOfDeposit
                }
              />
            </div>
          </div>
          {/* Authorisation for Deduction (If Applicable) */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-1">
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-2">
              <input
                type="text"
                name="amountDeducted"
                id="amountDeducted"
                autoComplete="amountDeducted"
                className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300"
                placeholder="Amount Deducted"
                {...register(
                  "authorisationForDeduction.amountDeposit.1.amountDeducted",
                  {
                    required: false,
                  }
                )}
                defaultValue={
                  singleProperty?.inspectionReport?.authorisationForDeduction
                    ?.amountDeposit?.[1].amountDeducted
                }
              />
              <input
                type="text"
                name="desOfDeposit"
                id="desOfDeposit"
                autoComplete="desOfDeposit"
                className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500  sm:text-sm border-gray-300 "
                placeholder="Description of Deposit (e.g. security, pet, etc.)"
                {...register(
                  "authorisationForDeduction.amountDeposit.1.desOfDeposit",
                  {
                    required: false,
                  }
                )}
                defaultValue={
                  singleProperty?.inspectionReport?.authorisationForDeduction
                    ?.amountDeposit?.[1].desOfDeposit
                }
              />
            </div>
          </div>
          {/* Authorisation for Deduction (If Applicable) */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-1">
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-2">
              <input
                type="text"
                name="amountDeducted"
                id="amountDeducted"
                autoComplete="amountDeducted"
                className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300"
                placeholder="Amount Deducted"
                {...register(
                  "authorisationForDeduction.amountDeposit.2.amountDeducted",
                  {
                    required: false,
                  }
                )}
                defaultValue={
                  singleProperty?.inspectionReport?.authorisationForDeduction
                    ?.amountDeposit?.[2].amountDeducted
                }
              />
              <input
                type="text"
                name="desOfDeposit"
                id="desOfDeposit"
                autoComplete="desOfDeposit"
                className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500  sm:text-sm border-gray-300 "
                placeholder="Description of Deposit (e.g. security, pet, etc.)"
                {...register(
                  "authorisationForDeduction.amountDeposit.2.desOfDeposit",
                  {
                    required: false,
                  }
                )}
                defaultValue={
                  singleProperty?.inspectionReport?.authorisationForDeduction
                    ?.amountDeposit?.[2].desOfDeposit
                }
              />
            </div>
          </div>

          {/* Signature */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-20 sm:items-start mx-28 sm:border-gray-200 sm:pt-10">
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
                  {...register("authorisationForDeduction.signingDate", {
                    required: false,
                  })}
                  defaultValue={
                    singleProperty?.inspectionReport?.authorisationForDeduction
                      ?.signingDate &&
                    new Date(
                      singleProperty?.inspectionReport?.authorisationForDeduction?.signingDate
                    )
                      .toISOString()
                      .substring(0, 10)
                  }
                />
              </div>
            </div>

            <div className="col-span-1">
              <label
                htmlFor="signOfTenantOrAgent"
                className="block text-sm font-medium text-gray-700"
              >
                Signature of Landlord
              </label>
              <div className="mt-1">
                {singleProperty?.inspectionReport?.authorisationForDeduction
                  ?.signOfTenantOrAgent ? (
                  <span
                    className={`inline-block h-16 w-72 overflow-hidden  ${
                      singleProperty?.inspectionReport
                        ?.authorisationForDeduction?.signOfTenantOrAgent
                        ? "bg-white border"
                        : "bg-gray-100"
                    }`}
                  >
                    {singleProperty?.inspectionReport?.authorisationForDeduction
                      ?.signOfTenantOrAgent ? (
                      <img
                        className=" w-full h-full"
                        src={
                          singleProperty?.inspectionReport
                            ?.authorisationForDeduction?.signOfTenantOrAgent
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
                      "authorisationForDeduction.signOfTenantOrAgent",
                      {
                        required: false,
                      }
                    )}
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

export default AuthorizationForDeduction;
