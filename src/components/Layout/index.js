import { Box } from "@material-ui/core";
import React from "react";
import Header from "../Header";

const Layout = ({ noHeader, children }) => {
  return (
    <React.Fragment>
      {!noHeader && <Header />}
      <Box height="64px" />
      {children}
    </React.Fragment>
  );
};

export default Layout;
