import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import {
  CreditCardIcon,
  OfficeBuildingIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import AddProperty from "./AddProperty/AddProperty";
import AllProperties from "./AllProperties";
import TenancyForm from "./TenancyForm/TenancyForm";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ManagerProperties() {
  let { path, url } = useRouteMatch();
  const tabs = [
    {
      name: "All Properties",
      to: `${url}`,
      href: "#",
      icon: UserIcon,
      current: false,
    },
    {
      name: "Add A Property",
      href: "#",
      to: `${url}/add-a-property`,
      icon: OfficeBuildingIcon,
      current: false,
    },
    {
      name: "Review Property",
      to: `${url}/review-property`,
      href: "#",
      icon: UsersIcon,
      current: false,
    },
    {
      name: "Tenancy Form",
      href: "#",
      to: `${url}/tenancyform`,
      icon: CreditCardIcon,
      current: true,
    },
  ];
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
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
            <AllProperties />
          </Route>
          <Route path={`${path}/add-a-property`}>
            <AddProperty />
          </Route>
          <Route path={`${path}/review-property`}></Route>
          <Route path={`${path}/tenancyform`}>
            <TenancyForm />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
