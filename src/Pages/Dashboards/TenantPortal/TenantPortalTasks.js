import React, { useEffect, useState } from "react";

import {
  CheckCircleIcon,
  ChevronRightIcon,
  PlusCircleIcon,
  ArrowCircleUpIcon,
} from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import axios from "axios";
import TenantPortalTasksModal from "./TenantPortalTasksModal";

const TenantPortalTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [singletask, setSingleTask] = useState({});
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const sendTask = "Everyone";
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const handleTasksDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5500/api/tasks?&taskFor=Tenants&useremail=${currentUser?.email}&sendTask=${sendTask}`
        );
        setTasks(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleTasksDetails();
  }, [currentUser.email]);

  const handleTaskModal = (task) => {
    setSingleTask(task);
    setOpenTaskModal(true);
  };

  return (
    <>
      <div className="">
        {/* <div className="mx-auto max-w-7xl">

                    <div className="bg-gray-50">
                        <div className="mx-auto max-w-7xl py-8 sm:px-2 sm:py-8 lg:px-4">
                            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                                <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
                                    <div>
                                        <h2 className="text-4xl font-bold tracking-tight text-cyan-700">
                                            Nuova built business on great customer service
                                        </h2>
                                        <p className="mt-4 text-gray-500">
                                            At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                                            caring about that. Our new strategy is to write a bunch of things that look really good in the
                                            headlines, then clarify in the small print but hope people don't actually read it.
                                        </p>
                                    </div>
                                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                                        <img
                                            src="https://landlordstudiousregioncdn.azureedge.net/wp-content/uploads/2022/07/maintenance1.png"
                                            alt=""
                                            className="object-cover object-center"
                                        />
                                    </div>
                                </div>
                                <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
                                    {incentives.map((incentive) => (
                                        <div key={incentive.name} className="sm:flex lg:block">
                                            <div className="sm:flex-shrink-0">
                                                <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                                            </div>
                                            <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                                                <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                                                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>





                </div> */}

        <div className="mx-auto max-w-7xl">
          {/* <div className="my-12">
                        <div className=" mb-5">
                            <p className=" font-medium text-2xl text-center underline underline-offset-4 mb-3 text-gray-700">
                                Tasks for Property Managers
                            </p>
                            <p className=" font-medium text-lg text-center text-gray-500">
                                Create tasks for your Property Manager to fix
                            </p>
                        </div>
                        <button
                            type="button"
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
                    </div> */}

          <div className="my-20 pb-20">
            <p className=" font-semibold text-2xl font-mono text-center text-gray-500 mb-8">
              Tasks Assigned by the Property Manager
            </p>
            <div className="bg-white shadow-lg shadow-cyan-200/50 overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {tasks.map((task) => (
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

                                {/* Circle icon / arrow path rounded square icon */}

                                <p className="mt-2 flex items-center text-sm text-gray-500">
                                  {(task.sendTask === "Send to individual" &&
                                    task.uploadSingleTask?.taskComplete ===
                                      true) ||
                                  (task.sendTask === "Everyone" &&
                                    task.uploadAllTasks?.find(
                                      (task) =>
                                        task.taskComplete === true &&
                                        task.useremail === currentUser.email
                                    )) ? (
                                    <CheckCircleIcon
                                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ArrowCircleUpIcon
                                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-400"
                                      aria-hidden="true"
                                    />
                                  )}

                                  {/* Completed / incomplete */}

                                  {(task.sendTask === "Send to individual" &&
                                    task.uploadSingleTask?.taskComplete ===
                                      true) ||
                                  (task.sendTask === "Everyone" &&
                                    task.uploadAllTasks?.find(
                                      (task) =>
                                        task.taskComplete === true &&
                                        task.useremail === currentUser.email
                                    ))
                                    ? "completed"
                                    : "Not yet completed"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          disabled={
                            (task.sendTask === "Send to individual" &&
                              task.uploadSingleTask?.taskComplete === true) ||
                            (task.sendTask === "Everyone" &&
                              task.uploadAllTasks?.find(
                                (task) =>
                                  task.taskComplete === true &&
                                  task.useremail === currentUser.email
                              ))
                          }
                          onClick={() => handleTaskModal(task)}
                          className="disabled:cursor-not-allowed"
                        >
                          <ChevronRightIcon
                            className="h-5 w-5 text-gray-400 "
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
      <TenantPortalTasksModal
        open={openTaskModal}
        setOpen={setOpenTaskModal}
        singletask={singletask}
      />
    </>
  );
};

export default TenantPortalTasks;
