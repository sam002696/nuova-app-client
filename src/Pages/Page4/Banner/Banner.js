import React from "react";

import p4_b3_img1 from "../../../Images/Page4/Banner3/Page4 banner3 img1.png";
import p4_b3_img2 from "../../../Images/Page4/Banner3/Page4 banner3 img2.png";
import p4_b3_img3 from "../../../Images/Page4/Banner3/Page4 banner3 img3.png";

import p2_b2_img1 from "../../../Images/Page2/Banner2/Page2 banner2 img1.png";
import p2_b2_img2 from "../../../Images/Page2/Banner2/Page2 banner2 img2.png";
import p2_b2_img3 from "../../../Images/Page2/Banner2/Page2 banner2 img3.png";
import p2_b2_img4 from "../../../Images/Page2/Banner2/Page2 banner2 img4.png";
import p2_b2_img5 from "../../../Images/Page2/Banner2/Page2 banner2 img5.png";

import p4_TI_img1 from "../../../Images/Page4/Table/Page4 Table img rec1.png";
import p4_TI_img2 from "../../../Images/Page4/Table/Page4 Table img rec2.png";

import p4_b7_V0_img0 from "../../../Images/Page4/Banner7/Page4 banner7 V0 img0.png";
import p4_b7_V1_img1 from "../../../Images/Page4/Banner7/Page4 banner7 V1 img1.png";
import p4_b7_V2_img2 from "../../../Images/Page4/Banner7/Page4 banner7 V2 img2.png";
import p4_b7_V3_img3 from "../../../Images/Page4/Banner7/Page4 banner7 V3 img3.png";
import p4_b7_Rec_img1 from "../../../Images/Page4/Banner7/Page4 banner7 Rectangle img1.png";

import p4_b2_img1 from "../../../Images/Page4/Banner2/Page 4 Banner 2 Img1.png";
import p4_b2_img2 from "../../../Images/Page4/Banner2/Page 4 Banner 2 Img2.png";
import p4_b2_img3 from "../../../Images/Page4/Banner2/Page 4 Banner 2 Img3.png";
import p4_b2_img4 from "../../../Images/Page4/Banner2/Page 4 Banner 2 Img4.png";

