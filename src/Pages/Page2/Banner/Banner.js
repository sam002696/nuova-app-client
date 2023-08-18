import React, { useState } from "react";
import backgroundImage from "../../../Images/Page2/Banner/background.png";
import camera from "../../../Images/Page2/Banner/camera.png";
import rectangle from "../../../Images/Page2/Banner/Rectangle 4641.png";
import logoblue from "../../../Images/Page2/Banner/logoblue.png";
// import mobile_message from '../../../Images/Page2/Banner/mobile_message.png'
import scribbles from "../../../Images/Banner/scribbles-scribbles-20 1.png";
import union from "../../../Images/Page2/Banner/Union.png";
import phoneBgScreen from "../../../Images/Page2/Banner/phone_group.png";
import double_icon from "../../../Images/Page2/Banner/double_icon.png";
import box_icon from "../../../Images/Page2/Banner/box_icon.png";
import userIcon from "../../../Images/Page2/Banner/user.png";
import manPhoto from "../../../Images/Page2/Banner/manPhoto.png";
import property from "../../../Images/Page2/Banner/property.png";
import switching from "../../../Images/Page2/Banner/switching.png";
import movers from "../../../Images/Page2/Banner/movers.png";
import report from "../../../Images/Page2/Banner/report.png";
import { Link } from "react-router-dom";
import facebook from "../../../Images/Footer/facebook.png";
import twitter from "../../../Images/Footer/twitter.png";
import instagram from "../../../Images/Footer/instagram.png";
import M from "../../../Images/Footer/M.png";
import logo from "../../../Images/Footer/logo.png";
import elipse21 from "../../../Images/Footer/Ellipse 21.png";
import elipse22 from "../../../Images/Footer/Ellipse 22.png";
import elipse23 from "../../../Images/Footer/Ellipse 23.png";
import elipse24 from "../../../Images/Footer/Ellipse 24.png";

import p2_b1_img0 from "../../../Images/Page2/Banner1/Page2 banner1 img0.png";
import p2_b1_img1 from "../../../Images/Page2/Banner1/Page2 banner1 img1.png";
import p2_b1_img2 from "../../../Images/Page2/Banner1/Page2 banner1 img2.png";
import p2_b1_img3 from "../../../Images/Page2/Banner1/Page2 banner1 img3.png";
import p2_b1_img4 from "../../../Images/Page2/Banner1/Page2 banner1 img4.png";
import p2_b1_img5 from "../../../Images/Page2/Banner1/Page2 banner1 img5.png";
import p2_b1_img6 from "../../../Images/Page2/Banner1/Page2 banner1 img6.png";
import p2_b1_img7 from "../../../Images/Page2/Banner1/Page2 banner1 img7.png";
import p2_b1_img8 from "../../../Images/Page2/Banner1/Page2 banner1 img8.png";

import p2_b2_img1 from "../../../Images/Page2/Banner2/Page2 banner2 img1.png";
import p2_b2_img2 from "../../../Images/Page2/Banner2/Page2 banner2 img2.png";
import p2_b2_img3 from "../../../Images/Page2/Banner2/Page2 banner2 img3.png";
import p2_b2_img4 from "../../../Images/Page2/Banner2/Page2 banner2 img4.png";
import p2_b2_img5 from "../../../Images/Page2/Banner2/Page2 banner2 img5.png";
import p2_b2_img6 from "../../../Images/Page2/Banner2/Page2 banner2 img6.png";
import p2_b2_img7 from "../../../Images/Page2/Banner2/Page2 banner2 img7.png";
import p2_b2_img8 from "../../../Images/Page2/Banner2/Page2 banner2 img8.png";
import p2_b2_img9 from "../../../Images/Page2/Banner2/Page2 banner2 img9.png";

import p2_b3_img2 from "../../../Images/Page2/Banner3/Page2 banner3 img2.png";

import p2_b4_img0 from "../../../Images/Page2/Banner4/Page2 banner4 img0.png";
import p2_b4_img1 from "../../../Images/Page2/Banner4/Page2 banner4 img1.png";
import p2_b4_img2 from "../../../Images/Page2/Banner4/Page2 banner4 img2.png";
import p2_b4_img3 from "../../../Images/Page2/Banner4/Page2 banner4 img3.png";

