import axios from 'axios';
import { toast } from 'react-toastify';
import {
  ALL_login_FAILURE,
  ALL_login_REQUESTS,
  ALL_login_SUCCESS,
  ALL_Register_REQUESTS,
  ALL_Register_SUCCESS,
  ALL_Register_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  FETCH_USER_LOGOUT,
  FETCH_USER_FAILURE
} from '../constant/user';

const url = "http://localhost:8088";  // Backend URL

// Login Action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ALL_login_REQUESTS });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`${url}/api/v1/login`, { email, password }, config);

    dispatch({ type: ALL_login_SUCCESS, payload: data.user });

    // Save user data to local storage
    localStorage.setItem('user', JSON.stringify(data.user));

    // Show success toast
    toast.success('Login successful!');

    // Return success and user data to the component
    return { success: true, user: data.user };
  } catch (error) {
    // Check if the error has a response, then access the error message
    const errorMessage = error.response ? error.response.data.message : "An unexpected error occurred!";
    dispatch({ type: ALL_login_FAILURE, payload: errorMessage });

    // Show error toast
    toast.error(errorMessage);

    // Return failure and error message to the component
    return { success: false, message: errorMessage };
  }
};

// Register Action
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: ALL_Register_REQUESTS });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`${url}/api/v1/register`, userData, config);

    dispatch({ type: ALL_Register_SUCCESS, payload: data.user });

    // Save user data to local storage
    localStorage.setItem('user', JSON.stringify(data.user));

    // Show success toast
    toast.success('Registration successful!');

    // Return success and user data to the component
    return { success: true, user: data.user };
  } catch (error) {
    // Check if the error has a response, then access the error message
    const errorMessage = error.response ? error.response.data.message : "An unexpected error occurred!";
    dispatch({ type: ALL_Register_FAILURE, payload: errorMessage });

    // Show error toast
    toast.error(errorMessage);

    // Return failure and error message to the component
    return { success: false, message: errorMessage };
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });

  // Remove user data from local storage
  localStorage.removeItem('user');

  // Show success toast
  toast.success('Logout successful! Come back soon!');
};

// Logout User (API Call)
export const LogoutUser = () => async (dispatch) => {
  try {
    await axios.post(`${url}/api/v1/logout`);
    dispatch({ type: FETCH_USER_LOGOUT });

    // Show success toast
    toast.success('Logout successful! Come back soon!');
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : "An unexpected error occurred!";
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: errorMessage,
    });

    toast.error(errorMessage);
  }
};
