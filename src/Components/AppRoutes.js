import React from 'react';
import ProductsLists from './ProductsLists'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Products from "./Products"
import ProductDetails from "./ProductDetails"
import CartItems from "./CartItems"
import CheckOut from "./CheckOut"
function AppRoutes() {




  return (

    <Router>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
 
        <Route path="products" element={<Products />}>
          <Route path="/" element={<ProductsLists />} />
          <Route path=":name" element={<ProductDetails />} />
        </Route>
        <Route path="Cart" element ={ <CartItems/>} />
        <Route path="Checkout" element ={ <CheckOut/>} />
      </Routes>

    </Router>
  )


}

export default AppRoutes;

