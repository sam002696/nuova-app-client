import React from "react";

const OwnershipDetails = ({ ownershipDetails }) => {
  console.log(ownershipDetails);

  const {
    propertyOwnership,
    ownerOne,
    ownerTwo,
    contactMethod,
    bankAccount,
    emergencyContact,
    landlordTaxDeclaration,
  } = ownershipDetails;

  //ownerOne
  const {
    title,
    companyName,
    firstName,
    emailAddress,
    surname,
    landlineNo,
    correspondenceAddress,
    mobileTelephone,
    townCity,
    landlordRegistrationNumber,
    postCode,
    landlordRegistrationApplication,
  } = ownerOne;
  const {
    title: title2,
    companyName: companyName2,
    firstName: firstName2,
    emailAddress: emailAddress2,
    surname: surname2,
    landlineNo: landlineNo2,
    correspondenceAddress: correspondenceAddress2,
    mobileTelephone: mobileTelephone2,
    townCity: townCity2,
    landlordRegistrationNumber: landlordRegistrationNumber2,
    postCode: postCode2,
    landlordRegistrationApplication: landlordRegistrationApplication2,
  } = ownerTwo;

  const { agreedContactMethod, contactMe } = contactMethod;
  const {
    ownerOne: ownerOneBA,
    ownerTwo: ownerTwoBA,
    percentage,
  } = bankAccount;
  const { sortCode, bank, accountNo, accountName } = ownerOneBA;
  const {
    sortCode: sortCode2,
    bank: bank2,
    accountNo: accountNo2,
    accountName: accountName2,
  } = ownerTwoBA;
  const { ownerOne: ownerOneP, ownerTwo: ownerTwoP } = percentage;
  const {
    fullName,
    relationship,
    telephoneNo,
    emailAddress: emailAddressEC,
  } = emergencyContact;

  return (
    <div>
      <div className="overflow-hidden bg-white shadow-md sm:rounded-lg p-5">
        {/*Section 3: Ownership Details*/}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Section 3: Ownership Details
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          {/* Description */}
          <dl className="grid grid-cols-4 gap-x-4 gap-y-5 sm:grid-cols-4">
            <div className="sm:col-span-4">
              <dt className="text-sm font-medium text-gray-500">
                The Property is:
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {propertyOwnership.map((propertyOwnershipS, index) => (
                  <dd key={index} className="mt-1 text-sm text-gray-900">
                    {propertyOwnershipS}
                  </dd>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        {/* 3.a Owner 1 */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            3.a Owner 1
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          {/*  Owner 1  */}
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Title</dt>
              <dd className="mt-1 text-sm text-gray-900"> {title}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Company name (if company owned)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{companyName}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">First name</dt>
              <dd className="mt-1 text-sm text-gray-900">{firstName}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Primary email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{emailAddress}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Surname</dt>
              <dd className="mt-1 text-sm text-gray-900">{surname}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                landline telephone
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{landlineNo}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Correspondence address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {correspondenceAddress}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Mobile telephone
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{mobileTelephone}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Town / City</dt>
              <dd className="mt-1 text-sm text-gray-900">{townCity}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Landlord registration number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {landlordRegistrationNumber}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Postcode</dt>
              <dd className="mt-1 text-sm text-gray-900">{postCode}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                OR Landlord registration application submitted and pending
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {landlordRegistrationApplication}
              </dd>
            </div>
          </dl>
        </div>

        {/* 3.a Owner 2 */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            3.a Owner 2
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          {/*  Owner 2  */}
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Title</dt>
              <dd className="mt-1 text-sm text-gray-900"> {title2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Company name (if company owned)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{companyName2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">First name</dt>
              <dd className="mt-1 text-sm text-gray-900">{firstName2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Primary email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{emailAddress2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Surname</dt>
              <dd className="mt-1 text-sm text-gray-900">{surname2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                landline telephone
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{landlineNo2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Correspondence address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {correspondenceAddress2}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Mobile telephone
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{mobileTelephone2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Town / City</dt>
              <dd className="mt-1 text-sm text-gray-900">{townCity2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Landlord registration number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {landlordRegistrationNumber2}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Postcode</dt>
              <dd className="mt-1 text-sm text-gray-900">{postCode2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                OR Landlord registration application submitted and pending
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {landlordRegistrationApplication2}
              </dd>
            </div>
          </dl>
        </div>

        {/*contactMethod */}
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-4 gap-x-4 gap-y-5 sm:grid-cols-4">
            <div className="sm:col-span-4">
              <dt className="text-sm font-medium text-gray-500">
                Agreed contact method(s)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {agreedContactMethod.map((agreedContactMethodS, index) => (
                  <dd key={index} className="mt-1 text-sm text-gray-900">
                    {agreedContactMethodS}
                  </dd>
                ))}
              </dd>
            </div>
            <div className="sm:col-span-4">
              <dt className="text-sm font-medium text-gray-500">
                Please contact me with Tay Letting news, updates and special
                events
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {contactMe.map((contactMeS, index) => (
                  <dd key={index} className="mt-1 text-sm text-gray-900">
                    {contactMeS}
                  </dd>
                ))}
              </dd>
            </div>
          </dl>
        </div>

        {/* 3.b Bank Account Details */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            3.b Bank Account Details
          </h3>
        </div>
        {/*  Owner 1  */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Owner 1
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          {/*  Owner 1  */}
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Sort code</dt>
              <dd className="mt-1 text-sm text-gray-900"> {sortCode}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Bank</dt>
              <dd className="mt-1 text-sm text-gray-900">{bank}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Account number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{accountNo}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Account name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{accountName}</dd>
            </div>
          </dl>
        </div>

        {/*  Owner 2  */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Owner 2
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          {/*  Owner 2  */}
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Sort code</dt>
              <dd className="mt-1 text-sm text-gray-900"> {sortCode2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Bank</dt>
              <dd className="mt-1 text-sm text-gray-900">{bank2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Account number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{accountNo2}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Account name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{accountName2}</dd>
            </div>
          </dl>
        </div>

        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          {/*  Agent  */}
          <dl className="grid grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-3">
            <div className="sm:col-span-3">
              <dt className="text-sm font-medium text-gray-700">
                Please indicate the percentage split between each owner if there
                is more than one beneficiary.
              </dt>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Owner 1(%)</dt>
              <dd className="mt-1 text-sm text-gray-900">{ownerOneP}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Owner 2(%)</dt>
              <dd className="mt-1 text-sm text-gray-900">{ownerTwoP}</dd>
            </div>
          </dl>
        </div>

        {/* 3.c Emergency Contact */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            3.c Emergency Contact
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          {/*  3.c Emergency Contact */}
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Full Name</dt>
              <dd className="mt-1 text-sm text-gray-900"> {fullName}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Relationship to Owner
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{relationship}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">TelephoneNo</dt>
              <dd className="mt-1 text-sm text-gray-900">{telephoneNo}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email Address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{emailAddressEC}</dd>
            </div>
          </dl>
        </div>

        {/* 3.d Non Resident Landlord Tax Declaration */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            3.d Non Resident Landlord Tax Declaration
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">
                Nuova System HMRC number is NA046645 and this must be quoted
                when applying via HMRC.
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {landlordTaxDeclaration.map(
                  (landlordTaxDeclarationS, index) => (
                    <dd key={index} className="mt-1 text-sm text-gray-900">
                      {landlordTaxDeclarationS}
                    </dd>
                  )
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default OwnershipDetails;
