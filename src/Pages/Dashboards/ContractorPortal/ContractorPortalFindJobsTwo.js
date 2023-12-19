import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ContractorPortalBiddingJobs from "./ContractorPortalBiddingJobs";

const ContractorPortalFindJobsTwo = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [bidforjob, setBidforjob] = useState(false);
  const [singleJob, setSingleJob] = useState({});
  const [findAllJobs, setFindAllJobs] = useState([]);

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

  const handleBidForJob = (job) => {
    setBidforjob(true);
    setSingleJob(job);
  };

  console.log(currentUser.email);
  return (
    <>
      <div className="max-w-5xl mx-auto py-10">
        <p className="text-center font-semibold text-2xl underline underline-offset-4 pb-5">
          Contractor Jobs
        </p>

        <div className="mt-5 text-center space-y-3">
          {findAllJobs?.map((job) => (
            <>
              <div className=" grid grid-cols-6 justify-center">
                <button className="bg-emerald-100 w-full mx-auto p-4 text-lg font-medium cursor-pointer disabled:cursor-not-allowed flex flex-col items-center col-span-5">
                  <div>{job.issueName}</div>
                  <div>
                    timline :{" "}
                    <span className=" text-green-600"> {job.timeline}</span>
                  </div>

                  <span className=" ml-5 text-red-500">
                    {job.postBidding === true &&
                      job.contractorBiddingEmail.find(
                        (element) => element === currentUser.email
                      ) &&
                      "Applied for the job"}
                  </span>
                </button>

                <button
                  disabled={
                    job.postBidding === true &&
                    job.contractorBiddingEmail.find(
                      (element) => element === currentUser.email
                    )
                  }
                  onClick={() => handleBidForJob(job)}
                  className=" col-span-1 bg-blue-200 disabled:cursor-not-allowed"
                >
                  Bid for the job
                </button>
              </div>
            </>
          ))}
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

export default ContractorPortalFindJobsTwo;
