import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCounter } from "../redux/counter/reducer";
import {
  incrementCounter,
  decrementCounter,
  incrementCounterByAmount,
  decrementCounterByAmount,
} from "../redux/counter/actions";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const { counter } = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Counter is <span style={{ color: "red" }}>{counter}</span>
      </h1>

      <div>
        <h3>By Default</h3>
        <button onClick={() => dispatch(incrementCounter())}>increment</button>
        <button onClick={() => dispatch(decrementCounter())}>decrement</button>
      </div>

      <div>
        <h3>By Amount</h3>
        <div>
          <input
            type="number"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </div>
        <button onClick={() => dispatch(incrementCounterByAmount(amount))}>
          increment
        </button>
        <button onClick={() => dispatch(decrementCounterByAmount(amount))}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
