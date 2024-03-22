import { useEffect } from "react";
import "./login.container.scss";
import { redirect, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../../reducers/user.slice";
import { startLoading } from "../../../reducers/loading.slice";

function Login(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="login-container">
      <div>Login page</div>
      <button
        onClick={(event) => {
          event.preventDefault();
          dispatch(login({ accessToken: "akjsgdjhagjhdfahgdhj" }));
          // dispatch(startLoading());
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Login;
