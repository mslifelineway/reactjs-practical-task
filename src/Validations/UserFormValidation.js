import * as Yup from "yup";
import { regexList } from "../utils/constants";
export const newUserSchema = Yup.object().shape({
  name: Yup.string()
    .required({ name: "Please enter the name." })
    .matches(regexList.textWithoutSpecialOrSymbols, {
      message: { name: "No special chars or symbols allowed." },
      excludeEmptyStrings: true,
    })
    .min(3, { name: "Name should contain min 3 chars." })
    .max(50, { name: "Name should contain max 50 chars." }),

  email: Yup.string()
    .email({
      email: "Enter a valid email.",
    })
    .matches(regexList.emailWithDomain, {
      message: {
        email: "Enter a valid email. allowed: [ .com, .net, .org, .in]",
      },
      excludeEmptyStrings: true,
    })
    .min(6, { email: "Email should contain min 6 chars." })
    .max(50, { email: "Email should contain max 50 chars." })
    .required({ email: "Please enter the email." }),

  password: Yup.string()
    .required({ password: "Please enter your password" })
    .matches(regexList.password, {
      message: {
        password: "Enter a valid password.",
      },
    }),
  confirmPassword: Yup.string()
    .required({ confirmPassword: "Please confirm your password" })
    .oneOf([Yup.ref("password"), null], {
      confirmPassword: "Password did not match.",
    }),
});
export const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .email({
      email: "Enter a valid email.",
    })
    .matches(regexList.emailWithDomain, {
      message: {
        email: "Enter a valid email. allowed: [ .com, .net, .org, .in]",
      },
      excludeEmptyStrings: true,
    })
    .min(6, { email: "Email should contain min 6 chars." })
    .max(50, { email: "Email should contain max 50 chars." })
    .required({ email: "Please enter the email." }),

  password: Yup.string()
    .required({ password: "Please enter your password" })
    .matches(regexList.password, {
      message: {
        password: "Enter a valid password.",
      },
    }),
});

export const addUserSchema = Yup.object().shape({
  first_name: Yup.string().required({
    first_name: "Please enter the first name.",
  }),
  last_name: Yup.string().required({
    last_name: "Please enter the last name.",
  }),

  email: Yup.string()
    .email({
      email: "Enter a valid email.",
    })
    .matches(regexList.emailWithDomain, {
      message: {
        email: "Enter a valid email. allowed: [ .com, .net, .org, .in]",
      },
      excludeEmptyStrings: true,
    })
    .required({ email: "Please enter the email." }),
});
