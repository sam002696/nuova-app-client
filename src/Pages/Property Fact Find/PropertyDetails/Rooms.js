import React from "react";

const Rooms = ({ register }) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          2.b Rooms
        </h1>
        <p className=" italic text-lg pt-3">Number as appropriate</p>
      </div>

      <div className="grid grid-cols-4 gap-x-2">
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="room"
              aria-describedby="room-description"
              name="room"
              type="checkbox"
              value="Double bedroom"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="room" className="font-medium text-gray-700">
              Double bedroom
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="Living/Sitting room"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              Living/Sitting room
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="Bathroom (with shower)"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              Bathroom (with shower)
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="Shower room"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              Shower room
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="Single bedroom"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              Single bedroom
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="Open plan kitchen/Living"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              Open plan kitchen/Living
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="Bathroom (with bath only)"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              Bathroom (with bath only)
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="Separate WC"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              Separate WC
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="Box room"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              Box room
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="Separate kitchen"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              Separate kitchen
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="En-suite bathroom"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              En-suite bathroom
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="Utility room"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              Utility room
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="Study/Office"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              Study/Office
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="Dining room"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              Dining room
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="rooms"
              aria-describedby="rooms-description"
              name="rooms"
              type="checkbox"
              value="En-suite shower room"
              {...register("propertyDetails.roomObject.rooms")}
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="rooms" className="font-medium text-gray-700">
              En-suite shower room
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <label
          htmlFor="project-name"
          className="block text-sm font-medium text-gray-700 pb-2 mr-5"
        >
          Other (please specify)
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="project-name"
            id="project-name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register("propertyDetails.roomObject.roomsOther")}
          />
        </div>
      </div>
    </>
  );
};

export default Rooms;
