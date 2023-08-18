import React from "react";

const PricingContact = () => {
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
              action="#"
              method="POST"
              className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-500"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Alex Jo"
                    className="py-2 px-4 block w-full shadow-sm text-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-100 border-2 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-500"
                >
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="example@gmail.com"
                    className="py-2 px-4 block w-full shadow-sm text-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-100 border-2  rounded-md"
                  />
                </div>
              </div>

              <div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Phone
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    placeholder="+874 645 312"
                    className="py-2 px-4 block w-full shadow-sm text-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-100 border-2  rounded-md"
                    aria-describedby="phone-optional"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-500"
                >
                  Post Code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="Subject"
                    id="subject"
                    autoComplete="family-name"
                    placeholder="Write postcode"
                    className="py-2 px-4 block w-full shadow-sm text-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-100 border-2 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-500"
                >
                  Portfolio Size
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="Subject"
                    id="subject"
                    autoComplete="family-name"
                    placeholder="1-2"
                    className="py-2 px-4 block w-full shadow-sm text-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-100 border-2 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-500"
                >
                  Package
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="Subject"
                    id="subject"
                    autoComplete="family-name"
                    placeholder="Full Management Service"
                    className="py-2 px-4 block w-full shadow-sm text-gray-500 focus:ring-teal-500 focus:border-teal-500 border-gray-100 border-2 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Your Message
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
                    className="py-3 px-3 block w-full text-sm shadow-sm text-gray-500 focus:ring-teal-500 focus:border-teal-500 border border-gray-100 rounded-md"
                    aria-describedby="message-max"
                    defaultValue={"Write something here..."}
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:flex sm:justify-end lg:justify-center">
                <button
                  type="submit"
                  className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#BD8472] hover:bg-[#BD8472] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
                >
                  Send Message
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
