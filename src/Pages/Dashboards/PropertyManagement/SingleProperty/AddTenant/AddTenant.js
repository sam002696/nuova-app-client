import axios from "axios";
import React, { useState } from "react";

import Guarantors from "./Guarantors";
import TenantInfo from "./TenantInfo";
import TenantResidency from "./TenantResidency";

const AddTenant = ({ singleProperty }) => {
  const [formData, setFormData] = useState({
    tenantPersonalInfo: {},
    tenantResidency: {},
    guarantorInfo: {},
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const res = await axios.post(
        `http://localhost:5500/api/uploadTenants/upload/${singleProperty._id}`,
        formData
      );
      if (res.data) {
        alert("FORM SUBMITTED");
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(singleProperty);
  return (
    <>
      <div className=" w-5/6 mx-auto my-10">
        <form className="space-y-8 divide-y-2 divide-gray-200">
          <div className="space-y-8 divide-y-2 divide-gray-200 sm:space-y-5">
            <TenantInfo
              singleProperty={singleProperty}
              formData={formData}
              setFormData={setFormData}
            />

            <TenantResidency
              singleProperty={singleProperty}
              formData={formData}
              setFormData={setFormData}
            />

            <Guarantors
              singleProperty={singleProperty}
              formData={formData}
              setFormData={setFormData}
            />
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Cancel
              </button>
              <button
                onClick={(e) => handleSubmit(e)}
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTenant;
