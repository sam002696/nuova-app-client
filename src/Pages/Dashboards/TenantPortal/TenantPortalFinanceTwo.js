import React from "react";

const TenantPortalFinanceTwo = () => {
  return (
    <>
      <div className="bg-white">
        <div className="relative px-6 pt-8 lg:px-8">
          <div className="mx-auto max-w-5xl py-4 sm:py-4 lg:py-4">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Nuova Property Finance
              </h1>
              <p className="mt-12 text-lg leading-8 text-gray-600">
                Here at Nuova Property Management & Letting we use PayProp which
                is a leading payment and reconciliation platform for the
                residential lettings industry that automates the rental
                payments.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Below you can click on the link to sign in to your account where
                you will have a complete overview of you rental payments.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://uk.payprop.com/tenant/login"
                  className="rounded-md bg-indigo-600 px-3.5 py-3.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Visit Payprop
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantPortalFinanceTwo;
