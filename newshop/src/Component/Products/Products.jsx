import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import { Button } from "@mui/material";
const Products = () => {
  console.log("Products");


  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axios
      .get("https://usman-recipes.herokuapp.com/api/recipes")
      .then((res) => {
        // setProducts([]);
        setProducts(res.data);
        setLoading(false);
        console.log(res.data);
      });
  };
  React.useEffect(getData, []);
  

  return (
   
    <div>
       <Button id="mybtn" variant="contained" onClick={()=>{
          navigate("/ProductForm")

           }}>Add Recepies</Button>
      {loading && <p>Loading...</p>}
      {products.length == 0 && !loading && (
        <p>Sorry We have No Products to Show</p>
      )}
      
      
      {products.map((p) => (
        <SingleProduct product={p}  />
      ))}
    </div>
  );
};

export default Products;
