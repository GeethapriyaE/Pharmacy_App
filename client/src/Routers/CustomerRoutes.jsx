import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import TearmsCondition from "../../src/components/Pages/TearmsCondition";
import PrivacyPolicy from "../../src/components/Pages/PrivacyPolicy";
import About from "../../src/components/AboutUs";
import Cart from "../../src/components/Cart/Cart";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button} from "@mui/material";
import { customTheme, customerTheme } from "../Admin/them/customeThem";
import Order from "../../src/components/Order/Order";
import OrderDetails from "../../src/components/Order/OrderDetails";
import Checkout from "../../src/components/Checkout/Checkout";
import PaymentSuccess from "../paymentSuccess/PaymentSuccess";
import RateProduct from "../../src/components/ReviewProduct/RateProduct";
import { AboutUs, Header, Home } from "../components";
import Product from "../../src/components/Product/Product/Product";
import Productdetails from "../../src/components/Product/ProductDetails/ProductDetails";
import ContactUs from "../components/ContactUs";
import AdminPannel from "../Admin/AdminPannel";
const CustomerRoutes = () => {
    const location = useLocation();
    
  
    // Only show Navigation component when not on the NotFound page
    const showNavigation = location.pathname !== "*";

    // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",`/product/${productId}`]
  return (
    <div>
    
    <ThemeProvider theme={customerTheme}>
    {showNavigation && <Header />}
     <Routes>
     <Route path="/login" element={<Home />}></Route>
     <Route path="/register" element={<Home />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-condition" element={<TearmsCondition />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/product/:productId" element={<Productdetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route> 
        <Route path="/admin" element={<AdminPannel />}></Route>
      </Routes>
    </ThemeProvider>
      
    </div>
  );
};

export default CustomerRoutes;
