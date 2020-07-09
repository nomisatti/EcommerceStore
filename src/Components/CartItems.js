import React, {  useContext } from 'react';
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

import "./CartItem.css"

function CartItems() {
    let [cart, setCart] = useContext(CartContext)

    const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.Quantity), 0).toFixed(2);
    const deleteItem = (product) => {
        var result = window.confirm("Are you sure you want to remove this product?");
        if (result) {
            product["Quantity"] = 0
            setCart(cart.filter(cart => cart.name !== product.name))
        }

    }


    return (

        <div className="container mb-4">
            <h1>Shopping Cart</h1>
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"> </th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Available</th>
                                    <th scope="col" className="text-right">Quantity</th>
                                    <th scope="col" className="text-right">Per Unit Price</th>
                                    <th scope="col" className="text-right">Total Price</th>  
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(cart).map(item => {
                                    const productDetails = cart[item];
                                    return (
                                        <tr key={productDetails.sku}>
                                            <td><img src={productDetails.image} alt={productDetails.name} /> </td>
                                            <td>{productDetails.name}</td>
                                            <td>In stock</td>
                                            <td><input className="form-control" type="text" defaultValue={productDetails.Quantity} disabled={true} /></td>
                                            <td className="text-right">${productDetails.price}</td>
                                            <td className="text-right">${(productDetails.price * productDetails.Quantity).toFixed(2)}</td>

                                            <td className="text-right"><button onClick={() => deleteItem(productDetails)} className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>

                                        </tr>

                                    )
                                })}

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>Total</strong></td>
                                    <td className="text-right"><strong>${totalPrice}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 text-right">
                            <Link type="button" className="btn btn-lg btn-block btn-warning" to={"/products"}>
                                Continue Shopping
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md-6 text-right">
                            <Link type="button" className="btn btn-lg btn-block btn-success text-uppercase" to="/Checkout">
                                Checkout
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default CartItems;