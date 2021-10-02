import React from "react";
import useStyles from "./styles";
import {
  Box,
  FormHelperText,
  InputBase,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const InputElement = (props) => {
  const {
    inputType,
    name,
    placeholder,
    type = "text",
    value,
    onChange,
    error,
    inputLabelId,
    inputLabel,
    labelId,
    menus,
  } = props;

  const classes = useStyles();

  const renderMenus = () => {
    return menus.map((m, i) => (
      <MenuItem value={m.value} key={i}>
        {m.name}
      </MenuItem>
    ));
  };

  return (
    <Box className={classes.root}>
      {inputType === "select" ? (
        <FormControl className={classes.formControl}>
          {inputLabel && (
            <InputLabel id={inputLabelId}>{inputLabel}</InputLabel>
          )}
          <Select
            labelId={labelId}
            name={name}
            value={value}
            onChange={onChange}
            input={<BootstrapInput />}
          >
            {menus && renderMenus()}
          </Select>
        </FormControl>
      ) : (
        <React.Fragment>
          <InputBase
            className={classes.input}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            autoComplete="off"
          />
          <FormHelperText>{error}</FormHelperText>
        </React.Fragment>
      )}
    </Box>
  );
};

export default InputElement;
