import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { HomeIcon, EyeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import StageOne from "../StageOne/StageOne";
import StageTwo from "../Stage Two/StageTwo";
import StageThree from "../Stage Three/StageThree";
import StageFour from "../Stage Four/StageFour";
import StageFive from "../Stage Five/StageFive";
import StageSix from "../Stage Six/StageSix";
import axios from "axios";
import Swal from "sweetalert2";
import HeaderNavbarTwo from "../../Shared/Header/HeaderNavbar/HeaderNavbarTwo";
import Footer from "../../Shared/Footer/Footer";

const TenantFactFind = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch } = useForm({});

  const url = "https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload";

  const navigation = [
    { name: "Dashboard", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Applicants", href: "#" },
    { name: "Company", href: "#" },
  ];
  const breadcrumbs = [
    { name: "Stage 1", href: "#", current: false },
    { name: "Stage 2", href: "#", current: true },
    { name: "Stage 3", href: "#", current: true },
    { name: "Stage 4", href: "#", current: true },
    { name: "Stage 5", href: "#", current: true },
    { name: "Stage 6", href: "#", current: true },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];

  const onSubmit = async (reportData) => {
    setLoading(true);
    const data = new FormData();
    const photoGraphicIdFile = reportData?.tenantInfo?.photographicId[0];
    const creditfile = reportData?.guarantorDetails?.creditScore[0];

    console.log(reportData?.guarantorDetails?.guarantor);
    if (
      reportData?.guarantorDetails?.guarantor === "No" &&
      reportData?.guarantorDetails?.salaryChanging === "Yes"
    ) {
      console.log(reportData?.guarantorDetails?.guarantor);
      const proofECFile =
        reportData?.guarantorDetails?.proofEmploymentContract[0];

      if (proofECFile) {
        data.append("file", proofECFile);

        data.append("upload_preset", "eez1w4gg");

        const uploadRes2 = await axios.post(
          "https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload",
          data
        );

        const { url: url2 } = uploadRes2.data;

        reportData.guarantorDetails.proofEmploymentContract = url2;
      }
    }

    if (creditfile) {
      data.append("file", creditfile);

      data.append("upload_preset", "eez1w4gg");

      const uploadRes1 = await axios.post(
        "https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload",
        data
      );

      const { url: url1 } = uploadRes1.data;

      reportData.guarantorDetails.creditScore = url1;
    }

    if (photoGraphicIdFile) {
      data.append("file", photoGraphicIdFile);

      data.append("upload_preset", "eez1w4gg");

      const uploadRes3 = await axios.post(
        "https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload",
        data
      );

      const { url: url3 } = uploadRes3.data;

      reportData.tenantInfo.photographicId = url3;
    }

    if (reportData?.guarantorDetails?.payslips) {
      for (let i = 0; i < reportData.guarantorDetails.payslips.length; i++) {
        let file = reportData.guarantorDetails.payslips[i];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "eez1w4gg");

        const response = await fetch(url, {
          method: "POST",
          body: data,
        });
        const result = await response.text();
        const res = JSON.parse(result);
        reportData.guarantorDetails.payslips[i] = res.secure_url;
      }
    }

    if (reportData?.guarantorDetails?.bankStatements) {
      for (
        let i = 0;
        i < reportData.guarantorDetails.bankStatements.length;
        i++
      ) {
        let file = reportData.guarantorDetails.bankStatements[i];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "eez1w4gg");

        const response = await fetch(url, {
          method: "POST",
          body: data,
        });
        const result = await response.text();
        const res = JSON.parse(result);
        reportData.guarantorDetails.bankStatements[i] = res.secure_url;
        console.log(res.secure_url);
      }
      console.log(reportData?.guarantorDetails?.bankStatements);
    }

    try {
      const res = await axios.post(
        `http://localhost:5500/api/tenancyform`,
        reportData
      );
      if (res.data) {
        console.log(res.data);
        Swal.fire("Success!", "Your response has been submitted!", "success");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* HeaderNavbar */}
      <HeaderNavbarTwo />
      {/* Breadcrumb */}
      <nav
        className="hidden border-b border-gray-200 bg-gray-500 lg:flex"
        aria-label="Breadcrumb"
      >
        <ol className="mx-auto flex max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8">
          <li className="flex">
            <div className="flex items-center">
              <Link to="#" className="text-white hover:text-white">
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
          {breadcrumbs.map((item) => (
            <li key={item.name} className="flex">
              <div className="flex items-center">
                <svg
                  className="h-full w-6 flex-shrink-0 text-white"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 44"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <a
                  href={item.href}
                  className="ml-4 text-sm font-medium text-white hover:text-white"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      {/* Main Components */}
      <main className="mx-auto max-w-5xl px-4 pt-10 pb-12 lg:pb-16">
        <div className=" border-2 border-gray-500 p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <StageOne />
            <StageTwo register={register} />
            <StageThree register={register} />
            <StageFour register={register} />
            <StageFive register={register} watch={watch} />
            <StageSix register={register} />
            <button
              type="submit"
              disabled={loading}
              className="lg:w-full rounded border border-transparent px-4 py-2 text-lg  text-gray-600 shadow-sm bg-gray-300 hover:bg-gray-500 hover:text-white focus:ring-gray-500 focus:ring-offset-2 mt-20 font-semibold uppercase tracking-wide "
            >
              {loading ? "Submitting the form" : "Submit the form"}
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default TenantFactFind;
