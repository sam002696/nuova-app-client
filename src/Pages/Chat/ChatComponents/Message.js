import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../ChatContext/AuthContext";
import { ChatContext } from "../ChatContext/ChatContext";
import { format } from "timeago.js";
import ChatImageModal from "./ChatImageModal";
const Message = ({ message }) => {
  const [openImg, setOpenImg] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message.text, message.img, message.document]);
  let secs = message.date.seconds;

  const handleImgModal = () => {
    setOpenImg(true);
  };
  return (
    <>
      <div
        className={`message flex gap-5 mb-5 ${
          message.senderId === currentUser.uid && "owner flex-row-reverse"
        }`}
        ref={ref}
      >
        <div className="messageInfo flex flex-col">
          <img
            src={
              message.senderId === currentUser.uid ? (
                currentUser.photoURL ? (
                  currentUser.photoURL
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
              ) : data.user.photoURL ? (
                data.user.photoURL
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
            className=" rounded-full w-8 h-8 border"
            alt=""
          />
        </div>
        <div className="messageContent max-w-[50%] flex flex-col space-y-5 items-end">
          {message.text && (
            <div className=" pb-5">
              <p
                className={` p-3 shadow-lg ${
                  message.senderId === currentUser.uid
                    ? "owner-border-radius bg-gradient-to-r from-gray-400 to-slate-500 text-white"
                    : "custom-border-radius text-start bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
                }`}
              >
                {message.text}
              </p>

              <div
                className={` ${
                  message.senderId === currentUser.uid
                    ? "text-end"
                    : "text-start"
                }`}
              >
                <span className=" text-gray-400 text-sm font-normal">
                  {format(new Date(secs * 1000))}
                </span>
              </div>
            </div>
          )}
          {message.img && (
            <div className=" py-2 pb-5">
              <img
                onClick={handleImgModal}
                className={`w-full h-full  cursor-pointer border-2  shadow-lg ${
                  message.senderId === currentUser.uid
                    ? "owner-border-radius border-gray-300"
                    : "custom-border-radius border-gray-300"
                }`}
                src={message.img}
                alt=""
              />

              <div
                className={` ${
                  message.senderId === currentUser.uid
                    ? "text-end"
                    : "text-start"
                }`}
              >
                <span className=" text-gray-400 text-sm font-normal ">
                  {format(new Date(secs * 1000))}
                </span>
              </div>
            </div>
          )}

          {message.document && (
            <div className=" py-2 pb-5">
              <div
                className={`flex items-center ${
                  message.senderId === currentUser.uid
                    ? "flex-row "
                    : "flex-row-reverse"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 mr-3 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                <a
                  href={message.document}
                  target="_blank"
                  alt="pdf"
                  className={`w-full h-full  cursor-pointer border-2  shadow-lg px-10 py-3 uppercase font-mono font-semibold bg-gradient-to-r from-red-400 to bg-red-700 text-white flex flex-col ${
                    message.senderId === currentUser.uid
                      ? "owner-border-radius border-gray-300 "
                      : "custom-border-radius border-gray-300 mr-2"
                  }`}
                  rel="noreferrer"
                >
                  <span className="text-center"> pdf file</span>{" "}
                  <div className=" pt-3 text-center text-gray-300 truncate-custom">
                    {message.documentName}
                  </div>
                </a>
              </div>

              <div
                className={`pt-1 ${
                  message.senderId === currentUser.uid
                    ? "text-end"
                    : "text-start"
                }`}
              >
                <span className=" text-gray-400 text-sm font-normal ">
                  {format(new Date(secs * 1000))}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      {openImg && (
        <ChatImageModal
          image={message?.img}
          openImg={openImg}
          setOpenImg={setOpenImg}
        />
      )}
    </>
  );
};

export default Message;
