import { Login } from "@mui/icons-material";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Register from "./containers/auth/register";
import Main from "./containers/dashboard/main";
import Home from "./containers/dashboard/home";
import Profile from "./containers/dashboard/profile";
import RouterPath from "./constants/router.constants";

const AppRouters = [
  {
    path: RouterPath.root,
    element: <App />,
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
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: RouterPath.profile,
        element: <Profile />,
      },
    ],
  },
];
export default AppRouters;
