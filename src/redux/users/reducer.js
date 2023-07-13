import {
  CLEAR_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };

    case FETCH_USERS_SUCCESS:
      return { loading: false, users: action.payload, error: "" };

    case FETCH_USERS_FAILURE:
      return { loading: false, users: [], error: action.payload };

    case CLEAR_USERS:
      return { loading: false, users: [], error: "" };

    default:
      return { ...state };
  }
};

export default reducer;

export const selectUsers = ({ users }) => users;
