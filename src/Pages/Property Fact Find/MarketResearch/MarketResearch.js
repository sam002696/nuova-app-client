import React from "react";

const MarketResearch = ({ register }) => {
  return (
    <>
      <div className="space-y-6">
        <div className="pt-5">
          <p className=" text-lg text-white font-semibold bg-gray-500 pl-1">
            Section 5: Market Research
          </p>
          <p className=" text-base text-gray-800 italic">Optional</p>
        </div>

        <div className="bg-gray-200 px-2 py-3">
          <p className="text-base text-gray-800">
            Where did you first hear about Nuova System?
          </p>
          <div className=" grid grid-cols-4 gap-5">
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="recommendation"
                  name="marketResearchOption"
                  type="radio"
                  value="Recommendation"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  {...register("marketResearch.marketResearchOption")}
                />
                <label
                  htmlFor="recommendation"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Recommendation
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="websearch"
                  name="marketResearchOption"
                  type="radio"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  value="Web search"
                  {...register("marketResearch.marketResearchOption")}
                />
                <label
                  htmlFor="websearch"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Web search
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="toLetForSaleBoard"
                  name="marketResearchOption"
                  type="radio"
                  value="To let / For sale board"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  {...register("marketResearch.marketResearchOption")}
                />
                <label
                  htmlFor="toLetForSaleBoard"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  To let / For sale board
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="brandedVehicle"
                  name="marketResearchOption"
                  type="radio"
                  value="Branded vehicle"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  {...register("marketResearch.marketResearchOption")}
                />
                <label
                  htmlFor="brandedVehicle"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Branded vehicle
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="propertyPortal"
                  name="marketResearchOption"
                  type="radio"
                  value="Property Portal"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  {...register("marketResearch.marketResearchOption")}
                />
                <label
                  htmlFor="propertyPortal"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Property portal
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="socialMedia"
                  name="marketResearchOption"
                  type="radio"
                  value="Social media"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  {...register("marketResearch.marketResearchOption")}
                />
                <label
                  htmlFor="socialMedia"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Social Media
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="passingOurOffice"
                  name="marketResearchOption"
                  type="radio"
                  value="Passing our office"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  {...register("marketResearch.marketResearchOption")}
                />
                <label
                  htmlFor="passingOurOffice"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Passing our office
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="alreadyAwareOfCompany"
                  name="marketResearchOption"
                  type="radio"
                  value="Already aware of company"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  {...register("marketResearch.marketResearchOption")}
                />
                <label
                  htmlFor="alreadyAwareOfCompany"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Already aware of company
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="existingClient"
                  name="marketResearchOption"
                  type="radio"
                  value="I am an existing client"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  {...register("marketResearch.marketResearchOption")}
                />
                <label
                  htmlFor="existingClient"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  I am an existing client
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketResearch;
