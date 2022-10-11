import React from 'react';

import {
    CheckCircleIcon,
    ChevronRightIcon,
    EyeIcon,
} from "@heroicons/react/solid";

const applications = [
    {
        applicant: {
            name: "Door Lock Repair",
            email: "ricardo.cooper@example.com",
            imageUrl:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        date: "2020-01-07",
        dateFull: "January 7, 2020",
        stage: "Completed Door Lock Repair",
        href: "#",
    },
    {
        applicant: {
            name: "Basin Water Leak",
            email: "kristen.ramos@example.com",
            imageUrl:
                "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        date: "2020-01-07",
        dateFull: "January 17, 2020",
        stage: "Completed Basin Water Leak",
        href: "#",
    },
    {
        applicant: {
            name: "Windows Glass Broken",
            email: "ted.fox@example.com",
            imageUrl:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        date: "2020-01-07",
        dateFull: "January 27, 2020",
        stage: "Completed Windows Glass Broken",
        href: "#",
    },
];

const incentives = [
    {
        name: '24*7 Contractors Ready',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
        name: 'Guaranteed 2 Days Recovery',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
        name: 'Payment After Full Completion',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
            "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
]

const TenantPortalTasks = () => {
    return (
        <>
            <div className="">
                <div className="mx-auto max-w-7xl">

                    <div className="bg-gray-50">
                        <div className="mx-auto max-w-7xl py-8 sm:px-2 sm:py-8 lg:px-4">
                            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                                <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
                                    <div>
                                        <h2 className="text-4xl font-bold tracking-tight text-cyan-700">
                                            Nuova built business on great customer service
                                        </h2>
                                        <p className="mt-4 text-gray-500">
                                            At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                                            caring about that. Our new strategy is to write a bunch of things that look really good in the
                                            headlines, then clarify in the small print but hope people don't actually read it.
                                        </p>
                                    </div>
                                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                                        <img
                                            src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                                            alt=""
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                                <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                                    {incentives.map((incentive) => (
                                        <div key={incentive.name} className="sm:flex lg:block">
                                            <div className="sm:flex-shrink-0">
                                                <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                                            </div>
                                            <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                                                <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                                                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
                <div className="mx-auto max-w-5xl">
                    <div className="my-12">
                        <div className=" mb-5">
                            <p className=" font-medium text-2xl text-center underline underline-offset-4 mb-3 text-gray-700">
                                Tasks for Property Managers
                            </p>
                            <p className=" font-medium text-lg text-center text-gray-500">
                                Create tasks for your Property Manager to fix
                            </p>
                        </div>
                        <button
                            type="button"
                            className="relative block w-full border-2 border-cyan-700 border-dashed rounded-lg p-12 text-center hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="mx-auto h-12 w-12 text-cyan-500"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                />
                            </svg>
                            <span className="mt-2 block text-sm font-medium text-gray-900">
                                Create a new task
                            </span>
                        </button>
                    </div>

                    <div className="pb-20">
                        <p className=" font-medium text-lg text-center text-gray-500 mb-5 underline underline-offset-4">
                            List of the assigned tasks for Property Manager
                        </p>
                        <div className="bg-white shadow-lg shadow-cyan-200/50 overflow-hidden sm:rounded-md">
                            <ul className="divide-y divide-gray-200">
                                {applications.map((application) => (
                                    <li key={application.applicant.email}>
                                        <a
                                            href={application.href}
                                            className="block hover:bg-gray-50"
                                        >
                                            <div className="flex items-center px-4 py-4 sm:px-6">
                                                <div className="min-w-0 flex-1 flex items-center">
                                                    {/* <div className="flex-shrink-0">
                                                        <img
                                                            className="h-12 w-12 rounded-full"
                                                            src={application.applicant.imageUrl}
                                                            alt=""
                                                        />
                                                    </div> */}
                                                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                                        <div>
                                                            <p className="text-sm font-medium text-cyan-600 truncate">
                                                                {application.applicant.name}
                                                            </p>
                                                            <p className="mt-2 flex items-center text-sm text-gray-500">
                                                                <EyeIcon
                                                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                                    aria-hidden="true"
                                                                />
                                                                <span className="truncate">
                                                                    {application.applicant.email}
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="hidden md:block">
                                                            <div>
                                                                <p className="text-sm text-gray-900">
                                                                    Applied on{" "}
                                                                    <time dateTime={application.date}>
                                                                        {application.dateFull}
                                                                    </time>
                                                                </p>
                                                                <p className="mt-2 flex items-center text-sm text-gray-500">
                                                                    <CheckCircleIcon
                                                                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                    {application.stage}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <ChevronRightIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TenantPortalTasks;