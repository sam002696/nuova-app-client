import React from "react";

const RoomOthers = ({ singleProperty }) => {
  return (
    <div>
      <div className="pt-6 space-y-6 sm:pt-8 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Room </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Others</p>
        </div>
        <div className=" sm:space-y-4 space-y-4">
          {singleProperty.inventory?.others?.map((item) => (
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <div className="mt-1 sm:mt-0 sm:col-span-3 flex flex-row gap-10">
                <input
                  type="text"
                  name="notes"
                  id="notes"
                  autoComplete="notes"
                  className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  placeholder="Room"
                  value={item?.room}
                />
                <input
                  type="text"
                  name="notes"
                  id="notes"
                  autoComplete="notes"
                  className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  placeholder="Item"
                  value={item?.item}
                />
                <input
                  type="text"
                  id="description"
                  name="description"
                  autoComplete="description"
                  className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  value={item?.description}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomOthers;
