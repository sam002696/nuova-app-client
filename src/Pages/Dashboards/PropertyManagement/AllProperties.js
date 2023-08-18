import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProperties = () => {
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    const handleAllProperties = async () => {
      try {
        const res = await axios.get(`http://localhost:5500/api/properties`);
        console.log(res.data);
        setAllProperties(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleAllProperties();
  }, []);

  return (
    <div className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-8 lg:px-8">
      <div className="relative max-w-9xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            All Properties
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Welcome to our comprehensive property management platform. Explore a
            diverse portfolio of well-maintained properties tailored to your
            unique preferences.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-7xl">
          {allProperties.map((property) => (
            <div
              key={property._id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-56 w-full object-cover rounded-lg"
                  src={property.images?.pictureFirst}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-cyan-600">
                    {property.propertyAddress?.propertyName}
                  </p>
                  {property?.propertyType !== "HMO" && (
                    <>
                      <p className="text-2xl font-semibold text-gray-800">
                        <span className=" text-3xl font-semibold ">&#163;</span>
                        {property.propertyDetails?.propertyEstimatedValue}
                      </p>
                    </>
                  )}
                </div>

                {property?.propertyType === "HMO" ? (
                  <>
                    <div className="mt-4 grid grid-cols-2 mb-2 ">
                      <div className=" col-span-1">
                        <div className=" flex flex-col ">
                          <div className=" flex flex-row  space-x-2 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 fill-slate-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                              />
                            </svg>

                            <p className=" font-medium text-2xl text-gray-500">
                              {property?.units.length}
                            </p>
                          </div>
                          <div>
                            <p className=" font-base text-xl text-slate-400 pt-1">
                              Total Units
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" col-span-1">
                        <div className=" flex flex-col ">
                          <div className=" flex flex-row  space-x-2 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-7 h-7 fill-slate-600"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                              />
                            </svg>

                            <p className=" font-medium text-base text-gray-500">
                              Multi-Units/{property?.propertyType}
                            </p>
                          </div>
                          <div>
                            <p className=" font-base text-xl text-slate-400 pt-1">
                              Property Type
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mt-4 grid grid-cols-3 mb-2 ">
                      <div className=" col-span-1">
                        <div className=" flex flex-col ">
                          <div className=" flex flex-row  space-x-2 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                              className="h-7 w-7 fill-slate-600"
                            >
                              <path d="M32 32C49.67 32 64 46.33 64 64V320H288V160C288 142.3 302.3 128 320 128H544C597 128 640 170.1 640 224V448C640 465.7 625.7 480 608 480C590.3 480 576 465.7 576 448V416H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32zM96 208C96 163.8 131.8 128 176 128C220.2 128 256 163.8 256 208C256 252.2 220.2 288 176 288C131.8 288 96 252.2 96 208z" />
                            </svg>
                            <p className=" font-medium text-2xl text-gray-500">
                              {property.propertyDetails?.bedroom}
                            </p>
                          </div>
                          <div>
                            <p className=" font-base text-xl text-slate-400 pt-1">
                              Bedrooms
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" col-span-1">
                        <div className=" flex flex-col ">
                          <div className=" flex flex-row  space-x-2 items-center">
                            <svg
                              className="h-6 w-6 fill-slate-600 "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M32 384c0 28.32 12.49 53.52 32 71.09V496C64 504.8 71.16 512 80 512h32C120.8 512 128 504.8 128 496v-15.1h256V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16v-40.9c19.51-17.57 32-42.77 32-71.09V352H32V384zM496 256H96V77.25C95.97 66.45 111 60.23 118.6 67.88L132.4 81.66C123.6 108.6 129.4 134.5 144.2 153.2C137.9 159.5 137.8 169.8 144 176l11.31 11.31c6.248 6.248 16.38 6.248 22.63 0l105.4-105.4c6.248-6.248 6.248-16.38 0-22.63l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0C230.7 33.26 204.7 27.55 177.7 36.41L163.9 22.64C149.5 8.25 129.6 0 109.3 0C66.66 0 32 34.66 32 77.25v178.8L16 256C7.164 256 0 263.2 0 272v32C0 312.8 7.164 320 16 320h480c8.836 0 16-7.164 16-16v-32C512 263.2 504.8 256 496 256z" />
                            </svg>
                            <p className=" font-medium text-2xl text-gray-500">
                              {property.propertyDetails?.bathroom}
                            </p>
                          </div>
                          <div>
                            <p className=" font-base text-xl text-slate-400 pt-1">
                              Bathrooms
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" col-span-1">
                        <div className=" flex flex-col ">
                          <div className=" flex flex-row  space-x-2 items-center ">
                            <svg
                              className="h-7 w-7 fill-slate-600"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M416 32C433.7 32 448 46.33 448 64V128C448 145.7 433.7 160 416 160V352C433.7 352 448 366.3 448 384V448C448 465.7 433.7 480 416 480H352C334.3 480 320 465.7 320 448H128C128 465.7 113.7 480 96 480H32C14.33 480 0 465.7 0 448V384C0 366.3 14.33 352 32 352V160C14.33 160 0 145.7 0 128V64C0 46.33 14.33 32 32 32H96C113.7 32 128 46.33 128 64H320C320 46.33 334.3 32 352 32H416zM368 80V112H400V80H368zM96 160V352C113.7 352 128 366.3 128 384H320C320 366.3 334.3 352 352 352V160C334.3 160 320 145.7 320 128H128C128 145.7 113.7 160 96 160zM48 400V432H80V400H48zM400 432V400H368V432H400zM80 112V80H48V112H80z" />
                            </svg>
                            <p className=" font-medium text-2xl text-gray-500">
                              {property.propertyDetails?.livingArea}
                            </p>
                          </div>
                          <div>
                            <p className=" font-base text-xl text-slate-400 pt-1">
                              Living Area
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="grid grid-cols-3 bg-gray-100 group hover:bg-slate-600 pt-5 pb-5 pl-6  gap-x-8">
                <div className="col-span-2">
                  <div className=" flex flex-row  items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-slate-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className=" text-gray-500 group-hover:text-white text-xl font-light">
                      {property.propertyAddress?.addressline1},
                      {property.propertyAddress?.city},
                      {property.propertyAddress?.zipcode}
                    </p>
                  </div>
                </div>
                <div className=" col-span-1">
                  <Link to={`/single-property/${property?._id}`}>
                    <button
                      type="button"
                      className="inline-flex items-center px-6 py-2 border border-transparent text-lg font-medium rounded-xl shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
