import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseStateCounter = ({ pokemons }) => {
  const router = useNavigate();

  const [counter, setCounter] = useState(0);
  console.log("state is changed component is rendered again");

  function Decrement() {
    return setCounter(counter - 1);
  }

  function Reset() {
    return setCounter(0);
  }

  function Increment() {
    return setCounter(counter + 1);
  }

  function DynamicRoutingPage() {
    router(`/dynamic-routing/${counter}`);
  }

  return (
    <div>
      <h1 className="heading">Use State Counter</h1>
      <h2>Counter : {counter}</h2>
      <button className="btn" onClick={Decrement}>
        -
      </button>
      <button className="btn" onClick={Reset}>
        Reset
      </button>
      <button className="btn" onClick={Increment}>
        +
      </button>

      <button className="btn" onClick={DynamicRoutingPage}>
        Dynamic Routing
      </button>

      {/* <div
        className="pokedex"
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "2em",
        }}
      >
        {pokemons.map((pokemon) => (
          <div
            className="pokemon-card"
            style={{
              position: "relative",
              minWidth: "22%",
              width : "300px",
              height: "auto",
              margin: "auto",
              borderRadius: "10px",
              margin: "10px auto",
              boxShadow: "0px 0px 10px #aaa",
            }}
          >
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt="" />
            
            <p>{pokemon.type}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default UseStateCounter;

// use state me jab state change hota hai tab component re render hota hai
