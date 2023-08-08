import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../Images/Footer/logo.png";

const Register = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  //   const handleRegister = async (e) => {
  //     e.preventDefault();
  //     dispatch(registerStart());
  //     try {
  //       const res = await axios.post("http://localhost:3500/api/auth/register", {
  //         username,
  //         email,
  //         password,
  //         role,
  //       });
  //       dispatch(registerSuccess(res.data));
  //       console.log("register success", username, email, password, role);
  //       history.push("/login");
  //     } catch (err) {
  //       dispatch(registerFailure());
  //     }
  //   };
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
            Register for your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
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

              <div>
                <label
                  htmlFor="personrole"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Choose your role
                </label>
                <select
                  id="personrole"
                  name="personrole"
                  autoComplete="person-role"
                  onChange={(e) => setRole(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                >
                  <option>Role</option>
                  <option>Tenant</option>
                  <option>Contractor</option>
                  <option>Landlord</option>
                </select>
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
                    to="/login"
                    className="font-medium text-yellow-600 hover:text-yellow-500"
                  >
                    already registered?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  //   onClick={handleRegister}
                  className="flex w-full justify-center rounded-md border border-transparent bg-[#bd8472] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 bg- bg- focus:outline-none "
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
