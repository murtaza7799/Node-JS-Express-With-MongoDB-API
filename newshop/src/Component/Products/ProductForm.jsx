import { Button, TextField } from "@mui/material";
import React from "react";
import axios from "axios";
import {  toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
const ProductForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = React.useState({
    title: " ",
    body:" "
  });
  const [submitting, setSubmitting] = React.useState(false);
  const submitForm = () => {
    setSubmitting(true);
    if (id)
      axios
        .put("https://usman-recipes.herokuapp.com/api/recipes/" + id, product)
        .then((res) => {
          console.log(res.data);
          toast.success("Product Submitted Successfully");
          setSubmitting(false);
          navigate("/Products");
        });
    else
      axios
        .post("http://localhost:5000/api/products/", product)
        .then((res) => {
          console.log(res.data);
          toast.success("Product Submitted Successfully");
          setSubmitting(false);
          navigate("/Products");
        });
  };
  const getData = () => {
    if (id)
      axios
        .get("https://usman-recipes.herokuapp.com/api/recipes/" + params.id)
        .then((res) => {
          setProduct(res.data);
        });
  };
  React.useEffect(getData, [id, params.id]);
  console.log(product);
  return (
    <div>
      <h3>{id ? "Edit" : "Create"} Recepie</h3>

      <TextField
        disabled={submitting}
        variant="standard"
        fullWidth
        label="Recepie Name"
        value={product.title}
        onChange={(e) => {
          //   console.log(e.target.value);
          setProduct({ ...product,title: e.target.value });
        }}
      />
   
   
      <TextField
        disabled={submitting}
        fullWidth
        multiline
        rows={4}
        variant="standard"
        label="Description"
        value={product.body}
        onChange={(e) => {
          //   console.log(e.target.value);
          setProduct({ ...product, body: e.target.value });
        }}
      />
      <br />
      <Button variant="contained" onClick={submitForm} disabled={submitting}>
        Save
      </Button>
    </div>
  );
};

export default ProductForm;
