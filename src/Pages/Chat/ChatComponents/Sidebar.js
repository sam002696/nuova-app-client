import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-grow flex-col overflow-y-auto  bg-white pt-5 pb-4">
        <Navbar />

        <hr className="mt-[10px]" />

        <Search />

        <Chats />
      </div>
    </>
  );
};

export default Sidebar;
