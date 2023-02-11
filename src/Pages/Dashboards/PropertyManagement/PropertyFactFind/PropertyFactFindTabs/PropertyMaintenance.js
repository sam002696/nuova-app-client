import React from "react";

const PropertyMaintenance = ({ propertyMaintenance }) => {
  console.log(propertyMaintenance);
  const {
    approvedRepairLimit,
    maintenanceContactDetails,
    preferredcontractors,
    serviceContracts,
    safetyTestsEssentialCertificates,
    warranties,
    additionalInformation,
  } = propertyMaintenance;

  const { fullName, relationshipOwner, telephone, emailAddress } =
    maintenanceContactDetails;
  const { contractorOne, contractorTwo, contractorThree, contractorFour } =
    preferredcontractors;
  const { contractorName, contractorTrade, contractorPhone, contractorEmail } =
    contractorOne;
  const {
    contractorName: contractorTwoName,
    contractorTrade: contractorTwoTrade,
    contractorPhone: contractorTwoPhone,
    contractorEmail: contractorTwoEmail,
  } = contractorTwo;
  const {
    contractorName: contractorThreeName,
    contractorTrade: contractorThreeTrade,
    contractorPhone: contractorThreePhone,
    contractorEmail: contractorThreeEmail,
  } = contractorThree;
  const {
    contractorName: contractorFourName,
    contractorTrade: contractorFourTrade,
    contractorPhone: contractorFourPhone,
    contractorEmail: contractorFourEmail,
  } = contractorFour;
  const {
    serviceAgreement,
    provider,
    typeOfCover,
    accountNumber,
    contactTelSuppliedBy,
    annualGasSafetyInspection,
  } = serviceContracts;
  const {
    gsc,
    gscExpiryDate,
    epc,
    epcExpiryDate,
    lra,
    lraExpiryDate,
    eicr,
    eicrExpiryDate,
    pat,
    patExpiryDate,
    smokeAndHeatDetector,
  } = safetyTestsEssentialCertificates;

  return (
    <div>
      <div className="overflow-hidden bg-white shadow-md sm:rounded-lg p-5">
        {/*Section 4: Property Maintenance */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Section 4: Property Maintenance
          </h3>
        </div>
        {/* 4.a Approved Repair Limit */}
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            4.a Approved Repair Limit (£)
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Approved Repair Limit (£)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {approvedRepairLimit}
              </dd>
            </div>
          </dl>
        </div>

        {/*4.b Maintenance Contact Details */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            4.b Maintenance Contact Details
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Full Name</dt>
              <dd className="mt-1 text-sm text-gray-900">{fullName}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Relationship to Owner
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {relationshipOwner}
                {/* {new Date(propertyMaintenance.tenantInfo?.dob).toDateString()} */}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Telephone</dt>
              <dd className="mt-1 text-sm text-gray-900">{telephone}</dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{emailAddress}</dd>
            </div>
          </dl>
        </div>

        {/* 4.c Preferred Contractors */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            4.c Preferred Contractors
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                1. Contractor name
              </dt>
              <dd className="mt-1 text-sm text-gray-900"> {contractorName}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Telephone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900"> {contractorPhone}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Trade</dt>
              <dd className="mt-1 text-sm text-gray-900"> {contractorTrade}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{contractorEmail}</dd>
            </div>
          </dl>
          <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 mt-8">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                2. Contractor name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {contractorTwoName}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Telephone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {contractorTwoPhone}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Trade</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {contractorTwoTrade}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {contractorTwoEmail}
              </dd>
            </div>
          </dl>
          <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 mt-8">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                3. Contractor name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {contractorThreeName}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Telephone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {contractorThreePhone}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Trade</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {contractorThreeTrade}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {contractorThreeEmail}
              </dd>
            </div>
          </dl>
          <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 mt-8">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                4. Contractor name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {contractorFourName}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Telephone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {contractorFourPhone}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Trade</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {contractorFourTrade}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {contractorFourEmail}
              </dd>
            </div>
          </dl>
        </div>

        {/* 4.d Service Contracts */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            4.d Service Contracts
          </h3>
        </div>

        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Does the Property have a Homecare, or similar, service
                agreement?
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{serviceAgreement}</dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                If yes, provider
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{provider}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Type of cover (e.g. Homecare 100)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{typeOfCover}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Account number / Policy number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{accountNumber}</dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">
                Contact telephone number Supplied by
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {contactTelSuppliedBy}
              </dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">
                Does your agreement include the provision of an annual gas
                safety inspection?
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {annualGasSafetyInspection}
              </dd>
            </div>
          </dl>
        </div>

        {/* 4.e Safety Tests & Essential Certificates */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            4.e Safety Tests & Essential Certificates
          </h3>
        </div>

        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Gas Safety Certificate (GSC)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {gsc.map((gscs, index) => (
                  <dd key={index} className="mt-1 text-sm text-gray-900">
                    {gscs}
                  </dd>
                ))}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Certificate Expiry Date
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(gscExpiryDate).toDateString()}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Energy Performance Certificate (EPC)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {epc.map((epcs, index) => (
                  <dd key={index} className="mt-1 text-sm text-gray-900">
                    {epcs}
                  </dd>
                ))}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Certificate Expiry Date
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(epcExpiryDate).toDateString()}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Legionnaires Risk Assessment (LRA)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {lra.map((lras, index) => (
                  <dd key={index} className="mt-1 text-sm text-gray-900">
                    {lras}
                  </dd>
                ))}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Certificate Expiry Date
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(lraExpiryDate).toDateString()}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Electrical Installation Condition Report (EICR)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {eicr.map((eicrs, index) => (
                  <dd key={index} className="mt-1 text-sm text-gray-900">
                    {eicrs}
                  </dd>
                ))}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Certificate Expiry Date
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(eicrExpiryDate).toDateString()}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Portable Appliance Testing (PAT)
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {pat.map((pats, index) => (
                  <dd key={index} className="mt-1 text-sm text-gray-900">
                    {pats}
                  </dd>
                ))}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Certificate Expiry Date
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(patExpiryDate).toDateString()}
              </dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">
                The Owner requests that the Agent arrange a quote for the
                installation of fully approved interlinked smoke and heat
                detector:
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {smokeAndHeatDetector}
              </dd>
            </div>
          </dl>
        </div>

        {/* 4.f Warranties */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            4.f Warranties
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          {/* 1. Item */}
          <dl className="grid grid-cols-4 gap-x-4 gap-y-5 sm:grid-cols-4 mt-8">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">1. Item</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {warranties[0]?.item}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Manufacturer
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[0]?.manufacturer}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Model</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[0]?.model}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Warranty expiry date
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(warranties[0]?.warrantyExpiryDate).toDateString()}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Provider</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[0]?.provider}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Contact details
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[0]?.contactDetails}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Reference number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[0]?.refNumber}
              </dd>
            </div>
          </dl>
          {/* 2. Item */}
          <dl className="grid grid-cols-4 gap-x-4 gap-y-5 sm:grid-cols-4 mt-8">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">2. Item</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {warranties[1]?.item}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Manufacturer
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[1]?.manufacturer}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Model</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[1]?.model}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Warranty expiry date
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(warranties[1]?.warrantyExpiryDate).toDateString()}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Provider</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[1]?.provider}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Contact details
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[1]?.contactDetails}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Reference number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[1]?.refNumber}
              </dd>
            </div>
          </dl>
          {/* 3. Item */}
          <dl className="grid grid-cols-4 gap-x-4 gap-y-5 sm:grid-cols-4 mt-8">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">3. Item</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {warranties[2]?.item}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Manufacturer
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[2]?.manufacturer}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Model</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[2]?.model}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Warranty expiry date
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(warranties[2]?.warrantyExpiryDate).toDateString()}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Provider</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[2]?.provider}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Contact details
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[2]?.contactDetails}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Reference number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[2]?.refNumber}
              </dd>
            </div>
          </dl>
          {/* 4. Item */}
          <dl className="grid grid-cols-4 gap-x-4 gap-y-5 sm:grid-cols-4 mt-8">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">4. Item</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {warranties[3]?.item}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Manufacturer
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[3]?.manufacturer}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Model</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[3]?.model}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Warranty expiry date
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(warranties[3]?.warrantyExpiryDate).toDateString()}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Provider</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[3]?.provider}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Contact details
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[3]?.contactDetails}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Reference number
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {warranties[3]?.refNumber}
              </dd>
            </div>
          </dl>
        </div>

        {/* 4.g Additional Information */}
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            4.g Additional Information
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">
                Please provide any information which may be unique/helpful to
                tenants and/or the Agent’s maintenance team.
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {" "}
                {additionalInformation}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default PropertyMaintenance;
