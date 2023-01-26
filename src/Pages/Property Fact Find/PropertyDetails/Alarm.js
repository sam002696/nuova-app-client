import React from "react";

const Alarm = ({ register }) => {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          2.f Alarm
        </h1>
      </div>
      <div className=" grid grid-cols-2 gap-5 pt-5">
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Alarm code
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.alarm.alarmCode")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label
            htmlFor="project-name"
            className="block text-sm font-medium text-gray-700"
          >
            Location of alarm panel
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              {...register("propertyDetails.alarm.alarmPanelLocation")}
            />
          </div>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Alarm fob required?
          </label>
          <select
            id="smoker"
            name="smoker"
            autoComplete="smoker"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register("propertyDetails.alarm.alarmFob")}
          >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            Type of alarm
          </label>
          <select
            id="smoker"
            name="smoker"
            autoComplete="smoker"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register("propertyDetails.alarm.alarmType")}
          >
            <option>Select</option>
            <option>Monitored</option>
            <option>Sounding</option>
          </select>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Service provider (name & contact details)
          </label>
          <div className="mt-1">
            <textarea
              id="description"
              name="description"
              rows={5}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
              defaultValue={""}
              {...register("propertyDetails.alarm.serviceProvider")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Alarm;
