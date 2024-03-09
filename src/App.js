import { useEffect } from "react";
import "./App.scss";
import { Outlet, redirect, useNavigate } from "react-router";

function App() {
  let navigate = useNavigate();
  let authenticate = "asjgdhjaghjd";

  useEffect(() => {
    if (authenticate) {
      navigate("/user");
    }
  }, []);
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
