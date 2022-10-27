import React from "react";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import {
  ClipboardCheckIcon,
  BriefcaseIcon,
  ChartPieIcon,
  AdjustmentsIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/solid";
import CurrentJobs from "./ContractorJobs/CurrentJobs";
import CompleteJobs from "./ContractorJobs/CompleteJobs";
import InprogressJobs from "./ContractorJobs/InprogressJobs";
import DeclinedJobs from "./ContractorJobs/DeclinedJobs";
import IncompleteJobs from "./ContractorJobs/IncompleteJobs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ContractorPortalMyJobs = () => {
  let { path, url } = useRouteMatch();
  const tabs = [
    {
      name: "Current jobs",
      to: `${url}`,
      href: "#",
      icon: BriefcaseIcon,
      current: false,
    },
    {
      name: "complete",
      href: "#",
      to: `${url}/complete`,
      icon: ClipboardCheckIcon,
      current: false,
    },
    {
      name: "incomplete",
      to: `${url}/incomplete`,
      href: "#",
      icon: ChartPieIcon,
      current: false,
    },
    {
      name: "in-progress",
      href: "#",
      to: `${url}/in-progress`,
      icon: AdjustmentsIcon,
      current: true,
    },
    {
      name: "declined",
      href: "#",
      to: `${url}/declined`,
      icon: ShieldExclamationIcon,
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
              <CurrentJobs />
            </Route>
            <Route path={`${path}/complete`}>
              <CompleteJobs />
            </Route>
            <Route path={`${path}/incomplete`}>
              <IncompleteJobs />
            </Route>
            <Route path={`${path}/in-progress`}>
              <InprogressJobs />
            </Route>
            <Route path={`${path}/declined`}>
              <DeclinedJobs />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default ContractorPortalMyJobs;
