import React from "react";

const RoomKitchen = ({ register, singleProperty }) => {
  return (
    <div>
      <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Room</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Kitchen</p>
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
                {...register("kitchen.doorExternal.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.doorExternal?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.doorExternal.notes", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.doorExternal?.notes
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
                {...register("kitchen.doorInternal.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.doorInternal?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.doorInternal.notes", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.doorInternal?.notes
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
                {...register("kitchen.walls.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.walls?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.walls.notes", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.kitchen?.walls?.notes}
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
                {...register("kitchen.floor.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.floor?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.floor.notes", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.kitchen?.floor?.notes}
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
                {...register("kitchen.ceiling.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.ceiling?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.ceiling.notes", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.ceiling?.notes
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
                {...register("kitchen.skirting.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.skirting?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.skirting.notes", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.skirting?.notes
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
                {...register("kitchen.window.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.window?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.window.notes", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.kitchen?.window?.notes}
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
                {...register("kitchen.radiator.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.radiator?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.radiator.notes", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.radiator?.notes
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
                {...register("kitchen.lightFixture.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.lightFixture?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.lightFixture.notes", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.lightFixture?.notes
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
                {...register("kitchen.sockets.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.sockets?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.sockets.notes", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.sockets?.notes
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
                {...register("kitchen.switches.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.switches?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.switches.notes", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.switches?.notes
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
                {...register("kitchen.loftHatch.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.loftHatch?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.loftHatch.notes", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.loftHatch?.notes
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
                {...register("kitchen.cupboard.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.cupboard?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.cupboard.notes", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.cupboard?.notes
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
                {...register("kitchen.bannister.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.bannister?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.bannister.notes", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.bannister?.notes
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
                {...register("kitchen.miscellaneous.description", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.miscellaneous?.description
                }
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Notes"
                {...register("kitchen.miscellaneous.notes", {
                  required: false,
                })}
                defaultValue={
                  singleProperty?.inventory?.kitchen?.miscellaneous?.notes
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomKitchen;
