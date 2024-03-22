import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import "./LoadingAnimation.scss";
import { useSelector } from "react-redux";

/**
 * A React component that displays a loading animation.
 * Useful for indicating that content is being fetched or processed.
 */

export default function LoadingAnimation() {
  const isLoading = useSelector((state) => state?.loader?.isLoading ?? false);

  return isLoading ? (
    <div className={"loading-animation"} data-testid="loading-animation">
      <div className={"square"}>
        <CircularProgress color="inherit" data-testid="circular-progress" />
      </div>
    </div>
  ) : null;
}
