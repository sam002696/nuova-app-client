import React from "react";
import { CheckCircleIcon, MailIcon, UserIcon } from "@heroicons/react/solid";
import AddCertificateModal from "./AddCertificateModal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const AddCertificate = ({ singleProperty }) => {
  const { id } = useParams();
  console.log(id);
  console.log(singleProperty);

  const [open, setOpen] = useState(false);

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
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:w-auto"
          >
            Add a certificate
          </button>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md w-5/6 mx-auto my-10">
        <ul className="divide-y divide-gray-200">
          {singleProperty?.certificatesDocuments?.map((application) => (
            <li>
              <Link to="" className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-7 h-7 mx-auto text-yellow-700"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-cyan-600 truncate">
                          {application.certificateName}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <UserIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="truncate">
                            {application.certificateProviderName}
                          </span>
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <MailIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="truncate">
                            {application.certificateProviderEmail}
                          </span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Added on{" "}
                            <time dateTime={application.date}>
                              {application.createdAt && (
                                <time>
                                  {new Date(
                                    application.createdAt
                                  ).getFullYear()}
                                  -{new Date(application.createdAt).getMonth()}-
                                  {new Date(application.createdAt).getDate()}
                                </time>
                              )}
                            </time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <CheckCircleIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              aria-hidden="true"
                            />
                            Added By {application.certificateProviderName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href={application.uploadedCertificate}
                      target="_blank"
                      rel="noreferrer"
                      alt=""
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:w-auto"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <AddCertificateModal
        setOpen={setOpen}
        open={open}
        singleProperty={singleProperty}
      />
    </>
  );
};

export default AddCertificate;
