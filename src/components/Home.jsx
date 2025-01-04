import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const router = useNavigate();

  function UseStateCounterPage() {
    router("/use-state-counter");
  }

  function UseStateTwo() {
    router("/use-state-two");
  }

  function UseEffectCounterPage() {
    router("/use-effect-counter");
  }

  function DynamicRoutingPage() {
    router("/dynamic-routing/:productId");
  }

  return (
    <div>
      <h1 className="heading">Welcome to Home Page</h1>

      <button className="btn" onClick={UseStateCounterPage}>
        Use State Counter
      </button>

      <button className="btn" onClick={UseStateTwo}>
        Use State Two
      </button>

      <button className="btn" onClick={UseEffectCounterPage}>
        Use Effect Counter
      </button>

      <button className="btn" onClick={DynamicRoutingPage}>
        Dynamic Routing
      </button>
    </div>
  );
};
export default Home;
