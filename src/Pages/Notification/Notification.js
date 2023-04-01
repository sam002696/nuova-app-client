import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon, ChartSquareBarIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Notification = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none ">
          <BellIcon className="h-7 w-7" aria-hidden="true" />

          <span className="absolute top-0 right-0 block h-2 w-2 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-red-400 ring-2 ring-white" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-black",
                    "group flex items-center px-4 py-4 text-sm font-medium"
                  )}
                >
                  <ChartSquareBarIcon
                    className="mr-3 h-5 w-5 text-black group-hover:text-black"
                    aria-hidden="true"
                  />
                  <span className="truncate">
                    A new maintenance request from a tenant{" "}
                  </span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-black",
                    "group flex items-center px-4 py-4 text-sm font-medium"
                  )}
                >
                  <ChartSquareBarIcon
                    className="mr-3 h-5 w-5 text-black group-hover:text-black"
                    aria-hidden="true"
                  />
                  <span className="truncate ">
                    A new inspection report has been uploaded to the site{" "}
                  </span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-black",
                    "group flex items-center px-4 py-4 text-sm font-medium"
                  )}
                >
                  <ChartSquareBarIcon
                    className="mr-3 h-5 w-5 text-black group-hover:text-black"
                    aria-hidden="true"
                  />
                  <span className="truncate ">
                    A new bidding has been uploaded by a contractor{" "}
                  </span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-black",
                    "group flex items-center px-4 py-4 text-sm font-medium"
                  )}
                >
                  <ChartSquareBarIcon
                    className="mr-3 h-5 w-5 text-black group-hover:text-black "
                    aria-hidden="true"
                  />
                  <span className="truncate">
                    A new task has been submitted by a tenant{" "}
                  </span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-black",
                    "group flex items-center px-4 py-4 text-sm font-medium"
                  )}
                >
                  <ChartSquareBarIcon
                    className="mr-3 h-5 w-5 text-black group-hover:text-black "
                    aria-hidden="true"
                  />
                  <span className="truncate">
                    A new task has been submitted by a tenant{" "}
                  </span>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Notification;
