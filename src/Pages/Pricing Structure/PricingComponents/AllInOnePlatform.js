import React from "react";
import { CheckIcon as CheckIconOutline } from "@heroicons/react/outline";

const features = [
  {
    name: "landlord Gas Safety",
    description:
      "Landlord Gas Safety (LGS), which is required to be renewed annually.",
  },
  {
    name: "Energy Performance Certificate",
    description:
      "Energy Performance Certificate (EPC) - which is valid for 10 years.",
  },
  {
    name: "Legionnaires Risk Assessment",
    description:
      "Legionnaires Risk Assessment (LRA) - Must be renewed every 2 years.",
  },
  {
    name: "Electrical Installation Report",
    description:
      "Electrical Installation Report (EICR) - Renewable every 5 years.",
  },
  {
    name: "Portable Appliance Testing",
    description:
      "Portable Appliance Testing (PAT) - Required to be renewed annually.",
  },
  {
    name: "Sealed lithium battery smoke alarms",
    description:
      "Sealed lithium battery smoke alarms, which are required in both the hall and lounge.",
  },
  {
    name: "Sealed lithium battery heat detector",
    description:
      "Sealed lithium battery heat detector, required in the kitchen.",
  },
];

const AllInOnePlatform = () => {
  return (
    <>
      {/* Feature list */}
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Our Initial Fees will be as follows :
          </h2>
          <p className="mt-4 text-lg font-semibold text-gray-700">
            Advertisement Fee : £120
          </p>
          <p className="mt-4 text-lg font-semibold text-gray-700">
            Set up fee : 20% of first months rent. (Not included in the tenant
            find)
          </p>
          <p className="mt-4 text-lg text-gray-500">
            We have also provided a list of legal requirements needed to ensure
            your property is fully compliant with regards to the current
            legislations :
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                {/* <CheckIconOutline
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute w-6 h-6 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>

                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 flex text-base text-gray-500 lg:py-0 lg:pb-4">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-4 text-lg text-gray-500">
            Here at Nuova we have a network of trusted contractors who can
            assist in all the above if they are needed. Please contact us and we
            will send you the costing for each of the tests to be carried out.
          </p>
        </div>
      </div>
    </>
  );
};

export default AllInOnePlatform;
