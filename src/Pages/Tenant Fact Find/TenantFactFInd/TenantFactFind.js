import React from "react";
import { Disclosure } from "@headlessui/react";
import { HomeIcon, EyeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import StageOne from "../StageOne/StageOne";
import StageTwo from "../Stage Two/StageTwo";
import StageThree from "../Stage Three/StageThree";
import StageFour from "../Stage Four/StageFour";
import StageFive from "../Stage Five/StageFive";
import StageSix from "../Stage Six/StageSix";
const TenantFactFind = () => {
  const { register, handleSubmit, watch } = useForm({});
  const navigation = [
    { name: "Dashboard", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Applicants", href: "#" },
    { name: "Company", href: "#" },
  ];
  const breadcrumbs = [
    { name: "Stage 1", href: "#", current: false },
    { name: "Stage 2", href: "#", current: true },
    { name: "Stage 3", href: "#", current: true },
    { name: "Stage 4", href: "#", current: true },
    { name: "Stage 5", href: "#", current: true },
    { name: "Stage 6", href: "#", current: true },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      {" "}
      <Disclosure as="nav" className="bg-cyan-800" aria-label="Global">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://i.ibb.co/vY3j7Wg/Nuova-Logo.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden lg:ml-8 lg:flex lg:space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-sky-400"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-sky-200 hover:bg-sky-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <EyeIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <EyeIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-sky-400 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-sky-500 pt-4 pb-3">
                <div className="mt-3 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-sky-200 hover:bg-sky-400 hover:text-white"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* Breadcrumb */}
      <nav
        className="hidden border-b border-gray-200 bg-white lg:flex"
        aria-label="Breadcrumb"
      >
        <ol className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
          <li className="flex">
            <div className="flex items-center">
              <Link to="#" className="text-gray-400 hover:text-gray-500">
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
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
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
            <StageOne />
            <StageTwo register={register} />
            <StageThree register={register} />
            <StageFour register={register} />
            <StageFive register={register} watch={watch} />
            <StageSix register={register} />
            <button
              type="submit"
              className="lg:w-full rounded border border-transparent px-4 py-2 text-lg  text-gray-600 shadow-sm bg-gray-300 hover:bg-gray-500 hover:text-white focus:ring-gray-500 focus:ring-offset-2 mt-20 font-semibold uppercase tracking-wide "
            >
              Submit the form
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default TenantFactFind;
