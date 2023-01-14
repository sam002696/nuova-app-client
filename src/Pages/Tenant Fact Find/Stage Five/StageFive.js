import React, { useState } from "react";

const StageFive = ({ register, watch }) => {
  const payslips = 3;
  const bankStatements = 3;
  const [uploadedPaySlipFiles, setUploadedPayslipFiles] = useState([]);
  const [uploadedBankStatmentFiles, setUploadedBankStatementFiles] = useState(
    []
  );
  const [paySlipFileLimit, setPaySlipFileLimit] = useState(false);
  const [bankStatmentFileLimit, setBankStatmentFileLimit] = useState(false);

  const handleUploadPayslipsFiles = (files) => {
    const uploaded = [...uploadedPaySlipFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === payslips) setPaySlipFileLimit(true);
        if (uploaded.length > payslips) {
          alert(`You can only add a maximum of ${payslips} files`);
          setPaySlipFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedPayslipFiles(uploaded);
  };

  const handleUploadBankStatementFiles = (files) => {
    const uploaded = [...uploadedBankStatmentFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === bankStatements) setBankStatmentFileLimit(true);
        if (uploaded.length > bankStatements) {
          alert(`You can only add a maximum of ${bankStatements} files`);
          setBankStatmentFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedBankStatementFiles(uploaded);
  };

  const handleUploadPayslipEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadPayslipsFiles(chosenFiles);
  };

  const handleUploadBankStatmentEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadBankStatementFiles(chosenFiles);
  };

  const watchGuarantor = watch("guarantor");
  return (
    <>
      <p className=" text-lg  font-semibold pt-5 underline underline-offset-4">
        Guarantor Details
      </p>

      <div className=" grid grid-cols-2 gap-5 pt-5">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            I will be using a guarantor
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register("guarantor")}
          >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {watchGuarantor === "Yes" && (
          <>
            <div className="col-span-1">
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-700"
              >
                Credit check or proof of credit score
              </label>
              <div className="mt-1">
                <input
                  type="file"
                  name="project-name"
                  id="project-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500   file:text-white focus:outline-none focus:border-gray-500 block w-full file:p-2 file:border-none  file:focus:border-gray-500 "
                />
              </div>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-700"
              >
                3 most recent payslips (MAX-3)
              </label>
              <div className="mt-1">
                <input
                  id="fileUpload"
                  type="file"
                  multiple
                  accept="application/pdf, image/png"
                  name="project-name"
                  onChange={handleUploadPayslipEvent}
                  disabled={paySlipFileLimit}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500   file:text-white focus:outline-none focus:border-gray-500 block w-full file:p-2 file:border-none  file:focus:border-gray-500 disabled:cursor-not-allowed"
                />
              </div>
              {uploadedPaySlipFiles.length !== 0 && (
                <div className=" border mt-3 p-5 space-y-3 bg-gray-500 text-white rounded-md text-base">
                  {uploadedPaySlipFiles.map((file) => (
                    <div>{file.name}</div>
                  ))}
                </div>
              )}
            </div>

            <div className="col-span-1">
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-700"
              >
                3 most recent bank statements(MAX-3)
              </label>
              <div className="mt-1">
                <input
                  id="fileUpload"
                  type="file"
                  multiple
                  accept="application/pdf, image/png"
                  name="project-name"
                  onChange={handleUploadBankStatmentEvent}
                  disabled={bankStatmentFileLimit}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500   file:text-white focus:outline-none focus:border-gray-500 block w-full file:p-2 file:border-none  file:focus:border-gray-500 disabled:cursor-not-allowed"
                />
              </div>
              {uploadedBankStatmentFiles.length !== 0 && (
                <div className=" border mt-3 p-5 space-y-3 bg-gray-500 text-white rounded-md text-base">
                  {uploadedBankStatmentFiles.map((file) => (
                    <div>{file.name}</div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
        {watchGuarantor === "No" && (
          <>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-900 ">
                Will your salary be changing in the next 3 months?
              </label>
              <select
                id="smoker"
                name="smoker"
                autoComplete="smoker"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("salary")}
              >
                <option>Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="col-span-1">
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-700"
              >
                3 most recent bank statements(MAX-3)
              </label>
              <div className="mt-1">
                <input
                  id="fileUpload"
                  type="file"
                  multiple
                  accept="application/pdf, image/png"
                  name="project-name"
                  onChange={handleUploadBankStatmentEvent}
                  disabled={bankStatmentFileLimit}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500   file:text-white focus:outline-none focus:border-gray-500 block w-full file:p-2 file:border-none  file:focus:border-gray-500 disabled:cursor-not-allowed"
                />
              </div>
              {uploadedBankStatmentFiles.length !== 0 && (
                <div className=" border mt-3 p-5 space-y-3 bg-gray-500 text-white rounded-md text-base">
                  {uploadedBankStatmentFiles.map((file) => (
                    <div>{file.name}</div>
                  ))}
                </div>
              )}
            </div>

            <div className="col-span-1">
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-700"
              >
                Credit check or proof of credit score
              </label>
              <div className="mt-1">
                <input
                  type="file"
                  name="project-name"
                  id="project-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500   file:text-white focus:outline-none focus:border-gray-500 block w-full file:p-2 file:border-none  file:focus:border-gray-500 "
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StageFive;
