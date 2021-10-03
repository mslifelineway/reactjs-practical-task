import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    padding: "10px 20px 0 20px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0 0 0",
    },
  },
  gridContainer: {
    width: "100%",
    maxWidth: "100%",
    marginTop: 15,
  },
  paper: {
    padding: 15,
  },
  avatar: {
    width: "20%",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "80%"
    },
  },
  modal: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    background: `rgba(0, 0, 0, 0.5)`,
  },
}));
