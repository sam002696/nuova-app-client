import React, { useContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../ChatFirebase/Firebase";
import { AuthContext } from "../ChatContext/AuthContext";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../ChatFirebase/Firebase";
const Navbar = () => {
  const [user, setUser] = useState(null);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const handleUser = async () => {
      const q = query(
        collection(db, "users"),
        where("uid", "==", currentUser?.uid)
      );

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      } catch (err) {}
    };
    handleUser();
  }, [currentUser?.uid]);

  return (
    <>
      <div className="flex flex-shrink-0 items-center justify-between px-4">
        <p className="text-2xl font-bold">Chats</p>
        <Menu as="div" className="">
          <Menu.Button>
            <img
              className=" rounded-full w-10 h-10 mr-2 border"
              src={
                currentUser?.photoURL ? (
                  currentUser?.photoURL
                ) : (
                  <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                )
              }
              alt=""
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {currentUser.displayName}
                    </div>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900 " : "text-gray-700",
                        "block px-4 py-2 text-sm underline underline-offset-4"
                      )}
                    >
                      {user?.userName} (username)
                    </div>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      onClick={() => signOut(auth)}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* <button onClick={() => signOut(auth)} className="border-2 px-2 ml-2">
          logout
        </button> */}
      </div>
    </>
  );
};

export default Navbar;
