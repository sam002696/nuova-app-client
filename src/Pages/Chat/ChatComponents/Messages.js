import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ChatContext/AuthContext";
import { ChatContext } from "../ChatContext/ChatContext";

import { db } from "../ChatFirebase/Firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      data.chatId.includes(currentUser.uid) &&
        doc.exists() &&
        setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId, currentUser.uid]);
  return (
    <>
      <div className="messages bg-gray-50 p-[10px] height-custom custom-scrollbar">
        {messages.map((m) => (
          <Message message={m} key={m.id} />
        ))}
      </div>
    </>
  );
};

export default Messages;
