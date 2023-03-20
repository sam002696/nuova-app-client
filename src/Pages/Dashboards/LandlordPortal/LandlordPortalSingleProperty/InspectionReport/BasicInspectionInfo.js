import React from "react";

const BasicInspectionInfo = ({ register, singleProperty }) => {
  return (
    <div>
      <div className="pt-6 space-y-6 sm:pt-8 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-center text-gray-900 pb-6">
            RESIDENTIAL RENTAL INSPECTION REPORT
          </h3>
        </div>
        <div className="sm:space-y-2 space-y-2">
          {/* Move-In Inspection Date */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-2">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-600 sm:mt-px sm:pt-2"
            >
              Inspection Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="date"
                name="inspectionDate"
                id="inspectionDate"
                autoComplete="inspectionDate"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="move_in_inspection_date"
                {...register("propertyInspectionDate.inspectionDate", {
                  required: false,
                })}
                value={
                  singleProperty?.propertyInspectionDate?.inspectionDate
                    ? new Date(
                        singleProperty?.propertyInspectionDate?.inspectionDate
                      )
                        .toISOString()
                        .substring(0, 10)
                    : singleProperty?.propertyInspectionDate?.inspectionDate
                }
              />
            </div>
          </div>

          {/* Move-Out Inspection Date */}
          {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-b sm:border-gray-200 sm:pt-2 sm:pb-2">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-600 sm:mt-px sm:pt-2"
            >
              Move-Out Inspection Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="date"
                name="move_out_inspection_date"
                id="move_out_inspection_date"
                autoComplete="move_out_inspection_date"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="move_out_inspection_date"
              />
            </div>
          </div> */}
        </div>
      </div>

      {/* Rental Property Information */}
      <div className="pt-6 space-y-6 sm:pt-8 sm:space-y-5">
        <div>
          <h3 className="text-md leading-6 font-medium text-gray-700 underline">
            Rental Property Information
          </h3>
        </div>
        <div className=" sm:space-y-3 space-y-3">
          {/* Address */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-3">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-600 sm:mt-px sm:pt-2"
            >
              Address
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="address"
                className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm  border-gray-300 rounded-md"
                placeholder=""
                {...register("rentalPropertyInformation.address", {
                  required: false,
                })}
                value={singleProperty?.rentalPropertyInformation?.address}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Inspector Information */}
      <div className="pt-6 space-y-6 sm:pt-8 sm:space-y-5">
        <div>
          <h3 className="text-md leading-6 font-medium text-gray-700 underline">
            Inspector Information
          </h3>
        </div>
        <div className=" sm:space-y-3 space-y-3">
          {/* Inspector Information */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-3">
            {/* Inspector Name */}
            <div className="col-span-1">
              <label
                htmlFor="inspectorName"
                className="block text-sm font-medium text-gray-600 sm:mt-px sm:pt-2"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="inspectorName"
                  id="inspectorName"
                  className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm  border-gray-300 rounded-md"
                  placeholder=""
                  {...register("inspectorInformation.inspectorName", {
                    required: false,
                  })}
                  value={singleProperty?.inspectorInformation?.inspectorName}
                />
              </div>
            </div>
            {/* Inspector Phone */}
            <div className="col-span-1">
              <label
                htmlFor="inspectorPhone"
                className="block text-sm font-medium text-gray-600 sm:mt-px sm:pt-2"
              >
                Phone
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="inspectorPhone"
                  id="inspectorPhone"
                  className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm  border-gray-300 rounded-md"
                  placeholder=""
                  {...register("inspectorInformation.inspectorPhone", {
                    required: false,
                  })}
                  value={singleProperty?.inspectorInformation?.inspectorPhone}
                />
              </div>
            </div>
            {/* Inspector Email */}
            <div className="col-span-1">
              <label
                htmlFor="inspectorEmail"
                className="block text-sm font-medium text-gray-600 sm:mt-px sm:pt-2"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="inspectorEmail"
                  id="inspectorEmail"
                  className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm  border-gray-300 rounded-md"
                  placeholder=""
                  {...register("inspectorInformation.inspectorEmail", {
                    required: false,
                  })}
                  value={singleProperty?.inspectorInformation?.inspectorEmail}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tenant Information */}
      <div className="pt-6 space-y-6 sm:pt-8 sm:space-y-5">
        <div>
          <h3 className="text-md leading-6 font-medium text-gray-700 underline">
            Tenant Information (If Any)
          </h3>
        </div>
        <div className=" sm:space-y-3 space-y-3">
          {/* Tenant Information */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-3">
            {/* Tenant Name */}
            <div className="col-span-1">
              <label
                htmlFor="tenantName"
                className="block text-sm font-medium text-gray-600 sm:mt-px sm:pt-2"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="tenantName"
                  id="tenantName"
                  className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm  border-gray-300 rounded-md"
                  placeholder=""
                  {...register("tenantInformation.tenantName", {
                    required: false,
                  })}
                  value={singleProperty?.tenantInformation?.tenantName}
                />
              </div>
            </div>
            {/* Tenant Phone */}
            <div className="col-span-1">
              <label
                htmlFor="tenantPhone"
                className="block text-sm font-medium text-gray-600 sm:mt-px sm:pt-2"
              >
                Phone
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="tenantPhone"
                  id="tenantPhone"
                  className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm  border-gray-300 rounded-md"
                  placeholder=""
                  {...register("tenantInformation.tenantPhone", {
                    required: false,
                  })}
                  value={singleProperty?.tenantInformation?.tenantPhone}
                />
              </div>
            </div>
            {/* Tenant Email */}
            <div className="col-span-1">
              <label
                htmlFor="tenantEmail"
                className="block text-sm font-medium text-gray-600 sm:mt-px sm:pt-2"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="tenantEmail"
                  id="tenantEmail"
                  className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm  border-gray-300 rounded-md"
                  placeholder=""
                  {...register("tenantInformation.tenantEmail", {
                    required: false,
                  })}
                  value={singleProperty?.tenantInformation?.tenantEmail}
                />
              </div>
            </div>
          </div>

          {/* Agent Name */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="agentName"
              className="block text-sm font-medium text-gray-600 sm:mt-px sm:pt-2"
            >
              Agent Name (if tenant unavailable for inspection)
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-1">
              <input
                type="text"
                name="agentName"
                id="agentName"
                autoComplete="agent-name"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm  border-gray-300 rounded-md"
                placeholder=""
                {...register("agentInformation.agentName", { required: false })}
                value={singleProperty?.agentInformation?.agentName}
              />
            </div>
          </div>

          {/* Forwarding Address */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="forwardingAddress"
              className="block text-sm font-medium text-gray-600 sm:mt-px sm:pt-2"
            >
              Forwarding Address (After move-out)
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-1">
              <input
                type="text"
                name="forwardingAddress"
                id="forwardingAddress"
                autoComplete="forwarding-address"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm  border-gray-300 rounded-md"
                placeholder=""
                {...register("forwardingAddAfterMoveOut.forwardingAddress", {
                  required: false,
                })}
                value={
                  singleProperty?.forwardingAddAfterMoveOut?.forwardingAddress
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInspectionInfo;
