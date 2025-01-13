import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FakeProductsApi = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  const [loading, setLoading] = useState(true);

  const router = useNavigate();

  async function getFakeProducstApi() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getFakeProducstApi();
  }, []); //initial render pe hi api call krna

  return (
    <div>
      <h1 className="heading">Fake Products Page</h1>

      {loading ? (
        <div>
          <h2 className="heading">Loading...</h2>
        </div>
      ) : (
        <div
          className="parent-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            border: "2px solid black",
            width: "auto",
            minHeight: "100vh",
            gap: "20px",
            padding: "1em",
          }}
        >
          {products.map((product) => (
            <div
              className="product-card"
              style={{
                width: "300px",
                minHeight: "400px",
                boxShadow: "0px 0px 10px #aaa, 0px 0px 3px #aaa inset",
                padding: "10px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                return router(`/single-fake-product/${product.id}`);
              }}
            >
              <img
                src={product.image}
                alt=""
                style={{
                  width: "60%",
                  height: "60%",
                }}
              />
              <h3>{product.title}</h3>
              <span>
                <b>Price : </b>
                {product.price} &nbsp;
              </span>
              <span>
                <b>Rating : </b>
                {product.rating.rate}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default FakeProductsApi;
