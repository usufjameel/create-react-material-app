import { useEffect } from "react";
import "./main.container.scss";
import { Outlet, redirect, useNavigate } from "react-router";

function Main() {
  let navigate = useNavigate();
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Main;
