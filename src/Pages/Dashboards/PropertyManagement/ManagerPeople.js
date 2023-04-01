import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import {
  CreditCardIcon,
  OfficeBuildingIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Landlords from "./ManagerPeople/Landlords";
import Tenants from "./ManagerPeople/Tenants";
import Contractors from "./ManagerPeople/Contractors";
import Prospects from "./ManagerPeople/Prospects";
import PropertyManagers from "./ManagerPeople/PropertyManagers";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ManagerPeople = () => {
  let { path, url } = useRouteMatch();
  const tabs = [
    {
      name: "Landlords",
      to: `${url}`,
      href: "#",
      icon: UserIcon,
      current: false,
    },
    {
      name: "Property Managers",
      href: "#",
      to: `${url}/propertymanagers`,
      icon: CreditCardIcon,
      current: true,
    },
    {
      name: "Tenants",
      href: "#",
      to: `${url}/tenants`,
      icon: OfficeBuildingIcon,
      current: false,
    },
    {
      name: "Contractors",
      to: `${url}/contractors`,
      href: "#",
      icon: UsersIcon,
      current: false,
    },
    {
      name: "Prospects",
      href: "#",
      to: `${url}/prospects`,
      icon: CreditCardIcon,
      current: true,
    },
  ];
  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>

          <select
            id="tabs"
            name="tabs"
            className="block w-full focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 ml-20" aria-label="Tabs">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.name}
                  exact
                  to={tab.to}
                  className={classNames(
                    tab.to === window.location.pathname
                      ? "border-cyan-500 text-cyan-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  <tab.icon
                    className={classNames(
                      tab.to === window.location.pathname
                        ? "text-cyan-700"
                        : "text-gray-400 group-hover:text-gray-500",
                      "-ml-0.5 mr-2 h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                  <span>{tab.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        <main className="">
          <Switch>
            <Route exact path={`${path}`}>
              <Landlords />
            </Route>
            <Route path={`${path}/tenants`}>
              <Tenants />
            </Route>
            <Route path={`${path}/contractors`}>
              <Contractors />
            </Route>
            <Route path={`${path}/prospects`}>
              <Prospects />
            </Route>
            <Route path={`${path}/propertymanagers`}>
              <PropertyManagers />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default ManagerPeople;
