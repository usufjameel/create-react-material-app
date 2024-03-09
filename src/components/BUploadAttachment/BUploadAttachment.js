import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./BUploadAttachment.scss";

/**
 * A React component for displaying text in a strong or bold style.
 */

export default function BUploadAttachment(props) {
  const [fileUpload, setFileUpload] = useState(null);
  return (
    <div>
      <Button
        onClick={() => fileUpload.click()}
        style={{ height: 44, border: "1px solid lightgray" }}
      >
        <props.icon style={{ color: "#5B7586" }} />
        <div>{"Attach file"}</div>
      </Button>
      <input
        type="file"
        accept="image/*,.pdf,.doc,.docx"
        ref={(fileUploadRef) => {
          setFileUpload(fileUploadRef);
        }}
        style={{ visibility: "hidden" }}
        onChange={(event) => props.onChange(event)}
      />
    </div>
  );
}
