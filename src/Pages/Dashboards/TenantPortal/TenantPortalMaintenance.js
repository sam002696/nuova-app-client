import React, { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  UserCircleIcon,
  ClipboardListIcon,
  ChatIcon,
  PhoneIcon,
  InboxIcon,
} from "@heroicons/react/solid";
import TenantMaintenanceModal from "./TenantMaintenanceModal";
import { useSelector } from "react-redux";
import axios from "axios";

const TenantPortalMaintenance = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [tenantReports, setTenantReports] = useState([]);
  const [open, setOpen] = useState(false);
  const [singleTracking, setSingleTracking] = useState({});
  const timeline = [
    singleTracking?.Timeline?.taskOne?.maintenanceReq === true && {
      id: 1,
      content: "Maintenance Request sent to",
      target: "Property Manager",
      task: singleTracking?.Timeline?.taskOne?.maintenanceReq,
      date: singleTracking?.Timeline?.taskOne?.createdAt,
      datetime: "2020-09-20",
      icon: ArrowRightIcon,
      iconBackground: "bg-cyan-300",
    },
    singleTracking?.Timeline?.taskTwo?.postJob === true && {
      id: 2,
      content: "Request accepted and processed by",
      target: "Property Manager ",
      task: singleTracking?.Timeline?.taskTwo?.postJob,
      date: singleTracking?.Timeline?.taskTwo?.createdAt,
      datetime: "2020-09-20",
      icon: CheckCircleIcon,
      iconBackground: "bg-sky-400",
    },
    // "Job assigned to contractor by"
    singleTracking?.Timeline?.taskThree?.assignJob === true && {
      id: 3,
      content:
        singleTracking?.assignedContractor?.offerAccepted === true
          ? "Job assigned to contractor by"
          : singleTracking?.assignedContractor?.incompletedJob === true &&
            "Job was incompleted and new contractor will be assigned",
      target: "Property Manager",
      task: singleTracking?.Timeline?.taskThree?.assignJob,
      date: singleTracking?.Timeline?.taskThree?.createdAt,
      datetime: "2020-09-22",
      icon: UserCircleIcon,
      iconBackground: "bg-green-500",
    },
    singleTracking?.Timeline?.taskFour?.completeJob === true && {
      id: 4,
      content: "Advance to check completion by",
      target: "Property Manager",
      task: singleTracking?.Timeline?.taskFour?.completeJob,
      date: singleTracking?.Timeline?.taskFour?.createdAt,
      datetime: "2020-09-24",
      icon: ClipboardListIcon,
      iconBackground: "bg-blue-500",
    },
  ];

  useEffect(() => {
    const handleReportsDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5500/api/reports?email=${currentUser.email}`
        );
        setTenantReports(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleReportsDetails();
  }, [currentUser.email]);

  const handleTracking = (report) => {
    setSingleTracking(report);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  console.log(tenantReports);
  return (
    <>
      <div className="">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden bg-white mb-12">
            {/* Decorative background image and gradient */}
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
                <img
                  src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
            </div>

            {/* Callout */}
            <section
              aria-labelledby="sale-heading"
              className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 text-center sm:px-6 lg:px-8"
            >
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <h2
                  id="sale-heading"
                  className="text-4xl font-bold tracking-tight text-cyan-700 sm:text-5xl lg:text-6xl"
                >
                  Maintenance becomes easy with Nuova.
                </h2>

                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="mt-12

                  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  focus:outline-none  shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-8 py-4 text-center mr-2 mb-2"
                >
                  Send A Maintenance Request
                </button>
              </div>
            </section>

            {/* Testimonials */}
          </div>

          <div className="grid grid-cols-3 gap-10 py-10  xl:px-8">
            <div className="grid grid-cols-1 lg:col-span-2 ">
              <ul className="space-y-5">
                <div className="mx-auto max-w-2xl lg:max-w-none mb-4">
                  <h2
                    id="testimonial-heading"
                    className="text-4xl text-center font-semibold tracking-wider text-cyan-700"
                  >
                    Maintenance Issues{" "}
                  </h2>
                </div>
                {tenantReports
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((report) => (
                    <li
                      key={report._id}
                      className={`${
                        singleTracking._id === report._id &&
                        "shadow-md shadow-green-500/50 "
                      }col-span-2 bg-white rounded-lg shadow-md divide-y divide-gray-200`}
                    >
                      <div className="w-full flex items-center justify-between px-6 py-6 space-x-6">
                        <img
                          className="w-14 h-14 bg-gray-300 rounded-md flex-shrink-0"
                          src={report.issueImage}
                          alt=""
                        />
                        <div className="flex-1 truncate">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-gray-900 text-xl font-semibold truncate">
                              {report.issueName}
                            </h3>
                            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                              Maintenance
                            </span>
                          </div>
                          <p className="mt-1 text-gray-500 text-sm truncate">
                            {report.tenantAddress}
                          </p>
                          <p className="mt-1 text-gray-500 text-sm truncate">
                            Issue Created : {report.createdAt}
                          </p>
                        </div>
                        <div className="flex-1 truncate">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-gray-900 text-md font-semibold truncate">
                              {report.username}
                            </h3>
                            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-cyan-30000 text-xs font-medium bg-sky-200 rounded-md">
                              Tenant
                            </span>
                          </div>
                          <p className="mt-1 text-gray-500 text-sm truncate">
                            {report.email}
                          </p>
                          <p className="mt-1 text-gray-500 text-sm truncate">
                            {report.phoneNo}
                          </p>
                        </div>
                        <div className="">
                          <button
                            onClick={() => handleTracking(report)}
                            className={`${
                              singleTracking._id === report._id &&
                              "bg-green-500 "
                            }mt-2 flex-shrink-0 inline-block px-3 py-2 bg-cyan-500 text-xs font-medium text-white border shadow-md rounded-md`}
                          >
                            Tracking
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 lg:col-span-1 ">
              <div className="mx-auto max-w-2xl pb-20">
                <div className="mx-auto max-w-2xl lg:max-w-none mb-12">
                  <h2
                    id="testimonial-heading"
                    className="text-2xl text-center font-semibold tracking-wider text-cyan-700"
                  >
                    Progress of Maintenance Request{" "}
                  </h2>
                </div>
                <div className="flow-root">
                  <ul className="-mb-8">
                    {timeline.filter(Boolean).map((event, eventIdx) => (
                      <li key={event.id}>
                        <div className="relative pb-8">
                          {eventIdx !== timeline.length - 1 ? (
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span
                                className={classNames(
                                  event.iconBackground,
                                  "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                                )}
                              >
                                <event.icon
                                  className="h-5 w-5 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            <div className=" min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                              <div>
                                <p className="text-sm text-gray-500">
                                  {event.content}{" "}
                                  <a
                                    href={event.href}
                                    className="font-medium text-gray-900"
                                  >
                                    {event.target}
                                  </a>
                                </p>

                                {event.content ===
                                  "Job assigned to contractor by" && (
                                  <>
                                    <div className="lg:col-start-3 lg:row-end-1 mt-5">
                                      <h2 className="sr-only">
                                        Contractor Assign Info
                                      </h2>
                                      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                                        <dl className="flex flex-wrap">
                                          <div className="flex-auto pl-6 pt-6">
                                            <dt className="text-sm font-semibold leading-6 text-gray-900">
                                              Contractor Assign Info
                                            </dt>
                                            {/* <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
                                              Bidding Amount : £
                                              {
                                                singleTracking
                                                  ?.assignedContractor
                                                  ?.BiddingAmount
                                              }
                                            </dd> */}
                                          </div>
                                          {/* <div className="flex-none self-end px-6 pt-4">
                                            <dt className="sr-only">Status</dt>
                                            <dd className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-green-600/20">
                                              Not Paid
                                            </dd>
                                          </div> */}
                                          <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                            <dt className="flex-none">
                                              <span className="sr-only">
                                                Contractor Name
                                              </span>
                                              <UserCircleIcon
                                                className="h-6 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                            </dt>
                                            <dd className="text-sm font-medium leading-6 text-gray-900">
                                              {
                                                singleTracking
                                                  ?.assignedContractor
                                                  ?.contractorName
                                              }
                                            </dd>
                                          </div>
                                          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                            <dt className="flex-none">
                                              <span className="sr-only">
                                                Contractor Email
                                              </span>
                                              <InboxIcon
                                                className="h-6 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                            </dt>
                                            <dd className="text-sm font-medium leading-6 text-gray-900">
                                              {
                                                singleTracking
                                                  ?.assignedContractor
                                                  ?.contractorEmail
                                              }
                                            </dd>
                                          </div>
                                          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                            <dt className="flex-none">
                                              <span className="sr-only">
                                                Chat
                                              </span>
                                              <ChatIcon
                                                className="h-6 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                            </dt>
                                            <dd className="text-sm font-medium leading-6 text-gray-900">
                                              {
                                                singleTracking
                                                  ?.assignedContractor
                                                  ?.contractorChatUserId
                                              }
                                            </dd>
                                          </div>
                                          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                            <dt className="flex-none">
                                              <span className="sr-only">
                                                Phone No
                                              </span>
                                              <PhoneIcon
                                                className="h-6 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                            </dt>
                                            <dd className="text-sm font-medium leading-6 text-gray-900">
                                              {
                                                singleTracking
                                                  ?.assignedContractor
                                                  ?.contractorPhone
                                              }
                                            </dd>
                                          </div>
                                        </dl>
                                        {/* <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                                          <a
                                            href="#"
                                            className="text-sm font-semibold leading-6 text-gray-900"
                                          >
                                            Download receipt{" "}
                                            <span aria-hidden="true">
                                              &rarr;
                                            </span>
                                          </a>
                                        </div> */}
                                      </div>
                                    </div>
                                  </>
                                )}
                              </div>
                              <div className="whitespace-nowrap text-right text-sm text-gray-500 mt-3">
                                {event.date && (
                                  <time>
                                    {new Date(event.date).getFullYear()}-
                                    {new Date(event.date).getMonth()}-
                                    {new Date(event.date).getDate()} :{" "}
                                    {new Date(event.date).toLocaleTimeString(
                                      "en-GB",
                                      { timeZone: "Europe/London" }
                                    )}
                                  </time>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TenantMaintenanceModal setOpen={setOpen} open={open} />
      </div>
    </>
  );
};

export default TenantPortalMaintenance;
