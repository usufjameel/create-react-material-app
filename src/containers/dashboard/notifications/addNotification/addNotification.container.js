import { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router";

function AddNotification() {
  let navigate = useNavigate();
  return (
    <>
      <div>Add Notification</div>
    </>
  );
}

export default AddNotification;
