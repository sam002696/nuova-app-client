import React from "react";

const RepairsToBeCompleted = ({ register, singleProperty }) => {
  return (
    <div>
      <div className="pt-6 space-y-6 sm:pt-8 sm:space-y-5">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-700">
            Repairs to be Completed (if Any)
          </h3>
        </div>
        <div className=" sm:space-y-1 space-y-1">
          {/* Repairs to be Completed */}

          {/* Repairs to be Completed */}
          <div className="sm:grid sm:grid-cols-12 sm:gap-2 sm:items-start sm:border-t sm:border-gray-200 sm:pt-3">
            <div className="mt-1 sm:mt-0 sm:col-span-6">
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-600 text-center"
              >
                Initials Acknowledging Repair Completed
              </label>
              <div className="mt-5">
                <input
                  type="text"
                  name="tiarc"
                  id="tiarc"
                  autoComplete="tiarc"
                  className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300"
                  placeholder=" Initials Acknowledging Repair Completed"
                  {...register("repairsToBeCompleted.0.tiarc", {
                    required: false,
                  })}
                  value={
                    singleProperty.inspectionReport?.repairsToBeCompleted?.[0]
                      .tiarc
                  }
                />
              </div>
            </div>
            <div className="mt-1 sm:mt-0 sm:col-span-6">
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-600 text-center"
              >
                Description of Repair
              </label>
              <div className="mt-5">
                <input
                  type="text"
                  name="desOfRepair"
                  id="desOfRepair"
                  autoComplete="desOfRepair"
                  className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500  sm:text-sm border-gray-300"
                  placeholder="Description of Repair"
                  {...register("repairsToBeCompleted.0.desOfRepair", {
                    required: false,
                  })}
                  value={
                    singleProperty.inspectionReport?.repairsToBeCompleted?.[0]
                      .desOfRepair
                  }
                />
              </div>
            </div>
          </div>

          {/* Repairs to be Completed */}
          <div className="sm:grid sm:grid-cols-12 sm:gap-2 sm:items-start sm:border-gray-200 sm:pt-1">
            <div className="mt-1 sm:mt-0 sm:col-span-6">
              <div className="mt-5">
                <input
                  type="text"
                  name="tiarc"
                  id="tiarc"
                  autoComplete="tiarc"
                  className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300"
                  placeholder=" Initials Acknowledging Repair Completed"
                  {...register("repairsToBeCompleted.1.tiarc", {
                    required: false,
                  })}
                  value={
                    singleProperty.inspectionReport?.repairsToBeCompleted?.[1]
                      .tiarc
                  }
                />
              </div>
            </div>
            <div className="mt-1 sm:mt-0 sm:col-span-6">
              <div className="mt-5">
                <input
                  type="text"
                  name="desOfRepair"
                  id="desOfRepair"
                  autoComplete="desOfRepair"
                  className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500  sm:text-sm border-gray-300"
                  placeholder="Description of Repair"
                  {...register("repairsToBeCompleted.1.desOfRepair", {
                    required: false,
                  })}
                  value={
                    singleProperty.inspectionReport?.repairsToBeCompleted?.[1]
                      .desOfRepair
                  }
                />
              </div>
            </div>
          </div>

          {/* Repairs to be Completed */}
          <div className="sm:grid sm:grid-cols-12 sm:gap-2 sm:items-start sm:border-gray-200 sm:pt-1">
            <div className="mt-1 sm:mt-0 sm:col-span-6">
              <div className="mt-5">
                <input
                  type="text"
                  name="tiarc"
                  id="tiarc"
                  autoComplete="tiarc"
                  className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300"
                  placeholder=" Initials Acknowledging Repair Completed"
                  {...register("repairsToBeCompleted.2.tiarc", {
                    required: false,
                  })}
                  value={
                    singleProperty.inspectionReport?.repairsToBeCompleted?.[2]
                      .tiarc
                  }
                />
              </div>
            </div>
            <div className="mt-1 sm:mt-0 sm:col-span-6">
              <div className="mt-5">
                <input
                  type="text"
                  name="desOfRepair"
                  id="desOfRepair"
                  autoComplete="desOfRepair"
                  className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500  sm:text-sm border-gray-300"
                  placeholder="Description of Repair"
                  {...register("repairsToBeCompleted.2.desOfRepair", {
                    required: false,
                  })}
                  value={
                    singleProperty.inspectionReport?.repairsToBeCompleted?.[2]
                      .desOfRepair
                  }
                />
              </div>
            </div>
          </div>

          {/* Repairs to be Completed */}
          <div className="sm:grid sm:grid-cols-12 sm:gap-2 sm:items-start sm:border-gray-200 sm:pt-1">
            <div className="mt-1 sm:mt-0 sm:col-span-6">
              <div className="mt-5">
                <input
                  type="text"
                  name="tiarc"
                  id="tiarc"
                  autoComplete="tiarc"
                  className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300"
                  placeholder=" Initials Acknowledging Repair Completed"
                  {...register("repairsToBeCompleted.3.tiarc", {
                    required: false,
                  })}
                  value={
                    singleProperty.inspectionReport?.repairsToBeCompleted?.[3]
                      .tiarc
                  }
                />
              </div>
            </div>
            <div className="mt-1 sm:mt-0 sm:col-span-6">
              <div className="mt-5">
                <input
                  type="text"
                  name="desOfRepair"
                  id="desOfRepair"
                  autoComplete="desOfRepair"
                  className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500  sm:text-sm border-gray-300"
                  placeholder="Description of Repair"
                  {...register("repairsToBeCompleted.3.desOfRepair", {
                    required: false,
                  })}
                  value={
                    singleProperty.inspectionReport?.repairsToBeCompleted?.[3]
                      .desOfRepair
                  }
                />
              </div>
            </div>
          </div>

          {/* Repairs to be Completed */}
          <div className="sm:grid sm:grid-cols-12 sm:gap-2 sm:items-start sm:border-gray-200 sm:pt-1">
            <div className="mt-1 sm:mt-0 sm:col-span-6">
              <div className="mt-5">
                <input
                  type="text"
                  name="tiarc"
                  id="tiarc"
                  autoComplete="tiarc"
                  className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm border-gray-300"
                  placeholder=" Initials Acknowledging Repair Completed"
                  {...register("repairsToBeCompleted.4.tiarc", {
                    required: false,
                  })}
                  value={
                    singleProperty.inspectionReport?.repairsToBeCompleted?.[4]
                      .tiarc
                  }
                />
              </div>
            </div>
            <div className="mt-1 sm:mt-0 sm:col-span-6">
              <div className="mt-5">
                <input
                  type="text"
                  name="desOfRepair"
                  id="desOfRepair"
                  autoComplete="desOfRepair"
                  className=" block w-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500  sm:text-sm border-gray-300"
                  placeholder="Description of Repair"
                  {...register("repairsToBeCompleted.4.desOfRepair", {
                    required: false,
                  })}
                  value={
                    singleProperty.inspectionReport?.repairsToBeCompleted?.[4]
                      .desOfRepair
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairsToBeCompleted;
