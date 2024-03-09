import { useMediaQuery } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  CheckBox,
  Contacts,
  ExitToApp,
  Group,
  List as LinkIcon,
  Notifications,
  Person,
  Speed,
} from "@material-ui/icons";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  AutoStories,
  EmojiEvents,
  KeyboardDoubleArrowUp,
  SupportAgent,
} from "@mui/icons-material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import React from "react";
import { USER_TYPE } from "../../common/constants";
import {
  DrawerItems,
  DrawerItemsKey,
  TITLE,
} from "../../constants/appConstants";
import SessionDetails from "../../helpers/sessionDetails";
import "./SideDrawer.scss";

/**
 * A Material-UI component that creates a side drawer for navigation or additional content.
 */

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginBottom: 50,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerContent: {
    backgroundColor: "#2f353a",
    flex: 1,
  },
  menuItem: {
    color: "whitesmoke",
    fontFamily: "MontserratMedium",
  },

  menuIcon: {
    color: "gray",
  },
}));

export default function SideDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [menuItems, setMenuItems] = React.useState([]);
  const userMenuItems = [
    {
      label: DrawerItems.DASHBOARD_SCREEN,
      key: DrawerItemsKey.DASHBOARD_SCREEN,
      icon: <Speed />,
    },

    {
      label: DrawerItems.NOTIFICATION_LIST_SCREEN,
      key: DrawerItemsKey.NOTIFICATION_LIST_SCREEN,
      icon: <Notifications />,
    },
  ];

  const jamatAdminMenuItems = [
    {
      label: DrawerItems.DASHBOARD_SCREEN,
      key: DrawerItemsKey.DASHBOARD_SCREEN,
      icon: <Speed />,
    },
    {
      label: DrawerItems.APPLICANTS_SCREEN,
      key: DrawerItemsKey.APPLICANTS_SCREEN,
      icon: <Group />,
    },
    {
      label: DrawerItems.MEMBERS_SCREEN,
      key: DrawerItemsKey.MEMBERS_SCREEN,
      icon: <Group />,
    },
    {
      label: TITLE.NOTIFICATION_LIST_SCREEN,
      key: DrawerItemsKey.NOTIFICATION_LIST_SCREEN,
      icon: <Notifications />,
    },
  ];

  const adminMenuItems = [
    {
      label: DrawerItems.DASHBOARD_SCREEN,
      key: DrawerItemsKey.DASHBOARD_SCREEN,
      icon: <Speed />,
    },
    {
      label: DrawerItems.APPLICANTS_SCREEN,
      key: DrawerItemsKey.APPLICANTS_SCREEN,
      icon: <Group />,
    },
    {
      label: DrawerItems.MEMBERS_SCREEN,
      key: DrawerItemsKey.MEMBERS_SCREEN,
      icon: <Group />,
    },
    {
      label: DrawerItems.JAMAATS_SCREEN,
      key: DrawerItemsKey.JAMAATS_SCREEN,
      icon: <LinkIcon />,
    },
    {
      label: DrawerItems.RESERVED_CODES_SCREEN,
      key: DrawerItemsKey.RESERVED_CODES_SCREEN,
      icon: <LinkIcon />,
    },
    {
      label: DrawerItems.CITY_SCREEN,
      key: DrawerItemsKey.CITY_SCREEN,
      icon: <LinkIcon />,
    },
    {
      label: DrawerItems.NOTIFICATIONS_SCREEN,
      key: DrawerItemsKey.NOTIFICATIONS_SCREEN,
      icon: <Notifications />,
    },
    {
      label: DrawerItems.HELPLINE_CONTACTS_SCREEN,
      key: DrawerItemsKey.HELPLINE_CONTACTS,
      icon: <Contacts />,
    },
    {
      label: DrawerItems.AWARDS_ADMIN,
      key: DrawerItemsKey.AWARDS_ADMIN,
      icon: <EmojiEvents />,
    },
  ];

  const commonMenuItems = [
    {
      label: DrawerItems.APPROVALS_SCREEN,
      key: DrawerItemsKey.APPROVALS_SCREEN,
      icon: <CheckBox />,
    },
    {
      label: DrawerItems.REQUESTS,
      key: DrawerItemsKey.REQUESTS,
      icon: <KeyboardDoubleArrowUp />,
    },
    {
      label: DrawerItems.NEWS_SCREEN,
      key: DrawerItemsKey.NEWS_SCREEN,
      icon: <NewspaperIcon />,
    },
    {
      label: DrawerItems.STORIES_SCREEN,
      key: DrawerItemsKey.STORIES_SCREEN,
      icon: <AutoStories />,
    },
    {
      label: DrawerItems.AWARDS,
      key: DrawerItemsKey.AWARDS,
      icon: <EmojiEvents />,
    },
    {
      label: DrawerItems.PROFILE_SCREEN,
      key: DrawerItemsKey.PROFILE_SCREEN,
      icon: <Person />,
    },
    {
      label: DrawerItems.ASK_HELP,
      key: DrawerItemsKey.ASK_HELP,
      icon: <SupportAgent />,
    },

    {
      label: DrawerItems.LOGOUT,
      key: DrawerItemsKey.LOGOUT,
      icon: <ExitToApp />,
    },
  ];

  React.useEffect(() => {
    const user = SessionDetails.getCurrentUser();
    if (user.userType.includes(USER_TYPE.MASTER_ADMIN)) {
      setMenuItems(adminMenuItems);
    } else if (user.userType.includes(USER_TYPE.JAMAT_ADMIN)) {
      setMenuItems(jamatAdminMenuItems);
    } else {
      setMenuItems(userMenuItems);
    }
  }, []);
  return (
    <Drawer
      className={classes.drawer}
      variant={isSmallScreen ? "" : "persistent"}
      anchor="left"
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <img src={require("../../assets/logo.png")} alt="" width={"120px"} />
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <div className={classes.drawerContent}>
        <List>
          {menuItems.map((menuItem) => {
            return (
              <ListItem
                button
                key={menuItem.label}
                onClick={() => {
                  props.handleMenuClick(menuItem.key);
                }}
              >
                <ListItemIcon className={classes.menuIcon}>
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText
                  className={classes.menuItem}
                  primary={menuItem.label}
                />
              </ListItem>
            );
          })}
          {commonMenuItems.map((menuItem) => {
            return (
              <ListItem
                button
                key={menuItem.label}
                onClick={() => {
                  props.handleMenuClick(menuItem.key);
                }}
              >
                <ListItemIcon className={classes.menuIcon}>
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText
                  className={classes.menuItem}
                  primary={menuItem.label}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
}
