import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleFakeProduct = () => {
  const { productId } = useParams();

  const [productsData, setProductsData] = useState({});
  console.log(productsData);

  const [loading, setLoading] = useState(true);

  async function getSingleFakeProductApi() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProductsData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getSingleFakeProductApi();
  }, [productId]);
  return (
    <div>
        <Link to="/fake-products-api">Go Back to products</Link>
      <h1 className="heading">Single Fake Product : {productId}</h1>
      {loading ? (
        <div>
          <h2 className="heading">Loading...</h2>
        </div>
      ) : (
        <div
          className="parent-container"
          style={{
            width: "auto",
            height: "100%",
            padding: "2em",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div
            className="left-image-container"
            style={{
              width: "50%",
              height: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={productsData.image}
              alt=""
              style={{
                display: "inline-block",
                width: "50%",
                height: "50%",
              }}
            />
          </div>
          <div
            className="right-data-container"
            style={{
              width: "50%",
              height: "100%",
              padding : "1em 2em",
              letterSpacing : "2px",
              textAlign : "left",
              boxShadow : "0px 0px 10px #aaa",
              borderRadius : "10px"
            }}
          >
            <h2>{productsData.title}</h2>
            <h3 style={{textTransform : "uppercase"}}>{productsData.category}</h3>
            <p>{productsData.description}</p>
            <p><b>Price : </b>{productsData.price}</p>
            <p><b>Rating : </b>{productsData.rating.rate}</p>
            <button className="btn"> Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleFakeProduct;

// fix the problem in my code
