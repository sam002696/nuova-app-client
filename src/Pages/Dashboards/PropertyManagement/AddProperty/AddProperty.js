import { CheckIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import SetFive from "./SetFive";
import SetFour from "./SetFour";
import SetOne from "./SetOne";
import SetThree from "./SetThree";
import SetTwo from "./SetTwo";
import SetZero from "./SetZero";
import Swal from "sweetalert2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AddProperty = () => {
  const StatusData = ["current", "upcoming", "upcoming", "complete"];
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(page);
  const [middleStatus, setMiddleStatus] = useState(page);
  const [detailStatus, setDetailStatus] = useState(page);
  const [picturesStatus, setPicturesStatus] = useState(page);
  const [briefStatus, setBriefStatus] = useState(page);
  const [buttonAlert, setAlert] = useState(false);

  const [formData, setFormData] = useState({
    property: "",
    propertyType: "",
    landlordInfo: {},
    propertyAddress: {},
    propertyDetails: {},
    units: [],
    keyFeatures: [],
    briefDesc: {},
    images: [],
  });

  useEffect(() => {
    if (page === 0) {
      setStatus(0);
      setMiddleStatus(1);
      setDetailStatus(2);
      setPicturesStatus(2);
      setBriefStatus(2);
    } else if (page === 1) {
      setStatus(3);
      setMiddleStatus(0);
      setDetailStatus(2);
      setPicturesStatus(2);
      setBriefStatus(2);
    } else if (page === 2) {
      setStatus(3);
      setMiddleStatus(3);
      setDetailStatus(0);
      setPicturesStatus(2);
      setBriefStatus(2);
    } else if (page === 3) {
      setStatus(3);
      setMiddleStatus(3);
      setDetailStatus(3);
      setPicturesStatus(0);
      setBriefStatus(2);
    } else if (page === 4) {
      setStatus(3);
      setMiddleStatus(3);
      setDetailStatus(3);
      setPicturesStatus(3);
      setBriefStatus(0);
    }
  }, [page, buttonAlert]);

  const PageDisplay = () => {
    if (page === 0) {
      return <SetZero formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SetOne formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <SetThree formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <SetFour formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <SetFive formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <SetTwo formData={formData} setFormData={setFormData} />;
    }
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    const data1 = new FormData();
    const data2 = new FormData();
    const data3 = new FormData();
    const data4 = new FormData();
    const pictureFirst = data.images.pictureFirst;
    const pictureSecond = data.images.pictureSecond;
    const pictureThird = data.images.pictureThird;
    const pictureFourth = data.images.pictureFourth;
    data1.append("file", pictureFirst);
    data2.append("file", pictureSecond);
    data3.append("file", pictureThird);
    data4.append("file", pictureFourth);
    //upload presets
    data1.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    data2.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    data3.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    data4.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    try {
      const uploadRes1 = await axios.post(
        process.env.REACT_APP_CLOUDINARY_URL,
        data1
      );
      const uploadRes2 = await axios.post(
        process.env.REACT_APP_CLOUDINARY_URL,
        data2
      );
      const uploadRes3 = await axios.post(
        process.env.REACT_APP_CLOUDINARY_URL,
        data3
      );
      const uploadRes4 = await axios.post(
        process.env.REACT_APP_CLOUDINARY_URL,
        data4
      );
      const { url: url1 } = uploadRes1.data;
      const { url: url2 } = uploadRes2.data;
      const { url: url3 } = uploadRes3.data;
      const { url: url4 } = uploadRes4.data;
      data.images.pictureFirst = url1;
      data.images.pictureSecond = url2;
      data.images.pictureThird = url3;
      data.images.pictureFourth = url4;
      const res = await axios.post(
        `http://localhost:5500/api/properties`,
        data
      );
      if (res.data) {
        setLoading(false);
        Swal.fire(
          "Well done!",
          "You successfully added the property!",
          "success"
        );
        setAlert(true);
        console.log(res.data);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      Swal.fire(
        "Error",
        "There's a problem adding a property in the system",
        "error"
      );
    }
  };

  const steps = [
    {
      id: "01",
      name: "Type",
      description: "Select the property type (e.g., house, apartment).",
      href: "#",
      status: StatusData[status],
    },
    {
      id: "02",
      name: "Address",
      description: "Provide the property's address details.",
      href: "#",
      status: StatusData[middleStatus],
    },

    {
      id: "03",
      name: formData.propertyType === "HMO" ? "Units" : "Details",
      description: "Add unit info or property details based on property type.",
      href: "#",
      status: StatusData[detailStatus],
    },
    {
      id: "04",
      name: "Pictures",
      description: "Upload property pictures.",
      href: "#",
      status: StatusData[picturesStatus],
    },
    {
      id: "05",
      name: "description",
      description: "Write a brief property description.",
      href: "#",
      status: StatusData[briefStatus],
    },
  ];

  const validateForm = () => {
    const {
      property,
      propertyType,
      propertyAddress,
      propertyDetails,
      images,
      keyFeatures,
      briefDesc,
      units,
      landlordInfo,
    } = formData;
    const { state, city, zipcode, addressline1, propertyName, country } =
      propertyAddress;
    const {
      propertyFloor,
      propertyEstimatedValue,
      propertyFurnished,
      livingArea,
      marketRentPCM,
      bedroom,
      bathroom,
      availabilityDate,
      propertyAddress: propertyAddressSetThree,
      councilTaxBand,
      petsPermission,
      studentsAccept,
      toLet,
      rooms,
      featuresAndAppliances,
      permitSuppliedBy,
      spaceNumber,
      permitsPerProperty,
      spaceLocation,
      entryCode,
      remoteFob,
      suppliedBy,
    } = propertyDetails;
    const { landlordName, landlordEmail, landlordPhone } = landlordInfo;
    const { pictureFirst, pictureSecond, pictureThird, pictureFourth } = images;
    const { comment } = briefDesc;

    if (page === 0) {
      if (!property.trim() || !propertyType.trim()) {
        return false;
      }
    } else if (page === 1) {
      if (
        !state.trim() ||
        !city.trim() ||
        !zipcode.trim() ||
        !addressline1.trim() ||
        !propertyName.trim() ||
        !country.trim()
      ) {
        return false;
      }
    } else if (page === 2) {
      if (propertyType !== "HMO") {
        if (
          !propertyFloor.trim() ||
          !propertyEstimatedValue.trim() ||
          !propertyFurnished.trim() ||
          !marketRentPCM.trim() ||
          !livingArea.trim() ||
          !bedroom.trim() ||
          !bathroom.trim() ||
          !availabilityDate.trim() ||
          !propertyAddressSetThree.trim() ||
          !councilTaxBand.trim() ||
          !petsPermission.trim() ||
          !studentsAccept.trim() ||
          !toLet.trim() ||
          rooms.length === 0 ||
          featuresAndAppliances.length === 0 ||
          !permitSuppliedBy.trim() ||
          !spaceNumber.trim() ||
          !permitsPerProperty.trim() ||
          !spaceLocation.trim() ||
          !entryCode.trim() ||
          !remoteFob.trim() ||
          !suppliedBy.trim() ||
          !landlordEmail.trim() ||
          !landlordName.trim() ||
          !landlordPhone.trim()
        ) {
          return false;
        }
      } else {
        const anyUnitMissingData = units.some(
          (unit) =>
            !unit.unitName.trim() ||
            !unit.beds.trim() ||
            !unit.baths.trim() ||
            !unit.size.trim() ||
            !unit.marketRent.trim()
        );

        if (
          anyUnitMissingData ||
          !landlordEmail.trim() ||
          !landlordName.trim() ||
          !landlordPhone.trim()
        ) {
          return false;
        }
      }
    } else if (page === 3) {
      if (!pictureFirst || !pictureSecond || !pictureThird || !pictureFourth) {
        return false;
      }
    } else if (page === 4) {
      if (keyFeatures.length === 0 || !comment) {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <div className="lg:border-t lg:border-b lg:border-gray-200 mt-14 bg-gray-50">
        <nav
          className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8"
          aria-label="Progress"
        >
          <ol className="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none">
            {steps.map((step, stepIdx) => (
              <li key={step.id} className="relative overflow-hidden lg:flex-1">
                <div
                  className={classNames(
                    stepIdx === 0 ? "border-b-0 rounded-t-md" : "",
                    stepIdx === steps.length - 1
                      ? "border-t-0 rounded-b-md"
                      : "",
                    "border border-gray-200 overflow-hidden lg:border-0"
                  )}
                >
                  {step.status === "complete" ? (
                    <a href={step.href} className="group">
                      <span
                        className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          stepIdx !== 0 ? "lg:pl-9" : "",
                          "px-6 py-5 flex items-start text-sm font-medium"
                        )}
                      >
                        <span className="flex-shrink-0">
                          <span className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full">
                            <CheckIcon
                              className="w-6 h-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </span>
                        <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                          <span className="text-xs font-semibold tracking-wide uppercase">
                            {step.name}
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            {step.description}
                          </span>
                        </span>
                      </span>
                    </a>
                  ) : step.status === "current" ? (
                    <a href={step.href} aria-current="step">
                      <span
                        className="absolute top-0 left-0 w-1 h-full bg-cyan-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          stepIdx !== 0 ? "lg:pl-9" : "",
                          "px-6 py-5 flex items-start text-sm font-medium"
                        )}
                      >
                        <span className="flex-shrink-0">
                          <span className="w-10 h-10 flex items-center justify-center border-2 border-cyan-600 rounded-full">
                            <span className="text-cyan-600">{step.id}</span>
                          </span>
                        </span>
                        <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                          <span className="text-xs font-semibold text-cyan-600 tracking-wide uppercase">
                            {step.name}
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            {step.description}
                          </span>
                        </span>
                      </span>
                    </a>
                  ) : (
                    <a href={step.href} className="group">
                      <span
                        className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          stepIdx !== 0 ? "lg:pl-9" : "",
                          "px-6 py-5 flex items-start text-sm font-medium"
                        )}
                      >
                        <span className="flex-shrink-0">
                          <span className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                            <span className="text-gray-500">{step.id}</span>
                          </span>
                        </span>
                        <span className="mt-0.5 ml-4 min-w-0 flex flex-col">
                          <span className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
                            {step.name}
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            {step.description}
                          </span>
                        </span>
                      </span>
                    </a>
                  )}

                  {stepIdx !== 0 ? (
                    <>
                      {/* Separator */}
                      <div
                        className="hidden absolute top-0 left-0 w-3 inset-0 lg:block"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-full w-full text-gray-300"
                          viewBox="0 0 12 82"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0.5 0V31L10.5 41L0.5 51V82"
                            stroke="currentcolor"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </div>
                    </>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto pt-10 pb-10">{PageDisplay()}</div>

      {/* Buttons */}
      <div className=" max-w-7xl mx-auto">
        <span className="relative z-0 flex rounded-md justify-between mt-8 pb-8">
          <button
            type="button"
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            className="relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 shadow-md shadow-cyan-500/50 cursor-pointer"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            disabled={loading}
            onClick={() => {
              if (page === steps.length - 1 && validateForm()) {
                handleSubmit(formData);
              } else {
                if (validateForm()) {
                  setPage((currPage) => currPage + 1);
                } else {
                  Swal.fire(
                    "Oops!",
                    "Please fill in all required fields.",
                    "error"
                  );
                }
              }
            }}
            type="button"
            className={`-ml-px relative inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 shadow-md shadow-cyan-500/50 cursor-pointer ${
              loading && "disabled:bg-gray-200"
            }`}
          >
            <span className="sr-only">Next</span>
            {page === steps.length - 1 ? (
              loading ? (
                "Submitting.."
              ) : (
                "Submit"
              )
            ) : (
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </span>
      </div>
    </>
  );
};
export default AddProperty;
