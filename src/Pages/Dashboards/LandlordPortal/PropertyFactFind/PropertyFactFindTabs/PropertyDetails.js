import React from "react";

const PropertyDetails = ({ propertyDetails }) => {
  console.log(propertyDetails);
  const {
    roomObject,
    featuresAppliances,
    propertyType,
    alarm,
    factoring,
    hmoLicenceObject,
    keys,
    otherServices,
    parking,
    utilitySuppliers,
    insurance,
  } = propertyDetails;

  //insurance
  const { buildings, contents } = insurance;
  const {
    excessAmount: buildingExcessAmount,
    expiryDate: buildingExpiryDate,
    insuredWith: buildingInsuredWith,
    policyNumber: buildingPolicyNumber,
  } = buildings;

  const {
    excessAmount: contentExcessAmount,
    expiryDate: contentExpiryDate,
    insuredWith: contentInsuredWith,
    policyNumber: contentPolicyNumber,
  } = contents;

  //Utility Suppliers
  const { electricity, gasObject } = utilitySuppliers;
  const { location, meterSerialNo, meterType, supplier, supplyNumber } =
    electricity;
  const { gas, meterPoint } = gasObject;

  //Parking
  const {
    entryCode,
    permitSuppliedBy,
    permitsPerProperty,
    remoteFob,
    spaceLocation,
    spaceNumber,
    suppliedBy,
  } = parking;
  //keys
  const {
    additionalKeys,
    keySetsCut,
    keySetsMakeUp,
    keySetsProvided,
    securityKeyReplacement,
  } = keys;
  //other services
  const {
    cableSatellite,
    cableSatelliteProvider,
    gardenMaintenanceContract,
    mainWiredSmoke,
    mainsWaterLocation,
    other,
    phoneLineBroadband,
    phoneLineBroadbandProvider,
    stairCleaningAgreement,
  } = otherServices;

  //garden maintenance contract

  const { place, provider } = gardenMaintenanceContract;
  // stair cleaning aggreement
  const { place: cleaningPlace, provider: cleaningProvider } =
    stairCleaningAgreement;

  const { rooms, roomsOther } = roomObject;
  //factoring
  const {
    address,
    emailAddress,
    factoringCompany,
    postCode,
    propertyFactored,
    telephone,
  } = factoring;

  // hmoLicenceObject
  const { hmoLicence, noOfOccupants, referenceNumber, handledBy, renewalDate } =
    hmoLicenceObject;

  const {
    excludedAreaFacilities,
    externalAreasFacilities,
    featuresAndAppliancesOther,
    sharedAreasFacilities,
    featuresAndAppliances,
  } = featuresAppliances;

  const {
    alarmCode,
    alarmFob,
    alarmPanelLocation,
    alarmType,
    serviceProvider,
  } = alarm;
  return (
    <>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Section 2 : Property Details
        </h3>
      </div>

      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Rooms</dt>
            {rooms.map((room, index) => (
              <dd key={index} className="mt-1 text-sm text-gray-900">
                {room}
              </dd>
            ))}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Other rooms</dt>

            {roomsOther}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Features & Appliances
            </dt>
            {featuresAndAppliances.map((FandA, index) => (
              <dd key={index} className="mt-1 text-sm text-gray-900">
                {FandA}
              </dd>
            ))}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Features & Appliances
            </dt>
            {featuresAndAppliancesOther}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Excluded Area Facilities
            </dt>
            {excludedAreaFacilities}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              External Area Facilities
            </dt>
            {externalAreasFacilities}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Shared Area Facilities
            </dt>
            {sharedAreasFacilities}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Property Type</dt>
            {propertyType.map((type, index) => (
              <dd key={index} className="mt-1 text-sm text-gray-900">
                {type}
              </dd>
            ))}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Alarm Code</dt>
            {alarmCode}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Alarm Fob</dt>
            {alarmFob}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Alarm Panel Location
            </dt>
            {alarmPanelLocation}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Alarm Type</dt>
            {alarmType}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Service Provider
            </dt>
            {serviceProvider}
          </div>

          {/* Parking Start */}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Parking Entry Code
            </dt>
            {entryCode}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Permit Supplied By
            </dt>
            {permitSuppliedBy}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Permits Per Property
            </dt>
            {permitsPerProperty}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Remote Fob</dt>
            {remoteFob}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Space Location
            </dt>
            {spaceLocation}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Space Number</dt>
            {spaceNumber}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Supplied By</dt>
            {suppliedBy}
          </div>

          {/* Parking End */}

          {/* Utility Suppliers Start*/}

          {/* Electricity Start */}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Electricity Location
            </dt>
            {location}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Electricity meter serial no
            </dt>
            {meterSerialNo}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Electricity meter type
            </dt>
            {meterType}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Electricity Supplier
            </dt>
            {supplier}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Electricity Supply Number
            </dt>
            {supplyNumber}
          </div>

          {/* Electricity End */}

          {/* Gas Start */}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Gas</dt>
            {gas}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Gas location</dt>
            {gasObject.location}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Gas Meter Point
            </dt>
            {meterPoint}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Gas Meter Serial No
            </dt>
            {gasObject.meterSerialNo}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Gas Meter Type
            </dt>
            {gasObject.meterType}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500"> Gas Supplier</dt>
            {gasObject.supplier}
          </div>

          {/* Gas End */}

          {/* Utility Suppliers  End*/}

          {/* Keys Start */}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              keys (Additional Keys)
            </dt>
            {additionalKeys}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              keys (Sets Cut)
            </dt>
            {keySetsCut}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              keys (Sets Makeup)
            </dt>
            {keySetsMakeUp}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              keys (Sets Makeup)
            </dt>
            {keySetsMakeUp}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              keys (Sets Provided)
            </dt>
            {keySetsProvided}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Security key Replacement
            </dt>
            {securityKeyReplacement}
          </div>

          {/* keys End */}

          {/* Other services start */}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Services (Cable Satellite)
            </dt>
            {cableSatellite}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Services (Cable Satellite Provider)
            </dt>
            {cableSatelliteProvider}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Services (Cable Satellite Provider)
            </dt>
            {cableSatelliteProvider}
          </div>

          {/* garden maintenance contract start*/}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Services (Garden Maintenance Contract Place)
            </dt>
            {place}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Services (Garden Maintenance Contract Provider)
            </dt>
            {provider}
          </div>

          {/* garden maintenance contract end */}

          {/* stair cleaning agreement  start*/}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Services (Stair cleaning agreement)
            </dt>
            {cleaningPlace}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Services (Stair cleaning agreement)
            </dt>
            {cleaningProvider}
          </div>

          {/* stair cleaning agreement  end */}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Services (Main Wired Smoke)
            </dt>
            {mainWiredSmoke}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Services (Main Wired Smoke)
            </dt>
            {mainsWaterLocation}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Services (Other)
            </dt>
            {other}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Services (Phone Line Broadband)
            </dt>
            {phoneLineBroadband}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Other Services (Phone Line Broadband Provider)
            </dt>
            {phoneLineBroadbandProvider}
          </div>

          {/* Other services end */}

          {/* Factoring  Start*/}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Factoring Address
            </dt>
            {address}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Factoring Email Address
            </dt>
            {emailAddress}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Factoring Company
            </dt>
            {factoringCompany}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Factoring Post Code
            </dt>
            {postCode}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Property Factored
            </dt>
            {propertyFactored}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Factoring (Telephone)
            </dt>
            {telephone}
          </div>

          {/* Factoring End*/}

          {/* HMO Licence Start */}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">HMO Licence</dt>
            {hmoLicence}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              HMO Licence (handled By)
            </dt>
            {handledBy.map((handledBy, index) => (
              <dd key={index} className="mt-1 text-sm text-gray-900">
                {handledBy}
              </dd>
            ))}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              HMO Licence (no of occupants)
            </dt>
            {noOfOccupants}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              HMO Licence (reference no)
            </dt>
            {referenceNumber}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              HMO Licence (renewal date)
            </dt>
            {new Date(renewalDate).toLocaleDateString()}
          </div>

          {/* HMO Licence End */}

          {/* Factoring Start */}

          {/* Building Start */}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Insurance(Buildings Excess Amount)
            </dt>
            {buildingExcessAmount}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Insurance (Buildings Insured With)
            </dt>
            {buildingInsuredWith}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Insurance (Buildings Policy Number)
            </dt>
            {buildingPolicyNumber}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Insurance (Buildings Expiry Date)
            </dt>
            {new Date(buildingExpiryDate).toLocaleDateString()}
          </div>

          {/* Building End */}

          {/* Content Start */}

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Insurance(Contents Excess Amount)
            </dt>
            {contentExcessAmount}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Insurance (Contents Insured With)
            </dt>
            {contentInsuredWith}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Insurance (Contents Policy Number)
            </dt>
            {contentPolicyNumber}
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Insurance (Contents Expiry Date)
            </dt>
            {new Date(contentExpiryDate).toLocaleDateString()}
          </div>

          {/* Content End */}

          {/* Factoring End */}
        </dl>
      </div>
    </>
  );
};

export default PropertyDetails;
