import React, { useEffect } from "react";
import Swal from "sweetalert2";
import {
  CheckCircleIcon,
  ChevronRightIcon,
  ArrowCircleRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";

import { useState } from "react";
import axios from "axios";
import TasksToTenantsModal from "./ManagerTasksModal/TasksToTenantsModal";

const ManagerTasks = () => {
  const [showTenantTask, setShowTenantTask] = useState(false);
  const [loadingIndividual, setLoadingIndividual] = useState(false);
  const [loadingEveryone, setLoadingEveryone] = useState(false);
  const [showLandlordTask, setShowLandlordTask] = useState(false);
  const [tenantsTasks, setTenantsTasks] = useState([]);
  const [landlordsTasks, setLandlordsTasks] = useState([]);
  const [singletask, setSingleTask] = useState({});
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [formList, setFormList] = useState({
    taskFor: "",
    sendTask: "",
    assignedUsername: "",
    assignedUseremail: "",
    taskTitle: "",
    taskDesc: "",
  });

  const handleTenantTaskForm = () => {
    setShowTenantTask(true);
  };
  const handleLandlordTaskForm = () => {
    setShowLandlordTask(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormList({ ...formList, [name]: value });
  };
  const handleTaskSubmit = async (e) => {
    setLoadingIndividual(true);
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5500/api/tasks`, formList);
      if (res.data) {
        setLoadingIndividual(false);
        Swal.fire("The task has been uploaded");
        window.location.reload(false);
        console.log(formList);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSendToEveryone = async (e) => {
    setLoadingEveryone(true);
    e.preventDefault();

    const { assignedUsername, assignedUseremail, ...others } = formList;

    try {
      const res = await axios.post(
        `http://localhost:5500/api/tasks/all`,
        others
      );
      if (res.data) {
        setLoadingEveryone(false);
        Swal.fire("The tasks have been uploaded");
        window.location.reload(false);
        console.log(others);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleFetchTenantTasks = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5500/api/tasks?taskFor=Tenants`
        );
        console.log(res.data);
        setTenantsTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetchTenantTasks();
  }, []);

  useEffect(() => {
    const handleFetchLandlordTasks = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5500/api/tasks?taskFor=Landlords`
        );
        console.log(res.data);
        setLandlordsTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetchLandlordTasks();
  }, []);

  const handleTaskModal = (task) => {
    setSingleTask(task);
    setOpenTaskModal(true);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto my-20">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-3">
            <div className=" mb-5">
              <p className=" font-medium text-2xl text-center underline underline-offset-4 mb-3 text-gray-700">
                Tasks for tenants
              </p>
              <p className=" font-medium text-lg text-center text-gray-500">
                create tasks for your tenants
              </p>
            </div>

            <button
              type="button"
              onClick={handleTenantTaskForm}
              className="relative block w-full border-2 border-cyan-700 border-dashed rounded-lg p-12 text-center hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="mx-auto h-12 w-12 text-cyan-500"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Create a new task
              </span>
            </button>

            <div className={`${showTenantTask ? "shadow-lg mt-8" : "hidden"}`}>
              <div className="overflow-hidden bg-white py-8 px-4 sm:px-6 lg:px-8 lg:py-12">
                <div className="relative mx-auto max-w-xl">
                  <svg
                    className="absolute left-full translate-x-1/2 transform"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="85737c0e-0916-41d7-917f-596dc7edfa27"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={404}
                      fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                    />
                  </svg>
                  <svg
                    className="absolute right-full bottom-0 -translate-x-1/2 transform"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="85737c0e-0916-41d7-917f-596dc7edfa27"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={404}
                      fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                    />
                  </svg>
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                      Create tasks for tenants
                    </h2>
                    <p className="mt-4 text-md leading-6 text-gray-500">
                      Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                      volutpat massa dictumst amet. Sapien tortor lacus arcu.
                    </p>
                  </div>
                  <div className="mt-8">
                    <form className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="taskFor"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Task Send for
                        </label>
                        <select
                          id="taskFor"
                          name="taskFor"
                          className="block w-full rounded-md border-gray-300 py-1.5 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                          onChange={(e) => {
                            handleFormChange(e);
                          }}
                          required
                        >
                          <option hidden>Select</option>
                          <option>Tenants</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="sendTask"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Whom do you want to send?
                        </label>
                        <select
                          id="sendTask"
                          name="sendTask"
                          className="block w-full rounded-md border-gray-300 py-1.5 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                          onChange={(e) => {
                            handleFormChange(e);
                          }}
                          required
                        >
                          <option hidden>Select</option>
                          <option>Everyone</option>
                          <option>Send to individual</option>
                        </select>
                      </div>

                      {formList.sendTask === "Send to individual" && (
                        <>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="assignedUsername"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Full Name
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="assignedUsername"
                                id="assignedUsername"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-gray-300 py-1.5 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                                onChange={(e) => {
                                  handleFormChange(e);
                                }}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="assignedUseremail"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email
                            </label>
                            <div className="mt-1">
                              <input
                                id="assignedUseremail"
                                name="assignedUseremail"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-gray-300 py-1.5 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                                onChange={(e) => {
                                  handleFormChange(e);
                                }}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="taskTitle"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Task Title
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="taskTitle"
                            id="taskTitle"
                            autoComplete="organization"
                            className="block w-full rounded-md border-gray-300 py-1.5 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                            onChange={(e) => {
                              handleFormChange(e);
                            }}
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="taskDesc"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Task Description
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="taskDesc"
                            name="taskDesc"
                            rows={4}
                            className="block w-full rounded-md border-gray-300 py-1.5 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                            onChange={(e) => {
                              handleFormChange(e);
                            }}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        {formList.sendTask === "Send to individual" ? (
                          <input
                            disabled={loadingIndividual}
                            type="submit"
                            value={loadingIndividual ? "Submitting" : "Submit"}
                            onClick={(e) => handleTaskSubmit(e)}
                            className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          ></input>
                        ) : (
                          <input
                            disabled={loadingEveryone}
                            type="submit"
                            value={loadingEveryone ? "Submitting" : "Submit"}
                            onClick={(e) => handleSendToEveryone(e)}
                            className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          ></input>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="space-x-3 mb-5">
              <p className=" font-medium text-2xl text-center underline underline-offset-4 mb-3 text-gray-700">
                Tasks for landlords
              </p>
              <p className=" font-medium text-lg text-center text-gray-500">
                create tasks for your landlords
              </p>
            </div>

            <button
              type="button"
              onClick={handleLandlordTaskForm}
              className="relative block w-full border-2 border-cyan-700 border-dashed rounded-lg p-12 text-center hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="mx-auto h-12 w-12 text-cyan-500"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>

              <span className="mt-2 block text-sm font-medium text-gray-900">
                Create a new task
              </span>
            </button>

            <div
              className={`${showLandlordTask ? "shadow-lg mt-8" : "hidden"}`}
            >
              <div className="overflow-hidden bg-white py-8 px-4 sm:px-6 lg:px-8 lg:py-12">
                <div className="relative mx-auto max-w-xl">
                  <svg
                    className="absolute left-full translate-x-1/2 transform"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="85737c0e-0916-41d7-917f-596dc7edfa27"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={404}
                      fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                    />
                  </svg>
                  <svg
                    className="absolute right-full bottom-0 -translate-x-1/2 transform"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="85737c0e-0916-41d7-917f-596dc7edfa27"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={404}
                      fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                    />
                  </svg>
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                      Create tasks for landlords
                    </h2>
                    <p className="mt-4 text-md leading-6 text-gray-500">
                      Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                      volutpat massa dictumst amet. Sapien tortor lacus arcu.
                    </p>
                  </div>
                  <div className="mt-8">
                    <form className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="taskFor"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Task Send for
                        </label>
                        <select
                          id="taskFor"
                          name="taskFor"
                          className="block w-full rounded-md border-gray-300 py-1.5 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                          onChange={(e) => {
                            handleFormChange(e);
                          }}
                          required
                        >
                          <option hidden>Select</option>
                          <option>Landlords</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="sendTask"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Whom do you want to send?
                        </label>
                        <select
                          id="sendTask"
                          name="sendTask"
                          className="block w-full rounded-md border-gray-300 py-1.5 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                          onChange={(e) => {
                            handleFormChange(e);
                          }}
                        >
                          <option hidden>Select</option>
                          <option>Everyone</option>
                          <option>Send to individual</option>
                        </select>
                      </div>

                      {formList.sendTask === "Send to individual" && (
                        <>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="assignedUsername"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Full Name
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="assignedUsername"
                                id="assignedUsername"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-gray-300 py-1.5 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                                onChange={(e) => {
                                  handleFormChange(e);
                                }}
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="assignedUseremail"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email
                            </label>
                            <div className="mt-1">
                              <input
                                id="assignedUseremail"
                                name="assignedUseremail"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-gray-300 py-1.5 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                                onChange={(e) => {
                                  handleFormChange(e);
                                }}
                              />
                            </div>
                          </div>
                        </>
                      )}

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="taskTitle"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Task Title
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="taskTitle"
                            id="taskTitle"
                            autoComplete="organization"
                            className="block w-full rounded-md border-gray-300 py-1.5 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                            onChange={(e) => {
                              handleFormChange(e);
                            }}
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="taskDesc"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Task Description
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="taskDesc"
                            name="taskDesc"
                            rows={4}
                            className="block w-full rounded-md border-gray-300 py-1.5 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                            onChange={(e) => {
                              handleFormChange(e);
                            }}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        {formList.sendTask === "Send to individual" ? (
                          <input
                            disabled={loadingIndividual}
                            type="submit"
                            value={loadingIndividual ? "Submitting" : "Submit"}
                            onClick={(e) => handleTaskSubmit(e)}
                            className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          ></input>
                        ) : (
                          <input
                            disabled={loadingEveryone}
                            type="submit"
                            value={loadingEveryone ? "Submitting" : "Submit"}
                            onClick={(e) => handleSendToEveryone(e)}
                            className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                          ></input>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-8 py-10">
          <div className=" col-span-3">
            <div className=" py-5 max-w-3xl mx-auto">
              <p className=" font-medium text-lg text-center text-gray-500 mb-5 underline underline-offset-4">
                List of the assigned tenant tasks
              </p>
              <div className="bg-white shadow-lg shadow-cyan-200/50 overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {tenantsTasks
                    .sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                    .map((task) => (
                      <li key={task._id}>
                        <div className="block hover:bg-gray-50">
                          <div className="flex items-center px-4 py-4 sm:px-6">
                            <div className="min-w-0 flex-1 flex items-center">
                              <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                <div>
                                  <p className="text-sm font-medium text-cyan-600 truncate">
                                    {task.taskTitle}
                                  </p>

                                  <p className="mt-2 flex items-center text-sm text-gray-500">
                                    <PlusCircleIcon
                                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="truncate">
                                      {task.assignedUseremail
                                        ? "Individual"
                                        : "Everyone"}
                                    </span>
                                  </p>
                                </div>
                                <div className="hidden md:block">
                                  <div>
                                    <p className="text-sm text-gray-900">
                                      Assigned on{" "}
                                      <time>
                                        {new Date(task.createdAt).getFullYear()}
                                        -{new Date(task.createdAt).getMonth()}-
                                        {new Date(task.createdAt).getDate()}
                                      </time>
                                    </p>
                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                      {(task.sendTask ===
                                        "Send to individual" &&
                                        task.uploadSingleTask?.taskComplete ===
                                          true) ||
                                      (task.sendTask === "Everyone" &&
                                        task.uploadAllTasks?.every(
                                          (task) => task.taskComplete === true
                                        ) &&
                                        task.uploadAllTasks?.length !== 0) ? (
                                        <CheckCircleIcon
                                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <ArrowCircleRightIcon
                                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-400"
                                          aria-hidden="true"
                                        />
                                      )}

                                      {(task.sendTask ===
                                        "Send to individual" &&
                                        task.uploadSingleTask?.taskComplete ===
                                          true) ||
                                      (task.sendTask === "Everyone" &&
                                        task.uploadAllTasks?.every(
                                          (task) => task.taskComplete === true
                                        ) &&
                                        task.uploadAllTasks?.length !== 0)
                                        ? "completed"
                                        : "Not yet completed"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button onClick={() => handleTaskModal(task)}>
                              <ChevronRightIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className=" col-span-3">
            <p className=" font-medium text-lg text-center text-gray-500 mb-5 mt-4 underline underline-offset-4">
              List of the assigned landlord tasks
            </p>
            <div className="bg-white shadow-lg shadow-cyan-200/50 overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {landlordsTasks
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((task) => (
                    <li key={task._id}>
                      <div className="block hover:bg-gray-50">
                        <div className="flex items-center px-4 py-4 sm:px-6">
                          <div className="min-w-0 flex-1 flex items-center">
                            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                              <div>
                                <p className="text-sm font-medium text-cyan-600 truncate">
                                  {task.taskTitle}
                                </p>

                                <p className="mt-2 flex items-center text-sm text-gray-500">
                                  <PlusCircleIcon
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="truncate">
                                    {task.assignedUseremail
                                      ? "Individual"
                                      : "Everyone"}
                                  </span>
                                </p>
                              </div>
                              <div className="hidden md:block">
                                <div>
                                  <p className="text-sm text-gray-900">
                                    Assigned on{" "}
                                    <time>
                                      {new Date(task.createdAt).getFullYear()}-
                                      {new Date(task.createdAt).getMonth()}-
                                      {new Date(task.createdAt).getDate()}
                                    </time>
                                  </p>
                                  <p className="mt-2 flex items-center text-sm text-gray-500">
                                    {(task.sendTask === "Send to individual" &&
                                      task.uploadSingleTask?.taskComplete ===
                                        true) ||
                                    (task.sendTask === "Everyone" &&
                                      task.uploadAllTasks?.every(
                                        (task) => task.taskComplete === true
                                      ) &&
                                      task.uploadAllTasks?.length !== 0) ? (
                                      <CheckCircleIcon
                                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <ArrowCircleRightIcon
                                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-400"
                                        aria-hidden="true"
                                      />
                                    )}

                                    {(task.sendTask === "Send to individual" &&
                                      task.uploadSingleTask?.taskComplete ===
                                        true) ||
                                    (task.sendTask === "Everyone" &&
                                      task.uploadAllTasks?.every(
                                        (task) => task.taskComplete === true
                                      ) &&
                                      task.uploadAllTasks?.length !== 0)
                                      ? "completed"
                                      : "Not yet completed"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button onClick={() => handleTaskModal(task)}>
                            <ChevronRightIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <TasksToTenantsModal
        open={openTaskModal}
        setOpen={setOpenTaskModal}
        singletask={singletask}
      />
    </>
  );
};

export default ManagerTasks;
