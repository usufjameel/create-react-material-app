import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import RouterPath from "../../constants/router.constants";
import { useSelector } from "react-redux";

function AuthContainer() {
  let navigate = useNavigate();
  const user = useSelector((state) => state?.user);

  useEffect(() => {
    if (user.accessToken) {
      navigate(RouterPath.home);
    }
  }, [user]);
  return <Outlet />;
}

export default AuthContainer;
