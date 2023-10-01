import React from "react";

const TenantPortalFinanceTwo = () => {
  return (
    <>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-6xl text-center shadow-xl p-5 rounded shadow-cyan-500/40">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-3">
              Nuova Property Finance
            </h2>
            <p className="mx-auto mt-6  text-lg leading-8 text-gray-600">
              Here at Nuova Property Management & Letting we use PayProp which
              is a leading payment and reconciliation platform for the
              residential lettings industry that automates the rental payments.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://uk.payprop.com/tenant/login"
                target="_blank"
                className="rounded-md bg-cyan-600 px-3.5 py-3.5 text-md font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                Visit Payprop
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantPortalFinanceTwo;
