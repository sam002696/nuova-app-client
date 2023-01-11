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
                defaultValue={
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
              <select
                id="description"
                name="description"
                autoComplete="description"
                value={
                  singleProperty?.inventory?.hallStairsLanding?.ceiling
                    ?.description
                }
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              >
                <option>Description</option>
                <option>Brand New</option>
                <option>Excellent Condition</option>
                <option>Good Condition</option>
                <option>Fair Condition</option>
                <option>Poor Condition</option>
              </select>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.ceiling.notes", {
                  required: false,
                })}
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
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("hallStairsLanding.skirting.description", {
                  required: false,
                })}
              >
                <option>Description</option>
                <option>Brand New</option>
                <option>Excellent Condition</option>
                <option>Good Condition</option>
                <option>Fair Condition</option>
                <option>Poor Condition</option>
              </select>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.skirting.notes", {
                  required: false,
                })}
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
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("hallStairsLanding.window.description", {
                  required: false,
                })}
              >
                <option>Description</option>
                <option>Brand New</option>
                <option>Excellent Condition</option>
                <option>Good Condition</option>
                <option>Fair Condition</option>
                <option>Poor Condition</option>
              </select>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.window.notes", {
                  required: false,
                })}
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
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("hallStairsLanding.radiator.description", {
                  required: false,
                })}
              >
                <option>Description</option>
                <option>Brand New</option>
                <option>Excellent Condition</option>
                <option>Good Condition</option>
                <option>Fair Condition</option>
                <option>Poor Condition</option>
              </select>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.radiator.notes", {
                  required: false,
                })}
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
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("hallStairsLanding.lightFixture.description", {
                  required: false,
                })}
              >
                <option>Description</option>
                <option>Brand New</option>
                <option>Excellent Condition</option>
                <option>Good Condition</option>
                <option>Fair Condition</option>
                <option>Poor Condition</option>
              </select>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.lightFixture.notes", {
                  required: false,
                })}
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
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("hallStairsLanding.sockets.description", {
                  required: false,
                })}
              >
                <option>Description</option>
                <option>Brand New</option>
                <option>Excellent Condition</option>
                <option>Good Condition</option>
                <option>Fair Condition</option>
                <option>Poor Condition</option>
              </select>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.sockets.notes", {
                  required: false,
                })}
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
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("hallStairsLanding.switches.description", {
                  required: false,
                })}
              >
                <option>Description</option>
                <option>Brand New</option>
                <option>Excellent Condition</option>
                <option>Good Condition</option>
                <option>Fair Condition</option>
                <option>Poor Condition</option>
              </select>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.switches.notes", {
                  required: false,
                })}
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
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("hallStairsLanding.loftHatch.description", {
                  required: false,
                })}
              >
                <option>Description</option>
                <option>Brand New</option>
                <option>Excellent Condition</option>
                <option>Good Condition</option>
                <option>Fair Condition</option>
                <option>Poor Condition</option>
              </select>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.loftHatch.notes", {
                  required: false,
                })}
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
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("hallStairsLanding.cupboard.description", {
                  required: false,
                })}
              >
                <option>Description</option>
                <option>Brand New</option>
                <option>Excellent Condition</option>
                <option>Good Condition</option>
                <option>Fair Condition</option>
                <option>Poor Condition</option>
              </select>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.cupboard.notes", {
                  required: false,
                })}
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
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("hallStairsLanding.bannister.description", {
                  required: false,
                })}
              >
                <option>Description</option>
                <option>Brand New</option>
                <option>Excellent Condition</option>
                <option>Good Condition</option>
                <option>Fair Condition</option>
                <option>Poor Condition</option>
              </select>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.bannister.notes", {
                  required: false,
                })}
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
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("hallStairsLanding.miscellaneous.description", {
                  required: false,
                })}
              >
                <option>Description</option>
                <option>Brand New</option>
                <option>Excellent Condition</option>
                <option>Good Condition</option>
                <option>Fair Condition</option>
                <option>Poor Condition</option>
              </select>
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.miscellaneous.notes", {
                  required: false,
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomHallStairsLanding;
