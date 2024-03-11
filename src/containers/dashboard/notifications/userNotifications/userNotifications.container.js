import { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router";

function UserNotifications() {
  let navigate = useNavigate();
  return (
    <>
      <div>User Notifications</div>
    </>
  );
}

export default UserNotifications;
