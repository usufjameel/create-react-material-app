import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function Notifications() {
  let navigate = useNavigate();
  return <Outlet />;
}

export default Notifications;
