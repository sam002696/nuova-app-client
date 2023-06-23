import { Fragment, useEffect, useMemo } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  UserAddIcon,
  DocumentAddIcon,
  OfficeBuildingIcon,
  ClipboardListIcon,
  PencilAltIcon,
  UserGroupIcon,
  EyeIcon,
  ChartSquareBarIcon,
  ShieldCheckIcon,
  ArchiveIcon,
  CheckIcon,
  XIcon,
  ClipboardIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import {
  notificationContractor,
  notificationFetchingStart,
  notificationFetchingSuccess,
  notificationLandlord,
  notificationPropertyManager,
  notificationTenant,
} from "../../Redux/notificationSlice";
import io from "socket.io-client";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Notification = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const {
    propertyManagerNotifications,
    tenantNotifications,
    landlordNotifications,
    contractorNotifications,
    allNotifications,
  } = useSelector((state) => state.notifications);
  console.log(allNotifications);
  console.log(landlordNotifications);
  // fetching notifications from 6500
  useEffect(() => {
    const socket = io("http://localhost:6500");
    dispatch(notificationFetchingStart());
    socket.on("notifications", (data) => {
      console.log("server notifications", data);
      if (data[0]) {
        dispatch(notificationFetchingSuccess(data[0]));
      } else {
        dispatch(notificationFetchingSuccess(data));
      }
    });
  }, [dispatch]);
  // fetching the notifications from 5500
  useEffect(() => {
    const handleFetchAllNotifications = async () => {
      try {
        // dispatch(notificationFetchingStart());
        const res = await axios.get(`http://localhost:5500/api/notifications`);
        console.log("main notifications", res.data);
        // dispatch(notificationFetchingSuccess(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    handleFetchAllNotifications();
  }, []);

  // property manager dashboard

  const concatenatedNotificationsPm = useMemo(
    () => [
      ...(allNotifications?.Calender ? allNotifications.Calender : []),
      ...(allNotifications?.GetPeople ? allNotifications.GetPeople : []),
      ...(allNotifications?.MaintenanceInfo
        ? allNotifications.MaintenanceInfo
        : []),
      ...(allNotifications?.Prospects ? allNotifications.Prospects : []),
      ...(allNotifications?.TaskReceivePm
        ? allNotifications.TaskReceivePm
        : []),
      ...(allNotifications?.TenantFactFind
        ? allNotifications.TenantFactFind
        : []),
      ...(allNotifications?.PropertyFactFind
        ? allNotifications.PropertyFactFind
        : []),
      ...(allNotifications?.PropertyAdd?.propertyManager
        ? allNotifications?.PropertyAdd?.propertyManager
        : []),
      ...(allNotifications?.ReportsDocuments?.propertyManager?.inspectionReport
        ? allNotifications?.ReportsDocuments?.propertyManager?.inspectionReport
        : []),
      ...(allNotifications?.TenantAdd?.propertyManager
        ? allNotifications?.TenantAdd?.propertyManager
        : []),
    ],
    [allNotifications]
  );

  useEffect(() => {
    dispatch(notificationPropertyManager(concatenatedNotificationsPm));
  }, [concatenatedNotificationsPm, dispatch]);

  // tenant dashboard

  const concatenatedNotificationsTenant = useMemo(
    () => [
      ...(allNotifications?.TenantMaintenance?.TenantMaintenanceAcceptance
        ? allNotifications?.TenantMaintenance?.TenantMaintenanceAcceptance
        : []),
      ...(allNotifications?.TenantMaintenance?.contractorAssignInfo
        ? allNotifications?.TenantMaintenance?.contractorAssignInfo
        : []),
      ...(allNotifications?.TenantMaintenance?.jobCompletion
        ? allNotifications?.TenantMaintenance?.jobCompletion
        : []),
      ...(allNotifications?.TenantMaintenance?.jobIncomplete
        ? allNotifications?.TenantMaintenance?.jobIncomplete
        : []),
      ...(allNotifications?.TaskReceiveTenant
        ? allNotifications?.TaskReceiveTenant
        : []),
    ],
    [allNotifications]
  );

  useEffect(() => {
    dispatch(notificationTenant(concatenatedNotificationsTenant));
  }, [concatenatedNotificationsTenant, dispatch]);

  //contractor dashboard

  const concatenatedNotificationsContractor = useMemo(
    () => [
      ...(allNotifications?.ContractorJobPosting
        ? allNotifications?.ContractorJobPosting
        : []),
      ...(allNotifications?.Jobs?.CompleteJobs
        ? allNotifications?.Jobs?.CompleteJobs
        : []),
      ...(allNotifications?.Jobs?.InCompleteJobs
        ? allNotifications?.Jobs?.InCompleteJobs
        : []),
      ...(allNotifications?.Jobs?.CurrentJobs
        ? allNotifications?.Jobs?.CurrentJobs
        : []),
      ...(allNotifications?.Jobs?.DeclinedJobs
        ? allNotifications?.Jobs?.DeclinedJobs
        : []),
    ],
    [allNotifications]
  );

  useEffect(() => {
    dispatch(notificationContractor(concatenatedNotificationsContractor));
  }, [concatenatedNotificationsContractor, dispatch]);

  //landlord dashboard

  const concatenatedNotificationsLandlord = useMemo(
    () => [
      ...(allNotifications?.TaskReceiveLandlord
        ? allNotifications?.TaskReceiveLandlord
        : []),
      ...(allNotifications?.PropertyAdd?.landlord
        ? allNotifications?.PropertyAdd?.landlord
        : []),
      ...(allNotifications?.ReportsDocuments?.landlord?.inspectionReport
        ? allNotifications?.ReportsDocuments?.landlord?.inspectionReport
        : []),
    ],
    [allNotifications]
  );

  useEffect(() => {
    dispatch(notificationLandlord(concatenatedNotificationsLandlord));
  }, [concatenatedNotificationsLandlord, dispatch]);

  console.log(concatenatedNotificationsPm);

  const [notificationCountPM, setNotificationCountPM] = useState(0);

  useEffect(() => {
    // Count the total number of notifications
    const totalCountPM = propertyManagerNotifications.length;

    // Count the number of viewed notifications
    const viewedCountPM = propertyManagerNotifications.filter(notification => notification.isViewed).length;

    // Calculate the count of unviewed notifications
    const unviewedCountPM = totalCountPM - viewedCountPM

    setNotificationCountPM(unviewedCountPM);
  }, [propertyManagerNotifications]);

  console.log(propertyManagerNotifications);
  console.log(notificationCountPM);

  const [notificationCountLandlord, setNotificationCountLandlord] = useState(0);

  useEffect(() => {

    // Filter notifications based on currentUser email and count the total number
    const filteredNotificationsLandlord = landlordNotifications.filter((notification) =>
        (notification.landlordEmail === currentUser.email || !notification.landlordEmail)
    );

    // Count the total number of notifications
    const totalCountLandlord = filteredNotificationsLandlord.length;

    // Count the number of viewed notifications
    const viewedCountLandlord = filteredNotificationsLandlord.filter(notification => notification.isViewed).length;

    // Calculate the count of unviewed notifications
    const unviewedCountLandlord = totalCountLandlord - viewedCountLandlord;

    setNotificationCountLandlord(unviewedCountLandlord);
  }, [currentUser.email, landlordNotifications]);


  const [notificationCountTenant, setNotificationCountTenant] = useState(0);

  useEffect(() => {

    // Filter notifications based on currentUser email and count the total number
    const filteredNotificationsTenant = tenantNotifications.filter((notification) =>
        (notification.tenantEmail === currentUser.email || !notification.tenantEmail)
    );

    // Count the total number of notifications
    const totalCountTenant = filteredNotificationsTenant.length;

    // Count the number of viewed notifications
    const viewedCountTenant = filteredNotificationsTenant.filter(notification => notification.isViewed).length;

    // Calculate the count of unviewed notifications
    const unviewedCountTenant = totalCountTenant - viewedCountTenant;

    setNotificationCountTenant(unviewedCountTenant);
  }, [currentUser.email, tenantNotifications]);


  const [notificationCountContractor, setNotificationCountContractor] = useState(0);

  useEffect(() => {

    // Filter notifications based on currentUser email and count the total number
    const filteredNotificationsContractor = contractorNotifications.filter((notification) =>
        (notification.contractorEmail === currentUser.email || !notification.contractorEmail)
    );

    // Count the total number of notifications
    const totalCountContractor = filteredNotificationsContractor.length;

    // Count the number of viewed notifications
    const viewedCountContractor = filteredNotificationsContractor.filter(notification => notification.isViewed).length;

    // Calculate the count of unviewed notifications
    const unviewedCountContractor = totalCountContractor - viewedCountContractor;

    setNotificationCountContractor(unviewedCountContractor);
  }, [currentUser.email, contractorNotifications]);


  const handleSingleNotificationPM = async (e, notification) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5500/api/notifications/pm/${allNotifications._id}/${notification._id}?field=${notification.label}`,
        notification
      );
      if (res.data) {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
    console.log(notification._id);
    if (notification.calenderMessage) {
      history.push("/property-manager-dashboard/calender");
    }
    if (notification.userAddMessage) {
      history.push("/property-manager-dashboard/people");
    }
    if (notification.propertyFactFindMessage) {
      history.push("/property-manager-dashboard/properties/property-fact-find");
    }
    if (notification.propertyAddMessagePm) {
      history.push("/property-manager-dashboard/properties");
    }
    if (notification.reportDocumentInspectionMessagePm) {
      history.push("/property-manager-dashboard/properties");
    }
    if (notification.tenantFactFindForm) {
      history.push("/property-manager-dashboard/properties/tenancyform");
    }
    if (notification.maintenanceIssueMessage) {
      history.push("/property-manager-dashboard/maintenance");
    }
    if (notification.tenantAddMessagePm) {
      history.push(`/property-manager-dashboard/properties`);
    }
    if (notification.prospectsInfoMessage) {
      history.push("/property-manager-dashboard/people/prospects");
    }
    if (notification.taskReceivePm) {
      history.push("/property-manager-dashboard/tasks");
    }
    if (notification.certificateAddMessagePM) {
      history.push("/property-manager-dashboard/tasks");
    }
  };

  const handleSingleNotificationTenant = async (e, notification) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5500/api/notifications/tenant/${allNotifications._id}/${notification._id}?field=${notification.label}`,
        notification
      );
      if (res.data) {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
    console.log(notification._id);
    if (notification.tenantMaintenanceAcceptanceMessage) {
      history.push("/tenant-portal-dashboard/tenant-portal-maintenance");
    }
    if (notification.tenantTaskReceiveMessage) {
      history.push("/property-manager-dashboard/people");
    }
    if (notification.contractorAssignMessage) {
      history.push("/tenant-portal-dashboard/tenant-portal-maintenance");
    }
    if (notification.jobCompletionMessage) {
      history.push("/tenant-portal-dashboard/tenant-portal-maintenance");
    }
    if (notification.jobIncompletionMessage) {
      history.push("/tenant-portal-dashboard/tenant-portal-maintenance");
    }
    
  };

  const handleSingleNotificationContractor = async (e, notification) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5500/api/notifications/contractor/${allNotifications._id}/${notification._id}?field=${notification.label}`,
        notification
      );
      if (res.data) {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
    console.log(notification._id);
    if (notification.contractorJobPosting) {
      history.push("/contractor-portal-dashboard/contractor-portal-find-jobs");
    }
    if (notification.currentJob) {
      history.push("/contractor-portal-dashboard/contractor-portal-my-jobs");
    }
    if (notification.completeJob) {
      history.push("/contractor-portal-dashboard/contractor-portal-my-jobs/complete");
    }
    if (notification.declineJob) {  
      history.push("/contractor-portal-dashboard/contractor-portal-my-jobs/declined");
    }
    if (notification.inCompleteJob) {
      history.push("/contractor-portal-dashboard/contractor-portal-my-jobs/incomplete");
    }
    
  };

  const handleSingleNotificationLandlord = async (e, notification) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5500/api/notifications/landlord/${allNotifications._id}/${notification._id}?field=${notification.label}`,
        notification
      );
      if (res.data) {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
    console.log(notification._id);
    if (notification.landlordTaskReceiveMessage) {
      history.push("/landlord-portal-dashboard/landlord-portal-tasks");
    }
    if (notification.propertyAddMessageLandlord) {
      history.push("/landlord-portal-dashboard/landlord-property");
    }
    if (notification.reportDocumentInspectionMessageLandlord) {
      history.push("/landlord-portal-dashboard/landlord-property");
    }
    if (notification.reportDocumentInventoryMessageLandlord) {
      history.push("/landlord-portal-dashboard/landlord-property");
    }
    if (notification.certificateAddMessageLandlord) {
      history.push("/landlord-portal-dashboard/landlord-property");
    }
    
  };


  return (
    <Menu as="div" className="relative inline-block text-left">
      {((currentUser.role === "Property Manager" &&
        propertyManagerNotifications?.length !== 0) ||
        (currentUser.role === "Tenant" && tenantNotifications?.length !== 0) ||
        (currentUser.role === "Landlord" &&
          landlordNotifications?.length !== 0) ||
        (currentUser.role === "Contractor" &&
          contractorNotifications?.length !== 0)) && (
        <div>
          <Menu.Button className="flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white focus:outline-none">
            <span className="relative inline-block">
              <BellIcon className="h-8 w-8" aria-hidden="true" />
              {currentUser.role === "Admin" &&
                propertyManagerNotifications?.length > 0 && (
                  <span className="absolute -top-2.5 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-xs font-semibold text-white">
                    {notificationCountPM }
                  </span>
                )}
              {currentUser.role === "Property Manager" &&
                propertyManagerNotifications?.length > 0 && (
                  <span className="absolute -top-2.5 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-xs font-semibold text-white">
                    {notificationCountPM}
                  </span>
                )}
              {currentUser.role === "Tenant" &&
                tenantNotifications?.length > 0 && (
                  <span className="absolute -top-2.5 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-xs font-semibold text-white">
                    {notificationCountTenant}
                  </span>
                )}
              {currentUser.role === "Landlord" &&
                landlordNotifications?.length > 0 && (
                  <span className="absolute -top-2.5 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-xs font-semibold text-white">
                    {notificationCountLandlord}
                  </span>
                )}
              {currentUser.role === "Contractor" &&
                contractorNotifications?.length > 0 && (
                  <span className="absolute -top-2.5 -right-2 flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-xs font-semibold text-white">
                    {notificationCountContractor}
                  </span>
                )}
            </span>
          </Menu.Button>
        </div>
      )}

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none  height-custom-notifications custom-scrollbar ">
          <div className="">
            {currentUser.role === "Admin" && (
              <>
                {propertyManagerNotifications
                  ?.slice()
                  .sort((a, b) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    if (dateA < dateB) {
                      return 1;
                    }
                    if (dateA > dateB) {
                      return -1;
                    }
                    return 0;
                  })
                  .map((notification) => (
                    <Menu.Item key={notification._id}>
                      {({ active }) => (
                        <div
                          
                        className={`pointer-events-auto flex w-full max-w-md ring-1 ring-black ring-opacity-5 ${
                          notification?.isViewed === true
                            ? "bg-white"
                            : "bg-cyan-50"
                        }`}
                        >
                          <div className="w-0 flex-1 p-4 hover:bg-cyan-100">
                            <div className="flex items-start">
                              <div className="bg-cyan-200 flex-shrink-0 p-0.5 rounded-full">
                                {notification.calenderMessage && (
                                  <CalendarIcon className="h-8 w-8  p-1.5 " />
                                )}

                                {notification.userAddMessage && (
                                  <UserAddIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.propertyFactFindMessage && (
                                  <DocumentAddIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.propertyAddMessagePm && (
                                  <OfficeBuildingIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.reportDocumentInspectionMessagePm && (
                                  <ClipboardListIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.tenantFactFindForm && (
                                  <DocumentAddIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.maintenanceIssueMessage && (
                                  <PencilAltIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.tenantAddMessagePm && (
                                  <UserGroupIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.prospectsInfoMessage && (
                                  <EyeIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.taskReceivePm && (
                                  <ChartSquareBarIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.certificateAddMessagePM && (
                                  <DocumentAddIcon className="h-8 w-8  p-1.5 " />
                                )}
                              </div>
                              <div className="ml-3 w-0 flex-1">
                                <div className="flex w-full flex-1 justify-between">
                                  <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                                    {notification.calenderMessage &&
                                      `Calender Event`}
                                    {notification.userAddMessage && `New User`}
                                    {notification.propertyFactFindMessage &&
                                      `Property Fact Find`}
                                    {notification.propertyAddMessagePm &&
                                      `New Property`}
                                    {notification.reportDocumentInspectionMessagePm &&
                                      `Inspection Report`}
                                    {notification.tenantFactFindForm &&
                                      `Tenant Fact Find Form`}
                                    {notification.maintenanceIssueMessage &&
                                      `Maintenance Issue`}
                                    {notification.tenantAddMessagePm &&
                                      `Tenant Add`}
                                    {notification.prospectsInfoMessage &&
                                      `Prospects`}
                                    {notification.taskReceivePm &&
                                      `Task Receive`}
                                    {notification.certificateAddMessagePM &&
                                      `Certificate Add`}
                                  </p>
                                  <p className="ml-3 flex-shrink-0 rounded-md  text-xs font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ">
                                    {formatDistanceToNow(
                                      new Date(notification.date),
                                      {
                                        addSuffix: true,
                                      }
                                    )}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {notification.calenderMessage &&
                                    `a new event has been added`}
                                  {notification.userAddMessage &&
                                    `Admin has added ${notification.username} in the system`}

                                  {notification.propertyFactFindMessage &&
                                    `${notification.ownerName} has filled up property fact find form`}

                                  {notification.propertyAddMessagePm &&
                                    `${notification.landlordName} has added a new property`}

                                  {notification.reportDocumentInspectionMessagePm &&
                                    `inspection report has been added`}

                                  {notification.tenantFactFindForm &&
                                    `tenant fact find form has been added`}
                                  {notification.maintenanceIssueMessage &&
                                    `a new maintenance has been added`}
                                  {notification.tenantAddMessagePm &&
                                    `${notification.tenantName} has been added to ${notification.propertyName}`}

                                  {notification.prospectsInfoMessage &&
                                    `${notification.applicantName} has submitted a new prospect`}

                                  {notification.taskReceivePm &&
                                    `${notification.taskReceivePm} has submitted the task`}

                                  {notification.certificateAddMessagePM &&
                                    `${notification.certificateAddMessagePM} on ${notification.propertyName}`}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
              </>
            )}
            {currentUser.role === "Property Manager" && (
              <>
                {propertyManagerNotifications
                  ?.slice()
                  .sort((a, b) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    if (dateA < dateB) {
                      return 1;
                    }
                    if (dateA > dateB) {
                      return -1;
                    }
                    return 0;
                  })
                  .map((notification) => (
                    <Menu.Item key={notification._id}>
                      {({ active }) => (
                        <div
                          onClick={(e) =>
                            handleSingleNotificationPM(e, notification)
                          }
                          className={`pointer-events-auto flex w-full max-w-md ring-1 ring-black ring-opacity-5 ${
                            notification?.isViewed === true
                              ? "bg-white"
                              : "bg-cyan-50"
                          }`}
                        >
                          <div className="w-0 flex-1 p-4 hover:bg-cyan-100">
                            <div className="flex items-start">
                              <div className="bg-cyan-200 flex-shrink-0 p-0.5 rounded-full">
                                {notification.calenderMessage && (
                                  <CalendarIcon className="h-8 w-8  p-1.5 " />
                                )}

                                {notification.userAddMessage && (
                                  <UserAddIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.propertyFactFindMessage && (
                                  <DocumentAddIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.propertyAddMessagePm && (
                                  <OfficeBuildingIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.reportDocumentInspectionMessagePm && (
                                  <ClipboardListIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.tenantFactFindForm && (
                                  <DocumentAddIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.maintenanceIssueMessage && (
                                  <PencilAltIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.tenantAddMessagePm && (
                                  <UserGroupIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.prospectsInfoMessage && (
                                  <EyeIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.taskReceivePm && (
                                  <ChartSquareBarIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.certificateAddMessagePM && (
                                  <DocumentAddIcon className="h-8 w-8  p-1.5 " />
                                )}
                              </div>
                              <div className="ml-3 w-0 flex-1">
                                <div className="flex w-full flex-1 justify-between">
                                  <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                                    {notification.calenderMessage &&
                                      `Calender Event`}
                                    {notification.userAddMessage && `New User`}
                                    {notification.propertyFactFindMessage &&
                                      `Property Fact Find`}
                                    {notification.propertyAddMessagePm &&
                                      `New Property`}
                                    {notification.reportDocumentInspectionMessagePm &&
                                      `Inspection Report`}
                                    {notification.tenantFactFindForm &&
                                      `Tenant Fact Find Form`}
                                    {notification.maintenanceIssueMessage &&
                                      `Maintenance Issue`}
                                    {notification.tenantAddMessagePm &&
                                      `Tenant Add`}
                                    {notification.prospectsInfoMessage &&
                                      `Prospects`}
                                    {notification.taskReceivePm &&
                                      `Task Receive`}
                                    {notification.certificateAddMessagePM &&
                                      `Certificate Add`}
                                  </p>
                                  <p className="ml-3 flex-shrink-0 rounded-md  text-xs font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ">
                                    {formatDistanceToNow(
                                      new Date(notification.date),
                                      {
                                        addSuffix: true,
                                      }
                                    )}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {notification.calenderMessage &&
                                    `a new event has been added`}
                                  {notification.userAddMessage &&
                                    `Admin has added ${notification.username} in the system`}

                                  {notification.propertyFactFindMessage &&
                                    `${notification.ownerName} has filled up property fact find form`}

                                  {notification.propertyAddMessagePm &&
                                    `${notification.landlordName} has added a new property`}

                                  {notification.reportDocumentInspectionMessagePm &&
                                    `inspection report has been added`}

                                  {notification.tenantFactFindForm &&
                                    `tenant fact find form has been added`}
                                  {notification.maintenanceIssueMessage &&
                                    `a new maintenance has been added`}
                                  {notification.tenantAddMessagePm &&
                                    `${notification.tenantName} has been added to ${notification.propertyName}`}

                                  {notification.prospectsInfoMessage &&
                                    `${notification.applicantName} has submitted a new prospect`}

                                  {notification.taskReceivePm &&
                                    `${notification.taskReceivePm} has submitted the task`}

                                  {notification.certificateAddMessagePM &&
                                    `${notification.certificateAddMessagePM} on ${notification.propertyName}`}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
              </>
            )}
            {currentUser.role === "Tenant" && (
              <>
                {tenantNotifications
                  ?.filter(
                    (filteruser) =>
                      filteruser.tenantEmail === currentUser.email ||
                      filteruser.taskAssignedTo === "All"
                  )
                  ?.sort((a, b) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    if (dateA < dateB) {
                      return 1;
                    }
                    if (dateA > dateB) {
                      return -1;
                    }
                    return 0;
                  })
                  .map((notification) => (
                    <Menu.Item key={notification._id}>
                      {({ active }) => (
                        <div onClick={(e) =>
                          handleSingleNotificationTenant(e, notification)
                        } className={`pointer-events-auto flex w-full max-w-md ring-1 ring-black ring-opacity-5 ${
                          notification?.isViewed === true
                            ? "bg-white"
                            : "bg-cyan-50"
                        }`}>
                          <div className="w-0 flex-1 p-4 hover:bg-gray-100">
                            <div className="flex items-start">
                              <div className="bg-cyan-200 flex-shrink-0 p-0.5 rounded-full">
                                {notification.tenantMaintenanceAcceptanceMessage && (
                                  <ShieldCheckIcon className="h-8 w-8  p-1.5 " />
                                )}

                                {notification.tenantTaskReceiveMessage && (
                                  <ArchiveIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.contractorAssignMessage && (
                                  <UserAddIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.jobCompletionMessage && (
                                  <CheckIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.jobIncompletionMessage && (
                                  <XIcon className="h-8 w-8  p-1.5 " />
                                )}
                              </div>
                              <div className="ml-3 w-0 flex-1">
                                <div className="flex w-full flex-1 justify-between">
                                  <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                                    {notification.tenantMaintenanceAcceptanceMessage &&
                                      `Maintenance Acceptance`}
                                    {notification.tenantTaskReceiveMessage &&
                                      `Task Receive`}
                                    {notification.contractorAssignMessage &&
                                      `Contractor Assign`}
                                    {notification.jobCompletionMessage &&
                                      `Job Completion`}
                                    {notification.jobIncompletionMessage &&
                                      `Job Incompletion`}
                                  </p>
                                  <p className="ml-3 flex-shrink-0 rounded-md  text-xs font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ">
                                    {formatDistanceToNow(
                                      new Date(notification.date),
                                      {
                                        addSuffix: true,
                                      }
                                    )}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {notification.tenantMaintenanceAcceptanceMessage &&
                                    notification.tenantEmail ===
                                      currentUser.email &&
                                    `${notification.maintenanceTitle} has been accepted by the property manager`}
                                  {(notification.tenantTaskReceiveMessage ||
                                    notification.assignedUseremail ===
                                      currentUser.email) &&
                                    `${notification.taskTitle} has been assigned to you`}

                                  {notification.contractorAssignMessage &&
                                    `${notification.contractorName} has been assigned for the ${notification.issuename} job`}

                                  {notification.jobCompletionMessage &&
                                    notification.tenantEmail ===
                                      currentUser.email &&
                                    `${notification.issueName} job is completed `}
                                  {notification.jobIncompletionMessage &&
                                    notification.tenantEmail ===
                                      currentUser.email &&
                                    `${notification.issueName} job is incomplete `}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
              </>
            )}
            {currentUser.role === "Contractor" && (
              <>
                {contractorNotifications
                  ?.filter(
                    (filteruser) =>
                      filteruser.contractorEmail === currentUser.email ||
                      filteruser.contractorJobPosting ===
                        "new job has been posted!"
                  )
                  ?.sort((a, b) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    if (dateA < dateB) {
                      return 1;
                    }
                    if (dateA > dateB) {
                      return -1;
                    }
                    return 0;
                  })

                  .map((notification) => (
                    <Menu.Item key={notification._id}>
                      {({ active }) => (
                        <div onClick={(e) =>
                          handleSingleNotificationContractor(e, notification)
                        } className={`pointer-events-auto flex w-full max-w-md ring-1 ring-black ring-opacity-5 ${
                          notification?.isViewed === true
                            ? "bg-white"
                            : "bg-green-50"
                        }`}>
                          <div className="w-0 flex-1 p-4 hover:bg-green-100">
                            <div className="flex items-start">
                              <div className="bg-cyan-200 flex-shrink-0 p-0.5 rounded-full">
                                {notification.contractorJobPosting && (
                                  <ClipboardIcon className="h-8 w-8  p-1.5 " />
                                )}

                                {notification.currentJob && (
                                  <PlayIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.completeJob && (
                                  <CheckIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.declineJob && (
                                  <XIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.inCompleteJob && (
                                  <QuestionMarkCircleIcon className="h-8 w-8  p-1.5 " />
                                )}
                              </div>
                              <div className="ml-3 w-0 flex-1">
                                <div className="flex w-full flex-1 justify-between">
                                  <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                                    {notification.contractorJobPosting &&
                                      `New Job`}
                                    {(notification.currentJob ||
                                      notification.completeJob ||
                                      notification.declineJob ||
                                      notification.inCompleteJob) &&
                                      `Job Status`}
                                  </p>
                                  <p className="ml-3 flex-shrink-0 rounded-md  text-xs font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ">
                                    {formatDistanceToNow(
                                      new Date(notification.date),
                                      {
                                        addSuffix: true,
                                      }
                                    )}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {notification.contractorJobPosting &&
                                    `${notification.issueName} has been posted`}
                                  {notification.currentJob &&
                                    notification.contractorEmail ===
                                      currentUser.email &&
                                    `${notification.issueName} is the current job`}
                                  {notification.completeJob &&
                                    notification.contractorEmail ===
                                      currentUser.email &&
                                    `${notification.issueName} has been completed`}
                                  {notification.declineJob &&
                                    notification.contractorEmail ===
                                      currentUser.email &&
                                    `${notification.issueName} has been declined`}
                                  {notification.inCompleteJob &&
                                    notification.contractorEmail ===
                                      currentUser.email &&
                                    `${notification.issueName} has been incompleted`}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
              </>
            )}
            {currentUser.role === "Landlord" && (
              <>
                {landlordNotifications
                  ?.filter(
                    (filteruser) =>
                      filteruser.landlordEmail === currentUser.email ||
                      filteruser.taskAssignedTo === "All"
                  )
                  ?.sort((a, b) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    if (dateA < dateB) {
                      return 1;
                    }
                    if (dateA > dateB) {
                      return -1;
                    }
                    return 0;
                  })

                  .map((notification) => (
                    <Menu.Item key={notification._id}>
                      {({ active }) => (
                        <div onClick={(e) =>
                          handleSingleNotificationLandlord(e, notification)
                        } className={`pointer-events-auto flex w-full max-w-md ring-1 ring-black ring-opacity-5 ${
                          notification?.isViewed === true
                            ? "bg-white"
                            : "bg-blue-50"
                        }`}>
                          <div className="w-0 flex-1 p-4 hover:bg-blue-100">
                            <div className="flex items-start">
                              <div className="bg-cyan-200 flex-shrink-0 p-0.5 rounded-full">
                                {notification.landlordTaskReceiveMessage && (
                                  <ArchiveIcon className="h-8 w-8  p-1.5 " />
                                )}

                                {notification.propertyAddMessageLandlord && (
                                  <OfficeBuildingIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.reportDocumentInspectionMessageLandlord && (
                                  <DocumentAddIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.reportDocumentInventoryMessageLandlord && (
                                  <DocumentAddIcon className="h-8 w-8  p-1.5 " />
                                )}
                                {notification.certificateAddMessageLandlord && (
                                  <DocumentAddIcon className="h-8 w-8  p-1.5 " />
                                )}
                              </div>
                              <div className="ml-3 w-0 flex-1">
                                <div className="flex w-full flex-1 justify-between">
                                  <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                                    {notification.landlordTaskReceiveMessage &&
                                      `Task Receive`}
                                    {notification.propertyAddMessageLandlord &&
                                      `New Property`}
                                    {notification.reportDocumentInspectionMessageLandlord &&
                                      `Inspection Report`}
                                    {notification.reportDocumentInventoryMessageLandlord &&
                                      `Inventory Document`}
                                    {notification.certificateAddMessageLandlord &&
                                      `Certificate Add`}
                                  </p>
                                  <p className="ml-3 flex-shrink-0 rounded-md  text-xs font-medium text-cyan-600 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ">
                                    {formatDistanceToNow(
                                      new Date(notification.date),
                                      {
                                        addSuffix: true,
                                      }
                                    )}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {notification.landlordTaskReceiveMessage &&
                                    notification.assignedUseremail ===
                                      currentUser.email &&
                                    `${notification.taskTitle} has been assigned to you`}
                                  {notification.landlordTaskReceiveMessage &&
                                    `${notification.taskTitle} has been assigned to you`}
                                  {notification.propertyAddMessageLandlord &&
                                    notification.landlordEmail ===
                                      currentUser.email &&
                                    `${notification.propertyName} has been added`}

                                  {notification.reportDocumentInspectionMessageLandlord &&
                                    notification.landlordEmail ===
                                      currentUser.email &&
                                    `Inspection report has been added for ${notification.propertyName}`}
                                  {notification.reportDocumentInventoryMessageLandlord &&
                                    notification.landlordEmail ===
                                      currentUser.email &&
                                    `Inventory report has been added for ${notification.propertyName}`}
                                  {notification.certificateAddMessageLandlord &&
                                    notification.certificateProviderEmail ===
                                      currentUser.email &&
                                    `Certificate has been added for ${notification.propertyName}`}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Menu.Item>
                  ))}
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Notification;
