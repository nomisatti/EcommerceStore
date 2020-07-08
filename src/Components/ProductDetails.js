import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ProductsData from '../Data/Product.json'
import "./ProductDetails.css"


function ProductDetails() {

    const { name } = useParams();
    let ProductDetails = ProductsData.find(obj => obj.name === name);

    const [cart, setCart] = useContext(CartContext)

    const addToCart = (productDetails) => {
        const product = productDetails
        setCart(current => [...current, product])
        console.log(cart)
    }

    return (
        ProductDetails ? (
            <div className="container">
                <div className="card">
                    <div className="row">
                        <aside className="col-sm-5 border-right">
                            <article className="gallery-wrap">
                                <div className="img-big-wrap">
                                    <div> <button ><img src={ProductDetails.image} alt={ProductDetails.name} /></button></div>
                                </div>

                            </article>
                        </aside>
                        <aside className="col-sm-7">
                            <article className="card-body p-5">
                                <h3 className="title mb-3">{ProductDetails.name}</h3>

                                <p className="price-detail-wrap">
                                    <span className="price h3 text-warning">
                                        <span className="currency">$</span><span className="num">{ProductDetails.price}</span>
                                    </span>
                                </p>
                                <dl className="item-property">
                                    <dt>Description</dt>
                                    <dd><p>{ProductDetails.description} </p></dd>
                                </dl>
                                <dl className="param param-feature">
                                    <dt>Model#</dt>
                                    <dd>{ProductDetails.model}</dd>
                                </dl>
                                <dl className="param param-feature">
                                    <dt>Manufacturer</dt>
                                    <dd>{ProductDetails.manufacturer}</dd>
                                </dl>

                                <hr />
                              
                                <button type="button" className="btn btn-lg btn-danger text-uppercase" onClick={ ()=> addToCart(ProductDetails)}><i classNameName="fa fa-shopping-cart"></i> Add To Cart</button>

                            </article>
                        </aside>
                    </div>
                </div>
            </div>
        ) : "Loading ..."

    )


}

export default ProductDetails;
