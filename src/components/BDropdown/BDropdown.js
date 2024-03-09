import { Checkbox, FormHelperText } from "@material-ui/core";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import "./BDropdown.scss";
/**
 * A Material-UI dropdown component for selecting options.
 */

export default function BDropdown(props) {
  return (
    <Box className={"mtext_field_component"}>
      <span className={"label"}>
        {props.label + (props.required ? "*" : "")}
      </span>
      <FormControl
        className={"minput"}
        required={props.required}
        error={props.error ? props.error : false}
      >
        <Select
          id={props.id}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          multiple={props.multiple ?? false}
          onChange={props.onChange}
        >
          <MenuItem value="" disabled>
            <em>--Please select--</em>
          </MenuItem>
          {props.options.map((option) => (
            <MenuItem value={option}>
              {props.multiple ? (
                <Checkbox
                  checked={props.value.indexOf(option) > -1}
                  color={"primary"}
                />
              ) : null}

              {option}
            </MenuItem>
          ))}
        </Select>
        {props.error ? (
          <FormHelperText style={{ color: "#d32f2f" }}>
            {props.helperText}
          </FormHelperText>
        ) : null}

        {!props.error && props.helperText ? (
          <FormHelperText>{props.helperText}</FormHelperText>
        ) : null}
      </FormControl>
    </Box>
  );
}
