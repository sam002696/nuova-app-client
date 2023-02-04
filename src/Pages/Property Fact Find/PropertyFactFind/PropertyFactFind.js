import { HomeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Property from "../Property/Property";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import OwnershipDetails from "../OwnershipDetails/OwnershipDetails";
import PropertyMaintenance from "../PropertyMaintenance/PropertyMaintenance";

import MarketResearch from "../MarketResearch/MarketResearch";
import Engagement from "../Engagement/Engagement";
import { useForm } from "react-hook-form";
import HeaderNavbarTwo from "../../Shared/Header/HeaderNavbar/HeaderNavbarTwo";
import Footer from "../../Shared/Footer/Footer";

const breadcrumbs = [
  { name: "Property", href: "#", current: false },
  { name: "Project details", href: "#", current: true },
  { name: "Ownership details", href: "#", current: true },
  { name: "Property maintenance", href: "#", current: true },
  { name: "Market research", href: "#", current: true },
  { name: "Engagement of Nuova System", href: "#", current: true },
];

const PropertyFactFind = () => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      {/* Header */}
      <HeaderNavbarTwo />

      {/* Breadcrumb */}
      <nav
        className="hidden border-b border-gray-200 bg-gray-500 lg:flex"
        aria-label="Breadcrumb"
      >
        <ol className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
          <li className="flex">
            <div className="flex items-center">
              <Link to="#" className="text-white hover:text-white">
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
          {breadcrumbs.map((item) => (
            <li key={item.name} className="flex">
              <div className="flex items-center">
                <svg
                  className="h-full w-6 flex-shrink-0 text-gray-200"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 44"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <a
                  href={item.href}
                  className="ml-4 text-sm font-medium text-white hover:text-white"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      {/* Main Components */}
      <main className="mx-auto max-w-5xl px-4 pt-10 pb-12 lg:pb-16">
        <div className=" border-2 border-gray-500 p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Property register={register} />
            <PropertyDetails register={register} />
            <OwnershipDetails register={register} />
            <PropertyMaintenance register={register} />
            <MarketResearch register={register} />
            <Engagement register={register} />
            <button
              type="submit"
              className="lg:w-full rounded border border-transparent px-4 py-2 text-lg  text-gray-600 shadow-sm bg-gray-300 hover:bg-gray-500 hover:text-white focus:ring-gray-500 focus:ring-offset-2 mt-20 font-semibold uppercase tracking-wide "
            >
              Submit the form
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};
export default PropertyFactFind;
