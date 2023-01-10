import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../Redux/userSlice";
import Swal from "sweetalert2";

const LandlordProfile = () => {
  const [passwordError, setPasswordErr] = useState("");
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [changePassword, setChangePassword] = useState(false);

  const [formList, setFormList] = useState({
    username: currentUser.username,
    email: currentUser.email,
    phoneNo: currentUser.phoneNo,
    userId: currentUser._id,
    dob: currentUser.dob,
    profilePic: currentUser.profilePic,
    password: currentUser.password,
    confirmPassword: currentUser.confirmPassword,
    gender: currentUser.gender,
    aboutMe: currentUser.aboutMe,
    occupation: currentUser.occupation,
    currentAddress: currentUser.currentAddress,
    zipCode: currentUser.zipCode,
    city: currentUser.city,
    country: currentUser.country,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormList({ ...formList, [name]: value });
  };

  const handleChangePassword = () => {
    setChangePassword(true);
  };

  const handleImg = (e) => {
    // setImg(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
    // setUploadImg(e.target.files[0].name);
    const [file] = e.target.files;
    setFormList({ ...formList, profilePic: file });
  };

  const handleSaveAndUpdateButton = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    const image = formList.profilePic;

    if (image) {
      data.append("file", image);
      //upload presets
      data.append("upload_preset", "eez1w4gg");

      const uploadRes1 = await axios.post(
        "https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload",
        data
      );
      const { url: url1 } = uploadRes1.data;
      formList.profilePic = url1;
    }

    try {
      const res = await axios.put(
        `http://localhost:5500/api/users/${currentUser._id}`,
        formList
      );
      if (res.data) {
        setLoading(false);
        dispatch(updateUser(res.data));
        Swal.fire("Profile Updated!", "You updated your info!", "success");
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
    console.log(formList);
  };

  // validation for password and confirm password

  const handleValidation = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    //for password
    if (passwordInputFieldName === "password") {
      const minLengthRegExp = /.{8,}/;
      const passwordLength = passwordInputValue.length;

      const minLengthPassword = minLengthRegExp.test(passwordInputValue);
      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "Password is empty";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setPasswordErr(errMsg);
    }
    // for confirm password
    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" &&
        formList.confirmPassword.length > 0)
    ) {
      if (formList.confirmPassword !== formList.password) {
        setConfirmPasswordError("Confirm password is not matched");
      } else {
        setConfirmPasswordError("");
      }
    }
  };

  return (
    <>
      <div className=" bg-gray-50">
        <div className=" max-w-5xl mx-auto py-10">
          <form className="space-y-6">
            <div className="bg-white px-4 py-5 shadow-md sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Profile
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>
                <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="aboutMe"
                        rows={3}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        placeholder="you@example.com"
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                        defaultValue={currentUser.aboutMe}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>

                  <div className=" flex items-center">
                    <label className="block text-sm font-medium text-gray-700 sr-only">
                      Photo
                    </label>

                    <div className="mt-1 flex items-center space-x-5">
                      <span
                        className={`inline-block h-12 w-12 overflow-hidden rounded-full ${
                          img ? "bg-white border" : "bg-gray-100"
                        }`}
                      >
                        {img || currentUser.profilePic ? (
                          <img
                            className=" w-full h-full"
                            src={img || currentUser.profilePic}
                            alt=""
                          />
                        ) : (
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )}
                      </span>

                      <label htmlFor="dropzone-file-data-one">
                        <div className="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                          Change
                        </div>

                        <input
                          id="dropzone-file-data-one"
                          style={{ display: "none" }}
                          type="file"
                          onChange={(e) => handleImg(e)}
                          accept="image/*"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white px-4 py-5 shadow-md sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        defaultValue={currentUser.username}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="useremail"
                        id="useremail"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        readOnly
                        defaultValue={currentUser.email}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="phoneNo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone No.
                      </label>
                      <input
                        type="number"
                        name="phoneNo"
                        id="phoneNo"
                        autoComplete="telephone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        defaultValue={currentUser.phoneNo}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 ">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********"
                        readOnly
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2 mt-6">
                      <button
                        onClick={handleChangePassword}
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-3 py-2 text-sm font-medium leading-4 text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Change password
                      </button>
                    </div>

                    <div
                      className={`${
                        changePassword ? "col-span-6 sm:col-span-4" : "hidden"
                      }`}
                    >
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Create new password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        onKeyUp={handleValidation}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                      <p className="text-red-500">{passwordError}</p>
                    </div>

                    <div
                      className={`${
                        changePassword ? "col-span-6 sm:col-span-4" : "hidden"
                      }`}
                    >
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirm new password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        onKeyUp={handleValidation}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                      <p className="text-red-500">{confirmPasswordError}</p>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="dob"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date of birth
                      </label>
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        defaultValue={
                          currentUser.dob &&
                          new Date(currentUser.dob)
                            .toISOString()
                            .substring(0, 10)
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="occupation"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Occupation
                      </label>
                      <input
                        type="text"
                        name="occupation"
                        id="occupation"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        defaultValue={currentUser.occupation}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                        defaultValue={currentUser.country}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      >
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Scotland</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                        defaultValue={currentUser.gender}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      >
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Current address
                      </label>
                      <input
                        type="text"
                        name="currentAddress"
                        id="currentAddress"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        defaultValue={currentUser.currentAddress}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        defaultValue={currentUser.city}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        autoComplete="postal-code"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                        defaultValue={currentUser.zipCode}
                        onChange={(e) => {
                          handleFormChange(e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end py-5">
              <button
                type="submit"
                disabled={loading}
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                onClick={(e) => handleSaveAndUpdateButton(e)}
              >
                {loading ? "Updating Profile" : "Save and update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LandlordProfile;
