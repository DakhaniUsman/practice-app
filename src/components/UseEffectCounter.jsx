import { useEffect, useState } from "react";

const UseEffectCounter = () => {
  const [counter, setCounter] = useState(0);
  console.log("Component is Rendered ⚡");

  const [secondCounter, setSecondCounter] = useState(10);

  const [thirdCounter, setThirdCounter] = useState(100);

  const IncrementCounter = () => {
    return setCounter(counter + 1);
  };

  const IncrementSecondCounter = () => {
    return setSecondCounter(secondCounter + 1);
  };

  const IncrementThirdCounter = () => {
    return setThirdCounter(thirdCounter + 1);
  };

  useEffect(() => {
    alert("Counter 2 is pressed");
  }, [secondCounter]);

  useEffect(() => {
    alert("Counter 1 or 3 is pressed");
  }, [thirdCounter,counter]);

  return (
    <div>
      <h1 className="heading">Use Effect Counter</h1>

      <div>
        <h2>First Counter : {counter}</h2>
        <p>Empty dependency</p>
        <button className="btn" onClick={IncrementCounter}>
          +
        </button>
      </div>

      <div>
        <h2>Second Counter : {secondCounter}</h2>
        <p>Single dependency</p>
        <button className="btn" onClick={IncrementSecondCounter}>
          +
        </button>
      </div>

      <div>
        <h2>Third Counter : {thirdCounter}</h2>
        <p>Multiple dependency</p>
        <button className="btn" onClick={IncrementThirdCounter}>
          +
        </button>
      </div>
    </div>
  );
};
export default UseEffectCounter;
