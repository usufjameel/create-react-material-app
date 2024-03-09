import React from "react";
import "./BUserAutocomplete.scss";
import { Autocomplete, TextField } from "@mui/material";
import Avatar from "react-avatar";

/**
 * A Material-UI component that provides auto-suggestions and allows users to select options from a list.
 */

export default function BUserAutocomplete(props) {
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
            : (option) => `${option.name} ${option.userCode}` || ""
        }
        renderOption={(props, option) => (
          <div {...props}>
            <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <Avatar name={`${option.name}`} round={true} size={44} />
              <div>
                <div style={{ fontFamily: "MontserratMedium" }}>
                  {option.name}
                </div>
                <div style={{ fontFamily: "MontserratItalic" }}>
                  {option.userCode}
                </div>
              </div>
            </div>
          </div>
        )}
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
