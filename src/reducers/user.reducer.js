import { GET_USER, SET_TOKEN } from "../actions/user.actions";

const initialState = {
  isLogIn: false,
  user: {},
  token: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        isLogIn: true,
        user: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        isLogIn: true,
        token: action.payload,
      };
    default:
      return state;
  }
}
