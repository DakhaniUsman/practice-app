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

function App() {
  return (
    <div className="App">
      {/* <UseReducer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/context-counter" element={<ContextCounter />} />
        <Route path="/use-state-counter" element={<UseStateCounter />} />
        <Route path="/use-state-two" element={<UseStateTwo />}/>
        <Route path="use-effect-counter" element={<UseEffectCounter />} />
        <Route path="/dynamic-routing/:productId" element={<DynamicRouting />}/>

      </Routes>
    </div>
  );
}

export default App;
