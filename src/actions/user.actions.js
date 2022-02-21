import Axios from "axios";
export const GET_USER = "GET_USER";
export const SET_TOKEN = "SET_TOKEN";

export const getUser = (token) => {
  return (dispatch) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    return Axios.post(`${process.env.REACT_APP_API_URL}/profile`, {}, config)
      .then((result) => {
        console.log(result);
        dispatch({
          type: GET_USER,
          payload: result.data.body,
        });
      })
      .catch((err) => console.log(err));
  };
};
