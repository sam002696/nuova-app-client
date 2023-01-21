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

  const handleUploadPayslipEvent = async (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadPayslipsFiles(chosenFiles);
  };

  const handleUploadBankStatmentEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadBankStatementFiles(chosenFiles);
  };

  console.log(uploadedPaySlipFiles);
  const watchGuarantor = watch("guarantorDetails.guarantor");
  const watchSalaryChanging = watch("guarantorDetails.salaryChanging");
  return (
    <>
      <p className=" text-lg  font-semibold pt-5 underline underline-offset-4">
        Guarantor Details
      </p>

      <div className=" grid grid-cols-1 gap-5 pt-5">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-900 ">
            I will be using a guarantor
          </label>
          <select
            className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            {...register("guarantorDetails.guarantor")}
          >
            <option>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <p className=" text-md  font-semibold py-2 ">
          Please enter your guarantor details below :
        </p>

        {watchGuarantor === "Yes" && (
          <>
            <div className="col-span-1">
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-700"
              >
                3 most recent payslips (MAX-3)
              </label>
              <div className="mt-1">
                <input
                  type="file"
                  multiple
                  accept="application/pdf, image/png"
                  disabled={paySlipFileLimit}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500   file:text-white focus:outline-none focus:border-gray-500 block w-1/2 file:p-2 file:border-none  file:focus:border-gray-500 disabled:cursor-not-allowed"
                  onChange={handleUploadPayslipEvent}
                />
              </div>
              {uploadedPaySlipFiles.length !== 0 && (
                <div className="border mt-3 p-5 space-y-3 bg-gray-500 text-white rounded-md text-base">
                  {uploadedPaySlipFiles.map((file, i) => (
                    <div
                      {...register(`guarantorDetails.payslips.${i}`, {
                        value: file,
                      })}
                    >
                      {file.name}
                    </div>
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
                Will your salary/career be changing in the next 3 month ?
              </label>
              <select
                className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                {...register("guarantorDetails.salaryChanging")}
              >
                <option>Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            {watchSalaryChanging === "Yes" && (
              <div className="col-span-1">
                <label
                  htmlFor="proofEmploymentContract"
                  className="block text-sm font-medium text-gray-700"
                >
                  Please Upload proof of employment Contract
                </label>
                <div className="mt-1">
                  <input
                    type="file"
                    name="proofEmploymentContract"
                    id="proofEmploymentContract"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500   file:text-white focus:outline-none focus:border-gray-500 block w-1/2 file:p-2 file:border-none  file:focus:border-gray-500 "
                    {...register("guarantorDetails.proofEmploymentContract")}
                  />
                </div>
              </div>
            )}
            {watchSalaryChanging === "No" && (
              <div className="col-span-1">
                <label
                  htmlFor="project-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Please Upload 3 most recent payslips (MAX-3)
                </label>
                <div className="mt-1">
                  <input
                    type="file"
                    multiple
                    accept="application/pdf, image/png"
                    disabled={paySlipFileLimit}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500   file:text-white focus:outline-none focus:border-gray-500 block w-1/2 file:p-2 file:border-none  file:focus:border-gray-500 disabled:cursor-not-allowed"
                    onChange={handleUploadPayslipEvent}
                  />
                </div>
                {uploadedPaySlipFiles.length !== 0 && (
                  <div className="border mt-3 p-5 space-y-3 bg-gray-500 text-white rounded-md text-base">
                    {uploadedPaySlipFiles.map((file, i) => (
                      <div
                        {...register(`guarantorDetails.payslips.${i}`, {
                          value: file,
                        })}
                      >
                        {file.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}

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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500   file:text-white focus:outline-none focus:border-gray-500 block w-1/2 file:p-2 file:border-none  file:focus:border-gray-500 disabled:cursor-not-allowed"
            />
          </div>
          {uploadedBankStatmentFiles.length !== 0 && (
            <div className=" border mt-3 p-5 space-y-3 bg-gray-500 text-white rounded-md text-base">
              {uploadedBankStatmentFiles.map((file, i) => (
                <div
                  {...register(`guarantorDetails.bankStatements.${i}`, {
                    value: file,
                  })}
                >
                  {file.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-1">
          <label
            htmlFor="creditScore"
            className="block text-sm font-medium text-gray-700"
          >
            Credit check or proof of credit score
          </label>
          <div className="mt-1">
            <input
              type="file"
              name="creditScore"
              id="creditScore"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md file:bg-gray-500   file:text-white focus:outline-none focus:border-gray-500 block w-1/2 file:p-2 file:border-none  file:focus:border-gray-500 "
              {...register("guarantorDetails.creditScore")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StageFive;
