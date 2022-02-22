import {
  GET_USER,
  SET_TOKEN,
  LOG_OUT,
  UPDATE_USER,
} from "../actions/user.actions";

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
    case UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        },
      };
    case LOG_OUT:
      return {
        initialState,
      };
    default:
      return state;
  }
}
