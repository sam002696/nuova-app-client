import React, { useEffect, useState } from "react";
import { ExclamationIcon } from "@heroicons/react/solid";
import { ClipboardCheckIcon } from "@heroicons/react/solid";

import axios from "axios";

import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { tr } from "date-fns/locale";

const tabs = [
  {
    name: "Contractor Bidding Info",
    href: "#",
    icon: ClipboardCheckIcon,
    current: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const LandlordPortalMaintenance = () => {
  const [openModal, setOpenModal] = useState(false);
  const [actionButton, setActionButton] = useState({});
  const [clickOnReport, setClickOnReport] = useState({});
  const [singleReport, setSingleReport] = useState({});
  const [viewContractorBidding, setViewContractorBidding] = useState({});
  const [singleUpdateReport, setSingleUpdateReport] = useState(false);
  const [singleUpdateModalReport, setSingleUpdateModalReport] = useState({});
  const [maintenanceReports, setMaintenanceReports] = useState([]);
  const [viewIssue, setViewIssue] = useState(false);

  // Loading states

  const [assignJobLoading, setAssignJobLoading] = useState(false);
  const [declineJobLoading, setDeclineJobLoading] = useState(false);
  const [completeJobLoading, setCompleteJobLoading] = useState(false);
  const [incompleteJobLoading, setIncompleteJobLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const handleReportsDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5500/api/reports?landlordemail=${currentUser.email}`
        );
        console.log(res.data);
        setMaintenanceReports(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleReportsDetails();
  }, [currentUser.email]);

  const handleReport = (report) => {
    setOpenModal(true);
    setSingleReport(report);
  };

  const handleView = (report) => {
    setViewContractorBidding(report);
    setActionButton({});
    setViewIssue(true);
    setClickOnReport(report);
  };

  const handleUpdateReport = (report) => {
    setSingleUpdateReport(true);
    setSingleUpdateModalReport(report);
  };

  const handleActionButton = (bidding) => {
    setActionButton(bidding);
  };

  const handleAssignJob = async (reportid, biddingid) => {
    setAssignJobLoading(true);
    try {
      const res = await axios.put(
        `http://localhost:5500/api/reports/acceptoffer/${reportid}/${biddingid}`
      );
      if (res.data) {
        setAssignJobLoading(false);
        Swal.fire("", "The job has been assigned!", "success");
        window.location.reload(false);
      }
    } catch (err) {
      setAssignJobLoading(false);
      console.log(err);
    }
  };

  const handleDeclineJob = async (reportid, biddingid) => {
    setDeclineJobLoading(true);
    try {
      const res = await axios.put(
        `http://localhost:5500/api/reports/declineoffer/${reportid}/${biddingid}`
      );
      if (res.data) {
        setDeclineJobLoading(false);
        Swal.fire("", "The job has been declined!", "error");
        window.location.reload(false);
      }
    } catch (err) {
      setDeclineJobLoading(false);
      console.log(err);
    }
  };

  const handleCompletedJob = async (reportid, biddingid) => {
    setCompleteJobLoading(true);
    try {
      const res = await axios.put(
        `http://localhost:5500/api/reports/completejob/${reportid}/${biddingid}`
      );
      if (res.data) {
        setCompleteJobLoading(false);
        Swal.fire("", "Job is completed!", "success");
        window.location.reload(false);
      }
    } catch (err) {
      setCompleteJobLoading(false);
      console.log(err);
    }
  };

  const handleIncompletedJob = async (reportid, biddingid) => {
    setIncompleteJobLoading(true);
    try {
      setIncompleteJobLoading(false);
      const res = await axios.put(
        `http://localhost:5500/api/reports/incompletejob/${reportid}/${biddingid}`
      );
      if (res.data) {
        Swal.fire("", "Job is incomplete!", "info");
        window.location.reload(true);
      }
    } catch (err) {
      setIncompleteJobLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      <div className=" max-w-9xl mx-auto mt-10 pb-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="sr-only">Profile</h1>

          <div className="text-center mb-14">
            <h2 className="text-2xl font-semibold  sm:text-3xl  text-cyan-800">
              All Maintenance Reports
            </h2>
          </div>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div
              className={`${
                viewIssue
                  ? "grid grid-cols-1 lg:col-span-1 gap-y-5"
                  : "grid grid-cols-3 lg:col-span-3 gap-8"
              }`}
            >
              {maintenanceReports
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((report) => (
                  <ul key={report._id} className="space-y-5">
                    <li
                      className={`${
                        clickOnReport._id === report._id
                          ? "bg-yellow-50"
                          : "bg-white"
                      } col-span-1  rounded-lg shadow-md divide-y divide-gray-200`}
                    >
                      <div className="w-full flex items-center justify-between px-6 py-5 space-x-6">
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
                            <button
                              onClick={() => handleReport(report)}
                              disabled={currentUser?.role === "Landlord"}
                              className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full disabled:cursor-not-allowed"
                            >
                              {report.post === true ? "Posted" : "Post Pending"}
                            </button>
                            <button
                              onClick={() => handleView(report)}
                              className="flex-shrink-0 inline-block px-2 py-0.5 text-gray-800 text-xs font-medium bg-yellow-100 rounded-full"
                            >
                              View
                            </button>
                          </div>

                          <p className="mt-1 text-gray-500 text-sm truncate">
                            {report.username}
                          </p>
                          <p className="mt-1 text-gray-500 text-sm truncate">
                            {report.email} / {report.phoneNo}
                          </p>
                          <p className="mt-1 text-gray-500 text-sm truncate">
                            {report.tenantAddress}
                          </p>
                          {/* <button
                            onClick={() => handleUpdateReport(report)}
                            className="flex-shrink-0 inline-block px-2 py-0.5 text-gray-800 text-xs font-medium bg-orange-200 rounded mt-2"
                          >
                            Update Maintenance Report
                          </button> */}
                        </div>
                      </div>
                    </li>
                  </ul>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:col-span-2">
              {/* Second Column 1st row issue heading */}

              <div
                className={`${
                  viewIssue
                    ? "relative bg-[#0f2e5a] rounded-md shadow-md divide-y divide-gray-200"
                    : "hidden"
                }`}
              >
                <div className="h-56 bg-[#0f2e5a] sm:h-64 md:absolute md:left-0 md:h-full md:w-1/2 rounded-md">
                  <img
                    className="h-full w-full object-cover rounded-tl-lg rounded-bl-lg"
                    src={viewContractorBidding?.issueImage}
                    alt=""
                  />
                </div>
                <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                  <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 className="text-lg font-semibold text-gray-300">
                      Maintenance Report
                    </h2>
                    <p className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                      Issue Name : {viewContractorBidding?.issueName}
                    </p>
                    <p className="mt-3 text-md text-gray-300">
                      Issue Description : {viewContractorBidding?.issueDesc}
                    </p>
                    <p className="mt-2 text-md text-gray-300">
                      Tenant Address : {viewContractorBidding?.tenantAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabs Events and Task Description */}

              <div className={`${viewIssue ? "sm:hidden mb-8" : "hidden"}`}>
                <label htmlFor="tabs" className="sr-only">
                  Select a tab
                </label>

                <select
                  id="tabs"
                  name="tabs"
                  className="block w-full  rounded-md"
                  defaultValue={tabs.find((tab) => tab.current).name}
                >
                  {tabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
              </div>
              <div
                className={`${
                  viewIssue ? "hidden sm:block mb-8 mt-5" : "hidden"
                }`}
              >
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map((tab) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        className={classNames(
                          tab.current
                            ? "border-cyan-500 text-cyan-600"
                            : "border-transparent text-gray-500 hover:text-gray-700",
                          "group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
                        )}
                        aria-current={tab.current ? "page" : undefined}
                      >
                        <tab.icon
                          className={classNames(
                            tab.current
                              ? "text-cyan-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "-ml-0.5 mr-2 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        <span>{tab.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Middle column */}

                {viewContractorBidding?.contracBiddingInfo?.length !== 0 ? (
                  <ul className="space-y-4">
                    {viewContractorBidding?.contracBiddingInfo?.map(
                      (bidding) => (
                        <li
                          key={bidding.email}
                          className="col-span-1 bg-white rounded-lg shadow-md  divide-y divide-gray-200"
                        >
                          <div className="w-full flex items-center justify-between px-6 py-10 space-x-6 hover:bg-gray-50 transition">
                            <img
                              className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"
                              src="https://cdn5.vectorstock.com/i/1000x1000/00/59/avatar-construction-man-graphic-vector-9650059.jpg"
                              alt=""
                            />
                            <div className="flex-1 truncate">
                              <div className="flex items-center space-x-3">
                                <h3 className="text-gray-900 text-xl font-semibold truncate">
                                  {bidding.contractorName}
                                </h3>
                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-yellow-800 text-xs font-medium bg-yellow-100 rounded-full">
                                  Contractor
                                </span>
                              </div>
                              <p className="mt-1 text-gray-500 text-sm truncate">
                                {bidding.contractorEmail}
                              </p>
                              <p className="mt-3 text-gray-500 text-sm truncate">
                                {bidding.desc}
                              </p>
                              <div className=" font-bold  mt-2 flex flex-col  text-xs space-y-2">
                                {bidding.offerDeclined === true && (
                                  <h1 className="text-red-600 bg-red-100 mr-auto px-2 py-1 rounded-md">
                                    Job Declined.
                                  </h1>
                                )}
                                {bidding.offerAccepted === true && (
                                  <h1 className="text-green-600 bg-green-100 mr-auto px-2 py-1 rounded-md">
                                    Job Assigned.
                                  </h1>
                                )}
                                {bidding.incompletedJob === true && (
                                  <h1 className="text-yellow-600 bg-yellow-100 mr-auto px-2 py-1 rounded-md">
                                    Job Incompleted!
                                  </h1>
                                )}
                                {bidding.completedJob === true && (
                                  <h1 className="text-blue-500 bg-blue-100 mr-auto px-2 py-1 rounded-md">
                                    Job Completed !
                                  </h1>
                                )}
                              </div>
                            </div>
                            <div className=" truncate">
                              <p className="flex-shrink-0 mt-1 text-gray-500 text-lg font-bold truncate">
                                {" "}
                                &#163;{bidding.BiddingAmount}
                              </p>
                              <button
                                onClick={() => handleActionButton(bidding)}
                                className="bg-cyan-200 px-2 py-1 rounded-md text-sm mt-2 font-bold text-cyan-600"
                              >
                                Details
                              </button>
                            </div>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <div className="rounded-md bg-yellow-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <ExclamationIcon
                          className="h-10 w-10 text-yellow-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-bold tracking-wide text-yellow-800">
                          Attention needed
                        </h3>
                        <div className="mt-2 text-base text-yellow-700 font-medium">
                          <p>No contractor bidding for this job yet!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Last Column */}

                <div
                  className={`${
                    actionButton?._id && viewContractorBidding
                      ? " col-span-1"
                      : "hidden"
                  } `}
                >
                  <div className="space-y-4">
                    <div className=" bg-gray-100 rounded-lg shadow-md shadow-gray-500/50 divide-gray-200">
                      <div className="w-full flex items-center justify-between px-6 py-5 space-x-6">
                        <img
                          className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0"
                          src="https://cdn5.vectorstock.com/i/1000x1000/00/59/avatar-construction-man-graphic-vector-9650059.jpg"
                          alt=""
                        />
                        <div className="flex-1 truncate">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-gray-900 text-xl font-semibold truncate">
                              {actionButton.contractorName}
                            </h3>
                            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-yellow-800 text-xs font-medium bg-yellow-100 rounded-full">
                              Contractor
                            </span>
                          </div>
                          <p className="mt-1 text-gray-500 text-sm truncate">
                            {actionButton.contractorEmail}
                          </p>
                          <p className="mt-1 text-gray-500 text-sm truncate">
                            {actionButton.contractorPhone} /{" "}
                            {actionButton.contractorChatUserId}
                          </p>
                        </div>
                      </div>
                      <div className="px-6 py-5 space-y-4">
                        <div className="bg-white rounded-md px-4 py-5 space-y-3">
                          <p className=" text-slate-400 text-lg font-medium">
                            {actionButton.desc}
                          </p>
                          <p className=" text-sm text-gray-400">
                            {actionButton.createdAt && (
                              <time>
                                {new Date(
                                  actionButton.createdAt
                                ).toLocaleDateString()}
                              </time>
                            )}
                          </p>
                        </div>

                        <div className="space-y-3 divide-y">
                          <div
                            className={`${
                              actionButton?.offerDeclined === true
                                ? "hidden"
                                : " text-green-600 bg-green-200 text-lg font-bold px-4 py-5 rounded-md "
                            }`}
                          >
                            <button
                              disabled={
                                currentUser?.role === "Landlord" ||
                                actionButton?.offerAccepted === true ||
                                viewContractorBidding?.assignedContractor
                                  ?.contractorEmail ||
                                assignJobLoading
                              }
                              onClick={() =>
                                handleAssignJob(
                                  viewContractorBidding?._id,
                                  actionButton?._id
                                )
                              }
                              className="disabled:cursor-not-allowed"
                            >
                              {actionButton?.offerAccepted === true
                                ? "Job Assigned"
                                : assignJobLoading
                                ? "Assigning Job..."
                                : "Assign Job"}
                            </button>
                          </div>
                          <div
                            className={`${
                              actionButton?.offerAccepted === true
                                ? "hidden"
                                : " text-red-600 bg-red-200 text-lg font-bold px-4 py-5 rounded-md"
                            }`}
                          >
                            <button
                              disabled={
                                currentUser?.role === "Landlord" ||
                                actionButton?.offerDeclined === true ||
                                declineJobLoading
                              }
                              onClick={() =>
                                handleDeclineJob(
                                  viewContractorBidding?._id,
                                  actionButton?._id
                                )
                              }
                              className=" disabled:cursor-not-allowed"
                            >
                              {actionButton?.offerDeclined === true
                                ? "Job Declined!"
                                : declineJobLoading
                                ? "Declining Job..."
                                : "Decline Job"}
                            </button>
                          </div>
                        </div>

                        {actionButton?.offerAccepted === true && (
                          <>
                            <div
                              className={`${
                                actionButton?.incompletedJob === true
                                  ? "hidden"
                                  : "bg-blue-200 text-blue-500 rounded-md px-4 py-5 space-y-3 text-lg font-bold"
                              }`}
                            >
                              <button
                                disabled={
                                  currentUser?.role === "Landlord" ||
                                  actionButton?.completedJob === true ||
                                  completeJobLoading
                                }
                                onClick={() =>
                                  handleCompletedJob(
                                    viewContractorBidding?._id,
                                    actionButton?._id
                                  )
                                }
                                className=" disabled:cursor-not-allowed"
                              >
                                {actionButton?.completedJob === true
                                  ? "Job Completed!"
                                  : completeJobLoading
                                  ? "Completing..."
                                  : "Complete"}
                              </button>
                            </div>
                            <div
                              className={`${
                                actionButton?.completedJob === true
                                  ? "hidden"
                                  : "text-yellow-600 bg-yellow-200 rounded-md px-4 py-5 space-y-3 font-bold text-lg"
                              }`}
                            >
                              <button
                                disabled={
                                  currentUser?.role === "Landlord" ||
                                  actionButton?.incompletedJob === true ||
                                  incompleteJobLoading
                                }
                                onClick={() =>
                                  handleIncompletedJob(
                                    viewContractorBidding?._id,
                                    actionButton?._id
                                  )
                                }
                                className=" disabled:cursor-not-allowed"
                              >
                                {actionButton?.incompletedJob === true
                                  ? "Job Incomplete!"
                                  : incompleteJobLoading
                                  ? "Incompleting..."
                                  : "Incomplete"}
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandlordPortalMaintenance;
