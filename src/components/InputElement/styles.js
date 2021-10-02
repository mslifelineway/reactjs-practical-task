import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
    "& .MuiFormHelperText-root": {
      color: theme.palette.error.main,
      position: "absolute",
      top: "42px",
      right: 0,
      margin: "0 auto",
      padding: 0,
      fontSize: "10px",
      left: 0,
      width: "100%",
      whiteSpace: "nowrap",
    },
  },
  input: {
    border: `1px solid ${theme.palette.primary.darkBorder}`,
    padding: "4px 20px",
    borderRadius: "3px",
    fontFamily: theme.typography.poppins,
    letterSpacing: "0.05em",
    fontSize: "14px",
    width: "260px",
  },
}));
