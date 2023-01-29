import React from "react";

const SafetyCertificates = ({ register }) => {
  return (
    <>
      <div className="space-y-3">
        <p className=" text-lg text-gray-900 font-semibold ">
          4.e Safety Tests & Essential Certificates
        </p>
        <p className=" text-base text-gray-600 italic">
          Please take care completing this section
        </p>
      </div>

      <div className="">
        <div className="sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="item"
            className="block text-sm font-medium text-gray-700 sm:mt-px"
          ></label>
          <div className="mt-1 sm:mt-0 sm:col-span-4 grid grid-cols-6 gap-2">
            <div className="col-span-1">
              <label
                htmlFor="item"
                className="block text-sm font-medium text-gray-700 sm:mt-px"
              >
                N/A <br />
                No Gas
              </label>
            </div>

            <div className="col-span-1">
              <label
                htmlFor="item"
                className="block text-sm font-medium text-gray-700 sm:mt-px"
              >
                Owner(s) will provide
              </label>
            </div>

            <div className="col-span-1">
              <label
                htmlFor="item"
                className="block text-sm font-medium text-gray-700 sm:mt-px"
              >
                Owner(s) instruct the Agent to arrange
              </label>
            </div>

            <div className="col-span-1">
              <label
                htmlFor="item"
                className="block text-sm font-medium text-gray-700 sm:mt-px"
              >
                Owner(s) instruct the Agent to renew
              </label>
            </div>

            <div className="col-span-2">
              <label
                htmlFor="item"
                className="block text-sm font-medium text-gray-700 sm:mt-px"
              >
                Certificate Expiry Date
              </label>
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start  sm:pt-5">
          <label
            htmlFor="item"
            className="block text-sm font-medium text-gray-700 sm:mt-px"
          >
            Gas Safety Certificate (GSC)
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-4 grid grid-cols-6 gap-2">
            <div className="col-span-1">
              <input
                name="gsc"
                id="gsc"
                type="checkbox"
                value="NA / No Gas"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500 "
                placeholder="Notes"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.gsc"
                )}
              />
            </div>

            <div className="col-span-1">
              <input
                id="gsc"
                name="gsc"
                type="checkbox"
                value="Owner(s) will provide"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.gsc"
                )}
              />
            </div>

            <div className="col-span-1">
              <input
                id="gsc"
                name="gsc"
                type="checkbox"
                value="Owner(s) instruct the Agent to arrange"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.gsc"
                )}
              />
            </div>

            <div className="col-span-1">
              <input
                id="gsc"
                name="gsc"
                type="checkbox"
                value="Owner(s) instruct the Agent to renew"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.gsc"
                )}
              />
            </div>

            <div className="col-span-2">
              <input
                type="date"
                name="gscExpiryDate"
                id="gscExpiryDate"
                className=" rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm "
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.gscExpiryDate"
                )}
              />
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start  sm:pt-5">
          <label
            htmlFor="item"
            className="block text-sm font-medium text-gray-700 sm:mt-px"
          >
            Energy Performance Certificate (EPC)
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-4 grid grid-cols-6 gap-2">
            <div className="col-span-1"></div>

            <div className="col-span-1">
              <input
                id="epc"
                value="Owner(s) will provide"
                name="epc"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.epc"
                )}
              />
            </div>

            <div className="col-span-1">
              <input
                id="epc"
                value="Owner(s) instruct the Agent to arrange"
                name="epc"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.epc"
                )}
              />
            </div>

            <div className="col-span-1">
              <input
                id="epc"
                value="Owner(s) instruct the Agent to renew"
                name="epc"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.epc"
                )}
              />
            </div>

            <div className="col-span-2">
              <input
                type="date"
                name="epcExpiryDate"
                id="epcExpiryDate"
                className=" rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm "
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.epcExpiryDate"
                )}
              />
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start  sm:pt-5">
          <label
            htmlFor="item"
            className="block text-sm font-medium text-gray-700 sm:mt-px"
          >
            Legionnaires Risk Assessment (LRA)
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-4 grid grid-cols-6 gap-2">
            <div className="col-span-1"></div>

            <div className="col-span-1">
              <input
                id="lra"
                value="Owner(s) will provide"
                name="lra"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.lra"
                )}
              />
            </div>

            <div className="col-span-1">
              <input
                id="lra"
                value="Owner(s) instruct the Agent to arrange"
                name="lra"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.lra"
                )}
              />
            </div>

            <div className="col-span-1">
              <input
                id="lra"
                value="Owner(s) instruct the Agent to renew"
                name="lra"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.lra"
                )}
              />
            </div>

            <div className="col-span-2">
              <input
                type="date"
                name="lraExpiryDate"
                id="lraExpiryDate"
                className=" rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm "
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.lraExpiryDate"
                )}
              />
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start  sm:pt-5">
          <label
            htmlFor="item"
            className="block text-sm font-medium text-gray-700 sm:mt-px"
          >
            Electrical Installation Condition Report (EICR)
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-4 grid grid-cols-6 gap-2">
            <div className="col-span-1"></div>

            <div className="col-span-1">
              <input
                id="eicr"
                value="Owner(s) will provide"
                name="eicr"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.eicr"
                )}
              />
            </div>

            <div className="col-span-1">
              <input
                id="eicr"
                value="Owner(s) instruct the Agent to arrange"
                name="eicr"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.eicr"
                )}
              />
            </div>

            <div className="col-span-1">
              <input
                id="eicr"
                value="Owner(s) instruct the Agent to renew"
                name="eicr"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.eicr"
                )}
              />
            </div>

            <div className="col-span-2">
              <input
                type="date"
                name="eicrExpiryDate"
                id="eicrExpiryDate"
                className=" rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm "
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.eicrExpiryDate"
                )}
              />
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start  sm:pt-5">
          <label
            htmlFor="pat"
            className="block text-sm font-medium text-gray-700 sm:mt-px"
          >
            Portable Appliance Testing (PAT)
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-4 grid grid-cols-6 gap-2">
            <div className="col-span-1"></div>

            <div className="col-span-1">
              <input
                id="pat"
                name="pat"
                type="checkbox"
                value="Owner(s) will provide"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.pat"
                )}
              />
            </div>

            <div className="col-span-1">
              <input
                id="pat"
                name="pat"
                type="checkbox"
                value="Owner(s) instruct the Agent to arrange"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.pat"
                )}
              />
            </div>

            <div className="col-span-1">
              <input
                id="pat"
                name="pat"
                type="checkbox"
                value="Owner(s) instruct the Agent to renew"
                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.pat"
                )}
              />
            </div>

            <div className="col-span-2">
              <input
                type="date"
                name="patExpiryDate"
                id="patExpiryDate"
                className=" rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm "
                {...register(
                  "propertyMaintenance.safetyTestsEssentialCertificates.patExpiryDate"
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 pt-4">
        <div className="col-span-2">
          <p className=" text-base text-gray-900 leading-6 pt-2">
            The Owner requests that the Agent arrange a quote for the
            installation of fully approved interlinked{" "}
            <span className="font-bold">smoke and heat detector</span>
          </p>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700 pt-2"
          >
            Yes
          </label>

          <div className="flex h-5 items-center">
            <input
              id="smokeAndHeatDetector"
              // aria-describedby="comments-description"
              name="smokeAndHeatDetector"
              type="checkbox"
              value="Yes"
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
              {...register(
                "propertyMaintenance.safetyTestsEssentialCertificates.smokeAndHeatDetector"
              )}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700 pt-2"
          >
            No
          </label>

          <div className="flex h-5 items-center">
            <input
              id="smokeAndHeatDetector"
              // aria-describedby="comments-description"
              name="smokeAndHeatDetector"
              type="checkbox"
              value="No"
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
              {...register(
                "propertyMaintenance.safetyTestsEssentialCertificates.smokeAndHeatDetector"
              )}
            />
          </div>
        </div>
      </div>

      <div>
        <p className=" text-base text-gray-900 leading-6 pt-2">
          If selected to provide above, it is the Owner’s responsibility to
          supply valid certificates to the Agent no less than 48 hours prior to
          the commencement of the first tenancy. If these are not received, the
          Agent reserves the right to arrange for new certificates on the
          Owner’s behalf, and at the Owner’s expense, to comply with current
          legislation.
        </p>
      </div>
    </>
  );
};

export default SafetyCertificates;
