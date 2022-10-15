import React, { useContext } from "react";
import { AuthContext } from "../ChatContext/AuthContext";
import { ChatContext } from "../ChatContext/ChatContext";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="chat flex-1">
        {data.chatId.includes(currentUser.uid, data.user.uid) ? (
          <div>
            <div className="chatInfo h-[77px] py-7 px-3 border-b">
              <h1 className=" text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-teal-100 font-medium ">
                {data.user?.displayName}
              </h1>
            </div>

            <Messages />

            <Input />
          </div>
        ) : (
          <div className=" relative">
            <img
              className="height-custom-picture w-full"
              src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              alt=""
            />
            <q className=" absolute top-10 left-32 text-white text-xl italic underline underline-offset-4 tracking-wider">
              Please select a conversation to get started! <br /> If you are{" "}
              <span className=" font-bold">new</span>, search for a user using
              their usernames.
            </q>
          </div>
        )}
      </div>
    </>
  );
};

export default Chat;
