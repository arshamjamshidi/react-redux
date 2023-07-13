import {
  DECREMENT_COUNTER,
  DECREMENT_COUNTER_BY_AMOUNT,
  INCREMENT_COUNTER,
  INCREMENT_COUNTER_BY_AMOUNT,
} from "./actionTypes";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };

    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };

    case INCREMENT_COUNTER_BY_AMOUNT:
      return { ...state, counter: state.counter + +action.payload };

    case DECREMENT_COUNTER_BY_AMOUNT:
      return { ...state, counter: state.counter - +action.payload };

    default:
      return { ...state };
  }
};

export default reducer;

export const selectCounter = ({ counter }) => counter;
