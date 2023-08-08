import React, { useContext } from "react";
import {
  NavLink,
  useRouteMatch,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import { AuthContext } from "../../Chat/ChatContext/AuthContext";
import ChatLogin from "./ContractorChat/ChatLogin/ChatLogin";
import ChatRegister from "./ContractorChat/ChatRegister/ChatRegister";
// import ContractorPortalHome from "./ContractorPortalHome";
import ContractorPortalFindJobs from "./ContractorPortalFindJobs";
import ContractorPortalMyJobs from "./ContractorPortalMyJobs";
import ContractorPortalFinance from "./ContractorPortalFinance";
import ContractorPortalInbox from "./ContractorPortalInbox";
import ContractorProfile from "./ContractorProfile";
import InvoiceMaker from "./InvoiceMaker/InvoiceMaker";
import ContractorPortalHomeTwo from "./ContractorPortalHomeTwo";
// import ContractorPortalFindJobsTwo from "./ContractorPortalFindJobsTwo";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/userSlice";
import Notification from "../../Notification/Notification";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ContractorPortalDashboard = () => {
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser: chatUser } = useContext(AuthContext);
  const { currentUser } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  const navigation = [
    { name: "Contractor Dashboard", to: `${url}`, href: "#", current: false },
    {
      name: "Find Jobs",
      to: `${url}/contractor-portal-find-jobs`,
      href: "#",
      current: false,
    },
    {
      name: "My Jobs",
      to: `${url}/contractor-portal-my-jobs`,
      href: "#",
      current: false,
    },
    {
      name: "Finance",
      href: "#",
      to: `${url}/contractor-portal-finance`,
      current: false,
    },

    {
      name: "Inbox",
      href: "#",
      to: `${url}/contractor-portal-inbox`,
      current: false,
    },
    {
      name: "Profile",
      href: "#",
      to: `${url}/contractor-my-profile`,
      current: false,
    },
    // {
    //   name: "Invoice Maker",
    //   href: "#",
    //   to: `${url}/invoice-maker`,
    //   current: false,
    // },
    {
      name: currentUser ? "" : "Register",
      href: "#",
      to: currentUser ? "#" : `${url}/register`,
      current: false,
    },

    // { name: "Maintenance", href: "#", to: `${url}/maintenance`, current: false },
  ];

  return (
    <>
      <div className="min-h-full ">
        <Popover
          as="header"
          className="bg-gradient-to-r from-sky-800 to-cyan-600"
        >
          {({ open }) => (
            <>
              <Transition.Root as={Fragment}>
                <div className="lg:hidden">
                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                    >
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                        <div className="pt-3 pb-2">
                          <div className="flex items-center justify-between px-4">
                            <div>
                              <img
                                className="h-8 w-auto"
                                src="https://i.ibb.co/vY3j7Wg/Nuova-Logo.png"
                                alt="Nuova Property"
                              />
                            </div>
                            <div className="-mr-2">
                              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                <span className="sr-only">Close menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                          <div className="mt-5 px-2 space-y-2 flex flex-col">
                            {navigation.map((item) => (
                              <NavLink
                                key={item.name}
                                to={item.to}
                                // activeStyle={{
                                //     color: 'white'
                                // }
                                // }
                                className="text-cyan-500 text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                              >
                                {item.name}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4 pb-2">
                          <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                              {currentUser?.profilePic ? (
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={currentUser.profilePic}
                                  alt=""
                                />
                              ) : (
                                <span className=" h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                                  <svg
                                    className="h-10 w-10 rounded-full text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                </span>
                              )}
                            </div>
                            <div className="ml-3 min-w-0 flex-1">
                              <div className="text-base font-medium text-gray-800 truncate">
                                {currentUser.username}
                              </div>
                              <div className="text-sm font-medium text-gray-500 truncate">
                                {currentUser.email}
                              </div>
                            </div>
                            <button
                              type="button"
                              className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                            >
                              <span className="sr-only">
                                View notifications
                              </span>
                              <BellIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <div className="mt-3 px-2 space-y-1">
                            <Link
                              to="/contractor-portal-dashboard/contractor-my-profile"
                              className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                            >
                              My Profile
                            </Link>
                            <button
                              onClick={handleLogout}
                              className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                            >
                              Sign out
                            </button>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>

              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                  {/* Logo */}
                  <div className="absolute left-0 py-5 flex-shrink-0 lg:static">
                    <Link to="/home">
                      <span className="sr-only">Nuova</span>
                      <img
                        src="https://i.ibb.co/vY3j7Wg/Nuova-Logo.png"
                        className="h-8 w-28"
                        alt="Nuova Logo"
                      />
                    </Link>
                  </div>

                  {/* Right section on desktop */}
                  <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                    <button type="button">
                      <span className="sr-only">View notifications</span>
                      <Notification />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-4 relative flex-shrink-0">
                      <div>
                        <Menu.Button className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                          <span className="sr-only">Open user menu</span>
                          {currentUser?.profilePic ? (
                            <img
                              className="h-8 w-8 rounded-full"
                              src={
                                currentUser?.profilePic &&
                                currentUser?.profilePic
                              }
                              alt=""
                            />
                          ) : (
                            <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
                              <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                          )}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <>
                                <Link
                                  to="/contractor-portal-dashboard/contractor-my-profile"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  My Profile
                                </Link>
                                <button
                                  onClick={handleLogout}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Sign out
                                </button>
                              </>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                      {/* Left nav */}
                      <div className="hidden lg:block lg:col-span-2">
                        <nav className="flex space-x-4">
                          {navigation.map((item) => (
                            <NavLink
                              key={item.name}
                              exact
                              to={item.to}
                              className={classNames(
                                item.to === window.location.pathname
                                  ? "bg-opacity-10 text-white"
                                  : "text-cyan-100",
                                "text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                              )}
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </nav>
                      </div>
                      <div className="px-12 lg:px-0">
                        {/* Search */}
                        <div className="max-w-xs mx-auto w-full lg:max-w-md">
                          <label htmlFor="search" className="sr-only">
                            Search
                          </label>
                          <div className="relative text-white focus-within:text-gray-600">
                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                              <SearchIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </div>
                            <input
                              id="search"
                              className="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                              placeholder="Search"
                              type="search"
                              name="search"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Menu button */}
                  <div className="absolute right-0 flex-shrink-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </Popover>

        <main>
          <Switch>
            <Route exact path={`${path}`}>
              <ContractorPortalHomeTwo />
            </Route>
            <Route path={`${path}/contractor-portal-find-jobs`}>
              <ContractorPortalFindJobs />
            </Route>
            <Route path={`${path}/contractor-portal-my-jobs`}>
              <ContractorPortalMyJobs />
            </Route>
            <Route path={`${path}/contractor-portal-finance`}>
              <ContractorPortalFinance />
            </Route>
            <Route path={`${path}/contractor-portal-inbox`}>
              {chatUser ? <ContractorPortalInbox /> : <ChatLogin />}
            </Route>
            <Route path={`${path}/contractor-my-profile`}>
              <ContractorProfile />
            </Route>

            <Route path={`${path}/invoice-maker`}>
              <InvoiceMaker />
            </Route>

            <Route path={`${path}/register`}>
              <ChatRegister />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default ContractorPortalDashboard;
