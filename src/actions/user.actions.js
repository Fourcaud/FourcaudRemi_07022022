import Axios from "axios";
export const GET_USER = "GET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const LOG_OUT = "LOG_OUT";
export const UPDATE_USER = "UPDATE_USER";

export const getUser = (token) => {
  return (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    return Axios.post(`${process.env.REACT_APP_API_URL}/profile`, {}, config)
      .then((result) => {
        dispatch({
          type: GET_USER,
          payload: result.data.body,
        });
      })
      .catch((err) => console.log(err));
  };
};
/**
 * Update user profile
 * @param {string} firstName new first name
 * @param {string} lastName new last name
 * @returns user profile update
 */
export const updateUser = (firstName, lastName, token) => {
  console.log(firstName, lastName, token);
  return (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      firstName: firstName,
      lastName: lastName,
    };
    return Axios.put(
      `${process.env.REACT_APP_API_URL}/profile`,
      bodyParameters,
      config
    )
      .then((result) => {
        dispatch({
          type: UPDATE_USER,
          payload: result.data.body,
        });
      })
      .catch((err) => console.log(err));
  };
};

/**
 * Log out
 * @returns clear local storage and state
 */
export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: LOG_OUT,
      payload: "",
    });
    window.location = "/";
  };
};
