import { createContext, useReducer } from "react";

export const MyCounterContext = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };

    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };

    case "RESET":
      return { ...state, counter: 0 };

    default:
      return state;
  }
}

const Initialstate = { counter: 0 };

// HOC
const ParentCounterContext = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, Initialstate);

  return <MyCounterContext.Provider value={{state,dispatch}}>{children}</MyCounterContext.Provider>;
};

export default ParentCounterContext;
