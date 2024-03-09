import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React from "react";
import "./SideLeftToolbar.scss";

/**
 * A Material-UI component for a left-sided toolbar.
 */

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  mToolbar: {
    backgroundColor: "white",
  },
}));

export default function SideLeftToolbar(props) {
  const classes = useStyles();
  return (
    <Toolbar className={"component-side-left-toolbar " + classes.mToolbar}>
      <IconButton
        color="#bcbf4e"
        aria-label="open drawer"
        onClick={props.handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, props.open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <span className="toolbar-title">{props.title}</span>
    </Toolbar>
  );
}
