import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function Dashboard() {
  let navigate = useNavigate();
  return <Outlet />;
}

export default Dashboard;
