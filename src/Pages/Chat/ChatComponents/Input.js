import React, { useContext, useState } from "react";
import { AuthContext } from "../ChatContext/AuthContext";
import { ChatContext } from "../ChatContext/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../ChatFirebase/Firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [document, setDocument] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };
  const handleDocument = (e) => {
    setDocument(e.target.files[0]);
  };
  const handleSend = async () => {
    const storageRef = ref(storage, uuid());
    if (img) {
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  img: downloadURL,
                }),
              });

              await updateDoc(doc(db, "userChats", currentUser.uid), {
                [data.chatId + ".lastPicture"]: {
                  img: downloadURL,
                },
                [data.chatId + ".date"]: serverTimestamp(),
              });

              await updateDoc(doc(db, "userChats", data.user.uid), {
                [data.chatId + ".lastPicture"]: {
                  img: downloadURL,
                },
                [data.chatId + ".date"]: serverTimestamp(),
              });
            })
            .finally(setImg(null));
        }
      );
    } else if (document) {
      const documentUploadTask = uploadBytesResumable(storageRef, document);

      documentUploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(documentUploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  document: downloadURL,
                  documentName: document?.name,
                }),
              });

              await updateDoc(doc(db, "userChats", currentUser.uid), {
                [data.chatId + ".lastDocument"]: {
                  document: downloadURL,
                  documentName: document?.name,
                },
                [data.chatId + ".date"]: serverTimestamp(),
              });

              await updateDoc(doc(db, "userChats", data.user.uid), {
                [data.chatId + ".lastDocument"]: {
                  document: downloadURL,
                  documentName: document?.name,
                },
                [data.chatId + ".date"]: serverTimestamp(),
              });
            })
            .finally(setDocument(null));
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
        id: currentUser.uid,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
        id: currentUser.uid,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText("");
  };
  return (
    <>
      <div className="grid grid-cols-3">
        <div className=" col-span-2">
          <label htmlFor="chatmessage" className="sr-only">
            Type Something
          </label>
          <input
            type="text"
            name="chatmessage"
            id="chatmessage"
            className="block w-full custom-focus h-[50px] p-[10px] "
            placeholder="Type Something..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="col-span-1 flex items-center px-1 justify-end">
          {img && (
            <div className="relative">
              <p className=" mr-3 text-base text-gray-400 bg-gray-200 px-3 py-1 rounded-md truncate-custom ">
                {img?.name ? img?.name : ""}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 absolute -top-2 right-2 text-gray-500 cursor-pointer"
                  onClick={() => setImg(null)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </p>
            </div>
          )}

          {document && (
            <div className="relative">
              <p className=" mr-3 text-base text-gray-400 bg-gray-200 px-3 py-1 rounded-md truncate-custom ">
                {document?.name ? document?.name : ""}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 absolute -top-2 right-2 text-gray-500 cursor-pointer"
                  onClick={() => setDocument(null)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </p>
            </div>
          )}

          <div className=" mr-2">
            <label for="dropzone-file-data-two">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer hover:text-cyan-400 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
              </svg>

              <input
                id="dropzone-file-data-two"
                style={{ display: "none" }}
                type="file"
                accept="application/pdf"
                onChange={(e) => handleDocument(e)}
              />
            </label>
          </div>

          <div>
            <label for="dropzone-file-data-one">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer hover:text-cyan-400 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <input
                id="dropzone-file-data-one"
                style={{ display: "none" }}
                onChange={(e) => handleImg(e)}
                type="file"
                accept="image/*"
              />
            </label>
          </div>

          <label htmlFor="file"></label>
          <button
            disabled={text === "" && img === null && document === null}
            onClick={handleSend}
            className=" px-3 disabled:cursor-not-allowed "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-gray-500 hover:text-cyan-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
