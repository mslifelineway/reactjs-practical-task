import { Box } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { Layout, UserForm } from "../components";
import useStyles from "../styles/login.styles";
import { pagePaths } from "../utils/constants";

const Login = () => {
  const classes = useStyles();
  const user = localStorage.getItem("user");
  const history = useHistory();
  if (user) history.push(pagePaths.dashboard);

  return (
    <Box className={classes.root}>
      <Layout noHeader>
        <UserForm />
      </Layout>
    </Box>
  );
};

export default Login;
