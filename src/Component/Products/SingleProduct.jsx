import { Button } from "@mui/material";
import React from "react";
import { Link , useNavigate} from "react-router-dom";
import Typography from '@mui/material/Typography';
import axios from "axios";
const SingleProduct = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      
      
      <h3>
        <Link to={"/products/details/" + props.product._id}>
          {props.product.title}
        </Link>
      </h3>
      <div >
        <p display="flex" align="left">
        <b>Discription:</b>{props.product.body} 
        </p>
        <div display="flex" align="right" >
       
       <Button
         variant="outlined"
         size="medium"
         color="secondary"
         
       >Edit   
       </Button>
       
       <Button
         variant="outlined"
         size="medium"
         color="error"
         onClick={(e) => {
           axios
             .delete(
               "https://usman-recipes.herokuapp.com/api/recipes/" +
                 props.product._id
             )
             .then((res) => {
               console.log("deleted");
               
               navigate("/");
               

             });
         }}
       >
         Delete
       </Button>
       </div>



      </div>
      
        
      
    
     
      <hr />
    </div>
  );
};

export default SingleProduct;