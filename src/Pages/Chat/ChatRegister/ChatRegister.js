import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../ChatFirebase/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const ChatRegister = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const username = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const file = e.target[4].files[0];
    const userName = username.toLowerCase();
    try {
      //Create user
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
              // tenantId: userName,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              userName,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            history.push("/property-manager-dashboard/inbox");
          } catch (err) {
            setLoading(false);
            setErr(err.message);
          }
        });
      });
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        setErr("Email is already in use. Please use a different email.");
      } else {
        setErr("An error occurred during registration. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="bg-gray-50 py-10">
        <div className="mx-auto max-w-7xl ">
          <div className="mx-auto max-w-5xl">
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-600">
                  Register for Nuova chat account
                </h2>
              </div>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-lg shadow-cyan-500/40 sm:rounded-lg sm:px-10">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    action="#"
                    method="POST"
                  >
                    <div>
                      <label
                        htmlFor="displayName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Display name
                      </label>
                      <div className="mt-1">
                        <input
                          id="displayName"
                          name="displayName"
                          type="text"
                          autoComplete="text"
                          value={currentUser.username}
                          readOnly
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm bg-gray-200 cursor-not-allowed text-gray-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="displayName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        username (unique id)
                      </label>
                      <div className="mt-1">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          autoComplete="text"
                          placeholder="eg. emily0041"
                          value={currentUser.chatid}
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm bg-gray-200 cursor-not-allowed text-gray-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={currentUser.email}
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm bg-gray-200 cursor-not-allowed text-gray-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password{" "}
                        <span className="text-red-500 font-bold ">*</span>
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700 ">
                          Choose a picture{" "}
                          <span className="text-red-500 font-bold ">*</span>
                        </label>
                        <input
                          type="file"
                          id="picture"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg file:bg-gray-400   file:text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full  file:rounded-l-lg file:p-1.5 file:border-none"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <p className="font-medium text-gray-700">
                          Already have a chat account?
                          <Link to="/property-manager-dashboard/inbox">
                            {" "}
                            <span className=" text-cyan-500 underline underline-offset-1">
                              login
                            </span>{" "}
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div>
                      <button
                        disabled={loading}
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                      >
                        {loading ? (
                          <div role="status">
                            <svg
                              aria-hidden="true"
                              class="mr-2 w-5 h-5 text-gray-200 animate-spin  fill-gray-700"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                              />
                            </svg>
                            <span class="sr-only">Loading...</span>
                          </div>
                        ) : (
                          "Register"
                        )}
                      </button>
                      {loading && (
                        <p className=" mt-5 text-green-600 bg-green-200 px-2 py-2 rounded-md font-medium">
                          Uploading and compressing the image please wait...
                        </p>
                      )}
                      {err && (
                        <p className=" mt-5 text-red-500 bg-red-200 px-2 py-2 rounded-md font-medium">
                          {err}
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRegister;
