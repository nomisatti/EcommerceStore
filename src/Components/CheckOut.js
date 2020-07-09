import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'
import "./CartItem.css"
import { Link } from 'react-router-dom'


function CheckOut() {
    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.Quantity), 0).toFixed(2);
    const checkOut = () => {
        setCart([]);


    }

    return (
        cart ? (
            <div className="container mb-4">
                <h1>Checkout </h1>
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Product</th>
                                        <th scope="col" className="text-right">Quantity</th>
                                        <th scope="col" className="text-right">Per Unit Price</th>
                                        <th scope="col" className="text-right">Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(cart).map(item => {
                                        const productDetails = cart[item];
                                        return (
                                            <tr key={productDetails.sku}>
                                                <td><img src={productDetails.image} alt={productDetails.name} /> </td>
                                                <td>{productDetails.name}</td>
                                                <td><input className="form-control" type="text" defaultValue={productDetails.Quantity} disabled={true} /></td>
                                                <td className="text-right">${productDetails.price}</td>
                                                <td className="text-right">${(productDetails.price * productDetails.Quantity).toFixed(2)}</td>

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

                                <button onClick={checkOut} className="btn btn-lg btn-block btn-success text-uppercase">Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        ) : ""
    )


}

export default CheckOut;