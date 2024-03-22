import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { stopLoading } from "../../reducers/loading.slice";

function Dashboard() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const accessToken = useSelector((state) => state?.user?.accessToken);

  useEffect(() => {
    dispatch(stopLoading());
    if (!accessToken) {
      navigate("/");
    }
  }, [accessToken]);
  return <Outlet />;
}

export default Dashboard;
