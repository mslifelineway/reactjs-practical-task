import { apiUrls, messages } from "../utils/constants";
import HttpCalls from "../utils/serviceCaller";

export const registerUser = async (payload) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find((u) => u.email === payload.email);
  if (existingUser) {
    return { status: false, message: messages.userAlreadyExists };
  }
  users.push(payload);
  localStorage.setItem("users", JSON.stringify(users));
  return { status: true, message: messages.userCreated };
};

export const loginUser = async (payload) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find((u) => u.email === payload.email);
  if (existingUser) {
    if (existingUser.password === payload.password) {
      localStorage.setItem("user", JSON.stringify(existingUser));
      return { status: true, message: messages.loggedIn };
    }
    return { status: false, message: messages.wrongCredentials };
  }
  return { status: false, message: messages.userNotExists };
};

export const logoutUser = async (payload) => {
  localStorage.removeItem("user");
};

export const getUsers = async () => {
  let { call } = HttpCalls;
  return call("GET", apiUrls.getUsers);
};
export const addUser = async (payload) => {
  let { call } = HttpCalls;
  return call("POST", apiUrls.addUser, payload);
};
export const updateUser = async (payload) => {
  let { call } = HttpCalls;
  return call("PATCH", `${apiUrls.updateUser}/${payload.id}`, payload);
};
