import { Button, MenuItem, TextField } from "@mui/material";
import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
const ProductForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = React.useState({
    title: " ",
    body: "",
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
          navigate("/");
        });
    else
      axios
        .post("https://usman-recipes.herokuapp.com/api/recipes", product)
        .then((res) => {
          console.log(res.data);
          toast.success("Product Submitted Successfully");
          setSubmitting(false);
          navigate("/");
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
  React.useEffect(getData, []);
  console.log(product);
  return (
    <div>
      <h3> Product</h3>

      <TextField
        disabled={submitting}
        variant="standard"
        fullWidth
        label="Product Name"
        value={product.name}
        onChange={(e) => {
          //   console.log(e.target.value);
          setProduct({ ...product, name: e.target.value });
        }}
      />
      <TextField
        disabled={submitting}
        fullWidth
        variant="standard"
        label="Price"
        value={product.price}
        onChange={(e) => {
          //   console.log(e.target.value);
          setProduct({ ...product, price: e.target.value });
        }}
      />
      <TextField
        disabled={submitting}
        fullWidth
        variant="standard"
        label="Color"
        select
        value={product.color}
        onChange={(e) => {
          //   console.log(e.target.value);
          setProduct({ ...product, color: e.target.value });
        }}
      >
        <MenuItem value={"red"}>Red</MenuItem>
        <MenuItem value={"blue"}>Blue</MenuItem>
      </TextField>
      <TextField
        disabled={submitting}
        fullWidth
        variant="standard"
        label="Department"
        value={product.department}
        onChange={(e) => {
          //   console.log(e.target.value);
          setProduct({ ...product, department: e.target.value });
        }}
      />
      <TextField
        disabled={submitting}
        fullWidth
        multiline
        rows={4}
        variant="standard"
        label="Description"
        value={product.description}
        onChange={(e) => {
          //   console.log(e.target.value);
          setProduct({ ...product, description: e.target.value });
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
