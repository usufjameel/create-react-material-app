import { useEffect } from "react";
import "./login.container.scss";
import { redirect, useNavigate } from "react-router";

function Login(props) {
  let navigate = useNavigate();

  return (
    <div className="login-container">
      <div>Login page</div>
      <button
        onClick={(event) => {
          event.preventDefault();
          navigate("/user/register");
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Login;
