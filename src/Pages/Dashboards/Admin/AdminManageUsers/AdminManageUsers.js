import React, { useState } from "react";
import PropertyManager from "./PropertyManager";
import Landlord from "./Landlord";
import Tenant from "./Tenant";

const AdminManageUsers = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-end py-4">
        <div className="ml-10 flex flex-shrink-0 items-center space-x-10 pr-16">
          <nav aria-label="Global" className="flex space-x-10">
            <a
              className={
                openTab === 1
                  ? "text-sm font-medium text-cyan-600"
                  : "text-sm text-black"
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Property managers
            </a>

            <a
              className={
                openTab === 2
                  ? "text-sm font-medium text-cyan-600"
                  : "text-sm text-black"
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Landlords
            </a>

            <a
              className={
                openTab === 3
                  ? "text-sm font-medium text-cyan-600"
                  : "text-sm text-black"
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Tenants
            </a>
          </nav>
        </div>
      </div>

      <div className={openTab === 1 ? "block" : "hidden"} id="link1">
        <PropertyManager />
      </div>
      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
        <Landlord />
      </div>
      <div className={openTab === 3 ? "block" : "hidden"} id="link2">
        <Tenant />
      </div>
    </>
  );
};

export default AdminManageUsers;
