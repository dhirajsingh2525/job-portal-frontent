import { registerUser, loginUser, updateUser, getMe, logoutUser,  } from "../../apis/api";

import { setUser, clearUser } from "../reducers/userSlice";

export const asyncRegisterUser = (userData) => async (dispatch) => {
  try {
    const data = await registerUser(userData);

    dispatch(setUser(data.user));

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const asyncgetMe = () => async (dispatch) => {
  try {
    const data = await getMe();
    console.log("getMe response:", data.user);
  
    const userData = data.user;
    dispatch(setUser(userData));
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoginUser = (userData) => async (dispatch) => {
  try {
    const data = await loginUser(userData);

    dispatch(setUser(data.user));

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateUser = (id, userData) => async (dispatch) => {
  try {
    const data = await updateUser(id, userData);

    dispatch(setUser(data.user));
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogoutUser = () => async (dispatch) => {
    await logoutUser();
  dispatch(clearUser());
};
