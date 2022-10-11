import React from 'react';

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import { UsersIcon, CurrencyPoundIcon, CreditCardIcon } from '@heroicons/react/outline'

const stats = [
    { id: 1, name: 'Total Occupant', stat: '04', icon: UsersIcon, change: '1', changeType: 'increase' },
    { id: 2, name: 'Monthly Rent', stat: '2500', icon: CurrencyPoundIcon, change: '2.5%', changeType: 'increase' },
    { id: 3, name: 'Holding Deposits', stat: '1500', icon: CreditCardIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const offers = [
    { name: 'Download Payment app', description: 'Get an exclusive $5 off code', href: '#' },
    { name: "Always Updated with Rental", description: 'Easy Method for Payment', href: '#' },
    { name: 'Sign up for our newsletter', description: '15% off your first Pay', href: '#' },
]

const TenantPortalFinance = () => {
    return (
        <>
            <div className="relative px-4 sm:px-6 lg:px-8 mt-20">
                <div className="mx-auto max-w-7xl">
                    <div className='my-16'>
                        <h3 className="text-2xl font-medium leading-6 text-gray-900">Tenant's Finance Stats</h3>

                        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {stats.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
                                >
                                    <dt>
                                        <div className="absolute rounded-md bg-cyan-600 p-3">
                                            <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                                    </dt>
                                    <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                                        <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                                        <p
                                            className={classNames(
                                                item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                                                'ml-2 flex items-baseline text-sm font-semibold'
                                            )}
                                        >
                                            {item.changeType === 'increase' ? (
                                                <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                                            ) : (
                                                <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                                            )}

                                            <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                                            {item.change}
                                        </p>
                                        <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                            <div className="text-sm">
                                                <a href="#" className="font-medium text-cyan-600 hover:text-cyan-500">
                                                    {' '}
                                                    View all<span className="sr-only"> {item.name} stats</span>
                                                </a>
                                            </div>
                                        </div>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>



                <div className="bg-cyan-500">
                    <div className="flex flex-col border-b border-gray-200 lg:border-2">
                        <nav aria-label="Offers" className="order-last lg:order-first">
                            <div className="mx-auto max-w-7xl lg:px-8">
                                <ul
                                    role="list"
                                    className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
                                >
                                    {offers.map((offer) => (
                                        <li key={offer.name} className="flex flex-col">
                                            <a
                                                href={offer.href}
                                                className="relative flex flex-1 flex-col justify-center bg-white py-10 px-4 text-center focus:z-10"
                                            >
                                                <p className="text-md text-gray-500">{offer.name}</p>
                                                <p className="font-semibold text-gray-900">{offer.description}</p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>

                        <div className="relative">
                            <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
                            <div className="relative bg-gray-100 lg:bg-transparent">
                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                                    <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                                        <div className="lg:pr-16">
                                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                                Payment made Easy with Nuova App
                                            </h1>
                                            <p className="mt-4 text-xl text-gray-600">
                                                Pay rent via the app and view statements to show what you have paid. Tenants will be able to have a complete overview of their
                                                finance.
                                            </p>
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="inline-block rounded-md border border-transparent bg-cyan-600 py-3 px-8 font-medium text-white hover:bg-cyan-700"
                                                >
                                                    One Tap Pay
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/3">
                                <img
                                    src="https://global-uploads.webflow.com/5f073e32d304276cc8b4ff30/5ffce2e37ef58233d3f4bc09_eCheck-ach-rent-payment-2x.png"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    );
};

export default TenantPortalFinance;