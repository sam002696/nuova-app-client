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

const Login = () => {
  const { loading } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:5500/api/auth/login", {
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      if (res.data?.role === "Contractor") {
        history.push("/contractor-portal-dashboard");
      } else if (res.data?.role === "Tenant") {
        history.push("/tenant-portal-dashboard");
      } else if (res.data?.role === "Landlord") {
        history.push("/landlord-portal-dashboard");
      } else if (res.data?.role === "Property Manager") {
        history.push("/property-manager-dashboard");
      }
    } catch (err) {
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

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
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
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/register"
                    className="font-medium text-yellow-600 hover:text-yellow-500"
                  >
                    New Here?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="flex w-full justify-center rounded-md border border-transparent bg-[#bd8472] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none "
                >
                  {loading ? "Signing in" : "Sign in"}
                </button>
              </div>

              {error ? (
                <div className="text-red-800 bg-red-200 font-medium px-2 py-1">
                  {error.response?.data?.message}
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
