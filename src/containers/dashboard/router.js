import ErrorPage from "../../ErrorPage";
import RouterPath from "../../constants/router.constants";
import Home from "./home";
import Main from "./main";
import Profile from "./profile";

const router = {
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
};
export default router;
