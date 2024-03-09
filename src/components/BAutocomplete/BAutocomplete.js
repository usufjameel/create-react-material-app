import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import "./BAutocomplete.scss";

/**
 * A Material-UI component that provides auto-suggestions and allows users to select options from a list.
 */

export default function BAutocomplete(props) {
  return (
    <div
      className={"mtext_field_component col-12"}
      data-testid="autocomplete-component"
    >
      <span className={"label"}>
        {props.label + (props.required ? "*" : "")}
      </span>
      <Autocomplete
        id={props.id}
        value={props.value}
        inputValue={props.inputValue}
        onInputChange={props.onInputChange}
        size="medium"
        className="minput"
        disabled={props.disabled ? props.disabled : false}
        onChange={props.onChange}
        options={props.options}
        getOptionLabel={
          props.getOptionLabel
            ? props.getOptionLabel
            : (option) => option.name || ""
        }
        renderInput={(params) => (
          <TextField
            {...params}
            name={props.id}
            placeholder={props.placeholder}
            error={props.error ? props.error : false}
            helperText={props.helperText ? props.helperText : ""}
          />
        )}
      />
    </div>
  );
}
