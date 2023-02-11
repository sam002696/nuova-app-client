import React from "react";

const Property = ({ property }) => {
  console.log(property);
  const {availabilityDate, city, councilTaxBand, petsPermission, postcode, propertyAddress, propertyFloor, propertyFurnished, propertyName, studentsAccept,toLet} = property;
  return <>
  
  <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                         Section 1 : Property
                        </h3>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Property Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {propertyName}                            
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Adderess of Property
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {propertyAddress}                            
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Availabilty Date
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {new Date(availabilityDate).toLocaleDateString()}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              City
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {city}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Council Tax Band
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {councilTaxBand}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Property Floor
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {propertyFloor}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Property Furnished
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {propertyFurnished}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Students Accept
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                             {studentsAccept}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              To Let
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {toLet}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Post Code
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {postcode}
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Pets Permission
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {petsPermission}
                            </dd>
                          </div>
                        </dl>
                      </div>
  
  
  </>;
};

export default Property;
