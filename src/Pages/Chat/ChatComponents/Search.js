import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../ChatFirebase/Firebase";
import { AuthContext } from "../ChatContext/AuthContext";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("userName", "==", username.toLowerCase())
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };

  const handleSearchedUser = () => {
    setUser(null);
    setUsername("");
  };
  return (
    <>
      <div className="mt-5 px-3">
        <div className="relative mt-1 rounded-md shadow-sm">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mr-3 h-4 w-4 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="username"
            id="username"
            onKeyDown={handleKey}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="block w-full rounded-md border-gray-300 pl-9 focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
            placeholder="Search"
          />
        </div>
      </div>
      {err && <span>User not found!</span>}
      {user && username && (
        <div
          className=" flex items-center mt-5 border-b pb-3 cursor-pointer hover:bg-gray-100 py-3 justify-between bg-teal-50"
          onClick={handleSelect}
        >
          <div className=" flex items-center">
            <img
              src={user?.photoURL}
              className="rounded-full w-14 h-14 mx-3"
              alt=""
            />

            <div className="userChatInfo">
              <p className=" text-lg font-semibold">{user?.displayName}</p>
            </div>
          </div>

          <div className=" mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-red-500"
              onClick={handleSearchedUser}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
