import React from "react";

const RoomHallStairsLanding = ({ register, singleProperty }) => {
  console.log(
    singleProperty?.inventory?.hallStairsLanding?.doorExternal?.description
  );
  console.log(
    singleProperty?.inventory?.hallStairsLanding?.doorInternal?.description
  );
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
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("hallStairsLanding.doorExternal.description", {
                  required: false,
                })}
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
                placeholder="Notes"
                {...register("hallStairsLanding.doorExternal.notes", {
                  required: false,
                })}
                defaultValue={
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
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("hallStairsLanding.doorInternal.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.doorInternal
                    ?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.doorInternal.notes", {
                  required: false,
                })}
                defaultValue={
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
                {...register("hallStairsLanding.walls.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.walls
                    ?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.walls.notes", {
                  required: false,
                })}
                defaultValue={
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
                {...register("hallStairsLanding.floor.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.floor
                    ?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("hallStairsLanding.floor.notes", {
                  required: false,
                })}
                defaultValue={
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
                {...register("hallStairsLanding.ceiling.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.ceiling
                    ?.description
                }
              />
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
                defaultValue={
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
                {...register("hallStairsLanding.skirting.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.skirting
                    ?.description
                }
              />
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
                defaultValue={
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
                {...register("hallStairsLanding.window.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.window
                    ?.description
                }
              />
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
                defaultValue={
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
                {...register("hallStairsLanding.radiator.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.radiator
                    ?.description
                }
              />
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
                defaultValue={
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
                {...register("hallStairsLanding.lightFixture.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.lightFixture
                    ?.description
                }
              />
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
                defaultValue={
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
                {...register("hallStairsLanding.sockets.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.sockets
                    ?.description
                }
              />
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
                defaultValue={
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
                {...register("hallStairsLanding.switches.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.switches
                    ?.description
                }
              />
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
                defaultValue={
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
                {...register("hallStairsLanding.loftHatch.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.loftHatch
                    ?.description
                }
              />
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
                defaultValue={
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
                {...register("hallStairsLanding.cupboard.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.cupboard
                    ?.description
                }
              />
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
                defaultValue={
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
                {...register("hallStairsLanding.bannister.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.bannister
                    ?.description
                }
              />
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
                defaultValue={
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
                {...register("hallStairsLanding.miscellaneous.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.hallStairsLanding?.miscellaneous
                    ?.description
                }
              />
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
                defaultValue={
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
