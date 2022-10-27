import React from "react";

const reports = [
  {
    name: "Boiler Fixation",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    title: "Flat No-13B, Holger Street, London",
    role: "Admin",
    telephone: "+1-202-555-0170",
    date: "12-12-2022",
    tenant_name: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
  },
  {
    name: "Sink Replacement",
    imageUrl:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80",
    title: "Flat No-13B, Holger Street, London",
    role: "Admin",
    telephone: "+1-202-555-0170",
    date: "12-12-2022",
    tenant_name: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
  },
  {
    name: "New Window Installation",
    imageUrl:
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Flat No-13B, Holger Street, London",
    role: "Admin",
    telephone: "+1-202-555-0170",
    date: "12-12-2022",
    tenant_name: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
  },
  {
    name: "Blocked Pipe",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Flat No-13B, Holger Street, London",
    role: "Admin",
    telephone: "+1-202-555-0170",
    date: "12-12-2022",
    tenant_name: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
  },
  {
    name: "Bathroom Repair",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Flat No-13B, Holger Street, London",
    role: "Admin",
    telephone: "+1-202-555-0170",
    date: "12-12-2022",
    tenant_name: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
  },
];

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

const ContractorPortalFindJobs = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-12 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                            alt="Side of walnut card tray with card groove and recessed card area."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="rounded-lg bg-gray-100"
                        />
                    </div> */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
            <ul className="space-y-5">
              <div className="mx-auto max-w-2xl lg:max-w-none mb-4">
                <h2
                  id="testimonial-heading"
                  className="text-3xl font-semibold tracking-wider text-cyan-700"
                >
                  Most Relevent Jobs{" "}
                </h2>
              </div>
              {reports.map((report) => (
                <li
                  key={report.email}
                  className="col-span-2 bg-white rounded-lg shadow-md shadow-cyan-200 divide-y divide-gray-200"
                >
                  <div className="w-full flex justify-between px-6 py-6 space-x-6">
                    <img
                      className="w-14 h-14 bg-gray-300 rounded-md flex-shrink-0"
                      src={report.imageUrl}
                      alt=""
                    />
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-cyan-700 text-sm font-semibold truncate">
                          Nuova System Jobs
                        </h3>
                        <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                          Maintenance Issue
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <h3 className="text-gray-900 text-xl font-semibold truncate">
                          {report.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-gray-500 text-sm truncate">
                        {report.title}
                      </p>
                      <p className="mt-1 text-gray-500 text-sm truncate">
                        $10.50 - $14.00 Per Hour(Employer est.)
                      </p>
                    </div>
                    {/* <div className="flex-1 truncate">
                                            <div className="flex items-center space-x-3">
                                                <h3 className="text-gray-900 text-md font-semibold truncate">
                                                    {report.tenant_name}
                                                </h3>
                                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-cyan-30000 text-xs font-medium bg-sky-200">
                                                    Tenant
                                                </span>
                                            </div>
                                            <p className="mt-1 text-gray-500 text-sm truncate">
                                                {report.email}
                                            </p>
                                            <p className="mt-1 text-gray-500 text-sm truncate">
                                                {report.telephone}
                                            </p>

                                        </div> */}
                    <div className="flex flex-col justify-between">
                      <button className="mt-2 flex-shrink-0 inline-block px-3 py-2 bg-white text-xs font-medium text-gray-700 border-2 border-gray-700 rounded-lg">
                        Details
                      </button>
                      <p className="mt-1 text-gray-500 text-sm truncate">
                        Easy Apply
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical Specifications
            </h2>
            <p className="mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractorPortalFindJobs;
