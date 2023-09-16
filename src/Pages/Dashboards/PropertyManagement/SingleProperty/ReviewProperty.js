import { Disclosure, Tab } from "@headlessui/react";
import { PhoneIcon, MailIcon } from "@heroicons/react/solid";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import ViewTenantModal from "./ViewTenantModal";
import ViewUnitModal from "./ViewUnitModal";
import EditTenantInfo from "./EditTenantInfo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ReviewProperty = ({ singleProperty }) => {
  const [tenantDetails, setTenantDetails] = useState([]);
  const [openTenantModal, setOpenTenantModal] = useState(false);
  const [openUnitModal, setOpenUnitModal] = useState(false);
  const [openEditTenantInfo, setOpenTenantInfoModal] = useState(false);
  const [singleTenant, setSingleTenant] = useState({});
  const [singleUnit, setSingleUnit] = useState({});

  const handleTenantView = (tenant) => {
    setOpenTenantModal(true);
    setSingleTenant(tenant);
  };
  const handleEditTenantInfo = (tenant) => {
    setOpenTenantInfoModal(true);
  };
  const handleUnitView = (unit) => {
    setOpenUnitModal(true);
    setSingleUnit(unit);
  };

  const product = {
    name: "Property 1",
    price: "£140000",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Angled view",
        src: singleProperty?.images?.pictureFirst,
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: singleProperty?.images?.pictureSecond,
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 3,
        name: "Angled view",
        src: singleProperty?.images?.pictureThird,
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 4,
        name: "Angled view",
        src: singleProperty?.images?.pictureFourth,
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    description: `
      <p>This property is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. It has many features which includes top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
    details: [
      {
        name: "Property Details (Rooms)",
        items: [
          "Multiple strap configurations",
          "Spacious interior with top zip",
          "Leather handle and tabs",
          "Interior dividers",
          "Stainless strap loops",
          "Double stitched construction",
          "Water-resistant",
        ],
      },
      {
        name: "Features And Appliances",
        items: [
          "Multiple strap configurations",
          "Spacious interior with top zip",
          "Leather handle and tabs",
          "Interior dividers",
          "Stainless strap loops",
          "Double stitched construction",
          "Water-resistant",
        ],
      },
      {
        name: "Units",
        items: [
          "Multiple strap configurations",
          "Spacious interior with top zip",
          "Leather handle and tabs",
          "Interior dividers",
          "Stainless strap loops",
          "Double stitched construction",
          "Water-resistant",
        ],
      },
      // More sections...
    ],
  };

  useEffect(() => {
    const tenantDetailsInfo = singleProperty?.tenantDetails;
    setTenantDetails(tenantDetailsInfo);
  }, [singleProperty]);

  return (
    <div>
      <div className="max-w-2xl mx-auto py-8 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <div>
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{image.name}</span>
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img
                              src={image.src}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? "ring-cyan-500" : "ring-transparent",
                              "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="w-full aspect-w-1 aspect-h-1 shadow-md">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
            <div>
              <div className="mt-8 flow-root bg-white rounded-md shadow-md pt-5 pb-10 px-5">
                <h2 className="pb-6 mb-2 text-md font-medium text-gray-900 underline underline-offset-4">
                  Tenants
                </h2>
                {singleProperty.tenantDetails?.length !== 0 ? (
                  <>
                    <ul className="-my-5 divide-y divide-gray-200">
                      {tenantDetails?.map((tenant) => (
                        <li key={tenant._id} className="py-4 px-4 ">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <svg
                                className=" h-8 w-8 text-gray-500  "
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex space-x-3">
                                <p className="truncate text-sm font-medium text-gray-900">
                                  {tenant.tenantPersonalInfo?.fullName}
                                </p>
                                {tenant.status !== "" && (
                                  <div
                                    className={`inline-flex items-center gap-x-1.5 rounded-md  ${
                                      (tenant.status === "Current Tenant" &&
                                        "bg-cyan-100 text-cyan-600") ||
                                      (tenant.status === "Past Tenant" &&
                                        "bg-red-100 text-red-600") ||
                                      (tenant.status === "Wrong Credential" &&
                                        "bg-yellow-100 text-yellow-600") ||
                                      (tenant.status === "Future Tenant" &&
                                        "bg-purple-100 text-purple-600") ||
                                      (tenant.status === "Irregular Tenant" &&
                                        "bg-green-100 text-green-600")
                                    }  px-2 py-1 text-xs font-medium `}
                                  >
                                    <svg
                                      className={`h-1.5 w-1.5 ${
                                        (tenant.status === "Current Tenant" &&
                                          "fill-cyan-600") ||
                                        (tenant.status === "Past Tenant" &&
                                          "fill-red-600") ||
                                        (tenant.status === "Wrong Credential" &&
                                          "fill-yellow-600") ||
                                        (tenant.status === "Future Tenant" &&
                                          "fill-purple-600") ||
                                        (tenant.status === "Irregular Tenant" &&
                                          "fill-green-600")
                                      }`}
                                      viewBox="0 0 6 6"
                                      aria-hidden="true"
                                    >
                                      <circle cx={3} cy={3} r={3} />
                                    </svg>
                                    <span className=" text-xs ">
                                      {tenant.status}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className=" flex items-center justify-center space-x-1">
                              <button
                                onClick={() => handleEditTenantInfo(tenant)}
                                className="inline-flex items-center  bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 "
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-6 h-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleTenantView(tenant)}
                                className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                              >
                                View
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <div className="rounded-md bg-yellow-50 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 text-yellow-400"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-yellow-800">
                            Attention needed
                          </h3>
                          <div className="mt-2 text-sm text-yellow-700">
                            <p>
                              No Tenants have been added for this property yet!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <ViewTenantModal
                open={openTenantModal}
                setOpen={setOpenTenantModal}
                singleTenant={singleTenant}
                singlePropertyId={singleProperty._id}
                tenantDetails={tenantDetails}
                setTenantDetails={setTenantDetails}
              />
              <EditTenantInfo
                open={openEditTenantInfo}
                setOpen={setOpenTenantInfoModal}
              />
            </div>

            {singleProperty?.propertyType === "HMO" && (
              <>
                <div className="mt-6 flow-root bg-white pt-8 pb-12 px-10 shadow-md rounded-lg">
                  <h2 className="pb-6 text-lg font-medium text-gray-900 underline underline-offset-2">
                    Units
                  </h2>
                  <ul className="-my-5 divide-y divide-gray-200">
                    {singleProperty.units?.map((unit, index) => (
                      <li key={unit._id} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-500">
                              <span className="font-medium leading-none text-white">
                                {index + 1}
                              </span>
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900">
                              {unit.unitName}
                            </p>
                          </div>
                          <div>
                            <button
                              onClick={() => handleUnitView(unit)}
                              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <ViewUnitModal
                  open={openUnitModal}
                  setOpen={setOpenUnitModal}
                  singleUnit={singleUnit}
                />
              </>
            )}
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {singleProperty?.propertyAddress?.propertyName}
            </h1>
            <h1 className="text-lg font-medium  text-gray-600 mt-4 tracking-wide">
              {singleProperty?.propertyAddress?.addressline1},{" "}
              {singleProperty?.propertyAddress?.city},{" "}
              {singleProperty?.propertyAddress?.state},{" "}
              {singleProperty?.propertyAddress?.country},{" "}
              {singleProperty?.propertyAddress?.zipcode}
            </h1>

            {singleProperty?.propertyType !== "HMO" && (
              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="tracking-tight text-3xl text-gray-900">
                  £{singleProperty?.propertyDetails?.propertyEstimatedValue}
                </p>
              </div>
            )}

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{
                  __html: singleProperty?.briefDesc?.comment,
                }}
              />
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="border-t divide-y divide-gray-200">
                <Disclosure as="div" key={singleProperty._id}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                          <span
                            className={classNames(
                              open ? "text-cyan-600" : "text-gray-900",
                              "text-sm font-medium"
                            )}
                          >
                            Property Details (Rooms)
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon
                                className="block h-6 w-6 text-cyan-400 group-hover:text-cyan-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel
                        as="div"
                        className="pb-6 prose prose-sm"
                      >
                        <ul>
                          {singleProperty?.propertyDetails?.rooms?.map(
                            (room) => (
                              <li key={room}>{room}</li>
                            )
                          )}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" key={singleProperty._id}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                          <span
                            className={classNames(
                              open ? "text-cyan-600" : "text-gray-900",
                              "text-sm font-medium"
                            )}
                          >
                            Features And Appliances
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon
                                className="block h-6 w-6 text-cyan-400 group-hover:text-cyan-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel
                        as="div"
                        className="pb-6 prose prose-sm"
                      >
                        <ul>
                          {singleProperty?.propertyDetails?.featuresAndAppliances?.map(
                            (room) => (
                              <li key={room}>{room}</li>
                            )
                          )}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" key={singleProperty._id}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                          <span
                            className={classNames(
                              open ? "text-cyan-600" : "text-gray-900",
                              "text-sm font-medium"
                            )}
                          >
                            Key Facilities
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon
                                className="block h-6 w-6 text-cyan-400 group-hover:text-cyan-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel
                        as="div"
                        className="pb-6 prose prose-sm"
                      >
                        <ul>
                          {singleProperty?.keyFeatures?.map((feature) => (
                            <li key={feature.value}>{feature.value}</li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>

              {/* Landlord Profile */}
              <div>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1 mt-5">
                  <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                      <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                          <h3 className="truncate text-sm font-medium text-gray-900">
                            {singleProperty?.landlordInfo?.landlordName}
                          </h3>
                          <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                            Landlord
                          </span>
                        </div>
                        <p className="mt-1 truncate text-sm text-gray-500">
                          Property Name :{" "}
                          {singleProperty?.propertyAddress?.propertyName}
                        </p>
                      </div>
                      <img
                        className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                        src="https://mir-s3-cdn-cf.behance.net/projects/404/8d778a100069027.Y3JvcCwzMDAwLDIzNDYsMCwzMjY.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="flex w-0 flex-1">
                          <a
                            href={`mailto:${singleProperty?.landlordInfo?.landlordEmail}`}
                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                          >
                            <MailIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-3">Email</span>
                          </a>
                        </div>
                        <div className="-ml-px flex w-0 flex-1">
                          <a
                            href={`tel:${singleProperty?.landlordInfo?.landloredPhone}`}
                            className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                          >
                            <PhoneIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-3">Call</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewProperty;
