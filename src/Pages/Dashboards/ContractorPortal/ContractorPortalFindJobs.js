import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";

import { LightningBoltIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import ContractorPortalBiddingJobs from "./ContractorPortalBiddingJobs";
import Swal from "sweetalert2";

const ContractorPortalFindJobs = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [bidforjob, setBidforjob] = useState(false);
  const [singleJob, setSingleJob] = useState({});
  const [findAllJobs, setFindAllJobs] = useState([]);
  const [detailsButton, setDetailsButton] = useState(false);
  const [seeSingleJobDetails, setSeeSingleJobDetails] = useState({});

  useEffect(() => {
    const handleReportsDetails = async () => {
      try {
        const res = await axios.get(
          `https://nuova-property-server.onrender.com/api/contractorJobs`
        );
        setFindAllJobs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleReportsDetails();
  }, []);
  console.log(findAllJobs);

  const seeJobDetails = (singleJob) => {
    setDetailsButton(true);
    setSeeSingleJobDetails(singleJob);
  };

  const handleBidForJob = (seeSingleJobDetails) => {
    if (
      !seeSingleJobDetails.requiredExperience &&
      !seeSingleJobDetails.timeline &&
      !seeSingleJobDetails.perHourIncome
    ) {
      Swal.fire(
        "Attention needed!",
        "Property manager needs to update the fields before you can bid for the job!",
        "error"
      );
    } else {
      setBidforjob(true);
      setSingleJob(seeSingleJobDetails);
    }
  };

  console.log(currentUser.email);
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-12 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
            <ul className="space-y-7">
              <div className="mx-auto max-w-2xl lg:max-w-none mb-4">
                <h2
                  id="testimonial-heading"
                  className="text-2xl font-semibold text-cyan-700 inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    />
                  </svg>
                  <span className="mx-3">Most Relevent Jobs </span>{" "}
                </h2>
              </div>
              {findAllJobs
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((singleJob) => (
                  <li
                    key={singleJob._id}
                    className={`col-span-2 bg-white rounded-lg shadow-xl divide-y divide-gray-200 ${
                      seeSingleJobDetails._id === singleJob._id &&
                      "shadow-green-500/40 "
                    }`}
                  >
                    <div className="w-full flex justify-between px-6 py-6 space-x-6">
                      <img
                        className="w-14 h-14 bg-gray-300 rounded-md flex-shrink-0"
                        src={singleJob.issueImage}
                        alt=""
                      />
                      <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-cyan-700 text-sm font-semibold truncate">
                            Nuova Property Management & Letting Jobs
                          </h3>
                          <span className="flex-shrink-0 inline-block px-2 py-0.5 text-white text-xs font-medium bg-cyan-400 rounded-full">
                            Maintenance Issue
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <h3 className="text-gray-900 text-xl font-semibold truncate">
                            {singleJob.issueName}
                          </h3>
                        </div>
                        <p className="mt-1 text-gray-500 text-sm truncate">
                          {singleJob.tenantAddress}
                        </p>
                        <p className="mt-1 text-gray-500 text-sm truncate">
                          {singleJob.perHourIncome}
                        </p>
                        <div className="mt-3">
                          {singleJob.postBidding === true &&
                            singleJob.contractorBiddingEmail.find(
                              (element) => element === currentUser.email
                            ) && (
                              <span className=" inline-block px-3 py-1 text-white text-xs font-medium bg-green-400 rounded-full">
                                Job Applied
                              </span>
                            )}
                        </div>
                      </div>
                      <div className="flex flex-col justify-between">
                        <button
                          onClick={() => seeJobDetails(singleJob)}
                          className={`mt-2 flex-shrink-0 inline-block px-3 py-2  text-xs font-medium   rounded-md ${
                            seeSingleJobDetails._id === singleJob._id
                              ? "bg-green-500 text-white"
                              : "bg-green-300 text-gray-700"
                          }`}
                        >
                          Details
                        </button>
                        <div className="flex items-center space-x-2">
                          <p className="mt-1 text-gray-500 text-sm truncate">
                            Easy Apply
                          </p>
                          <p className="mt-1 text-gray-500 text-sm truncate">
                            {singleJob.createdAt && (
                              <time>
                                {new Date(
                                  singleJob.createdAt
                                ).toLocaleDateString()}
                              </time>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>

            <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
              <div className="-mt-px flex w-0 flex-1">
                <Link
                  to=""
                  className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  <ArrowNarrowLeftIcon
                    className="mr-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Previous
                </Link>
              </div>
              <div className="hidden md:-mt-px md:flex">
                {/* Current: "border-cyan-500 text-cyan-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                <Link
                  to=""
                  className="inline-flex items-center border-t-2 border-cyan-500 px-4 pt-4 text-sm font-medium text-cyan-600"
                  aria-current="page"
                >
                  1
                </Link>
                <Link
                  href=""
                  className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  2
                </Link>
                <Link
                  to=""
                  className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  3
                </Link>
                <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                  ...
                </span>
                <Link
                  to=""
                  className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  8
                </Link>
                <Link
                  to=""
                  className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  9
                </Link>
                <Link
                  to=""
                  className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  10
                </Link>
              </div>
              <div className="-mt-px flex w-0 flex-1 justify-end">
                <Link
                  to=""
                  className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Next
                  <ArrowNarrowRightIcon
                    className="ml-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </nav>
          </div>

          <div
            className={`${
              detailsButton
                ? "p-8 pt-12 border-2 border-gray-200 rounded-md bg-white shadow-xl shadow-gray-200"
                : "hidden"
            } `}
          >
            <div className="flex justify-between">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-cyan-700 text-sm font-semibold truncate">
                    Nuova Property Management & Letting Jobs
                  </h3>
                  <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    Maintenance Issue
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <h3 className="text-gray-900 text-2xl font-semibold truncate">
                    {seeSingleJobDetails?.issueName}
                  </h3>
                </div>
                <p className="mt-1 text-gray-500 text-sm truncate">
                  {seeSingleJobDetails?.tenantAddress}
                </p>
                <p className="mt-1 text-gray-500 text-sm truncate">
                  {seeSingleJobDetails?.perHourIncome}
                </p>
                <div className="mt-8 text-cyan-700 font-semibold">
                  {seeSingleJobDetails.postBidding === true &&
                    seeSingleJobDetails.contractorBiddingEmail.find(
                      (element) => element === currentUser.email
                    ) && <span className="font-bold">Applied for the job</span>}
                </div>
              </div>
              <div>
                <button
                  type="button"
                  disabled={
                    seeSingleJobDetails.postBidding === true &&
                    seeSingleJobDetails.contractorBiddingEmail.find(
                      (element) => element === currentUser.email
                    )
                  }
                  onClick={() => handleBidForJob(seeSingleJobDetails)}
                  className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:cursor-not-allowed"
                >
                  <LightningBoltIcon
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  Bid for Job
                </button>
              </div>
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-xl mt-8">
              Task Summary :{" "}
            </h2>
            <p className="mt-4 text-gray-500">
              {seeSingleJobDetails?.issueDesc ?? "N/A"}
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Issue</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {seeSingleJobDetails?.issueName}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Work Hour Rate</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {seeSingleJobDetails?.perHourIncome}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Location</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {seeSingleJobDetails?.tenantAddress}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Timeline</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {seeSingleJobDetails?.timeline}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Required Experience
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {seeSingleJobDetails?.requiredExperience ?? "N/A"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <ContractorPortalBiddingJobs
        open={bidforjob}
        setOpen={setBidforjob}
        singleJob={singleJob}
      />
    </>
  );
};

export default ContractorPortalFindJobs;
