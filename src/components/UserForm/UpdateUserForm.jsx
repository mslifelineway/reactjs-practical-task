import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { InputElement } from "..";
import { addUser, updateUser } from "../../services";
import {
  severities,
  messages,
  actions,
} from "../../utils/constants";
import { addUserSchema } from "../../Validations/UserFormValidation";
import useStyles from "./styles";
import { SnackbarContext } from "../../context/SnackbarContext";

const UpdateUserForm = (props) => {
  const { user, doAfter, handleClose } = props;
  const classes = useStyles();
  const { setSnackbarOptions } = useContext(SnackbarContext);

  const [formData, setFormData] = React.useState(
    user
      ? user
      : {
          first_name: "",
          last_name: "",
          email: "",
        }
  );

  const [errors, setErrors] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const clearAllErrors = () => {
    const clearedErrObj = Object.keys(errors).map((e) => (errors[e] = ""));
    setErrors(clearedErrObj);
  };

  const handleInputChange = async (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    try {
      await addUserSchema.validateAt(name, { [name]: value });
      clearAllErrors();
    } catch (e) {
      const { errors } = e;
      let newError = {};
      errors &&
        errors.forEach((err) => {
          const key = Object.keys(err);
          newError[key[0]] = err[key[0]];
        });
      setErrors({ ...errors, ...newError });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addUserSchema.validate(formData, {
        abortEarly: false,
      });
      if (user) {
        await updateUser(formData);
        setSnackbarOptions((old) => ({
          ...old,
          message: messages.userUpdated,
          open: true,
          severity: severities.success,
        }));
        doAfter({ action: actions.edit, user: formData });
      } else {
        const resp = await addUser(formData);
        setSnackbarOptions((old) => ({
          ...old,
          message: messages.userAdded,
          open: true,
          severity: severities.success,
        }));
        doAfter({ action: actions.add, user: { ...formData, ...resp } });
      }
    } catch (e) {
      const { response } = e;
      if (response) {
        const { message } = response.data.error;
        setSnackbarOptions((old) => ({ ...old, message, open: true }));
        return;
      }

      const { errors } = e;
      let newError = {};
      errors &&
        errors.forEach((err) => {
          const key = Object.keys(err);
          newError[key[0]] = err[key[0]];
        });
      setErrors({ ...errors, ...newError });
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      className={classes.root}
    >
      <Grid item lg={5} md={5} sm={8} xs={10}>
        <Card>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" align="center">
              {user ? "Update!" : "Add an user"}
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              className={classes.formBox}
            >
              <InputElement
                name="first_name"
                placeholder="Enter first name"
                value={formData.first_name}
                onChange={handleInputChange}
                error={errors.first_name}
              />
              <Box height="25px" />
              <InputElement
                name="last_name"
                placeholder="Enter last name"
                value={formData.last_name}
                onChange={handleInputChange}
                error={errors.last_name}
              />
              <Box height="25px" />
              <InputElement
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              <Box height="50px" />
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  {user ? "Update" : "Add"}
                </Button>
                <Button
                  style={{ marginLeft: 15 }}
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default UpdateUserForm;
