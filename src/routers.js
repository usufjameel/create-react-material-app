import ErrorPage from "./ErrorPage";
import Register from "./containers/auth/register";
import Dashboard from "./containers/dashboard";
import Home from "./containers/dashboard/home";
import Profile from "./containers/dashboard/profile";
import RouterPath from "./constants/router.constants";
import AdminNotifications from "./containers/dashboard/notifications/adminNotifications";
import AddNotification from "./containers/dashboard/notifications/addNotification";
import Notifications from "./containers/dashboard/notifications";
import AuthContainer from "./containers/auth";
import Login from "./containers/auth/login";

const AppRouters = [
  {
    path: RouterPath.root,
    element: <AuthContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: RouterPath.register,
        element: <Register />,
      },
    ],
  },

  {
    path: RouterPath.home,
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: RouterPath.notifications,
        element: <Notifications />,
        children: [
          {
            index: true,
            element: <AdminNotifications />,
          },
          {
            path: RouterPath.add,
            element: <AddNotification />,
          },
        ],
      },
      {
        path: RouterPath.profile,
        element: <Profile />,
      },
    ],
  },
];
export default AppRouters;
