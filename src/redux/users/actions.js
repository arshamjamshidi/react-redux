import {
  CLEAR_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./actionTypes";

const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = (res) => ({
  type: FETCH_USERS_SUCCESS,
  payload: res,
});

const fetchUsersFailure = (err) => ({
  type: FETCH_USERS_FAILURE,
  payload: err,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => dispatch(fetchUsersSuccess(data)))
    .catch((err) => dispatch(fetchUsersFailure(err.message)));
};

export const clearUsers = () => ({
  type: CLEAR_USERS,
});
