import React from "react";
import BankDetails from "./BankDetails";
import EmergencyContact from "./EmergencyContact";
import OwnerOne from "./OwnerOne";
import OwnerTwo from "./OwnerTwo";
import TaxDeclaration from "./TaxDeclaration";

const OwnershipDetails = ({ register }) => {
  return (
    <>
      <div className="space-y-6">
        <div className="pt-5">
          <p className=" text-lg text-white font-semibold bg-gray-500 pl-1">
            Section 3: Ownership Details
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 pt-2">
          <div className="col-span-1">
            <label
              htmlFor="project-name"
              className="block text-lg font-medium text-gray-900 pb-4"
            >
              The Property is:
            </label>
            <fieldset className="grid grid-cols-3 gap-x-3">
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="propertyOwnership"
                    aria-describedby="propertyOwnership-description"
                    name="propertyOwnership"
                    value="Solely owned"
                    type="checkbox"
                    {...register("ownershipDetails.propertyOwnership")}
                    className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-700"
                  >
                    Solely owned
                  </label>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="propertyOwnership"
                    aria-describedby="propertyOwnership-description"
                    name="propertyOwnership"
                    type="checkbox"
                    value="Jointly owned"
                    {...register("ownershipDetails.propertyOwnership")}
                    className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="propertyOwnership"
                    className="font-medium text-gray-700"
                  >
                    Jointly owned
                  </label>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="propertyOwnership"
                    aria-describedby="propertyOwnership-description"
                    name="propertyOwnership"
                    type="checkbox"
                    value="Company owned"
                    {...register("ownershipDetails.propertyOwnership")}
                    className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="propertyOwnership"
                    className="font-medium text-gray-700"
                  >
                    Company owned
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className=" col-span-1">
            <p className=" text-gray-500 text-sm pt-2">
              A copy of valid photo ID and proof of address not more than 3
              months old for all owners is required.
            </p>
          </div>
        </div>
        <hr className=" border-1 border-gray-400" />

        <OwnerOne register={register} />
        <OwnerTwo register={register} />
        <BankDetails register={register} />
        <EmergencyContact register={register} />
        <TaxDeclaration register={register} />
      </div>
    </>
  );
};

export default OwnershipDetails;
