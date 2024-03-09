import { IconButton } from "@mui/material";
import React, { useState } from "react";

/**
 * A React component for displaying text in a strong or bold style.
 */

export default function BFileUploadButton(props) {
  const [fileUpload, setFileUpload] = useState(null);
  return (
    <IconButton
      onClick={() => fileUpload.click()}
      sx={{ backgroundColor: "white", margin: "20px" }}
    >
      <props.icon />
      <input
        type="file"
        accept="image/*"
        ref={(fileUploadRef) => {
          setFileUpload(fileUploadRef);
        }}
        style={{ display: "none" }}
        onChange={(event) => props.onChange(event)}
      />
    </IconButton>
  );
}
