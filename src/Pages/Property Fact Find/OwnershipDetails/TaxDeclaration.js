import React from "react";

const TaxDeclaration = () => {
  return (
    <>
      <h1 className="text-xl font-semibold leading-6 text-gray-900">
        3.d Non Resident Landlord Tax Declaration
      </h1>
      <div className=" space-y-3">
        <p className="text-base leading-6 text-gray-900 text-justify">
          The Non-Resident Landlords Scheme (NRL) is a scheme for taxing the UK
          Rental Income for non-resident landlords. The scheme requires UK
          Letting agents to deduct Basic Rate Tax from any rent they collect for
          non-resident landlords. Tax will be deducted at 20% of the rental
          income, unless we have received from yourself or HMRC an NRL Scheme
          number, which means you can receive rents with no tax deducted.
        </p>
        <p className="text-base leading-6 text-gray-900 text-justify">
          If we do not receive a letter from yourself or HMRC detailing you can
          receive rent monies without the deduction of tax, we are legally
          obliged to withhold 20% of the rental income to lodge with HMRC on a
          quarterly basis.
        </p>
        <div>
          <a
            href="www.gov.uk/government/publications/non-resident-landlord-application-to-have-uk-rental-income-without-deduction-of-uk-tax-individuals- nrl1"
            alt="resident-application"
            className="underline underline-offset-1 text-cyan-600"
          >
            www.gov.uk/government/publications/non-resident-landlord-application-to-have-uk-rental-income-without-deduction-of-uk-tax-individuals-
            nrl1
          </a>
        </div>
        <p className="text-base leading-6 text-gray-900">
          For your reference, select:
          <br /> NRL 1 if Individual <br /> NRL 2 for companies to receive rent
          without the deduction of Tax <br /> NRL 3 for Trustees
        </p>
      </div>
      <div className="pt-2">
        <label
          htmlFor="project-name"
          className="block text-base leading-6 font-medium text-gray-900"
        >
          Nuova System HMRC number is{" "}
          <span className="font-bold">NA046645</span> and this must be quoted
          when applying via HMRC.
        </label>
        <fieldset className="space-y-2 pt-3">
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="comments" className="font-medium text-gray-700">
                Owner 1 is classed as a UK resident for tax purposes OR
              </label>
            </div>
          </div>

          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="offers"
                aria-describedby="offers-description"
                name="offers"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="offers" className="font-medium text-gray-700">
                Owner 1 is will be living abroad and classed as a non resident
                for tax purposes
              </label>
            </div>
          </div>

          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="comments" className="font-medium text-gray-700">
                Owner 2 is classed as a UK resident for tax purposes OR
              </label>
            </div>
          </div>

          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="offers"
                aria-describedby="offers-description"
                name="offers"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="offers" className="font-medium text-gray-700">
                Owner 2 is will be living abroad and classed as a non resident
                for tax purposes
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default TaxDeclaration;
