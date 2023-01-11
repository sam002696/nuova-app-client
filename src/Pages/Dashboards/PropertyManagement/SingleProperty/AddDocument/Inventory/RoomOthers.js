import React from "react";

const RoomOthers = ({ register }) => {
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
              />
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.0.description", {
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
              />
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.1.description", {
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
              />
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.2.description", {
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
              />
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.3.description", {
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
              />
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.4.description", {
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
              />
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.5.description", {
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
              />
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.6.description", {
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
              />
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.7.description", {
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
              />
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.8.description", {
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
              />
              <select
                id="description"
                name="description"
                autoComplete="description"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                {...register("others.9.description", {
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomOthers;
