import React from "react";
import OrderDetails from "pages/OrderDetails";
import Orders from "pages/Orders";
import UpdateProduct from "pages/UpdateProduct";
import AddProducts from "pages/AddProducts";
import Products from "pages/Products";
import AccountInfo from "pages/AccountInfo";
import Legals from "pages/Legals";
import Account from "pages/Account";
import Dashboard from "pages/Dashboard";
import Signup from "pages/Signup";
import HomeLogin from "pages/HomeLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/legals" element={<Legals />} />
        <Route path="/accountinfo" element={<AccountInfo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/updateproduct" element={<UpdateProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
