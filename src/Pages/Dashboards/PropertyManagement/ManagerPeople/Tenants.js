import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Tenants = () => {
  const [tenants, setTenants] = useState([]);
  useEffect(() => {
    const handleFetchtenants = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5500/api/users?role=Tenant`
        );
        console.log(res.data);
        setTenants(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetchtenants();
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="lg:py-20">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Tenants</h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the users in your account including their name,
                title, email and role.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Phone No
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {tenants.map((tenant) => (
                        <tr key={tenant._id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {tenant.username}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {tenant.phoneNo}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {tenant.email}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {tenant.role}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <Link
                              to="#"
                              className="text-cyan-600 hover:text-cyan-900"
                            >
                              View
                              <span className="sr-only">, {tenant.name}</span>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tenants;
