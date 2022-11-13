import React from "react";
import ExplanationOfCondition from "./ExplanationOfCondition";
import RoomHallStairsLanding from "./RoomHallStairsLanding";
import RoomKitchen from "./RoomKitchen";
import RoomOthers from "./RoomOthers";

const Inventory = () => {
  return (
    <>
      <div className=" w-5/6 mx-auto mb-10 mt-2">
        <form className="space-y-8 divide-y-2 divide-gray-200">
          <div className="space-y-8 divide-y-2 divide-gray-200 sm:space-y-5">
            <ExplanationOfCondition />

            <RoomHallStairsLanding />

            <RoomKitchen />

            <RoomOthers />
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Inventory;
