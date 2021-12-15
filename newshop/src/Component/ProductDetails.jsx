import React from "react";
import { useParams } from "react-router";
import axios from "axios";
const ProductDetails = (props) => {
  const [product, setProduct] = React.useState({});
  const params = useParams();
  console.log(params);
  const getData = () => {
    axios
      .get("https://usman-recipes.herokuapp.com/api/recipes/" + params.id)
      .then((res) => {
        console.log(res.data)
        setProduct(res.data);
      });
  };
  React.useEffect(getData, []);
  return (
    <div>
      <h3> {product.title}</h3>
      <p>
        
        <b>Discription</b> {product.body} <br />
        
      </p>
      
      <hr />
    </div>
  );
};

export default ProductDetails;
