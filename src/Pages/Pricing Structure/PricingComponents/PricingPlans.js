import React from "react";

import { CheckIcon as CheckIconMini } from "@heroicons/react/solid";
import AllInOnePlatform from "./AllInOnePlatform";

const tiers = [
  {
    name: "Tenant Find",
    href: "#",
    price: " 70% Of First Months Rent",
    priceMonthly: 12,
    description: "All the basics for starting a new business",
    features: [
      "Digital marketing on all major letting platforms ( Zoopla, Letting Web, Nuova Property website )",
      "Accompanied Viewings with all prospective tenants",
      "Pre-tenancy documentation, including a right to rent check, vet potential tenants which includes reference check, ID check and credit check.",
      "Collect and lodge security deposit with My Deposits Scotland.",
      "Pre-tenancy inspection which will include photographic evidence & Inventory.",
      "Utility and services management, including gas, electric, water and council tax (tenancy commencement and end)",
      "Rent review and negotiations",
      "Landlord Online Portal",
      "Meet and greet and handover the keys",
    ],
  },
  {
    name: "Nuova Fully Managed",
    price: "12% Of Monthly Rental",
    href: "#",
    priceMonthly: 24,
    description: "All the basics for starting a new business",
    features: [
      "Digital marketing on all major letting platforms ( Zoopla, Letting Web, Nuova Property website )",
      "Accompanied Viewings with all prospective tenants",
      "Pre-tenancy documentation, including a right to rent check, vet potential tenants which includes reference check, ID check and credit check.",
      "Collect and lodge security deposit with My Deposits Scotland.",
      "Pre-tenancy inspection which will include photographic evidence & Inventory.",
      "Utility and services management, including gas, electric, water and council tax (tenancy commencement and end)",
      "Rent review and negotiations",
      "Limited access to the Landlord Online Portal",
      "Meet and greet and handover the keys",
      "Dedicated Property Manager",
      "24 Hour repair support",
      "Access to fully qualified contractors panel",
      "Property refurbishment advice",
      "Dealing with all enquiries, complaints and any questions and communication from the tenants or anyone relating to the tenancy or the property",
      "Deal with any rent arrears in line with the procedure.",
      "Management of routine repairs and maintenance",
      "Rent reviews and negotiations.",
      "Scheduled inspection of property, condition report sent to owner after inspection is complete",
      "Ensuring all legal certificates are renewed annually or when required.",
      "Have complete access to the landlord Nuova Portal",
      "Rent reviews, increase when appropriate",
    ],
  },
  {
    name: "HMO Management",
    href: "#",
    price: "12% Of Monthly Rental",
    priceMonthly: 32,
    description: "All the basics for starting a new business",
    features: [
      "Digital marketing on all major letting platforms ( Zoopla, Letting Web, Nuova Property website )",
      "Accompanied Viewings with all prospective tenants",
      "Pre-tenancy documentation, including a right to rent check, vet potential tenants which includes reference check, ID check and credit check.",
      "Collect and lodge security deposit with My Deposits Scotland.",
      "Pre-tenancy inspection which will include photographic evidence & Inventory.",
      "Utility and services management, including gas, electric, water and council tax (tenancy commencement and end)",
      "Rent review and negotiations",
      "Limited access to the Landlord Online Portal",
      "Meet and greet and handover the keys",
      "Dedicated Property Manager",
      "24 Hour repair support",
      "Access to fully qualified contractors panel",
      "Property refurbishment advice",
      "Dealing with all enquiries, complaints and any questions and communication from the tenants or anyone relating to the tenancy or the property",
      "Deal with any rent arrears in line with the procedure.",
      "Management of routine repairs and maintenance",
      "Rent reviews and negotiations.",
      "Scheduled inspection of property, condition report sent to owner after inspection is complete",
      "Ensuring all legal certificates are renewed annually or when required.",
      "Have complete access to the landlord Nuova Portal",
      "Rent reviews, increase when appropriate",
      "Management of the property in accordance with HMO regulations Project Manage any upgrade works required HMO license renewals",
    ],
  },
  {
    name: "Rental Management (Short)",
    price: "15% Of Monthly Revenue",
    href: "#",
    priceMonthly: 48,
    description: "All the basics for starting a new business",
    features: [
      "Listing preparation ",
      "Price optimisation",
      "Guest screening",
      "24/7 Check-In and guest support",
      "Guest Management",
      "Cleanliness and Maintenance",
      "Marketing and revenue management",
      "Photography",
    ],
  },
];

const PricingPlans = () => {
  return (
    <>
      {/* Pricing with four tiers and toggle */}
      <div className="bg-gradient-to-l from-stone-100 to-white">
        <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
          <div className="sm:align-center sm:flex sm:flex-col">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">
              Pricing Plans
            </h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </p>
            <div className="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
              <button
                type="button"
                className="relative w-1/2 whitespace-nowrap rounded-md border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:w-auto sm:px-8"
              >
                Monthly billing
              </button>
              <button
                type="button"
                className="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:w-auto sm:px-8"
              >
                Yearly billing
              </button>
            </div>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4 ">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="divide-y divide-gray-200 rounded-lg border shadow-md shadow-stone-400/40 bg-white"
              >
                <div className="p-6">
                  <h2 className="text-lg font-medium leading-6 text-gray-900">
                    {tier.name}
                  </h2>
                  <p className="mt-4 text-sm text-gray-500">
                    {tier.description}
                  </p>
                  {/* <p className="mt-8">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      ${tier.priceMonthly}
                    </span>{" "}
                    <span className="text-base font-medium text-gray-500">
                      /mo
                    </span>
                  </p> */}
                  <a
                    href={tier.href}
                    className="mt-8 block w-full rounded-md border border-transparent bg-cyan-600 py-2 text-center text-sm font-semibold text-white hover:bg-cyan-700"
                  >
                    {tier.price}
                  </a>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h3 className="text-sm font-medium text-gray-900">
                    What's included
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIconMini
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AllInOnePlatform />
      </div>
    </>
  );
};

export default PricingPlans;
