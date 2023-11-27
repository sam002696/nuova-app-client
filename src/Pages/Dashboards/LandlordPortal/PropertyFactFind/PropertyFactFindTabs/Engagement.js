import React from "react";

const Engagement = ({ marketResearch, engagementOfNuova }) => {
  console.log(engagementOfNuova);
  const { marketResearchOption } = marketResearch;
  const { ownerOne, ownerTwo, agent } = engagementOfNuova;

  //ownerOne
  const { firstName, surname, dob, address, signature, todaysDate } = ownerOne;

  const {
    firstName: firstName2,
    surname: surname2,
    dob: dob2,
    address: address2,
    signature: signature2,
    todaysDate: todaysDate2,
  } = ownerTwo;
  const { nuovaAgent } = agent;
  const {
    fullName,
    signature: signatureA,
    todaysDate: todaysDateA,
  } = nuovaAgent;
  return (
    <div>
      <div className="overflow-hidden bg-white shadow-md sm:rounded-lg p-5">
        {/* Section 5: Market Research */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Section 5: Market Research
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Where did you first hear about Nuova Property Management &
                Letting?
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {marketResearchOption}
              </dd>
            </div>
          </dl>
        </div>

        {/*Section 6: Engagement of Nuova Property Management & Letting */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Section 6: Engagement of Nuova Property Management & Letting
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          {/* Description */}
          <dl className="grid grid-cols-4 gap-x-4 gap-y-5 sm:grid-cols-4">
            <div className="sm:col-span-4">
              <dt className="text-sm font-medium text-gray-500">
                You have instructed us to act as agent on your behalf to provide
                letting and property management services in connection with the
                Property noted under Section 1. Other information, including
                details of our fees and charges, are contained in our Letting
                and Property Management Agreement which will form the basis of
                our legal relationship with you. <br />
                By signing this form, you confirm that all information provided
                in the preceding pages is true and accurate as far as you are
                aware.
              </dt>
            </div>
          </dl>
        </div>

        {/* Owner 1 */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Owner 1
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          {/*  Owner 1  */}
          <dl className="grid grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">First name</dt>
              <dd className="mt-1 text-sm text-gray-900"> {firstName}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Surname</dt>
              <dd className="mt-1 text-sm text-gray-900">{surname}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Date of birth
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(dob).toDateString()}
              </dd>
            </div>
            <div className="sm:col-span-3">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900">{address}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Signature</dt>
              <dd className="mt-1 text-sm text-gray-900">{signature}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Today’s date (dd/mm/yyyy)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{todaysDate}</dd>
            </div>
          </dl>
        </div>

        {/* Owner 2 */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Owner 2
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          {/*  Owner 2  */}
          <dl className="grid grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">First name</dt>
              <dd className="mt-1 text-sm text-gray-900"> {firstName2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Surname</dt>
              <dd className="mt-1 text-sm text-gray-900">{surname2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Date of birth
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(dob2).toDateString()}
              </dd>
            </div>
            <div className="sm:col-span-3">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900">{address2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Signature</dt>
              <dd className="mt-1 text-sm text-gray-900">{signature2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Today’s date (dd/mm/yyyy)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{todaysDate2}</dd>
            </div>
          </dl>
        </div>

        {/* Agent */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Agent</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          {/*  Agent  */}
          <dl className="grid grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-3">
            <div className="sm:col-span-3">
              <dt className="text-sm font-medium text-gray-700">
                Nuova Property
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                8 Eagle Street, Craighall Business Park, Glasgow, G4 9XA
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Full Name</dt>
              <dd className="mt-1 text-sm text-gray-900">{fullName}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Signature</dt>
              <dd className="mt-1 text-sm text-gray-900">{signatureA}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Today’s date (dd/mm/yyyy)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(todaysDateA).toDateString()}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
