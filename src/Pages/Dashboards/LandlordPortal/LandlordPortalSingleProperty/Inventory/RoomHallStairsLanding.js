import React from "react";

const RoomHallStairsLanding = ({ register, singleProperty }) => {
  return (
    <div>
      <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Room</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Hall, Stairs and Landing
          </p>
        </div>
        <div className=" sm:space-y-4 space-y-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Door External
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                id="description"
                name="description"
                type="text"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.doorExternal
                    ?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.doorExternal
                    ?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Door Internal
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                id="description"
                name="description"
                type="text"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.doorInternal
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.doorInternal
                    ?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Walls
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.walls
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.walls?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Floor
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.floor
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.floor?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Ceiling
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.ceiling
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.ceiling?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Skirting
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.skirting
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.skirting?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Window(s)
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.window
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.window?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Radiator(s)
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.radiator
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.radiator?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Light Fixture(s)
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.lightFixture
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.lightFixture
                    ?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Sockets
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.sockets
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.sockets?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Switches
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.switches
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.switches?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Loft Hatch
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.loftHatch
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.loftHatch?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Cupboard
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.cupboard
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.cupboard?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Bannister
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.bannister
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.bannister?.notes
                }
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="item"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Miscellaneous
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 flex flex-row gap-10">
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.miscellaneous
                    ?.description
                }
              ></input>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.miscellaneous
                    ?.notes
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomHallStairsLanding;
