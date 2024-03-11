import React, {useEffect} from 'react';
import './responsiveDialog.scss'
import Dialog from "@material-ui/core/Dialog";
import {useMediaQuery} from "@material-ui/core";
import {useTheme} from '@material-ui/core/styles';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {useDispatch, useSelector} from "react-redux";
import {setResponsiveDialog} from "../../../reducers/responsiveDialogReducer";
import {ResponsiveDialogActions} from "../../../constants/appConstants";
import DialogActions from "@material-ui/core/DialogActions";
import {Divider} from "@mui/material";
import {isFieldEmpty} from "../../../helpers/appFieldValidation";

export default function ResponsiveDialog(props) {
    const dispatch = useDispatch();
    const dialogOpen = useSelector(state => state.responsiveDialog.dialogOpen);
    const dialogTitle = useSelector(state => state.responsiveDialog.dialogTitle);
    const dialogMessage = useSelector(state => state.responsiveDialog.dialogMessage);
    const positiveLabel = useSelector(state => state.responsiveDialog.positiveLabel);
    const negativeLabel = useSelector(state => state.responsiveDialog.negativeLabel);
    const dialogResponse = useSelector(state => state.responsiveDialog.dialogResponse);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    useEffect(() => {
        console.log(props)
    }, [props])

    const handleClose = (event, reason) => {
        if (reason === "backdropClick") {
            return;
        }
        dispatch(setResponsiveDialog(false, dialogTitle, dialogMessage, positiveLabel, negativeLabel, dialogResponse));
    };

    const handleNegative = (event, reason) => {
        if (reason === "backdropClick") {
            return;
        }
        if (dialogResponse) {
            dialogResponse(ResponsiveDialogActions.NEGATIVE)
        }
        dispatch(setResponsiveDialog(false, dialogTitle, dialogMessage, positiveLabel, negativeLabel, dialogResponse));
    };

    const handlePositive = (event, reason) => {
        if (reason === "backdropClick") {
            return;
        }
        if (dialogResponse) {
            dialogResponse(ResponsiveDialogActions.POSITIVE)
        }
        dispatch(setResponsiveDialog(false, dialogTitle, dialogMessage, positiveLabel, negativeLabel, dialogResponse));
    };

    const handleClick = (action) => { // positive & negative
        if (dialogResponse) {
            dialogResponse(action)
            dispatch(setResponsiveDialog(false, dialogTitle, dialogMessage, positiveLabel, negativeLabel, dialogResponse
            ));
        }
    }


    return <Dialog
        fullScreen={fullScreen}
        open={dialogOpen}
        className={"component-responsive-dialog"}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
        <div className={"dialog-main"}>
            <div id="responsive-dialog-title" className={"dialog-header"}>{dialogTitle}</div>
            <Divider/>
            <DialogContent className={"my-2"}>
                <DialogContentText>
                    <span className={"font-regular text-black-70"}>{dialogMessage}</span>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {
                    !isFieldEmpty(negativeLabel) ?
                        <button className={"btn custom-negative-button font-medium"} onClick={handleNegative}>
                            <span className={"font-medium"}>{negativeLabel}</span>
                        </button> : null
                }
                {
                    !isFieldEmpty(positiveLabel) ?
                        <button className={"btn custom-positive-button"} onClick={handlePositive} color="primary"
                                autoFocus>
                            <span className={"font-medium"}>{positiveLabel}</span>
                        </button> : null
                }

            </DialogActions>
        </div>
    </Dialog>
}
