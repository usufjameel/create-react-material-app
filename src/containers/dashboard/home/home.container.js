import { useEffect } from "react";
import "./home.container.scss";
import { Outlet, redirect, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../../../reducers/user.slice";
import { SnackbarType, openSnackbar } from "../../../reducers/snackbar.slice";
import { startLoading, stopLoading } from "../../../reducers/loading.slice";
import { ActionType, openDialog } from "../../../reducers/dialog.slice";
import SessionDetails from "../../../helpers/sessionDetails";

function Home() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div>Home</div>
      <button
        onClick={(event) => {
          event.preventDefault();
          dispatch(logout());
        }}
      >
        Logout
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(
            openSnackbar({
              open: true,
              type: SnackbarType.success,
              message: "Hello from the home!",
            })
          );
        }}
      >
        Snackbar
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(startLoading());
          setTimeout(() => {
            dispatch(stopLoading());
          }, 2000);
        }}
      >
        Loading
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(
            openDialog({
              title: "Alert",
              message: "This is a testing message for a dialog",
              positiveLabel: "Ok",
              negativeLabel: "Cancel",
              response: (actionType) => {
                if (actionType === ActionType.positive) {
                  console.log("positive");
                }
                if (actionType === ActionType.negative) {
                  console.log("negative");
                }
              },
            })
          );
        }}
      >
        Dialog
      </button>
      <br />
      <button
        onClick={() => {
          SessionDetails.clearStoredData();
        }}
      >
        Clear store
      </button>
    </>
  );
}

export default Home;
