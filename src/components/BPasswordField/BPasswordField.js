import React from "react";
import "./BPasswordField.scss";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Lock, LockOpenTwoTone } from "@material-ui/icons";
import { FormHelperText } from "@material-ui/core";

/**
 * A Material-UI component for entering and displaying password input.
 */

export default function BPasswordField(props) {
  return (
    <div className={"mtext_field_component"}>
      {props.label ? (
        <span className={"label"}>
          {props.label + (props.required ? "*" : "")}
        </span>
      ) : null}
      <FormControl
        className={"input"}
        variant="outlined"
        required={props.required}
        error={props.error ? props.error : false}
      >
        <OutlinedInput
          {...props}
          id={props.id}
          label={""}
          name={props.id}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={props.onClickShowPassword}
                onMouseDown={props.onClickMouseDownPassword}
                edge="end"
              >
                {props.showPassword ? <LockOpenTwoTone /> : <Lock />}
              </IconButton>
            </InputAdornment>
          }
        />
        {props.error ? (
          <FormHelperText style={{ color: "#d32f2f" }}>
            {props.helperText}
          </FormHelperText>
        ) : null}

        {!props.error && props.helperText ? (
          <FormHelperText>{props.helperText}</FormHelperText>
        ) : null}
      </FormControl>
    </div>
  );
}
