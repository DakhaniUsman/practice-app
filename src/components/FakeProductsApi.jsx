import axios from "axios";
import { useEffect, useState } from "react";

const FakeProductsApi = () => {
  const [products, setProducts] = useState([]);
    console.log(products);  

const[loading, setLoading] =useState(true)

  async function getFakeProducstApi() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
    finally {
        setLoading(false)
    }
  }

  useEffect(() => {
    getFakeProducstApi();
  }, []);   //initial render pe hi api call krna

  return (
    <div>
        
    </div>
  );
};
export default FakeProductsApi;