import p2_b5_img1 from "../../../Images/Page2/Banner5/Page2 banner5 img2.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Banner = () => {
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
        "http://localhost:5500/api/tenantContactForm",
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
      <div className="relative">
        <img className="absolute h-screen w-screen" src={p2_b1_img7} alt="" />
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-4 gap-x-5">
            <div className="space-y-8 py-10 col-span-2 mt-12 relative z-10">
              <div className="text-white banner-text font-medium font-sans ">
                Renting Made Easy With Nuova
              </div>
              <p className="text-[#DEE1E5] font-normal text-lg">
                From renting a home in just a few clicks to simple and effective
                property management, Nuova will always make sure you are looked
                after.
              </p>
              <div className="">
                <button className="text-white text-base bg-[#BD8472] px-6 py-3 text-center rounded font-semibold">
                  Talk To Us
                </button>
              </div>
            </div>

            <div className="col-span-2 relative -right-40">
              <div className="absoulute">
                <img className="w-5/6" src={p2_b1_img8} alt="" />
              </div>
            </div>
            {/* <div className='col-span-1 relative -right-40'>
                            <div className='relative'>

                                <div>
                                    <img className='mt-20' src={p2_b1_img1} alt="" />
                                </div>
                                <div>
                                    <img className='' src={p2_b1_img3} alt="" />
                                </div>
                                <div className='absolute -top-8 -left-12 -z-10'>
                                    <img className='' src={p2_b1_img5} alt="" />
                                </div>

                            </div>
                        </div> */}
            {/* <div className='col-span-1 relative -right-32'>
                            <div className=''>
                                <div>
                                    <img className='mt-8' src={p2_b1_img2} alt="" />
                                </div>
                                <div>
                                    <img className='' src={p2_b1_img4} alt="" />
                                </div>


                            </div>



                        </div> */}
          </div>
        </div>
      </div>

      {/* <div className="">
        
        <div className="max-w-5xl mx-auto">
          
          <div className="pt-24">
            <h1 className="text-4xl font-mono font-semibold text-center">
              Renting made easy with Nuova
            </h1>
          </div>
          <div className="pt-8">
            <img className="w-1/5 mx-auto h-1" src={p2_b2_img5} alt="" />
          </div>

          <div className="grid grid-cols-4 gap-x-16">
            <div className="space-y-3 py-10 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 " src={p2_b2_img1} alt="" />
              </div>
            </div>
            <div className="space-y-3 py-10 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 " src={p2_b2_img2} alt="" />
              </div>
            </div>
            <div className="space-y-3 py-10 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 " src={p2_b2_img3} alt="" />
              </div>
            </div>
            <div className="space-y-3 py-10 col-span-1 mt-8">
              <div className="relative">
                <img className="mb-6 " src={p2_b2_img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-4xl mx-auto">
          {/* Content goes here */}
          <div className=" space-y-8 mt-12">
            <h1 className="text-4xl font-mono font-semibold text-center">
              Benefits Of Renting With Nuova
            </h1>
            <p className="text-[#565151] font-normal text-lg max-w-4xl mx-auto text-center">
              We understand the difficulties that can occur when it comes to
              renting, we have had bad experiences ourselves, too many agencies
              treat tenants like an inconvenience and we are here to change
              that. From renting a home in just a few clicks to simple and
              effective property management, Nuova will always make sure you are
              looked after.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="col-span-1 relative">
              <div className="">
                <img className="mt-24" src={p2_b2_img6} alt="" />
              </div>
            </div>

            <div className="space-y-8 py-4 col-span-1 mt-20">
              {/* <div className='text-[#162A43] banner-text font-medium font-sans '>
                                A property manager just for you
                            </div>
                            <p className='text-[#565151] font-normal text-lg'>
                                Simple and effective property management, tenanats are able to speak directly to their dedicated property manager via the web app, getting your issues dealt with has never been so easy!
                            </p> */}

              <div className="grid grid-cols-4 gap-x-5 p-5 bg-slate-100 shadow-lg">
                <div className="col-span-1 relative">
                  <div className="">
                    <img className="" src={p2_b2_img7} alt="" />
                  </div>
                </div>

                <div className="space-y-4 col-span-3">
                  <div className="text-[#162A43] font-bold text-2xl font-sans ">
                    Smart Dashboard
                  </div>
                  <p className="text-[#565151] font-normal text-md">
                    Have an instant overview of your Nuova home, always be kept
                    up to date.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-x-5 p-5 bg-slate-50 shadow-md">
                <div className="col-span-1 relative">
                  <div className="">
                    <img className="" src={p2_b2_img8} alt="" />
                  </div>
                </div>

                <div className="space-y-4 col-span-3">
                  <div className="text-[#162A43] font-bold text-2xl font-sans ">
                    Simple Management
                  </div>
                  <p className="text-[#565151] font-normal text-sm text-justify">
                    At the touch of a button report any issues through the Nuova
                    tenant App, speak directly to your dedicated property
                    manager, all in App!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-x-5 p-5 bg-slate-50 shadow-md">
                <div className="col-span-1 relative">
                  <div className="">
                    <img className="" src={p2_b2_img9} alt="" />
                  </div>
                </div>

                <div className="space-y-4 col-span-3">
                  <div className="text-[#162A43] font-bold text-2xl font-sans ">
                    Online Payments
                  </div>
                  <p className="text-[#565151] font-normal text-sm text-justify">
                    Tenants can make payments from any device, anywhere, they
                    can also set up re occuring payments to make sure they never
                    make a late payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="space-y-8 py-10 col-span-1 mt-8">
              <div className="text-[#162A43] banner-text font-medium font-sans ">
                A property manager just for you
              </div>
              <p className="text-[#565151] font-normal text-lg">
                Simple and effective property management, tenanats are able to
                speak directly to their dedicated property manager via the web
                app, getting your issues dealt with has never been so easy!
              </p>
            </div>

            <div className="col-span-1 relative">
              <div className="">
                <img className="mt-16" src={p2_b3_img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="col-span-1  ">
              <img className="mb-6 mt-16 relative" src={p2_b4_img0} alt="" />
            </div>

            <div className="space-y-8 col-span-1 mt-28 relative ">
              <div className="text-[#162A43] banner-text font-medium font-sans ">
                Repairs without having to call
              </div>
              <p className="text-[#565151] font-normal text-lg">
                No more waiting for a call back, simply raise a maintenance
                request through the web dashboard and a member of our team will
                assist you right away! Use the Nuova web app to report any
                maintenance issues. Take a photo, write a description and your
                property manager will take care of the rest.
              </p>
            </div>

            {/* <div className='col-span-1 relative -right-64'>
                            <img className='mb-6 mt-16 relative z-20' src={p2_b4_img1} alt="" />
                            <div className='absolute z-10 top-28 -left-12'>
                                <img className='mb-6' src={p2_b4_img2} alt="" />
                            </div>
                            <div className='absolute z-10 -bottom-16 left-28'>
                                <img className='mb-6 w-2/3 mx-auto' src={p2_b4_img3} alt="" />
                            </div>
                        </div> */}
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] pb-40 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="space-y-8 py-10 col-span-1 mt-28">
              <div className="text-[#162A43] banner-text font-medium font-sans ">
                At your finger tips 24/7
              </div>
              <p className="text-[#565151] font-normal text-lg">
                From the single lick of a button you will have a complete
                oversight of your Nuova home. You can report repairs, speak to a
                member of our team and receive real time updates!
              </p>
            </div>

            <div className="col-span-1 relative">
              <div className="absolute">
                <img className="mt-12" src={p2_b5_img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-5xl mx-auto">
          {/* Content goes here */}
          <div className="space-y-3 text-center p-8">
            <div className="text-[#162A43] font-semibold text-4xl font-sans">
              <h1 className="leading-snug">Contact us for Tenancy</h1>
            </div>

            <p className="text-[#565151] font-normal text-lg font-sans w-4/5 mx-auto">
              We're here to help you find the perfect rental property. Whether
              it's a cozy apartment or a spacious house, our dedicated team is
              ready to assist you. Contact us today to start your journey toward
              your dream space!
            </p>
          </div>

          <div className="py-5 px-6 sm:px-10 lg:col-span-2 xl:p-6 max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-500"
                >
                  Full Name <span className="text-red-500 font-bold ">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
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
                    className={`py-2 px-4 block w-full shadow-sm ${
                      errors.tenantEmail ? "border-red-500" : "border-gray-100"
                    } focus:ring-teal-500 focus:border-teal-500 border-2 rounded-md`}
                    {...register("tenantEmail", {
                      required: "Email is required",
                    })}
                  />
                  {errors.tenantEmail && (
                    <p className="text-red-500 mt-2">
                      {errors.tenantEmail.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-500"
                >
                  Subject <span className="text-red-500 font-bold ">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="Subject"
                    id="subject"
                    autoComplete="family-name"
                    placeholder="Write subject"
                    className={`py-2 px-4 block w-full shadow-sm ${
                      errors.subject ? "border-red-500" : "border-gray-100"
                    } focus:ring-teal-500 focus:border-teal-500 border-2 rounded-md`}
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <p className="text-red-500 mt-2">
                      {errors.subject.message}
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
                      errors.tenantPhoneNo
                        ? "border-red-500"
                        : "border-gray-100"
                    } focus:ring-teal-500 focus:border-teal-500 border-2 rounded-md`}
                    {...register("tenantPhoneNo", {
                      required: "Phone no is required",
                    })}
                    aria-describedby="phone-optional"
                  />
                  {errors.tenantPhoneNo && (
                    <p className="text-red-500 mt-2">
                      {errors.tenantPhoneNo.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message"
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
                    id="message"
                    name="message"
                    rows={4}
                    className={`py-2 px-4 block w-full shadow-sm ${
                      errors.tenantMessage
                        ? "border-red-500"
                        : "border-gray-100"
                    } focus:ring-teal-500 focus:border-teal-500 border-2 rounded-md`}
                    {...register("tenantMessage", {
                      required: "Message is required",
                    })}
                    aria-describedby="message-max"
                    placeholder="Write something here..."
                  />
                  {errors.tenantMessage && (
                    <p className="text-red-500 mt-2">
                      {errors.tenantMessage.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2 sm:flex sm:justify-end lg:justify-center">
                <button
                  disabled={loading}
                  type="submit"
                  className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#BD8472] hover:bg-[#BD8472] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BD8472] sm:w-auto disabled:cursor-not-allowed"
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

export default Banner;
