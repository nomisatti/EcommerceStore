import React  from 'react';
import {  Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import Cart from "./Cart"
import "./CartItem.css"
import Applogo from "../Applogo.png"

function Header() {

  return (
    <Navbar bg="dark" variant="dark">
      <Link className="nav-link mainlogo" to="/"><img src={Applogo}  alt="Nayamart"/></Link>
    
      <Nav className="mr-auto">

        <Link className="nav-link" to="/products">Products</Link>
      </Nav>
      <Link className="nav-link" to="/Cart"> <Cart/></Link>

       
    </Navbar>




  )


}

export default Header;




/*

  */