import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChartBarIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import logo from "../../../../Images/Footer/logo.png";

import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../../../Redux/userSlice";
import { useHistory } from "react-router-dom";

const resources = [
  {
    name: "Landlord Portal",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/landlord-portal-dashboard",
  },
  {
    name: "Tenant Portal",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/tenant-portal-dashboard",
  },
  {
    name: "Contractor Portal",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/contractor-portal-dashboard",
  },
  {
    name: "Admin",
    description: "Understand how we take your privacy seriously.",
    href: "/admindashboard",
  },
  {
    name: "Property Management Portal",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/property-manager-dashboard",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HeaderNavbarTwo = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <Popover className="relative z-50">
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 ">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to="/home" className="flex items-center">
            <img src={logo} className="mr-2 h-6 w-6" alt="Nuova Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Nuova
            </span>
          </Link>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          <Link
            to="/page2"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Residents
          </Link>
          <Link
            to="/page3"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
            aria-current="page"
          >
            Landlord Portfolio
          </Link>
          <Link
            to="/page4"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            About Us
          </Link>
          <Link
            to="/page5"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Guides
          </Link>
          <Link
            to="/page6"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Contact Us
          </Link>
          <Link
            to="/propertyviewings"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Prospects
          </Link>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-500",
                    "group inline-flex items-center rounded-md  text-base font-medium hover:text-gray-900 focus:outline-none "
                  )}
                >
                  <span>Portals</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-gray-600" : "text-gray-400",
                      "ml-2 h-5 w-5 group-hover:text-gray-500"
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {resources.map((resource) => (
                          <a
                            key={resource.name}
                            href={resource.href}
                            className="-m-3 block rounded-md p-3 hover:bg-gray-50"
                          >
                            <p className="text-base font-medium text-gray-900">
                              {resource.name}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
        {/* <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <Link
            to="/login"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#bd8472] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-700"
          >
            Sign up
          </Link>
        </div> */}

        <div className="hidden items-center justify-end space-x-8 md:flex md:flex-1 lg:w-0">
          {currentUser ? (
            <>
              {" "}
              <div className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                {currentUser.username}
              </div>
              <div className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                {currentUser.role}
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-100 py-2 px-4 text-base font-medium text-red-600 hover:bg-red-200"
              >
                logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-cyan-100 py-2 px-4 text-base font-medium text-cyan-600 hover:bg-cyan-200"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/home" className="flex items-center">
                    <img src={logo} className="mr-2 h-8 w-8" alt="Nuova Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap">
                      Nuova
                    </span>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {/* Delete
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                        <solution.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {solution.name}
                      </div>
                    </a>
                  ))}
                </nav>
              </div> */}
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/page2"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Residents
                </Link>
                <Link
                  to="/page3"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                  aria-current="page"
                >
                  Landlord Portfolio
                </Link>
                <Link
                  to="/page4"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  About Us
                </Link>
                <Link
                  to="/page5"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Guides
                </Link>
                <Link
                  to="/page6"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Contact Us
                </Link>
                <Link
                  to="/propertyviewings"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Prospects
                </Link>
                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className="text-base font-medium text-gray-500 hover:text-gray-700"
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  to="/register"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#bd8472] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-yellow-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <Link
                    to="/login"
                    className="text-[#bd8472] hover:text-yellow-700"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default HeaderNavbarTwo;
