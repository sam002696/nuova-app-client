import React, { useEffect } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import { PaperClipIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchingStart,
  fetchingSuccess,
  fetchingFailure,
} from "../../../Redux/tenantPropertySlice.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TenantPropertyThree = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { tenantPropertyDetails } = useSelector(
    (state) => state.tenantPropertyDetails
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleTenantDetails = async () => {
      dispatch(fetchingStart());
      try {
        const res = await axios.get(
          `http://localhost:5500/api/properties/tenantproperty/tenant?email=${currentUser.email}`
        );
        dispatch(fetchingSuccess(res.data));
      } catch (err) {
        dispatch(fetchingFailure(err));
      }
    };
    handleTenantDetails();
  }, [currentUser.email, dispatch]);

  console.log(tenantPropertyDetails);

  const product = {
    name: "Houston Housing Society",
    address: "St. James Park 921b, London W1T RJ, England",

    rating: 4,
    images: [
      {
        id: 1,
        name: "Angled view",
        src: tenantPropertyDetails?.images?.pictureFirst,
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Angled view",
        src: tenantPropertyDetails?.images?.pictureSecond,
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 3,
        name: "Angled view",
        src: tenantPropertyDetails?.images?.pictureThird,
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 4,
        name: "Angled view",
        src: tenantPropertyDetails?.images?.pictureFourth,
        alt: "Angled front view with bag zipped and handles upright.",
      },
      // More images...
    ],

    description: `
      <p>Nuova System is proud to bring to the market this stunning three bed upper duplex property, situated within a fully refurbished townhouse and located in the exclusive Park Circus area, AVAILABLE 4TH NOVEMBER, FURNISHED.</p>
    `,
    details: [
      {
        name: "Tenant Details",
        items: [
          "Tenant 1 : ",
          "Name : Mark Swan",
          "Email : mark@gmail.com",
          "Phone : +41 888 777 632",
          "Tenant 2 : ",
          "Name : Chloe Swan",
          "Email : mark@gmail.com",
          "Phone : +41 888 777 632",
        ],
      },
      {
        name: "Guarantor (if any)",
        items: [
          "Name : Pablo Mark",
          "Email : mark@gmail.com",
          "Phone : +41 888 777 632",
        ],
      },
      {
        name: "Landlord Details",
        items: [
          "Name : Mark Swan",
          "Email : mark@gmail.com",
          "Phone : +41 888 777 632",
        ],
      },
      {
        name: "Property Manager",
        items: [
          "Name : Alex Adam",
          "Email : alex@gmail.com",
          "Phone : +41 888 777 632",
        ],
      },
      {
        name: "Rental Information",
        items: [
          "Rental Amount : 5000$",
          "Next Payment Date : 01-December-2022",
        ],
      },
      {
        name: "Tenancy Period",
        items: [
          "Tenancy Start Date : 01-December-2022",
          "Tenancy Renewal Date : 01-December-2023",
        ],
      },
      {
        name: "Terms & Conditions",
        items: [
          "1. HOW WE COLLECTED YOUR PERSONAL INFORMATION",
          "2. WHAT PERSONAL INFORMATION WE COLLECTED",
          "3. WHY WE COLLECT YOUR PERSONAL INFORMATION AND HOW WE USE IT",
          "4. HOW WE SHARE YOUR PERSONAL INFORMATION WITH THIRD PARTIES",
          "5. YOUR DATA PROTECTION RIGHTS",
          "6. SECURITY OF YOUR PERSONAL DATA",
          "7. OUR DATA PROTECTION REGISTRATIONS",
          "8. CHANGES TO THIS DATA PROTECTION NOTICE",
        ],
      },
      // More sections...
    ],
  };

  return (
    <>
      <div>
        <div className="max-w-2xl mx-auto py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-start">
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
              <div className="overflow-hidden bg-white border border-cyan-500 rounded-md mt-14">
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Certificates
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                          {tenantPropertyDetails?.certificatesDocuments?.map(
                            (certificates) => (
                              <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                <div className="flex w-0 flex-1 items-center">
                                  <PaperClipIcon
                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-2 w-0 flex-1 truncate">
                                    {certificates?.certificateName}
                                  </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <a
                                    href={certificates?.uploadedCertificate}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-medium text-cyan-600 hover:text-cyan-500"
                                  >
                                    Download
                                  </a>
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Documents
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                        <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                          <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                            <div className="flex w-0 flex-1 items-center">
                              <PaperClipIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-2 w-0 flex-1 truncate">
                                resume_back_end_developer.pdf
                              </span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <Link
                                to="#"
                                className="font-medium text-cyan-600 hover:text-cyan-500"
                              >
                                Download
                              </Link>
                            </div>
                          </li>
                          <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                            <div className="flex w-0 flex-1 items-center">
                              <PaperClipIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-2 w-0 flex-1 truncate">
                                coverletter_back_end_developer.pdf
                              </span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <Link
                                to="#"
                                className="font-medium text-cyan-600 hover:text-cyan-500"
                              >
                                Download
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-800">
                {tenantPropertyDetails?.propertyAddress?.propertyName}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="tracking-tight text-xl text-gray-700">
                  {tenantPropertyDetails?.propertyAddress?.addressline1},{" "}
                  {tenantPropertyDetails?.propertyAddress?.city},{" "}
                  {tenantPropertyDetails?.propertyAddress?.state},{" "}
                  {tenantPropertyDetails?.propertyAddress?.country},{" "}
                  {tenantPropertyDetails?.propertyAddress?.zipcode}
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-cyan-500"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="text-base text-gray-700 space-y-6"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <form className="mt-6">
                {/* Colors */}
                {/* <div>
                <h3 className="text-sm text-gray-600">Color</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <span className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedColor,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.bgColor,
                            "h-8 w-8 border border-black border-opacity-10 rounded-full"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </span>
                </RadioGroup>
              </div> */}

                <div className="mt-10 flex sm:flex-col1">
                  <button
                    type="submit"
                    className="max-w-xs flex-1 bg-sky-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-cyan-500 sm:w-full"
                  >
                    <HeartIcon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="mx-2">Flat No - 2A</span>
                  </button>

                  <button
                    type="button"
                    className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className="h-6 w-6 fill-green-400"
                    >
                      <path d="M32 32C49.67 32 64 46.33 64 64V320H288V160C288 142.3 302.3 128 320 128H544C597 128 640 170.1 640 224V448C640 465.7 625.7 480 608 480C590.3 480 576 465.7 576 448V416H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32zM96 208C96 163.8 131.8 128 176 128C220.2 128 256 163.8 256 208C256 252.2 220.2 288 176 288C131.8 288 96 252.2 96 208z" />
                    </svg>
                    <span className="mx-2">
                      {tenantPropertyDetails?.propertyDetails?.bedroom} Bedrooms
                    </span>
                  </button>

                  <button
                    type="button"
                    className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <svg
                      className="h-5 w-5 fill-sky-400 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M32 384c0 28.32 12.49 53.52 32 71.09V496C64 504.8 71.16 512 80 512h32C120.8 512 128 504.8 128 496v-15.1h256V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16v-40.9c19.51-17.57 32-42.77 32-71.09V352H32V384zM496 256H96V77.25C95.97 66.45 111 60.23 118.6 67.88L132.4 81.66C123.6 108.6 129.4 134.5 144.2 153.2C137.9 159.5 137.8 169.8 144 176l11.31 11.31c6.248 6.248 16.38 6.248 22.63 0l105.4-105.4c6.248-6.248 6.248-16.38 0-22.63l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0C230.7 33.26 204.7 27.55 177.7 36.41L163.9 22.64C149.5 8.25 129.6 0 109.3 0C66.66 0 32 34.66 32 77.25v178.8L16 256C7.164 256 0 263.2 0 272v32C0 312.8 7.164 320 16 320h480c8.836 0 16-7.164 16-16v-32C512 263.2 504.8 256 496 256z" />
                    </svg>
                    <span className="mx-2">
                      {tenantPropertyDetails?.propertyDetails?.bathroom}{" "}
                      Bathrooms
                    </span>
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="border-t divide-y divide-gray-200">
                  {tenantPropertyDetails?.tenantDetails
                    ?.filter(
                      (singletenant) =>
                        singletenant.tenantPersonalInfo.email ===
                        currentUser.email
                    )
                    .map((filteredTenant) => (
                      <Disclosure
                        as="div"
                        key={filteredTenant?.tenantPersonalInfo?.email}
                      >
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
                                  Tenant Details
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
                                <li>
                                  Name :{" "}
                                  {filteredTenant?.tenantPersonalInfo?.fullName}
                                </li>
                                <li>
                                  Email :{" "}
                                  {filteredTenant?.tenantPersonalInfo?.email}
                                </li>
                                <li>
                                  Phone :
                                  {filteredTenant?.tenantPersonalInfo?.phoneNo}
                                </li>
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                </div>

                <div className="border-t divide-y divide-gray-200">
                  {tenantPropertyDetails?.tenantDetails
                    ?.filter(
                      (singletenant) =>
                        singletenant.tenantPersonalInfo.email ===
                        currentUser.email
                    )
                    .map((filteredTenant) => (
                      <Disclosure
                        as="div"
                        key={filteredTenant?.tenantPersonalInfo?.email}
                      >
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
                                  Guarantor (if any)
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
                                <li>
                                  Name :{" "}
                                  {filteredTenant?.guarantorInfo?.fullName}
                                </li>
                                <li>
                                  Email : {filteredTenant?.guarantorInfo?.email}
                                </li>
                                <li>
                                  Phone :
                                  {filteredTenant?.guarantorInfo?.phoneNo}
                                </li>
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                </div>

                <div className="border-t divide-y divide-gray-200">
                  {tenantPropertyDetails?.tenantDetails
                    ?.filter(
                      (singletenant) =>
                        singletenant.tenantPersonalInfo.email ===
                        currentUser.email
                    )
                    .map((filteredTenant) => (
                      <Disclosure
                        as="div"
                        key={filteredTenant?.tenantPersonalInfo?.email}
                      >
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
                                  Landlord Details
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
                                <li>
                                  Name :{" "}
                                  {
                                    tenantPropertyDetails?.landlordInfo
                                      ?.landlordName
                                  }
                                </li>
                                <li>
                                  Email :{" "}
                                  {
                                    tenantPropertyDetails?.landlordInfo
                                      ?.landlordEmail
                                  }
                                </li>
                                <li>
                                  Phone :{" "}
                                  {
                                    tenantPropertyDetails?.landlordInfo
                                      ?.landlordPhone
                                  }
                                </li>
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                </div>

                <div className="border-t divide-y divide-gray-200">
                  {tenantPropertyDetails?.tenantDetails
                    ?.filter(
                      (singletenant) =>
                        singletenant.tenantPersonalInfo.email ===
                        currentUser.email
                    )
                    .map((filteredTenant) => (
                      <Disclosure
                        as="div"
                        key={filteredTenant?.tenantPersonalInfo?.email}
                      >
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
                                  Rental Information
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
                                <li>
                                  Rental Amount :
                                  {filteredTenant?.tenantResidency?.monthlyRent}
                                  $
                                </li>
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                </div>

                <div className="border-t divide-y divide-gray-200">
                  {tenantPropertyDetails?.tenantDetails
                    ?.filter(
                      (singletenant) =>
                        singletenant.tenantPersonalInfo.email ===
                        currentUser.email
                    )
                    .map((filteredTenant) => (
                      <Disclosure
                        as="div"
                        key={filteredTenant?.tenantPersonalInfo?.email}
                      >
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
                                  Tenancy Period
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
                                <li>
                                  Tenancy Start Date :{" "}
                                  <time>
                                    {new Date(
                                      filteredTenant?.tenantResidency?.leaseStartDate
                                    ).toLocaleDateString()}
                                  </time>
                                </li>
                                <li>
                                  Tenancy Renewal Date :{" "}
                                  <time>
                                    {new Date(
                                      filteredTenant?.tenantResidency?.leaseEndDate
                                    ).toLocaleDateString()}
                                  </time>
                                </li>
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                </div>

                <div className="border-t divide-y divide-gray-200">
                  {tenantPropertyDetails?.tenantDetails
                    ?.filter(
                      (singletenant) =>
                        singletenant.tenantPersonalInfo.email ===
                        currentUser.email
                    )
                    .map((filteredTenant) => (
                      <Disclosure
                        as="div"
                        key={filteredTenant?.tenantPersonalInfo?.email}
                      >
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
                                  Other Information
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
                                <li>
                                  Tenant Credit Score :{" "}
                                  {
                                    filteredTenant?.tenantPersonalInfo
                                      ?.creditScore
                                  }
                                </li>
                                <li>
                                  Tenant Current Income:{" "}
                                  {
                                    filteredTenant?.tenantPersonalInfo
                                      ?.currentIncome
                                  }
                                </li>
                                <li>
                                  Tenant Felony :{" "}
                                  {filteredTenant?.tenantPersonalInfo?.felony}
                                </li>
                                <li>
                                  Tenant Income Assistance :{" "}
                                  {
                                    filteredTenant?.tenantPersonalInfo
                                      ?.incomeAssistance
                                  }
                                </li>
                                <li>
                                  Tenant Lawsuit :{" "}
                                  {filteredTenant?.tenantPersonalInfo?.lawsuit}
                                </li>
                                <li>
                                  Tenant Lawsuit Description :{" "}
                                  {
                                    filteredTenant?.tenantPersonalInfo
                                      ?.lawsuitDesc
                                  }
                                </li>
                                <li>
                                  Pets :{" "}
                                  {filteredTenant?.tenantPersonalInfo?.pets}
                                </li>
                                <li>
                                  Pets Description :{" "}
                                  {filteredTenant?.tenantPersonalInfo?.petDesc}
                                </li>
                                <li>
                                  Total Occupants :{" "}
                                  {
                                    filteredTenant?.tenantPersonalInfo
                                      ?.totalOccupants
                                  }
                                </li>
                                <li>
                                  Smoking :{" "}
                                  {filteredTenant?.tenantPersonalInfo?.smokes}
                                </li>
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantPropertyThree;
