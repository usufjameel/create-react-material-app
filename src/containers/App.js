import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import BResponsiveDialog from "../components/BResponsiveDialog";
import AppRouters from "../routers";
import Snackbar from "../components/Snackbar";
import LoadingAnimation from "../components/LoadingAnimation";

function App() {
  const router = createBrowserRouter(AppRouters);
  return (
    <div className={"mainDiv"}>
      <BResponsiveDialog />
      <Snackbar />
      <LoadingAnimation />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
