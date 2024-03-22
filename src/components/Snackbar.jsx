import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { openSnackbar } from "../reducers/snackbar.slice.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const CustomizedSnackbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.snackbar.open);
  const type = useSelector((state) => state.snackbar.type);
  const message = useSelector((state) => state.snackbar.message);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(openSnackbar({ open: false, type, message }));
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        {/*<RationalizeSnackbar message={snackbarMessage}/>*/}

        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          color={type}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
