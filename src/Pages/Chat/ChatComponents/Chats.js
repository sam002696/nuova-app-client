import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ChatContext/AuthContext";
import { ChatContext } from "../ChatContext/ChatContext";
import { db } from "../ChatFirebase/Firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  // const [blueDot, setBlueDot] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const { dispatch, data } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  console.log(chats);
  return (
    <>
      <div className="custom-scrollbar mt-4 transition-all duration-700 ease-in-out">
        {Object.entries(chats)
          ?.sort((a, b) => b[1].date - a[1].date)
          .map((chat) => (
            <div
              className={`hover:bg-gray-200 cursor-pointer ${
                data.user?.displayName === chat[1].userInfo?.displayName
                  ? "bg-gray-100"
                  : "border-b"
              }`}
            >
              <div
                className=" flex items-center mx-3 py-3"
                key={chat[0]}
                onClick={() => handleSelect(chat[1].userInfo)}
              >
                <div className="">
                  <img
                    src={chat[1].userInfo?.photoURL}
                    className="rounded-full w-12 h-12 border"
                    alt=""
                  />
                </div>

                <div className="userChatInfo ml-5">
                  <p className=" text-lg font-semibold">
                    {chat[1].userInfo?.displayName}
                  </p>
                  <p className=" text-base font-medium text-gray-500 truncate-custom">
                    {chat[1].lastMessage?.text
                      ? chat[1].lastMessage?.text
                      : chat[1].lastPicture?.img
                      ? "Attachment"
                      : chat[1].lastDocument?.document && "document"}
                  </p>
                </div>
                {chat[1].userInfo?.uid === chat[1].lastMessage?.id && (
                  <div className=" ml-auto">
                    <span className="block h-2 w-2 rounded-full bg-cyan-600" />
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Chats;
