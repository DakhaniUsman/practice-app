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
import FakeProductsApi from "./components/FakeProductsApi";
import SingleFakeProduct from "./components/SingleFakeProduct";

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
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/013.png",
      id: "#0013",
      name: "Weedle",
      type: "Bug Poison",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/014.png",
      id: "#0014",
      name: "Kakuna",
      type: "Bug Poison",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/015.png",
      id: "#0015",
      name: "Beedrill",
      type: "Bug Poison",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/016.png",
      id: "#0016",
      name: "Pidgey",
      type: "Normal Flying",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/017.png",
      id: "#0017",
      name: "Pidgeoto",
      type: "Normal Flying",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/018.png",
      id: "#0018",
      name: "Pidgeot",
      type: "Normal Flying",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/019.png",
      id: "#0019",
      name: "Ratata",
      type: "Normal",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/020.png",
      id: "#0020",
      name: "Raticate",
      type: "Normal",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/658.png",
      id: "#0658",
      name: "Greyninja",
      type: "Dark Water",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/493.png",
      id: "#0493",
      name: "Archeus",
      type: "Normal",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/890.png",
      id: "#0890",
      name: "Eternatus",
      type: "Dark",
    },
    {
      image:
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png",
      id: "#0172",
      name: "Pichu",
      type: "Electric",
    },
  ]);

  return (
    <div className="App">
      {/* <UseReducer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/context-counter" element={<ContextCounter />} />
        <Route
          path="/use-state-counter"
          element={<UseStateCounter pokemons={pokemons} />}
        />
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
        <Route path="/fake-products-api" element={<FakeProductsApi />} />
        <Route
          path="single-fake-product/:productId"
          element={<SingleFakeProduct />}
        />
      </Routes>
    </div>
  );
}

export default App;
