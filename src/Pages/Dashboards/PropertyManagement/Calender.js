import { Fragment, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { CalendarIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import {
  format,
  startOfToday,
  endOfMonth,
  eachDayOfInterval,
  endOfWeek,
  isToday,
  isSameMonth,
  isEqual,
  startOfWeek,
  parse,
  add,
  isSameDay,
  parseISO,
} from "date-fns";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import CalenderEventsModal from "./CalenderEventsModal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calender() {
  const [open, setOpen] = useState(false);
  const [openCalenderModal, setOpenCalenderModal] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [day, setDay] = useState();
  const [addEvents, setAddEvents] = useState();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    reset();
    try {
      const res = await axios.post(
        `http://localhost:5500/api/calenderEvents`,
        data
      );
      if (res.data) {
        alert("FORM SUBMITTED");
        window.location.reload(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleFetchAllEvents = async () => {
      try {
        const res = await axios.get(`http://localhost:5500/api/calenderEvents`);
        console.log(res.data);
        setAddEvents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetchAllEvents();
  }, []);

  const cancelButtonRef = useRef(null);
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));

  let firstDayOfCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let newDays = eachDayOfInterval({
    start: startOfWeek(firstDayOfCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayOfCurrentMonth)),
  });

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayOfCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };
  const previousMonth = () => {
    let firstDayNextMonth = add(firstDayOfCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const handleSelectedEvents = (selectedEvents, day) => {
    setSelectedEvents(selectedEvents);
    setDay(day);
    setOpenCalenderModal(true);
  };

  return (
    <div className="lg:flex lg:h-full lg:flex-col max-w-7xl mx-auto mt-10 pb-8">
      <header className="relative  flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
        <h1 className="text-lg font-semibold text-gray-900">
          <time dateTime="2022-01">
            {format(firstDayOfCurrentMonth, "MMMM yyyy")}
          </time>
        </h1>
        <div className="flex items-center">
          <div className="flex items-center rounded-md shadow-sm md:items-stretch">
            <button
              onClick={previousMonth}
              type="button"
              className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
            >
              Month
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
            <button
              onClick={nextMonth}
              type="button"
              className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <Menu.Button
                type="button"
                className="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Month view
                <ChevronDownIcon
                  className="ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Day view
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Week view
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Month view
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Year view
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className="ml-6 h-6 w-px bg-gray-300" />
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="focus:outline-none ml-6 rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm ring-2 ring-cyan-500 ring-offset-2"
            >
              Add event
            </button>
          </div>
          <Menu as="div" className="relative ml-6 md:hidden">
            <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Create event
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Go to today
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Day view
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Week view
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Month view
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Year view
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
      <div className="shadow-lg ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">un</span>
          </div>
          <div className="bg-white py-2">
            M<span className="sr-only sm:not-sr-only">on</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">ue</span>
          </div>
          <div className="bg-white py-2">
            W<span className="sr-only sm:not-sr-only">ed</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">hu</span>
          </div>
          <div className="bg-white py-2">
            F<span className="sr-only sm:not-sr-only">ri</span>
          </div>
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">at</span>
          </div>
        </div>
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-5 lg:gap-px">
            {newDays.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(
                  isSameMonth(day, firstDayOfCurrentMonth)
                    ? "bg-white"
                    : "bg-gray-50 text-gray-500",
                  "relative pb-16 pt-2 px-3"
                )}
              >
                <time
                  dateTime={format(day, "yyyy-MM-dd")}
                  className={
                    isToday(day)
                      ? "flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 font-semibold text-white"
                      : undefined
                  }
                >
                  {format(day, "d")}
                </time>
                {addEvents?.some((meeting) =>
                  isSameDay(parseISO(meeting.eventDate), day)
                ) && (
                  <Event
                    day={day}
                    addEvents={addEvents}
                    handleSelectedEvents={handleSelectedEvents}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
            {newDays.map((day) => (
              <button
                onClick={() => setSelectedDay(day)}
                key={day.toString()}
                type="button"
                className={classNames(
                  isSameMonth(day, firstDayOfCurrentMonth)
                    ? "bg-white"
                    : "bg-gray-50",
                  (isEqual(day, selectedDay) || isToday(day)) &&
                    "font-semibold",
                  isEqual(day, selectedDay) && "text-white",
                  !isEqual(day, selectedDay) && isToday(day) && "text-sky-400",
                  !isEqual(day, selectedDay) &&
                    isSameMonth(day, firstDayOfCurrentMonth) &&
                    !isToday(day) &&
                    "text-gray-900",
                  !isEqual(day, selectedDay) &&
                    !isSameMonth(day, firstDayOfCurrentMonth) &&
                    !isToday(day) &&
                    "text-gray-500",
                  "flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10"
                )}
              >
                <time
                  dateTime={format(day, "yyyy-MM-dd")}
                  className={classNames(
                    isEqual(day, selectedDay) &&
                      "flex h-6 w-6 items-center justify-center rounded-full",
                    isEqual(day, selectedDay) && isToday(day) && "bg-blue-600",
                    isEqual(day, selectedDay) && !isToday(day) && "bg-gray-900",
                    "ml-auto"
                  )}
                >
                  {format(day, "d")}
                </time>
                {/* <span className="sr-only">{day.events.length} events</span>
                                {day.events.length > 0 && (
                                    <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                                        {day.events.map((event) => (
                                            <span key={event.id} className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                                        ))}
                                    </span>
                                )} */}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* {selectedDay?.events.length > 0 && (
                <div className="py-10 px-4 sm:px-6 lg:hidden">
                    <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
                        {selectedDay.events.map((event) => (
                            <li key={event.id} className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
                                <div className="flex-auto">
                                    <p className="font-semibold text-gray-900">{event.name}</p>
                                    <time dateTime={event.datetime} className="mt-2 flex items-center text-gray-700">
                                        <ClockIcon className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        {event.time}
                                    </time>
                                </div>
                                <a
                                    href={event.href}
                                    className="ml-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
                                >
                                    Edit<span className="sr-only">, {event.name}</span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            )} */}

      {/* Modal */}

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                  <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <CalendarIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-semibold text-gray-900 underline underline-offset-8 mb-5"
                      >
                        Add Your Event
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Eius aliquam laudantium explicabo pariatur iste
                          dolorem animi vitae error totam. At sapiente aliquam
                          accusamus facere veritatis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                    <div className="grid gap-6 mb-6 lg:grid-cols-1">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Event Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          placeholder="Birthday Party"
                          {...register("eventName", { required: true })}
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Event Details
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="Event..."
                          {...register("eventDetails", { required: true })}
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Event Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 "
                            placeholder="Select date"
                            {...register("eventDate", { required: true })}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Event Time
                        </label>
                        <div className="relative">
                          <input
                            type="time"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 "
                            placeholder="Select Time"
                            {...register("eventTime", { required: true })}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setOpen(false)}
                      type="submit"
                      className="text-white bg-gradient-to-r from-sky-800 to-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-md text-sm w-full px-5 py-2.5 text-center"
                    >
                      Add Event
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <CalenderEventsModal
        open={openCalenderModal}
        setOpen={setOpenCalenderModal}
        day={day}
        selectedEvents={selectedEvents}
      />
    </div>
  );
}
function Event({ day, addEvents, handleSelectedEvents }) {
  let selectedDayEvents = addEvents.filter((event) =>
    isSameDay(parseISO(event.eventDate), day)
  );
  return (
    selectedDayEvents.length > 0 && (
      <ol className="mt-2">
        {selectedDayEvents.slice(0, 2).map((event) => (
          <li
            key={event._id}
            onClick={() => handleSelectedEvents(selectedDayEvents, day)}
            className=" cursor-pointer"
          >
            <div className="group flex">
              <p className="flex-auto truncate font-medium text-yellow-900 group-hover:text-sky-500">
                {event.eventName}
              </p>
              <time
                dateTime={event.eventDate}
                className="ml-3 hidden flex-none text-yellow-500 group-hover:text-sky-500 xl:block"
              >
                {event.eventTime}
              </time>
            </div>
          </li>
        ))}
        {selectedDayEvents.length > 2 && (
          <li className="text-gray-500">
            + {selectedDayEvents.length - 2} more
          </li>
        )}
      </ol>
    )
  );
}
