import { useMediaQuery } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { useTheme } from "@material-ui/core/styles";
import { Divider } from "@mui/material";
import React, { useEffect } from "react";
import { isFieldEmpty } from "../../helpers/appFieldValidation";
import "./BDialog.scss";

/**
 * A Material-UI dialog component for displaying pop-up content or messages.
 */

export default function BDialog(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {}, [props]);

  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      return;
    }
    props.onClose();
  };

  const handleNegative = (event, reason) => {
    if (reason === "backdropClick") {
      return;
    }
    props.onNegative();
  };

  const handlePositive = (event, reason) => {
    if (reason === "backdropClick") {
      return;
    }
    props.onPositive();
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.open}
      className={"component-responsive-dialog"}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      fullWidth
    >
      <div className={"dialog-main"}>
        <div id="responsive-dialog-title" className={"dialog-header"}>
          {props.title}
        </div>
        <Divider />
        <DialogContent className={"my-2"}>
          <DialogContentText>{props.children}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {!isFieldEmpty(props.negativeLabel) ? (
            <button
              className={"btn custom-negative-button font-medium"}
              onClick={handleNegative}
            >
              <span className={"font-medium"}>{props.negativeLabel}</span>
            </button>
          ) : null}
          {!isFieldEmpty(props.positiveLabel) ? (
            <button
              className={"btn custom-positive-button"}
              onClick={handlePositive}
              color="primary"
              autoFocus
            >
              <span className={"font-medium"}>{props.positiveLabel}</span>
            </button>
          ) : null}
        </DialogActions>
      </div>
    </Dialog>
  );
}
