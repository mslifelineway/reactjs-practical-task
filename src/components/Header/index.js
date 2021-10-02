import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import React, { useContext } from "react";
import { logoutUser } from "../../services";
import { messages, pagePaths, severities } from "../../utils/constants";
import useStyles from "./styles";
import { SnackbarContext } from "../../context/SnackbarContext";
import { useHistory } from "react-router";

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const { setSnackbarOptions } = useContext(SnackbarContext);

  const logout = async () => {
    await logoutUser();
    setSnackbarOptions((old) => ({
      ...old,
      message: messages.loggedOut,
      open: true,
      severity: severities.success,
    }));
    setTimeout(() => {
      history.push(pagePaths.login);
    }, 1000);
  };

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          React JS Practical
        </Typography>
        {user && (
          <Typography variant="h6" color="inherit" className={classes.userName}>
            Hi, {user.name}
          </Typography>
        )}
        {user && (
          <Button color="secondary" onClick={logout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
