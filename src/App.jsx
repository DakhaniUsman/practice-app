import logo from "./logo.svg";
import "./App.css";
import UseReducer from "./components/UseReducer";
import ContextCounter from "./components/ContextCounter";
import { Route, Routes } from "react-router-dom";
import UseStateCounter from "./components/UseStateCounter";
import Home from "./components/Home";
import UseEffectCounter from "./components/UseEffectCounter";
import UseStateTwo from "./components/UseStateTwo";
import DynamicRouting from "./components/DynamicRouting";
import PropDrilling from "./components/PropDrilling";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState(["Zeek", "Eren", "Mikasa", "Armin"]);

  const [pokemons, setPokemons] = useState([
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png",
      id: "#0001",
      name: "Bulbasaur",
      type: "Grass Poison",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/002.png",
      id: "#0002",
      name: "Ivysaur",
      type: "Grass Poison",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/003.png",
      id: "#0003",
      name: "Venasaur",
      type: "Grass Poison",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png",
      id: "#0004",
      name: "Charmander",
      type: "Fire",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/005.png",
      id: "#0005",
      name: "Charmeleon",
      type: "Fire",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/006.png",
      id: "#0006",
      name: "Charizard",
      type: "Fire Flying",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png",
      id: "#0007",
      name: "Squirtle",
      type: "Water",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/008.png",
      id: "#0008",
      name: "Wartortle",
      type: "Water",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/009.png",
      id: "#0009",
      name: "Blastoise",
      type: "Water",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/010.png",
      id: "#0010",
      name: "Caterpie",
      type: "Bug",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/011.png",
      id: "#0011",
      name: "Metapod",
      type: "Bug",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/012.png",
      id: "#0012",
      name: "Buterfree",
      type: "Bug Flying",
    },
  ]);

  return (
    <div className="App">
      {/* <UseReducer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/context-counter" element={<ContextCounter />} />
        <Route path="/use-state-counter" element={<UseStateCounter pokemons={pokemons}/>} />
        <Route path="/use-state-two" element={<UseStateTwo />} />
        <Route path="use-effect-counter" element={<UseEffectCounter />} />
        <Route
          path="/dynamic-routing/:productId"
          element={<DynamicRouting />}
        />
        <Route
          path="/prop-drilling"
          element={<PropDrilling students={students} pokemons={pokemons} />}
        />
      </Routes>
    </div>
  );
}

export default App;
