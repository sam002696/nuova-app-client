import React, { useEffect } from "react";
import { CheckCircleIcon, MailIcon, UserIcon } from "@heroicons/react/solid";
import AddCertificateModal from "./AddCertificateModal";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const AddCertificate = ({ singleProperty }) => {
  const [certificateDocuments, setCertificateDocuments] = useState([]);
  let currentDate = new Date();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const certificateDocumentsInfo = singleProperty?.certificatesDocuments;
    setCertificateDocuments(certificateDocumentsInfo);
  }, [singleProperty]);

  const handleDeleteCertificate = async (document) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      html: `<span class="text-sm"> ${document.certificateName} will be removed from this property.</span>`,
      confirmButtonText: "Yes, remove",
      showCancelButton: true,
      buttonsStyling: true,
      customClass: {
        confirmButton: "btn btn-danger py-2 mr-4 px-4",
        cancelButton: "btn-regular py-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5500/api/certificatesDocuments/${document._id}/${singleProperty._id}`;
        axios
          .delete(url)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              const remainingDocuments = certificateDocuments.filter(
                (filteruser) => filteruser._id !== document._id
              );

              setCertificateDocuments(remainingDocuments);
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };
  return (
    <>
      <div className="sm:flex sm:items-center mx-10 mt-8">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Certificates & Documents
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the certificates in your account including their dates
            and description.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-50 px-4 py-2 text-sm  text-cyan-600 shadow-md hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:w-auto font-semibold"
          >
            Add a certificate
          </button>
        </div>
      </div>

      {singleProperty.certificatesDocuments?.length !== 0 ? (
        <div className="bg-white shadow overflow-hidden sm:rounded-md w-5/6 mx-auto my-10">
          <ul className="divide-y divide-gray-200">
            {certificateDocuments?.map((document) => (
              <li key={document._id}>
                <div className="block hover:bg-gray-50">
                  <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-12">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="w-7 h-7 mx-auto text-yellow-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="text-sm font-medium text-cyan-600 truncate">
                            {document.certificateName}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <UserIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="truncate">
                              {document.certificateProviderName}
                            </span>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <MailIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="truncate">
                              {document.certificateProviderEmail}
                            </span>
                          </p>
                        </div>
                        <div className="hidden md:block">
                          <div>
                            <p className="text-sm text-gray-900">
                              Added on :{" "}
                              <time dateTime={document.date}>
                                {new Date(
                                  document.createdAt
                                ).toLocaleDateString()}
                              </time>
                            </p>
                            <p className="text-sm text-gray-900">
                              Validation date :{" "}
                              <time>
                                {document.certificateExpiryDate
                                  ? new Date(
                                      document.certificateExpiryDate
                                    ).toLocaleDateString()
                                  : "N/A"}
                              </time>
                            </p>
                            <p className="text-sm text-gray-900 my-2 font-medium ">
                              <span
                                className={`px-3 py-1 rounded text-xs ${
                                  currentDate.getTime() >
                                  new Date(
                                    document.certificateExpiryDate
                                  ).getTime()
                                    ? "text-red-600 bg-red-100"
                                    : "text-green-600 bg-green-100"
                                }`}
                              >
                                {currentDate.getTime() >
                                new Date(
                                  document.certificateExpiryDate
                                ).getTime()
                                  ? "Expired"
                                  : "Valid"}
                              </span>
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500">
                              <CheckCircleIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                aria-hidden="true"
                              />
                              Added By {document.certificateProviderName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" space-x-3">
                      <a
                        href={document?.uploadedCertificate}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-green-50 px-3 py-2 text-sm font-semibold text-green-600 shadow-md hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                      >
                        Download
                      </a>
                      <button
                        type="button"
                        onClick={() => handleDeleteCertificate(document)}
                        className="rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 shadow-md hover:bg-red-100"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="rounded-md bg-yellow-50 p-4 max-w-md mx-auto mt-20 border-none shadow-lg ">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-yellow-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Attention needed
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  No certificates have been added for this property yet! Add
                  your certificates to see the list of them.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <AddCertificateModal
        setOpen={setOpen}
        open={open}
        singleProperty={singleProperty}
      />
    </>
  );
};

export default AddCertificate;
