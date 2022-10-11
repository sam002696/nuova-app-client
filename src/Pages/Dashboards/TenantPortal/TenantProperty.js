import React from 'react';
import { PaperClipIcon } from '@heroicons/react/solid'

const TenantProperty = () => {
    return (
        <>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <main className="lg:relative">
                        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
                            <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-xl xl:text-5xl">
                                    <span className="block xl:inline">Nuova Provided Data</span>{' '}
                                    <span className="block text-cyan-600 xl:inline">For Tenancy Transperacy</span>
                                </h1>
                                <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                    fugiat veniam occaecat fugiat aliqua.
                                </p>
                                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                            href="#"
                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 md:py-4 md:px-10 md:text-lg"
                                        >
                                            Get started
                                        </a>
                                    </div>
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <a
                                            href="#"
                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-cyan-600 hover:bg-cyan-50 md:py-4 md:px-10 md:text-lg"
                                        >
                                            Live demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                            <img
                                className="absolute inset-0 h-full w-full object-cover"
                                src="https://global-uploads.webflow.com/5f18a24d02bace2ac2d05bac/62218521567b01f99480ad0b_620eae3f937a02389f04c798_background-check.png"
                                alt=""
                            />
                        </div>
                    </main>


                    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Tenant's Property Information</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Property Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Houston Housing Society</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Property Owner</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Alex Adam</dd>
                                </div>
                                <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Lanlord Email address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Tenant Name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Mark Swan</dd>
                                </div>
                                <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Rental Amount</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">5000$</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Next Payment Date</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">01-December-2022</dd>
                                </div>
                                <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Tenancy Started</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">01-May-2022</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Tenancy Renewal Date</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">01-May-2023</dd>
                                </div>
                                <div className="bg-cyan-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Terms & Conditions</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <ol>
                                            <li>1. Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</li>
                                            <br />
                                            <li>2. Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</li>
                                            <br />
                                            <li>3. Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</li>
                                            <br />
                                            <li>4. Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</li>
                                        </ol>
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                <div className="flex w-0 flex-1 items-center">
                                                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                    <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                                                </div>
                                                <div className="ml-4 flex-shrink-0">
                                                    <a href="#" className="font-medium text-cyan-600 hover:text-cyan-500">
                                                        Download
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                <div className="flex w-0 flex-1 items-center">
                                                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                    <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                                                </div>
                                                <div className="ml-4 flex-shrink-0">
                                                    <a href="#" className="font-medium text-cyan-600 hover:text-cyan-500">
                                                        Download
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TenantProperty;