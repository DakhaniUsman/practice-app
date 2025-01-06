import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DynamicRouting = () => {
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      // call api
      console.log(`product ${productId} is fetched`);
    } else {
      console.log("waiting for porduct");
    }
  }, [productId]);

  return (
    <div>
      <h1 className="heading">Dynamic Routing - {productId}</h1>
    </div>
  );
};
export default DynamicRouting;
