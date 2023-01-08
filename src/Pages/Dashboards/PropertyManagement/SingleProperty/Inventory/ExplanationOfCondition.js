import React from "react";
const people = [
  {
    title: "Brand New",
    description:
      "denotes this item was brand new before the tenancy commenced.",
  },
  {
    title: "Excellent Condition",
    description:
      "denotes this item has no visible marks or damage, but is not brand new.",
  },
  {
    title: "Good Condition",
    description:
      "denotes this item has few visible marks, but is not damaged and is fully functional without hindrance.",
  },
  {
    title: "Fair Condition",
    description:
      "denotes this item has visible wear and tear, signs of age and use, may be heavily marked and has minor damage but is still functional.denotes this item was brand new before the tenancy commenced.",
  },
  {
    title: "Poor Condition",
    description:
      "denotes this item is heavily marked or damaged beyond wear and tear and/or is not fit for use.",
  },
  // More people...
];

const ExplanationOfCondition = () => {
  return (
    <div>
      <div className="pt-6 space-y-6 sm:pt-8 sm:space-y-5">
        <div className="mb-12">
          <h3 className="text-lg leading-6 font-medium text-center text-gray-900">
            INVENTORY{" "}
          </h3>
          <p className="mt-5 text-center max-w-3xl mx-auto text-sm text-gray-500">
            The following is a schedule of condition for the above property and
            denotes the current condition of all rooms and items within. Any
            damage or disrepair within the property will be listed below.
          </p>
        </div>
        <div className="">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Explanation of conditions :{" "}
          </h3>

          {/* <div className="mt-5 flex flex-row gap-10">
            <h3 className="shrink-0 text-md leading-6 font-medium text-gray-500">
              Brand New --
            </h3>
            <p className=" max-w-3xl mx-auto text-sm text-gray-500">
              denotes this item was brand new before the tenancy commenced.
            </p>
          </div>
          <div className="mt-5 flex flex-row gap-10">
            <h3 className="shrink-0 text-md leading-6 font-medium text-gray-500">
              Excellent Condition --
            </h3>
            <p className=" max-w-3xl mx-auto text-sm text-gray-500">
              denotes this item has no visible marks or damage, but is not brand
              new.
            </p>
          </div>
          <div className="mt-5 flex flex-row gap-10">
            <h3 className="shrink-0 text-md leading-6 font-medium text-gray-500">
              Good Condition --
            </h3>
            <p className=" max-w-3xl mx-auto text-sm text-gray-500">
              denotes this item has few visible marks, but is not damaged and is
              fully functional without hindrance.
            </p>
          </div>
          <div className="mt-5 flex flex-row gap-10">
            <h3 className="shrink-0 text-md leading-6 font-medium text-gray-500">
              Fair Condition --
            </h3>
            <p className=" max-w-3xl mx-auto text-sm text-gray-500">
              denotes this item has visible wear and tear, signs of age and use,
              may be heavily marked and has minor damage but is still
              functional.denotes this item was brand new before the tenancy
              commenced.
            </p>
          </div>
          <div className="mt-5 flex flex-row gap-10">
            <h3 className="shrink-0 text-md leading-6 font-medium text-gray-500">
              Poor Condition --
            </h3>
            <p className=" max-w-3xl mx-auto text-sm text-gray-500">
              denotes this item is heavily marked or damaged beyond wear and
              tear and/or is not fit for use.
            </p>
          </div> */}
        </div>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-6 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr
                        key={person.title}
                        className="divide-x divide-gray-200"
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.title}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          {person.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplanationOfCondition;
