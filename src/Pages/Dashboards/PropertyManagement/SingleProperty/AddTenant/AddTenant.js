import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

import Guarantors from "./Guarantors";
import TenantInfo from "./TenantInfo";
import TenantResidency from "./TenantResidency";

const AddTenant = ({ singleProperty }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    tenantPersonalInfo: {},
    tenantResidency: {},
    guarantorInfo: {},
  });

  // email validation

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // form validation

  const isFormValid = () => {
    const { tenantPersonalInfo, tenantResidency, guarantorInfo } = formData;

    // email validation check start

    if (tenantPersonalInfo.email && !isEmailValid(tenantPersonalInfo.email)) {
      Swal.fire(
        "Error",
        "Please enter a valid email address for Tenant Information.",
        "error"
      );
      return false;
    }

    if (guarantorInfo.email && !isEmailValid(guarantorInfo.email)) {
      Swal.fire(
        "Error",
        "Please enter a valid email address for Guarantor Information.",
        "error"
      );
      return false;
    }

    // email validation check end

    if (
      !tenantPersonalInfo.fullName ||
      !tenantPersonalInfo.email ||
      !tenantPersonalInfo.phoneNo ||
      !tenantPersonalInfo.totalOccupants ||
      !tenantPersonalInfo.smokes ||
      !tenantPersonalInfo.lawsuit ||
      !tenantPersonalInfo.felony ||
      !tenantPersonalInfo.lawsuitDesc ||
      !tenantPersonalInfo.currentIncome ||
      !tenantPersonalInfo.incomeAssistance ||
      !tenantPersonalInfo.creditScore
    ) {
      Swal.fire(
        "Error",
        "Please fill in all the Tenant Information fields.",
        "error"
      );
      return false;
    }

    if (
      !tenantResidency.postCode ||
      !tenantResidency.monthlyRent ||
      !tenantResidency.depositAmount ||
      !tenantResidency.leaseStartDate ||
      !tenantResidency.leaseEndDate ||
      !tenantResidency.tenancyDueDate
    ) {
      Swal.fire(
        "Error",
        "Please fill in all the Tenant Residency fields.",
        "error"
      );
      return false;
    }

    if (
      !guarantorInfo.currentIncome ||
      !guarantorInfo.email ||
      !guarantorInfo.phoneNo ||
      !guarantorInfo.fullName
    ) {
      Swal.fire(
        "Error",
        "Please fill in all the Guarantor Information fields.",
        "error"
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }

    Swal.fire({
      title: "Do you want to add the tenant?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          const res = await axios.post(
            `http://localhost:5500/api/uploadTenants/upload/${singleProperty._id}`,
            formData
          );
          if (res.data) {
            setLoading(false);
            Swal.fire("Saved!", "", "success");
            console.log(res.data);
          }
        } catch (err) {
          setLoading(false);
          console.log(err);
          Swal.fire(
            "Error",
            "There's a problem adding a tenant in this property",
            "error"
          );
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

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
                className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 ${
                  loading && "bg-cyan-200"
                }`}
              >
                {loading ? "Adding Tenant.." : "Add Tenant"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTenant;
