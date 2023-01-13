import React from "react";
import { useState } from "react";
import Inventory from "../AddDocument/Inventory/Inventory";
import InspectionReport from "../InspectionReport/InspectionReport";

const AddDocument = ({ singleProperty }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-0 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  block leading-normal " +
                  (openTab === 1
                    ? "text-teal-600 bg-teal-100 border-b-4 border-teal-500"
                    : "text-teal-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Property Inspection Report
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  block leading-normal " +
                  (openTab === 2
                    ? "text-teal-600 bg-teal-100 border-b-4 border-teal-500"
                    : "text-teal-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Inventory Document
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <InspectionReport />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Inventory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="sm:flex sm:items-center mx-10 mt-8">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Property Inspection Report
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the certificates in your account including their dates
            and description.
          </p>
        </div>
      </div> */}
      {/* <div className="bg-white shadow overflow-hidden sm:rounded-md w-5/6 mx-auto my-10">
       
      </div> */}

      {/* Inventory */}
      {/* <div className="sm:flex sm:items-center mx-10 mt-8">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Inventory Document
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the certificates in your account including their dates
            and description.
          </p>
        </div>
      </div> */}
      {/* <div className="bg-white shadow overflow-hidden sm:rounded-md w-5/6 mx-auto my-10">
        
      </div> */}
    </>
  );
};

export default AddDocument;
