import React from "react";
import Chat from "../ChatComponents/Chat";
import Sidebar from "../ChatComponents/Sidebar";

const ChatHome = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-12 lg:pb-16 ">
        <div className=" grid grid-cols-3 border h-[100vh] rounded shadow-md shadow-cyan-500/30">
          <div className=" col-span-1 border-gray-200 border-r rounded">
            <Sidebar />
          </div>
          <div className=" col-span-2 ">
            <Chat />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatHome;
