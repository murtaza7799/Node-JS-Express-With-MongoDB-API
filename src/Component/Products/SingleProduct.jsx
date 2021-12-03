import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const SingleProduct = (props) => {
  return (
    <div>
      <h3>
        <Link to={"/products/details/" + props.product._id}>
          {props.product.title}
        </Link>
      </h3>
      <p>
        <b>Discription:</b>{props.product.body} 
      </p>
    
      <hr />
    </div>
  );
};

export default SingleProduct;