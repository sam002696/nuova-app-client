import React from "react";

const Agent = ({ register }) => {
  return (
    <>
      <div className=" space-y-3">
        <p className=" text-xl text-gray-900 font-semibold pb-2">Agent</p>
        <p className=" text-base text-gray-900 pt-3">
          <span className="font-bold">Nuova System</span> <br /> 8 Eagle Street,
          Craighall Business Park, Glasgow, G4 9XA
        </p>
        <div className="grid grid-cols-3 gap-5 pt-5">
          <div className="col-span-1">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Full name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("engagementOfNuova.agent.nuovaAgent.firstName")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="signature"
              className="block text-sm font-medium text-gray-700"
            >
              Signature
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="signature"
                id="signature"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("engagementOfNuova.agent.nuovaAgent.signature")}
              />
            </div>
          </div>
          <div className="col-span-1">
            <label
              htmlFor="todaysDate"
              className="block text-sm font-medium text-gray-700"
            >
              Today’s date
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="todaysDate"
                id="todaysDate"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("engagementOfNuova.agent.nuovaAgent.todaysDate")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agent;
