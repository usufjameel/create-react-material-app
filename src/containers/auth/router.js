import App from "../../App";
import ErrorPage from "../../ErrorPage";
import RouterPath from "../../constants/router.constants";
import Login from "./login";
import Register from "./register";

const router = {
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
};
export default router;
