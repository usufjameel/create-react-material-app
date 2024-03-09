import React from "react";
import "./NodataComponent.scss";

/**
 * A component to display when there is no data to show.
 */

export default function NodataComponent() {
  return (
    <div className={"no-data-available-component"}>
      <h3>No data available</h3>
    </div>
  );
}
