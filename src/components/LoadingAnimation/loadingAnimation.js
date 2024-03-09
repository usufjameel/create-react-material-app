import CircularProgress from "@material-ui/core/CircularProgress";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./loadingAnimation.scss";

/**
 * A React component that displays a loading animation.
 * Useful for indicating that content is being fetched or processed.
 */

export default function LoadingAnimation() {
  return (
    <div className={"loading-animation"} data-testid="loading-animation">
      <div className={"square"}>
        <CircularProgress color="inherit" data-testid="circular-progress" />
      </div>
    </div>
  );
}
