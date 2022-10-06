import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const posts = [
  {
    title: "277000",
    href: "#",
    category: { name: "Property 1", href: "#" },
    description: "277000",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "457000",
    href: "#",
    category: { name: "Property 2", href: "#" },
    description: "457000",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  },
  {
    title: "897000",
    href: "#",
    category: { name: "Property 3", href: "#" },
    description: "897000",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "670000",
    href: "#",
    category: { name: "Property 4", href: "#" },
    description: "670000",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "670000",
    href: "#",
    category: { name: "Property 5", href: "#" },
    description: "670000",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1600047508557-92d6db2cf246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "670000",
    href: "#",
    category: { name: "Property 6", href: "#" },
    description: "670000",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];
const AllProperties = () => {
  return (
    <div className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-8 lg:px-8">
      <div className="relative max-w-9xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            All Properties
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-7xl">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-56 w-full object-cover rounded-lg"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-cyan-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-2xl font-semibold text-gray-800">
                      <span className=" text-3xl font-semibold ">&#163;</span>
                      {post.title}
                    </p>
                  </a>
                </div>

                <div className="mt-4 grid grid-cols-3 mb-2 ">
                  <div className=" col-span-1">
                    <div className=" flex flex-col ">
                      <div className=" flex flex-row  space-x-2 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          className="h-7 w-7 fill-slate-600"
                        >
                          <path d="M32 32C49.67 32 64 46.33 64 64V320H288V160C288 142.3 302.3 128 320 128H544C597 128 640 170.1 640 224V448C640 465.7 625.7 480 608 480C590.3 480 576 465.7 576 448V416H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32zM96 208C96 163.8 131.8 128 176 128C220.2 128 256 163.8 256 208C256 252.2 220.2 288 176 288C131.8 288 96 252.2 96 208z" />
                        </svg>
                        <p className=" font-medium text-2xl text-gray-500">6</p>
                      </div>
                      <div>
                        <p className=" font-base text-xl text-slate-400 pt-1">
                          Bedrooms
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-span-1">
                    <div className=" flex flex-col ">
                      <div className=" flex flex-row  space-x-2 items-center">
                        <svg
                          className="h-6 w-6 fill-slate-600 "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M32 384c0 28.32 12.49 53.52 32 71.09V496C64 504.8 71.16 512 80 512h32C120.8 512 128 504.8 128 496v-15.1h256V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16v-40.9c19.51-17.57 32-42.77 32-71.09V352H32V384zM496 256H96V77.25C95.97 66.45 111 60.23 118.6 67.88L132.4 81.66C123.6 108.6 129.4 134.5 144.2 153.2C137.9 159.5 137.8 169.8 144 176l11.31 11.31c6.248 6.248 16.38 6.248 22.63 0l105.4-105.4c6.248-6.248 6.248-16.38 0-22.63l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0C230.7 33.26 204.7 27.55 177.7 36.41L163.9 22.64C149.5 8.25 129.6 0 109.3 0C66.66 0 32 34.66 32 77.25v178.8L16 256C7.164 256 0 263.2 0 272v32C0 312.8 7.164 320 16 320h480c8.836 0 16-7.164 16-16v-32C512 263.2 504.8 256 496 256z" />
                        </svg>
                        <p className=" font-medium text-2xl text-gray-500">5</p>
                      </div>
                      <div>
                        <p className=" font-base text-xl text-slate-400 pt-1">
                          Bathrooms
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-span-1">
                    <div className=" flex flex-col ">
                      <div className=" flex flex-row  space-x-2 items-center ">
                        <svg
                          className="h-7 w-7 fill-slate-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M416 32C433.7 32 448 46.33 448 64V128C448 145.7 433.7 160 416 160V352C433.7 352 448 366.3 448 384V448C448 465.7 433.7 480 416 480H352C334.3 480 320 465.7 320 448H128C128 465.7 113.7 480 96 480H32C14.33 480 0 465.7 0 448V384C0 366.3 14.33 352 32 352V160C14.33 160 0 145.7 0 128V64C0 46.33 14.33 32 32 32H96C113.7 32 128 46.33 128 64H320C320 46.33 334.3 32 352 32H416zM368 80V112H400V80H368zM96 160V352C113.7 352 128 366.3 128 384H320C320 366.3 334.3 352 352 352V160C334.3 160 320 145.7 320 128H128C128 145.7 113.7 160 96 160zM48 400V432H80V400H48zM400 432V400H368V432H400zM80 112V80H48V112H80z" />
                        </svg>
                        <p className=" font-medium text-2xl text-gray-500">
                          500m
                        </p>
                      </div>
                      <div>
                        <p className=" font-base text-xl text-slate-400 pt-1">
                          Living Area
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 bg-gray-100 group hover:bg-slate-600 pt-5 pb-5 pl-6  gap-x-8">
                <div className="col-span-2">
                  <div className=" flex flex-row items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className=" text-gray-500 group-hover:text-white text-xl font-light">
                      6391, Elgian St. Selina, Delwar 10299
                    </p>
                  </div>
                </div>
                <div className=" col-span-1">
                  <Link to="/single-property/1234567">
                    <button
                      type="button"
                      className="inline-flex items-center px-6 py-2 border border-transparent text-lg font-medium rounded-xl shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
