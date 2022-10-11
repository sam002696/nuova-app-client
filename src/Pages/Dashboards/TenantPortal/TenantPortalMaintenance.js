import React, { useState } from 'react';
import { CheckIcon, UserIcon, HandIcon } from '@heroicons/react/solid'
import TenantMaintenanceModal from './TenantMaintenanceModal';
const testimonials = [
    {
        id: 1,
        quote:
            'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
        attribution: 'Sarah Peters, New Orleans',
    },
    {
        id: 2,
        quote:
            'I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!',
        attribution: 'Kelly McPherson, Chicago',
    },
    {
        id: 3,
        quote:
            'Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.',
        attribution: 'Chris Paul, Phoenix',
    },
]



const timeline = [
    {
        id: 1,
        content: 'Applied to',
        target: 'Front End Developer',
        href: '#',
        date: 'Sep 20',
        datetime: '2020-09-20',
        icon: UserIcon,
        iconBackground: 'bg-gray-400',
    },
    {
        id: 2,
        content: 'Advanced to phone screening by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 22',
        datetime: '2020-09-22',
        icon: HandIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 3,
        content: 'Completed phone screening with',
        target: 'Martha Gardner',
        href: '#',
        date: 'Sep 28',
        datetime: '2020-09-28',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 4,
        content: 'Advanced to interview by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: HandIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 5,
        content: 'Completed interview with',
        target: 'Katherine Snyder',
        href: '#',
        date: 'Oct 4',
        datetime: '2020-10-04',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const TenantPortalMaintenance = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="">
                <div className="mx-auto max-w-7xl">

                    <div className="relative overflow-hidden bg-white mb-12">
                        {/* Decorative background image and gradient */}
                        <div aria-hidden="true" className="absolute inset-0">
                            <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
                                <img
                                    src="https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="absolute inset-0 bg-white bg-opacity-75" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
                        </div>

                        {/* Callout */}
                        <section
                            aria-labelledby="sale-heading"
                            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
                        >
                            <div className="mx-auto max-w-2xl lg:max-w-none">
                                <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-cyan-700 sm:text-5xl lg:text-6xl">
                                    Maintenance becomes easy with Nuova.
                                </h2>
                                <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                                    Most of our products are limited releases that won't come back. Get your favorite items while they're in
                                    stock.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    className="mt-6 inline-block w-full rounded-md border border-transparent bg-cyan-700 py-3 px-8 font-medium text-white hover:bg-cyan-600 sm:w-auto"
                                >
                                    Send A Maintenance Request
                                </button>
                            </div>
                        </section>

                        {/* Testimonials */}
                        <section
                            aria-labelledby="testimonial-heading"
                            className="relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:py-24 lg:px-8"
                        >
                            <div className="mx-auto max-w-2xl lg:max-w-none">
                                <h2 id="testimonial-heading" className="text-2xl font-bold tracking-tight text-cyan-700">
                                    Tenant's saying about Maintenance
                                </h2>

                                <div className="mt-8 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                                    {testimonials.map((testimonial) => (
                                        <blockquote key={testimonial.id} className="sm:flex lg:block">
                                            <svg
                                                width={24}
                                                height={18}
                                                viewBox="0 0 24 18"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                className="flex-shrink-0 text-gray-300"
                                            >
                                                <path
                                                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                                                <p className="text-lg text-gray-600">{testimonial.quote}</p>
                                                <cite className="mt-4 block font-semibold not-italic text-gray-900">{testimonial.attribution}</cite>
                                            </div>
                                        </blockquote>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* <div className="mx-auto max-w-2xl lg:max-w-none mb-4">
                        <h2 id="testimonial-heading" className="text-3xl text-center font-bold tracking-tight text-gray-900">
                            Send Maintenance Request </h2>
                    </div>
                    <form className="space-y-6" action="#" method="POST">
                        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="md:col-span-1">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        This information will be displayed publicly so be careful what you share.
                                    </p>
                                </div>
                                <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                                Website
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                                    http://
                                                </span>
                                                <input
                                                    type="text"
                                                    name="company-website"
                                                    id="company-website"
                                                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="www.example.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            About
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="you@example.com"
                                                defaultValue={''}
                                            />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Photo</label>
                                        <div className="mt-1 flex items-center space-x-5">
                                            <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </span>
                                            <button
                                                type="button"
                                                className="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Change
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                                        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                            <div className="space-y-1 text-center">
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="md:col-span-1">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                                    <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                                </div>
                                <div className="mt-5 md:col-span-2 md:mt-0">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
                                                type="text"
                                                name="email-address"
                                                id="email-address"
                                                autoComplete="email"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Country
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                Street address
                                            </label>
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="address-level2"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                State / Province
                                            </label>
                                            <input
                                                type="text"
                                                name="region"
                                                id="region"
                                                autoComplete="address-level1"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                ZIP / Postal code
                                            </label>
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="md:col-span-1">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                                    <p className="mt-1 text-sm text-gray-500">Decide which communications you'd like to receive and how.</p>
                                </div>
                                <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                                    <fieldset>
                                        <legend className="sr-only">By Email</legend>
                                        <div className="text-base font-medium text-gray-900" aria-hidden="true">
                                            By Email
                                        </div>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="comments"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="comments" className="font-medium text-gray-700">
                                                        Comments
                                                    </label>
                                                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="candidates"
                                                        name="candidates"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="candidates" className="font-medium text-gray-700">
                                                        Candidates
                                                    </label>
                                                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="offers"
                                                        name="offers"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="offers" className="font-medium text-gray-700">
                                                        Offers
                                                    </label>
                                                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
                                        <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="push-everything"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Everything
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="push-email"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Same as email
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="push-nothing"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                                    No push notifications
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Save
                            </button>
                        </div>
                    </form> */}

                    <div className="mx-auto max-w-2xl">
                        <div className="mx-auto max-w-2xl lg:max-w-none my-8">
                            <h2 id="testimonial-heading" className="text-2xl text-center font-bold tracking-tight text-gray-700">
                                Progress of Maintenance Request </h2>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="-mb-8">
                                {timeline.map((event, eventIdx) => (
                                    <li key={event.id}>
                                        <div className="relative pb-8">
                                            {eventIdx !== timeline.length - 1 ? (
                                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                            ) : null}
                                            <div className="relative flex space-x-3">
                                                <div>
                                                    <span
                                                        className={classNames(
                                                            event.iconBackground,
                                                            'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                                        )}
                                                    >
                                                        <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                                                    </span>
                                                </div>
                                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                    <div>
                                                        <p className="text-sm text-gray-500">
                                                            {event.content}{' '}
                                                            <a href={event.href} className="font-medium text-gray-900">
                                                                {event.target}
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                                        <time dateTime={event.datetime}>{event.date}</time>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <TenantMaintenanceModal setOpen={setOpen} open={open} />
            </div>
        </>
    );
};

export default TenantPortalMaintenance;