import { Box } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import useStyles from "../styles/register.styles";
import { pagePaths } from "../utils/constants";
import { Layout, UserForm } from "../components";

const Register = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = localStorage.getItem("user");
  if (user) history.push(pagePaths.dashboard);

  return (
    <Box className={classes.root}>
      <Layout noHeader>
        <UserForm register />
      </Layout>
    </Box>
  );
};
export default Register;
