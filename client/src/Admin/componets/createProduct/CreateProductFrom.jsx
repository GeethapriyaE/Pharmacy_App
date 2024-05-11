import { useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import { Fragment } from "react";
import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../Redux/Customers/Product/Action";


const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const CreateProductForm = () => {

  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    category: "",
    description: "",
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? name = "quantity" : name = e.target.name;

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleAddSize = () => {
    const sizes = [...productData.size];
    sizes.push({ name: "", quantity: "" });
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  // const handleRemoveSize = (index) => {
  //   const sizes = [...productData.size];
  //   sizes.splice(index, 1);
  //   setProductData((prevState) => ({
  //     ...prevState,
  //     size: sizes,
  //   }));
  // };
  const [file, setFile] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ data: productData, jwt }))
    setProductData({
      imageUrl: "",
      brand: "",
      title: "",
      discountedPrice: "",
      price: "",
      discountPersent: "",
      quantity: "",
      category: "",
      description: "",
    });
    console.log(productData);
    setImagePreview(null);

  };

  const handleAddProducts = (data) => {
    for (let item of data) {
      const productsData = {
        data: item,
        jwt,
      }
      dispatch(createProduct(productsData))
    }
  }
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(false);
  const handle = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setProductData((prevState) => ({
          ...prevState,
          imageUrl: reader.result,
        }));
      }
      reader.readAsDataURL(selected);
    } else {
      setError(true);
      setImagePreview(null);
    }

  }
  const handleDeleteImage = () => {
    setImagePreview(null);
    setProductData((prevState) => ({
      ...prevState,
      imageUrl: "",
    }));
  }

  return (

    <div className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {error && <p className="errorMsg">File not supported</p>}

            <div className="imgPreview" style={{ background: `url("${imagePreview}") no-repeat center/cover` }}>
              {/* style={{background : imagePreview ? `url("${imagePreview}") no-repeat center/cover`  : "#131313"}} */}
              {!imagePreview && (
                <>
                  <p>Add Product image</p>
                  <label htmlFor="imageUrl" className="customFileUpload">
                    Choose file
                  </label>
                  <input type="file" id="imageUrl" name="imageUrl" value={productData.imageUrl} onChange={handle} />
                  <span>(jpg, jpeg or png)</span>
                </>
              )}
            </div>
            {imagePreview && (
              <Grid item xs={8}>
                <div className='deleteIconContainer'>
                  <DeleteIcon onClick={handleDeleteImage} />
                </div>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={productData.category}
                onChange={handleChange}
                label="Category"
              >
                <MenuItem value="general_medicine">General Medicine</MenuItem>
                <MenuItem value="babycare">Baby Care</MenuItem>
                <MenuItem value="health&wellness">Health</MenuItem>
                <MenuItem value="womenhygine">Women Hygine</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>

          <Grid item xs={12} >
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
              onClick={handleSubmit}
            >
              Add New Product
            </Button>
            {/* <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20 ml-10"
              size="large"
              onClick={()=>handleAddProducts(dressPage1)}
            >
              Add Products By Loop
            </Button> */}
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateProductForm;
