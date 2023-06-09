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
// import { format } from "timeago.js";
import { formatDistanceToNow } from "date-fns";
import {
  notificationContractor,
  notificationFetchingStart,
  notificationFetchingSuccess,
  notificationLandlord,
  notificationPropertyManager,
  notificationTenant,
} from "../../Redux/notificationSlice";

const Notification = () => {
  const dispatch = useDispatch();
  // const [notifications, setNotifications] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const {
    propertyManagerNotifications,
    tenantNotifications,
    landlordNotifications,
    contractorNotifications,
    allNotifications,
  } = useSelector((state) => state.notifications);
  console.log(allNotifications);
  useEffect(() => {
    const handleFetchAllNotifications = async () => {
      try {
        dispatch(notificationFetchingStart());
        const res = await axios.get(`http://localhost:5500/api/notifications`);
        console.log(res.data);
        // setNotifications(res.data);
        dispatch(notificationFetchingSuccess(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    handleFetchAllNotifications();
  }, [dispatch]);

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
      ...(allNotifications.TenantMaintenance?.TenantMaintenanceAcceptance
        ? allNotifications.TenantMaintenance?.TenantMaintenanceAcceptance
        : []),
      ...(allNotifications.TenantMaintenance?.contractorAssignInfo
        ? allNotifications.TenantMaintenance?.contractorAssignInfo
        : []),
      ...(allNotifications.TenantMaintenance?.jobCompletion
        ? allNotifications.TenantMaintenance?.jobCompletion
        : []),
      ...(allNotifications.TenantMaintenance?.jobIncomplete
        ? allNotifications.TenantMaintenance?.jobIncomplete
        : []),
      ...(allNotifications.TaskReceiveTenant
        ? allNotifications.TaskReceiveTenant
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
      ...(allNotifications.ContractorJobPosting
        ? allNotifications.ContractorJobPosting
        : []),
      ...(allNotifications.Jobs?.CompleteJobs
        ? allNotifications.Jobs?.CompleteJobs
        : []),
      ...(allNotifications.Jobs?.InCompleteJobs
        ? allNotifications.Jobs?.InCompleteJobs
        : []),
      ...(allNotifications.Jobs?.CurrentJobs
        ? allNotifications.Jobs?.CurrentJobs
        : []),
      ...(allNotifications.Jobs?.DeclinedJobs
        ? allNotifications.Jobs?.DeclinedJobs
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
      ...(allNotifications.TaskReceiveLandlord
        ? allNotifications.TaskReceiveLandlord
        : []),
      ...(allNotifications.PropertyAdd?.landlord
        ? allNotifications.PropertyAdd?.landlord
        : []),
      ...(allNotifications.ReportsDocuments?.landlord?.inspectionReport
        ? allNotifications.ReportsDocuments?.landlord?.inspectionReport
        : []),
    ],
    [allNotifications]
  );

  useEffect(() => {
    dispatch(notificationLandlord(concatenatedNotificationsLandlord));
  }, [concatenatedNotificationsLandlord, dispatch]);

  console.log(concatenatedNotificationsPm);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none ">
          <BellIcon className="h-7 w-7" aria-hidden="true" />
          {/* <span className="absolute top-0 right-0 block h-2 w-2 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-red-400 ring-2 ring-white" /> */}
        </Menu.Button>
      </div>

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
                        <div className="pointer-events-auto flex w-full max-w-md  bg-white  ring-1 ring-black ring-opacity-5">
                          <div className="w-0 flex-1 p-4 hover:bg-gray-100">
                            <div className="flex items-start">
                              {/* <div className={`${notification.calenderMessage && "bg-cyan-200" }flex-shrink-0 p-0.5 rounded-full `}> */}
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
                        <div className="pointer-events-auto flex w-full max-w-md  bg-white  ring-1 ring-black ring-opacity-5">
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
                        <div className="pointer-events-auto flex w-full max-w-md  bg-white ring-1 ring-black ring-opacity-5">
                          <div className="w-0 flex-1 p-4 hover:bg-gray-100">
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
                        <div className="pointer-events-auto flex w-full max-w-md  bg-white  ring-1 ring-black ring-opacity-5">
                          <div className="w-0 flex-1 p-4 hover:bg-gray-100">
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
                              </div>
                              <div className="ml-3 w-0 flex-1">
                                <div className="flex w-full flex-1 justify-between">
                                  <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                                    {notification.landlordTaskReceiveMessage &&
                                      `Task Receive`}
                                    {notification.propertyAddMessageLandlord &&
                                      `New Property`}
                                    {notification.reportDocumentInspectionMessageLandlord &&
                                      `Inspection Message`}
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
