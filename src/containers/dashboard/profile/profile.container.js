import { useEffect } from "react";
import "./profile.container.scss";
import { Outlet, redirect, useNavigate } from "react-router";

function Profile() {
  let navigate = useNavigate();
  return (
    <>
      <div>Profile</div>
    </>
  );
}

export default Profile;
