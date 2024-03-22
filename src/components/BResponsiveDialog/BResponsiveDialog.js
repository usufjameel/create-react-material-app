import React, { useEffect } from "react";
import "./BResponsiveDialog.scss";
import Dialog from "@material-ui/core/Dialog";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useDispatch, useSelector } from "react-redux";
import DialogActions from "@material-ui/core/DialogActions";
import { Divider } from "@mui/material";
import { ActionType, closeDialog } from "../../reducers/dialog.slice";

export default function BResponsiveDialog(props) {
  const dispatch = useDispatch();
  const dialogOptions = useSelector((state) => state.dialog);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    console.log(props);
  }, [props]);

  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      return;
    }
    dispatch(closeDialog());
  };

  const handleNegative = (event, reason) => {
    if (reason === "backdropClick") {
      return;
    }
    if (dialogOptions.response) {
      dialogOptions.response(ActionType.negative);
    }
    dispatch(closeDialog());
  };

  const handlePositive = (event, reason) => {
    if (reason === "backdropClick") {
      return;
    }
    if (dialogOptions.response) {
      dialogOptions.response(ActionType.positive);
    }
    dispatch(closeDialog());
  };

  const handleClick = (action) => {
    // positive & negative
    if (dialogOptions.response) {
      dialogOptions.response(action);
      dispatch(closeDialog());
    }
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={dialogOptions.open}
      className={"component-responsive-dialog"}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <div className={"dialog-main"}>
        <div id="responsive-dialog-title" className={"dialog-header"}>
          {dialogOptions.title}
        </div>
        <Divider />
        <DialogContent className={"my-2"}>
          <DialogContentText>
            <span className={"text-black-70"}>{dialogOptions.message}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {dialogOptions.negativeLabel ? (
            <button
              className={"btn custom-negative-button"}
              onClick={handleNegative}
            >
              <span>{dialogOptions.negativeLabel}</span>
            </button>
          ) : null}
          {dialogOptions.positiveLabel ? (
            <button
              className={"btn custom-positive-button"}
              onClick={handlePositive}
              color="primary"
              autoFocus
            >
              <span>{dialogOptions.positiveLabel}</span>
            </button>
          ) : null}
        </DialogActions>
      </div>
    </Dialog>
  );
}
