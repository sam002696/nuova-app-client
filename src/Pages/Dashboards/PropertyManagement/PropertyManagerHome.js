import React from "react";
import {
  AcademicCapIcon,
  EyeIcon,
  ClockIcon,
  ReceiptRefundIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: ClockIcon,
    name: "Tasks",
    href: "#",
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    backgroundColor: "bg-green-100",
  },
  {
    icon: EyeIcon,
    name: "Maintenance",
    href: "#",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    backgroundColor: "bg-purple-100",
  },

  {
    icon: ReceiptRefundIcon,
    name: "Calender Events",
    href: "#",
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    backgroundColor: "bg-red-100",
  },
  {
    icon: AcademicCapIcon,
    name: "Inbox",
    href: "#",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    backgroundColor: "bg-blue-100",
  },
];

const announcements = [
  {
    id: 1,
    title: "Office closed on July 2nd",
    href: "#",
    preview:
      "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
  },
  {
    id: 2,
    title: "New password policy",
    href: "#",
    preview:
      "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
  },
  {
    id: 3,
    title: "Office closed on July 2nd",
    href: "#",
    preview:
      "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const PropertyManagerHome = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <main className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:max-w-10xl lg:px-8 py-10">
          <h1 className="sr-only">Profile</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              {/* Welcome panel */}
              <section aria-labelledby="profile-overview-title">
                <div className="rounded-lg bg-white overflow-hidden shadow-md">
                  <h2 className="sr-only" id="profile-overview-title">
                    Profile Overview
                  </h2>
                  <div className=" bg-gradient-to-tr from-gray-200 to bg-slate-200 p-6">
                    <div className="sm:flex sm:items-center sm:justify-between">
                      <div className="sm:flex sm:space-x-5">
                        <div className="flex-shrink-0">
                          {currentUser?.profilePic ? (
                            <img
                              className="h-20 w-20 rounded-full mx-auto"
                              src={
                                currentUser?.profilePic &&
                                currentUser?.profilePic
                              }
                              alt=""
                            />
                          ) : (
                            <span className="inline-block h-20 w-20 mx-auto overflow-hidden rounded-full bg-gray-100">
                              <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                          )}
                        </div>
                        <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                          <p className="text-sm font-medium text-gray-600">
                            Welcome back,
                          </p>
                          <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {currentUser.username}
                          </p>
                          <p className="text-sm font-medium text-gray-600">
                            {currentUser.role}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 flex justify-center sm:mt-0">
                        <Link
                          to="/property-manager-dashboard/profile"
                          className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          View profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Actions panel */}
              <section aria-labelledby="quick-links-title">
                <div className="rounded-lg   divide-y  sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                  <h2 className="sr-only" id="quick-links-title">
                    Quick links
                  </h2>
                  {actions.map((action, actionIdx) => (
                    <div
                      key={action.name}
                      className={classNames(
                        actionIdx === 0
                          ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                          : "",
                        actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                        actionIdx === actions.length - 2
                          ? "sm:rounded-bl-lg"
                          : "",
                        actionIdx === actions.length - 1
                          ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                          : "",
                        `relative group ${action.backgroundColor}  p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500 shadow-md shadow-gray-400/40`
                      )}
                    >
                      <div>
                        <span
                          className={classNames(
                            action.iconBackground,
                            action.iconForeground,
                            "rounded-lg inline-flex p-3 ring-4 ring-white"
                          )}
                        >
                          <action.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-lg font-medium">
                          <a href={action.href} className="focus:outline-none">
                            {/* Extend touch target to entire panel */}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            {action.name}
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 ml-2">
                              <svg
                                className="-ml-0.5 mr-1.5 h-2 w-2 text-blue-400"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                              >
                                <circle cx={4} cy={4} r={3} />
                              </svg>
                              15
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          Doloribus dolores nostrum quia qui natus officia quod
                          et dolorem. Sit repellendus qui ut at blanditiis et
                          quo et molestiae.
                        </p>
                      </div>
                      <span
                        className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              {/* Announcements */}
              <section aria-labelledby="announcements-title">
                <div className="rounded-lg bg-yellow-50 overflow-hidden shadow-md">
                  <div className="p-6">
                    <h2
                      className="text-base font-medium text-gray-900"
                      id="announcements-title"
                    >
                      Important Notices
                    </h2>
                    <div className="flow-root mt-6">
                      <ul className="-my-5 divide-y divide-gray-200">
                        {announcements.map((announcement) => (
                          <li key={announcement.id} className="py-5">
                            <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                              <h3 className="text-sm font-semibold text-gray-800">
                                <a
                                  href={announcement.href}
                                  className="hover:underline focus:outline-none"
                                >
                                  {/* Extend touch target to entire panel */}
                                  <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />
                                  {announcement.title}
                                </a>
                              </h3>
                              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                                {announcement.preview}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link
                        to="#"
                        className="w-full flex justify-center items-center px-4 py-2 border border-amber-300 shadow-sm text-sm font-medium rounded-md text-amber-700 bg-amber-200 hover:bg-gray-50"
                      >
                        View all
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PropertyManagerHome;
