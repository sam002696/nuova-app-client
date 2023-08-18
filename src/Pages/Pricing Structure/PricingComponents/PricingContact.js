import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const PricingContact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const res = await axios.post(
        "http://localhost:5500/api/landlordContactForm",
        data
      );
      if (res.data) {
        setLoading(false);
        reset();
        Swal.fire(
          "Success!",
          "Your message has been sent successfully!",
          "success"
        );
      }
    } catch (err) {
      Swal.fire("Error", "There's a problem sending the message", "error");
      setLoading(false);
      console.log(err);
    }
  };
  return (
    <>
      <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="space-y-3 text-center p-8">
            <div className="text-[#162A43] font-semibold text-4xl font-sans">
              <h1 className="leading-snug">Contact Us </h1>
            </div>

            {/* <p className="text-[#565151] font-normal text-lg font-sans w-4/5 mx-auto">
              Whether it's a cozy apartment or a spacious house, our dedicated
              team is ready to assist you. Contact us today to start your
              journey toward your dream space!
            </p> */}
          </div>

          <div className="py-5 px-6 sm:px-10 lg:col-span-2 xl:p-4 max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-500"
                >
                  Full Name <span className="text-red-500 font-bold ">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    autoComplete="fullName"
                    placeholder="Alex Jo"
                    {...register("fullName", {
                      required: "Full Name is required",
                    })}
                    className={`py-2 px-4 block w-full shadow-sm ${
                      errors.fullName ? "border-red-500" : "border-gray-100"
                    } focus:ring-teal-500 focus:border-teal-500 border-2 rounded-md`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 mt-2">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-500"
                >
                  Email Address{" "}
                  <span className="text-red-500 font-bold ">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="example@gmail.com"
                    {...register("landlordEmail", {
                      required: "Email Address is required",
                    })}
                    className={`py-2 px-4 block w-full shadow-sm ${
                      errors.landlordEmail
                        ? "border-red-500"
                        : "border-gray-100"
                    } focus:ring-teal-500 focus:border-teal-500 border-2 rounded-md`}
                  />
                  {errors.landlordEmail && (
                    <p className="text-red-500 mt-2">
                      {errors.landlordEmail.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Phone <span className="text-red-500 font-bold ">*</span>
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    placeholder="+874 645 312"
                    className={`py-2 px-4 block w-full shadow-sm ${
                      errors.landlordPhoneNo
                        ? "border-red-500"
                        : "border-gray-100"
                    } focus:ring-teal-500 focus:border-teal-500 border-2 rounded-md`}
                    {...register("landlordPhoneNo", {
                      required: "Phone no is required",
                    })}
                    aria-describedby="phone-optional"
                  />
                  {errors.landlordPhoneNo && (
                    <p className="text-red-500 mt-2">
                      {errors.landlordPhoneNo.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="postCode"
                  className="block text-sm font-medium text-gray-500"
                >
                  Post Code <span className="text-red-500 font-bold ">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="postCode"
                    id="postCode"
                    autoComplete="family-name"
                    placeholder="Write postcode"
                    className={`py-2 px-4 block w-full shadow-sm ${
                      errors.postCode ? "border-red-500" : "border-gray-100"
                    } focus:ring-teal-500 focus:border-teal-500 border-2 rounded-md`}
                    {...register("postCode", {
                      required: "Post Code is required",
                    })}
                  />
                  {errors.postCode && (
                    <p className="text-red-500 mt-2">
                      {errors.postCode.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="portfolioSize"
                  className="block text-sm font-medium text-gray-500"
                >
                  Portfolio Size{" "}
                  <span className="text-red-500 font-bold ">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="portfolioSize"
                    id="portfolioSize"
                    autoComplete="portfolioSize"
                    placeholder="1-2"
                    className={`py-2 px-4 block w-full shadow-sm ${
                      errors.portfolioSize
                        ? "border-red-500"
                        : "border-gray-100"
                    } focus:ring-teal-500 focus:border-teal-500 border-2 rounded-md`}
                    {...register("portfolioSize", {
                      required: "Portfolio Size is required",
                    })}
                  />
                  {errors.portfolioSize && (
                    <p className="text-red-500 mt-2">
                      {errors.portfolioSize.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="package"
                  className="block text-sm font-medium text-gray-500"
                >
                  Package <span className="text-red-500 font-bold ">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="package"
                    id="package"
                    autoComplete="package"
                    placeholder="Full Management Service"
                    className={`py-2 px-4 block w-full shadow-sm ${
                      errors.package ? "border-red-500" : "border-gray-100"
                    } focus:ring-teal-500 focus:border-teal-500 border-2 rounded-md`}
                    {...register("package", {
                      required: "Package is required",
                    })}
                  />
                  {errors.package && (
                    <p className="text-red-500 mt-2">
                      {errors.package.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="landlordMessage"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Your Message{" "}
                    <span className="text-red-500 font-bold ">*</span>
                  </label>
                  <span
                    id="message-max"
                    className="text-sm text-warm-gray-500"
                  ></span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="landlordMessage"
                    name="landlordMessage"
                    rows={4}
                    className={`py-2 px-4 block w-full shadow-sm ${
                      errors.landlordMessage
                        ? "border-red-500"
                        : "border-gray-100"
                    } focus:ring-teal-500 focus:border-teal-500 border-2 rounded-md`}
                    {...register("landlordMessage", {
                      required: "Message is required",
                    })}
                    aria-describedby="message-max"
                    placeholder="Write something here...."
                  />
                  {errors.landlordMessage && (
                    <p className="text-red-500 mt-2">
                      {errors.landlordMessage.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2 sm:flex sm:justify-end lg:justify-center">
                <button
                  disabled={loading}
                  type="submit"
                  className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#BD8472] hover:bg-[#BD8472] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BD8472] sm:w-auto"
                >
                  {loading ? "Sending Message" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingContact;
