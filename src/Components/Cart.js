import React, { useContext } from 'react';
import {CartContext} from '../context/CartContext'


function Cart() {
    const [cart] = useContext(CartContext)
    return (

        <button className="btn btn-success btn ml-6" href="cart.html">
            <i className="fa fa-shopping-cart"></i> Cart
            <span className="badge badge-light">{cart.length}</span>
        </button>
    )


}

export default Cart;