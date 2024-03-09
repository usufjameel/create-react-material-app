import { useEffect } from "react";
import "./home.container.scss";
import { Outlet, redirect, useNavigate } from "react-router";

function Home() {
  let navigate = useNavigate();
  return (
    <>
      <div>Home</div>
    </>
  );
}

export default Home;
