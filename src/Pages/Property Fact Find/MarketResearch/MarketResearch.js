import React from "react";

const MarketResearch = () => {
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
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Recommendation
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Web search
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  To let / For sale board
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Branded vehicle
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Property portal
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Social media
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Passing our office
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Already aware of company
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  I am an existing client
                </label>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <div className="flex h-5 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  Other (please specify)
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
