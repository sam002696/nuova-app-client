import React from "react";

const Guarantors = () => {
  return (
    <div>
      <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Guarantor
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>
        </div>
        <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="current income"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Current Income
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="number"
                name="current income"
                id="current income"
                placeholder="50,000"
                autoComplete="given-name"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guarantors;
