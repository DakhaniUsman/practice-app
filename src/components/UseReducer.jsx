import { useReducer } from "react";

function Reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };

    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };

    case "RESET":
      return { ...state, counter: 0};
    default:
      return state;
  }
}

const Initialstate = { counter: 0 };

const UseReducer = () => {
  const [state, dispatch] = useReducer(Reducer, Initialstate);

  function Increment() {
    dispatch({ type: "INCREMENT" });
  }
  function Decrement() {
    dispatch({ type: "DECREMENT" });
  }
  function Reset() {
    dispatch({ type: "RESET" });
  }

  return (
    <div>
      <h1>Counter : {state.counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};
export default UseReducer;
