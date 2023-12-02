import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Do you want to add the tenant?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post(
            `https://nuova-property-server.onrender.com/api/uploadTenants/upload/${singleProperty._id}`,
            formData
          );
          if (res.data) {
            Swal.fire("Saved!", "", "success");
            console.log(res.data);
          }
        } catch (err) {
          console.log(err);
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
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
                onClick={(e) => handleSubmit(e)}
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Add Tenant
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTenant;
