import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import RouterPath from "../../constants/router.constants";

function AuthContainer() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(RouterPath.home);
  }, []);
  return <Outlet />;
}

export default AuthContainer;
