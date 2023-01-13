import React from "react";

const RoomOthers = ({ register, singleProperty }) => {
  return (
    <div>
      <div className="pt-6 space-y-6 sm:pt-8 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Room </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Others</p>
        </div>
        <div className=" sm:space-y-4 space-y-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <div className="mt-1 sm:mt-0 sm:col-span-3 flex flex-row gap-10">
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Room"
                {...register("others.0.room", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[0]?.room}
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Item"
                {...register("others.0.item", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[0]?.item}
              />
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.0.description", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[0]?.description}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <div className="mt-1 sm:mt-0 sm:col-span-3 flex flex-row gap-10">
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Room"
                {...register("others.1.room", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[1]?.room}
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Item"
                {...register("others.1.item", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[1]?.item}
              />
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.1.description", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[1]?.description}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <div className="mt-1 sm:mt-0 sm:col-span-3 flex flex-row gap-10">
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Room"
                {...register("others.2.room", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[2]?.room}
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Item"
                {...register("others.2.item", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[2]?.item}
              />
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.2.description", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[2]?.description}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <div className="mt-1 sm:mt-0 sm:col-span-3 flex flex-row gap-10">
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Room"
                {...register("others.3.room", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[3]?.room}
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Item"
                {...register("others.3.item", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[3]?.item}
              />
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.3.description", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[3]?.description}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <div className="mt-1 sm:mt-0 sm:col-span-3 flex flex-row gap-10">
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Room"
                {...register("others.4.room", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[4]?.room}
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Item"
                {...register("others.4.item", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[4]?.item}
              />
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.4.description", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[4]?.description}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <div className="mt-1 sm:mt-0 sm:col-span-3 flex flex-row gap-10">
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Room"
                {...register("others.5.room", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[5]?.room}
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Item"
                {...register("others.5.item", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[5]?.item}
              />
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.5.description", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[5]?.description}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <div className="mt-1 sm:mt-0 sm:col-span-3 flex flex-row gap-10">
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Room"
                {...register("others.6.room", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[6]?.room}
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Item"
                {...register("others.6.item", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[6]?.item}
              />
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.6.description", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[6]?.description}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <div className="mt-1 sm:mt-0 sm:col-span-3 flex flex-row gap-10">
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Room"
                {...register("others.7.room", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[7]?.room}
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Item"
                {...register("others.7.item", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[7]?.item}
              />
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.7.description", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[7]?.description}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <div className="mt-1 sm:mt-0 sm:col-span-3 flex flex-row gap-10">
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Room"
                {...register("others.8.room", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[8]?.room}
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Item"
                {...register("others.8.item", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[8]?.item}
              />
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.8.description", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[8]?.description}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <div className="mt-1 sm:mt-0 sm:col-span-3 flex flex-row gap-10">
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Room"
                {...register("others.9.room", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[9]?.room}
              />
              <input
                type="text"
                name="notes"
                id="notes"
                autoComplete="notes"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Item"
                {...register("others.9.item", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[9]?.item}
              />
              <input
                type="text"
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.9.description", {
                  required: false,
                })}
                defaultValue={singleProperty?.inventory?.others[9]?.description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomOthers;