const Banner = () => {
  const posts = [
    {
      title: "Boost your conversion rate",
      href: "#",
      category: { name: "Article", href: "#" },
      description:
        "Cloud Hosting is a good fit for those of you who are building personal websites, portfolios, blogs, and other systems",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "6 min",
      author: {
        name: "Roel Aufderehar",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "How to use search engine optimization to drive sales",
      href: "#",
      category: { name: "Video", href: "#" },
      description:
        "Cloud Hosting is a good fit for those of you who are building personal websites, portfolios, blogs, and other systems",
      date: "Mar 10, 2020",
      datetime: "2020-03-10",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "4 min",
      author: {
        name: "Brenna Goyette",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "Improve your customer experience",
      href: "#",
      category: { name: "Case Study", href: "#" },
      description:
        "Cloud Hosting is a good fit for those of you who are building personal websites, portfolios, blogs, and other systems",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "11 min",
      author: {
        name: "Daniela Metz",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "Improve your customer experience",
      href: "#",
      category: { name: "Case Study", href: "#" },
      description:
        "Cloud Hosting is a good fit for those of you who are building personal websites, portfolios, blogs, and other systems",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "11 min",
      author: {
        name: "Daniela Metz",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  const people = [
    {
      no: "1",
      service: "Listing Creation",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "2",
      service: "Pricing Optimisation",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "3",
      service: "Cleaning + Laundry & Linen",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "4",
      service: "Guest Screening",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "5",
      service: "Full Communication",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "6",
      service: "24 Hour Check-ins",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "7",
      service: "Stocking up Consumables",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "8",
      service: "24 Hour Maintenance Support",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    {
      no: "9",
      service: "Guest Experience",
      management: p4_TI_img1,
      individually: p4_TI_img2,
    },
    // More people...
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {/* <div className="bg-[#162A43] px-4 sm:px-6 lg:px-8 ">
        
        <div className="max-w-5xl mx-auto">
          
          <div className="space-y-6 text-center pt-20 pb-8">
            <div className="text-cyan-200 font-semibold text-5xl font-sans">
              <h1 className="leading-snug">
                Changing the way in which residential property is managed
              </h1>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
         
          <div className="grid grid-cols-3 gap-x-20">
            <div className="space-y-8 py-10 col-span-1 relative z-10">
              <div className="text-white banner-text font-medium font-sans ">
                ABOUT NUOVA PROPERTY
              </div>
            </div>

            <div className="space-y-8 py-10 col-span-2 relative z-10">
              <p className="text-[#DEE1E5] font-normal text-lg text-justify">
                Nuova Property Management & Letting has been built using over 40
                years of residential property experience. Starting of as
                landlords ourselves we understand the struggles and the hurdles
                that must be overcome in order to protect such an important
                asset. From also being a tenant and having to deal with letting
                agents I noticed that I was always treated more like an
                inconvenience rather than a customer and soon realised that
                landlords were also treated in a very similar manner. As a
                landlord, you can trust us to take care of all aspects of
                managing your property, from finding and screening tenants to
                handling maintenance and repairs. We will work closely with you
                to ensure that your property is treated like our own and that
                you are always getting the best possible return on your
                investment. For tenants, we make sure that the properties we
                manage are well-maintained and in good condition. We are always
                available to answer any questions you may have and to help with
                any issues that may arise, our proactive team are always there
                to help. We want to make the property management and letting
                industry{" "}
                <span className="text-cyan-200">
                  {" "}
                  SEAMLESS, STRAIGHTFORWARD AND TRANSPARENT
                </span>{" "}
                .
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-gray-900">
        <main className="relative isolate">
          {/* Background */}
          <div
            className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>

          {/* Header section */}
          <div className="px-6 pt-8 lg:px-8">
            <div className="mx-auto max-w-2xl pt-12 text-center sm:pt-20">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                ABOUT NUOVA PROPERTY
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300 italic">
                SEAMLESS, STRAIGHTFORWARD AND TRANSPARENT
              </p>
            </div>
          </div>

          {/* Content section */}
          <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8 pb-16">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
                <div>
                  <p>
                    Nuova Property Management & Letting has been built using
                    over 40 years of residential property experience. Starting
                    of as landlords ourselves we understand the struggles and
                    the hurdles that must be overcome in order to protect such
                    an important asset.
                  </p>
                  <p className="mt-8">
                    From also being a tenant and having to deal with letting
                    agents I noticed that I was always treated more like an
                    inconvenience rather than a customer and soon realised that
                    landlords were also treated in a very similar manner. As a
                    landlord, you can trust us to take care of all aspects of
                    managing your property, from finding and screening tenants
                    to handling maintenance and repairs.
                  </p>
                </div>
                <div>
                  <p>
                    We will work closely with you to ensure that your property
                    is treated like our own and that you are always getting the
                    best possible return on your investment. For tenants, we
                    make sure that the properties we manage are well-maintained
                    and in good condition.
                  </p>
                  <p className="mt-8">
                    We are always available to answer any questions you may have
                    and to help with any issues that may arise, our proactive
                    team are always there to help. We want to make the property
                    management and letting industry SEAMLESS, STRAIGHTFORWARD
                    AND TRANSPARENT .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="relative isolate -z-10">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-60 lg:px-8 lg:pt-4">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Changing the way in which residential property is managed
                </h1>
                <p className="relative mt-12 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  We are always available to answer any questions you may have
                  and to help with any issues that may arise, our proactive team
                  are always there to help. We want to make the property
                  management and letting industry seamless, straightforward and
                  transparent.
                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="">
        <div className="max-w-5xl mx-auto">
          <div className="pt-16">
            <h1 className="text-4xl font-mono font-semibold text-center">
              OUR VALUES
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

      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="pt-16">
          <h1 className="text-4xl font-mono font-semibold text-center">
            OUR VALUES
          </h1>
        </div>
        <div className="pt-8">
          <img className="w-1/5 mx-auto h-1" src={p2_b2_img5} alt="" />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-x-12">
          <div className=" bg-[#FFFFFF] border-none px-5 py-10 rounded-2xl mt-10 shadow-lg relative">
            <div className="relative">
              <img className="mx-auto relative" src={p4_b2_img1} alt="" />
              {/* <img className='mx-auto absolute top-6 inset-x-20 w-1/5' src={timer} alt="" /> */}
            </div>
            <p className=" font-semibold text-xl text-center text-[#282421] mt-5">
              Integrity
            </p>
            <p className=" font-normal text-md text-center text-[#282421] mt-5">
              We build trust through responsible actions and honest
              relationships, we provide support any time to our clients with
              highest priority.
            </p>
          </div>
          <div className=" bg-[#FFFFFF] border-none px-5 py-10 rounded-2xl mt-10 shadow-lg relative">
            <div className="relative">
              <img className="mx-auto relative" src={p4_b2_img2} alt="" />
            </div>
            <p className=" font-semibold text-xl text-center text-[#282421] mt-5">
              Simplicity
            </p>
            <p className=" font-normal text-md text-center text-[#282421] mt-5">
              We aim to remove all that gets in the way of what really matters,
              we have designed our technology so problems get dealt with fast
              and efficiently.
            </p>
          </div>
          <div className=" bg-[#FFFFFF] border-none px-5 py-10 rounded-2xl mt-10 shadow-lg relative">
            <div className="relative">
              <img className="mx-auto relative" src={p4_b2_img3} alt="" />
            </div>
            <p className=" font-semibold text-xl text-center text-[#282421] mt-5">
              Service
            </p>
            <p className=" font-normal text-md text-center text-[#282421] mt-5">
              We make service our top priority by giving our time, knowledge,
              and experience to serve the needs of our customers, community, and
              team members
            </p>
          </div>
          <div className=" bg-[#FFFFFF] border-none px-5 py-10 rounded-2xl mt-10 shadow-lg relative">
            <div className="relative">
              <img className="mx-auto relative" src={p4_b2_img4} alt="" />
            </div>
            <p className=" font-semibold text-xl text-center text-[#282421] mt-5">
              Professionalism
            </p>
            <p className="  font-normal text-md text-center text-[#282421] mt-5">
              We provide present a positive, dignified, and businesslike image
              at all time trough our appearances, behavior, and interactions
              with others.
            </p>
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

      {/* <div className="relative bg-[#F7F1E9] pt-16 pb-20 px-4 sm:px-6 lg:pt-4 lg:pb-28 lg:px-8">
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl text-[#162A43] font-bold sm:text-3xl font-sans">
              We have got you covered
            </h2>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0 bg-white">
                  <img
                    className="h-48 w-full p-3 object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-3 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="mt-3 text-sm text-gray-500">
                        {post.description}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-6xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="space-y-8 py-10 col-span-1 mt-36 relative">
              <div className="text-[#162A43] text-5xl font-semibold font-sans">
                Our Vision
              </div>
              <p className="text-[#565151] font-normal text-lg text-justify">
                Property ownership and management should be seamless, easy, safe
                and secure and provide best experience for all parties involved.
                We are building a better future for the most valuable and most
                important asset in the world, our home!
              </p>
            </div>

            <div className="col-span-1 relative">
              <div>
                <img className="w-5/6 mt-20" src={p4_b3_img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 pb-20 ">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-6xl mx-auto">
          {/* Content goes here */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="col-span-1 relative">
              <div>
                <img className="w-5/6 mt-20" src={p4_b3_img1} alt="" />
              </div>
            </div>

            <div className="space-y-8 py-10 col-span-1 mt-36 ">
              <div className="text-[#162A43] text-5xl font-semibold font-sans">
                Our Mission
              </div>
              <p className="text-[#565151] font-normal text-lg text-justify">
                Our mission is simple we want to make the sector more
                transparent, generate higher returns for our clients and make
                sure both landlords and tenants are receiving the customer
                service that they deserve, we want our property owners to know
                exactly what is going on with their property at any given
                moment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-col ">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                <table
                  className="min-w-full border-separate"
                  style={{ borderSpacing: 0 }}
                >
                  <thead className="bg-[#BD8472]">
                    <tr className="bg-[#BD8472]">
                      <th
                        scope="col"
                        className=" border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-center text-lg font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-36"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className=" hidden border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter sm:table-cell"
                      >
                        Service
                      </th>
                      <th
                        scope="col"
                        className=" hidden border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter lg:table-cell"
                      >
                        Premium Management (15.7% + Vat)
                      </th>
                      <th
                        scope="col"
                        className=" border-b border-gray-300  bg-opacity-75 px-3 py-3.5 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter"
                      >
                        Individually Priced (Optional)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {people.map((person, personIdx) => (
                      <tr
                        key={person.email}
                        className={
                          personIdx % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"
                        }
                      >
                        <td
                          className={classNames(
                            personIdx !== people.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap py-4 pl-4 pr-3 text-md font-medium text-gray-900 sm:pl-6 lg:pl-36 text-center"
                          )}
                        >
                          {person.no}
                        </td>
                        <td
                          className={classNames(
                            personIdx !== people.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap p-3 py-4 text-md text-gray-900 hidden sm:table-cell"
                          )}
                        >
                          {person.service}
                        </td>
                        <td
                          className={classNames(
                            personIdx !== people.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-32 py-4 text-sm text-gray-500 hidden lg:table-cell"
                          )}
                        >
                          <img className="" src={person.management} alt="" />
                        </td>
                        <td
                          className={classNames(
                            personIdx !== people.length - 1
                              ? "border-b border-gray-200"
                              : "",
                            "whitespace-nowrap px-28 py-4 text-sm text-gray-500"
                          )}
                        >
                          <img className="" src={person.individually} alt="" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Logo cloud */}
      <div className="mx-auto mt-5 mb-12 max-w-7xl sm:mt-5 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why let your property with Nuova?
          </h2>
          <p className="mx-auto mt-16 max-w-3xl text-lg leading-8 text-gray-300">
            Thanks to our 35 years of local market knowledge and expertise, we
            manage and let a vast range of properties from HMO’s, Short term
            lets to Long terms lets. Our team of letting staff are well
            experience in all aspects of property management and letting, our
            agents are also Arla accredited. The experience we have has allowed
            us help property owners and investors achieve their goals and have
            made their property journey an easy one.
          </p>
          {/* <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div> */}
          <div
            className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
