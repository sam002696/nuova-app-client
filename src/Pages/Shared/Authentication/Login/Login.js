import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../Images/Footer/logo.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../../../Redux/userSlice.js";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { loading } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    dispatch(loginStart());
    try {
      const res = await axios.post(
        "https://nuova-property-server.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );
      dispatch(loginSuccess(res.data));
      if (res.data?.role === "Contractor") {
        history.push("/contractor-portal-dashboard");
      } else if (res.data?.role === "Tenant") {
        history.push("/tenant-portal-dashboard");
      } else if (res.data?.role === "Landlord") {
        history.push("/landlord-portal-dashboard");
      } else if (res.data?.role === "Property Manager") {
        history.push("/property-manager-dashboard");
      } else if (res.data?.role === "Admin") {
        history.push("/admindashboard");
      }
      reset();
    } catch (err) {
      console.log(err);
      dispatch(loginFailure());
      setError(err);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-20 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/home" className="flex flex-col items-center">
            <img className="mx-auto h-10 w-auto" src={logo} alt="Nuova Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap mt-5">
              Nuova Property Management
            </span>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your Nuova Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg shadow-[#bd8472]/70 sm:rounded-lg sm:px-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-10"
              action="#"
              method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address{" "}
                  <span className="text-red-500 font-bold ">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className={`px-3 py-2 block w-full shadow-sm sm:text-sm ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 border rounded-md placeholder-gray-400 appearance-none`}
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-2 text-sm font-medium">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password <span className="text-red-500 font-bold ">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className={`px-3 py-2 block w-full shadow-sm sm:text-sm ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 border rounded-md placeholder-gray-400 appearance-none`}
                  />
                  {errors.password && (
                    <p className="text-red-500 mt-2 text-sm font-medium">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-[#c48f7e] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#d59d8b] focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  {loading ? "Signing in" : "Sign in"}
                </button>
              </div>

              {error ? (
                <div className="text-red-800 bg-red-200 font-medium px-2 py-1">
                  {error.response?.data}
                </div>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
