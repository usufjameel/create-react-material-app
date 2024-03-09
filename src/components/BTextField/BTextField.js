import React, { useEffect } from "react";
import "./BTextField.scss";
import { TextField } from "@mui/material";

/**
 * A text input field for user input.
 */

export default function BTextField(props) {
  useEffect(() => {
    console.log(props.min);
  }, [props]);
  return (
    <div className={"mtext_field_component"}>
      {props.label ? (
        <span className={"label"}>
          {props.label + (props.required ? "*" : "")}
        </span>
      ) : null}

      <TextField
        {...props}
        inputProps={{
          style: { height: props.multiline ? "100px" : "25px" },
          min: props.min,
          maxLength: props.maxLength,
        }}
        label={""}
        className={"minput"}
        variant="outlined"
        autoComplete="new-password"
      />
    </div>
  );
}
