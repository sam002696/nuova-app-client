import React from "react";

const RentalPropertyCondition = () => {
  return (
    <div>
      <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Rental Property Condition
          </h3>
          {/* <p className="mt-5 max-w-3xl text-sm text-gray-500">
            With the tenant (or their agent) present, examine and record the
            condition of the property in the fields below. Make sure to test and
            demonstrate the testing procedure for all smoke alarms and carbon
            monoxide detectors and show where any fire extinguishers are stored
          </p> */}
        </div>
        <div className=" sm:space-y-1 space-y-1">
          {/* Area - Entryway #1 */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="entryway_1"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Entryway #1
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Entryway #2 */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="entryway_2"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Entryway #2
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Living Room */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="living_room"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Living Room
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Dining Room */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="dining_room"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Dining Room
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Kitchen */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="kitchen"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Kitchen
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Bedroom #1 */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="bedroom_1"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Bedroom #1
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Bedroom #2 */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="bedroom_2"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Bedroom #2
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Bedroom #3 */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="bedroom_1"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Bedroom #3
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Bathroom #1 */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="bathroom_1"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Bathroom #1
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Bathroom #2 */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="bathroom_2"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Bathroom #2
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Bathroom #3 */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="bathroom_1"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Bathroom #3
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Stairway #1 */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="stairway_1"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Stairway #1
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Stairway #2 */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="stairway_2"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Stairway #2
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Hallway #1 */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="hallway_1"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Hallway #1
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Hallway #2 */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="hallway_2"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Hallway #2
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Basement */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="basement"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Basement
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Balcony/Deck/Patio */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="balcony_deck_patio"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Balcony/Deck/Patio
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Garage */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="garage"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Garage
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Yard */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="yard"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Yard
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Number of keys and controls */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="n_k_c"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Number of keys and controls
              <br /> e.g. front door key, garage door remote
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>

          {/* Area - Safety Equipment */}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-1">
            <label
              htmlFor="safety_equipment"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Safety Equipment
              <br /> e.g. smoke alarm, fire extinguishers, etc.
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 ">
              <input
                type="text"
                name="condition"
                id="condition"
                autoComplete="condition"
                className="max-w-lg block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                placeholder="Condition"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalPropertyCondition;
