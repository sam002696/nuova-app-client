import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import {
  ArchiveIcon,
  CreditCardIcon,
  OfficeBuildingIcon,
  UserIcon,
  UsersIcon,
  ViewListIcon,
} from "@heroicons/react/solid";
import AddProperty from "./AddProperty/AddProperty";
import AllProperties from "./AllProperties";
import TenancyForm from "./TenancyForm/TenancyForm";
import PropertyFactFind from "./PropertyFactFind/PropertyFactFind";
import TenantContactForm from "./ContactForm/Tenant/TenantContactForm";
import LandlordContactForm from "./ContactForm/Landlord/LandlordContactForm";

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
      name: "Property Fact Find",
      to: `${url}/property-fact-find`,
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
    {
      name: "Tenant Contact Form",
      href: "#",
      to: `${url}/tenancycontactform`,
      icon: ArchiveIcon,
      current: true,
    },
    {
      name: "Landlord Contact Form",
      href: "#",
      to: `${url}/landlordcontactform`,
      icon: ViewListIcon,
      current: true,
    },
  ];
  return (
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
            <AllProperties />
          </Route>
          <Route path={`${path}/add-a-property`}>
            <AddProperty />
          </Route>
          <Route path={`${path}/property-fact-find`}>
            <PropertyFactFind />
          </Route>
          <Route path={`${path}/tenancyform`}>
            <TenancyForm />
          </Route>
          <Route path={`${path}/tenancycontactform`}>
            <TenantContactForm />
          </Route>
          <Route path={`${path}/landlordcontactform`}>
            <LandlordContactForm />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
