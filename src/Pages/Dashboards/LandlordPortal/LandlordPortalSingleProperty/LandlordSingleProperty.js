import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import logo from "../../../../Images/Banner/Nuova Logo.png";
import {
  BellIcon,
  CogIcon,
  MenuIcon,
  UserCircleIcon,
  ViewGridAddIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  NavLink,
  useRouteMatch,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import ReviewProperty from "./ReviewProperty";
import AddTenant from "./AddTenant/AddTenant";
import AddTerms from "./AddTerms/AddTerms";
import RequestDeposit from "./RequestDeposit/RequestDeposit";
import AddCertificate from "./AddCertificate/AddCertificate";
import Inventory from "./Inventory/Inventory";
import InspectionReport from "./InspectionReport/InspectionReport";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../Redux/userSlice";
import { propertyFetchingSuccess } from "../../../../Redux/singlePropertySlice";

const navigation = [
  { name: "Review", to: "", current: true },
  {
    name: "Landlord Dashboard",
    to: "/landlord-portal-dashboard",
    current: false,
  },
  {
    name: "Property",
    to: "/landlord-portal-dashboard/landlord-property",
    current: false,
  },
  {
    name: "Maintenance",
    to: "/landlord-portal-dashboard/landlord-portal-maintenance",
    current: false,
  },
  {
    name: "Inbox",
    to: "/landlord-portal-dashboard/landlord-portal-inbox",
    current: false,
  },
  {
    name: "Profile",
    to: "/landlord-portal-dashboard/landlord-my-profile",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LandlordSingleProperty = () => {
  const { inspectionReport } = useSelector(
    (state) => state.singlePropertyDetails
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };
  const { currentUser } = useSelector((state) => state.user);
  let { path, url } = useRouteMatch();
  const { id } = useParams();

  const [singleProperty, setSingleProperty] = useState({});

  useEffect(() => {
    const handleSingleProperty = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5500/api/properties/${id}`
        );
        console.log(res.data);
        setSingleProperty(res.data);
        dispatch(propertyFetchingSuccess(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    handleSingleProperty();
  }, [id, dispatch]);

  const subNavigation = [
    {
      name: "Review property",
      href: "#",
      to: `${url}`,
      icon: UserCircleIcon,
      current: true,
    },
    {
      name: "Add tenants",
      href: "#",
      to: `${url}/add-tenants`,
      icon: CogIcon,
      current: false,
    },
    {
      name: "Add terms",
      href: "#",
      to: `${url}/add-terms`,
      icon: CogIcon,
      current: false,
    },
    {
      name: "Certificates & Documents",
      href: "#",
      to: `${url}/add-certificates`,
      icon: ViewGridAddIcon,
      current: false,
    },
    {
      name: "Property inspection report",
      href: "#",
      to: `${url}/property-inspection-report`,
      icon: ViewGridAddIcon,
      current: false,
    },
    {
      name: "Inventory",
      href: "#",
      to: `${url}/inventory`,
      icon: ViewGridAddIcon,
      current: false,
    },
  ];

  return (
    <div>
      <Disclosure
        as="div"
        className="relative bg-[#0f2e5a] pb-32 overflow-hidden"
      >
        {({ open }) => (
          <>
            <nav
              className={classNames(
                open ? "bg-[#0f2e5a]" : "bg-transparent",
                "relative z-10 border-b border-teal-500 border-opacity-25 lg:bg-transparent lg:border-none"
              )}
            >
              <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-sky-800">
                  <div className="px-2 flex items-center lg:px-0">
                    <div className="flex-shrink-0">
                      <Link to="/home">
                        <span className="sr-only">Nuova</span>
                        <img src={logo} className="h-6 w-24" alt="Nuova Logo" />
                      </Link>
                    </div>
                    <div className="hidden lg:block lg:ml-6 lg:space-x-4">
                      <div className="flex">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={classNames(
                              item.current
                                ? "bg-black bg-opacity-25"
                                : "hover:bg-sky-800",
                              "rounded-md py-2 px-3 text-sm font-medium text-white"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                    <div className="max-w-lg w-full lg:max-w-xs">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative text-sky-100 focus-within:text-gray-400">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon
                            className="flex-shrink-0 h-5 w-5"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full bg-sky-700 bg-opacity-50 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-sky-100 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="p-2 rounded-md inline-flex items-center justify-center text-sky-200 hover:text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon
                          className="block flex-shrink-0 h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <MenuIcon
                          className="block flex-shrink-0 h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden lg:block lg:ml-4">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative flex-shrink-0 ml-4">
                        <div>
                          <Menu.Button className="rounded-full flex text-sm text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white">
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
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <>
                                  <Link
                                    to="/landlord-portal-dashboard/landlord-my-profile"
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
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="bg-sky-700 lg:hidden">
                <div className="pt-2 pb-3 px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current
                          ? "bg-black bg-opacity-25"
                          : "hover:bg-sky-800",
                        "block rounded-md py-2 px-3 text-base font-medium text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-sky-800">
                  <div className="flex items-center px-4">
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
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">
                        {currentUser.username}
                      </div>
                      <div className="text-sm font-medium text-sky-200">
                        {currentUser.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    <Link
                      to="/landlord-portal-dashboard/landlord-my-profile"
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
              </Disclosure.Panel>
            </nav>
            <div
              aria-hidden="true"
              className={classNames(
                open ? "bottom-0" : "inset-y-0",
                "absolute inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0"
              )}
            >
              <div className="absolute inset-0 flex">
                <div
                  className="h-full w-1/2"
                  style={{ backgroundColor: "#0f2e5a" }}
                />
                <div
                  className="h-full w-1/2"
                  style={{ backgroundColor: "#0f2e5a" }}
                />
              </div>
              <div className="relative flex justify-center">
                <svg
                  className="flex-shrink-0"
                  width={1750}
                  height={308}
                  viewBox="0 0 1750 308"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
                    fill="#0f2e5a"
                  />
                  <path
                    d="M1465.84 308L16.816 0H1750v308h-284.16z"
                    fill="#0f2e5a"
                  />
                  <path
                    d="M1733.19 0L284.161 308H0V0h1733.19z"
                    fill="#0f2e5a"
                  />
                  <path
                    d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
                    fill="#0f2e5a"
                  />
                </svg>
              </div>
            </div>
            <header className="relative py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl tracking-tight font-bold text-white">
                  {singleProperty?.propertyAddress?.propertyName}
                </h1>
              </div>
            </header>
          </>
        )}
      </Disclosure>

      <main className="relative -mt-32">
        <div className="max-w-9xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside className="py-6 lg:col-span-3">
                <nav className="space-y-1">
                  {subNavigation.map((item) => (
                    <NavLink
                      key={item.name}
                      exact
                      to={item.to}
                      className={classNames(
                        item.to === window.location.pathname
                          ? "bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700"
                          : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                        "group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.to === window.location.pathname
                            ? "text-teal-500 group-hover:text-teal-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </NavLink>
                  ))}
                </nav>
              </aside>

              <div className="divide-y divide-gray-200 lg:col-span-9 bg-gray-50">
                <Switch>
                  <Route exact path={`${path}`}>
                    <ReviewProperty singleProperty={singleProperty} />
                  </Route>
                  <Route path={`${path}/add-tenants`}>
                    <AddTenant singleProperty={singleProperty} />
                  </Route>
                  <Route path={`${path}/add-terms`}>
                    <AddTerms />
                  </Route>
                  <Route path={`${path}/request-deposit`}>
                    <RequestDeposit />
                  </Route>
                  <Route path={`${path}/approve-references`}></Route>
                  <Route path={`${path}/add-certificates`}>
                    <AddCertificate singleProperty={singleProperty} />
                  </Route>
                  <Route path={`${path}/property-inspection-report`}>
                    <InspectionReport
                      property={singleProperty}
                      singleProperty={inspectionReport}
                    />
                  </Route>
                  <Route path={`${path}/inventory`}>
                    <Inventory singleProperty={singleProperty} />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default LandlordSingleProperty;
