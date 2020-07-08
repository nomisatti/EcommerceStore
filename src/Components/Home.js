import React, {  useContext, useState } from 'react';
import ProductsData from '../Data/Product.json'
import ControlledCarousel from "./ControlledCarousel";
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import "./Products.css"

function Home() {

  const [cart , setCart] = useContext(CartContext)
  const [quantity , setQuantity] = useState(0)
  
  let Products = ProductsData.slice(0, 12)

  const addToCart  = (productDetails) => {
     const product = productDetails
      if(product["Quantity"]){
        setQuantity(++product["Quantity"] )
      }
      else{
        setQuantity(1)
        product["Quantity"] = 1
        setCart(current => [...current , product])  
      }
        console.log(cart,quantity)
}
  return (

    <div className="container homeContainer">
      <ControlledCarousel Products={ProductsData} />
      <div className="row">
        <div className="col-lg-12" >
          <div className="container-fluid productsContainer">
            <h1 className="h3">Featured Products </h1>

            <div className="row">

              {Object.keys(Products).map(item => {
                const productDetails = Products[item];
                return (
                  <li className="itemList" key={productDetails.sku} >

                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="card h-100">
                        <button ><img className="card-img-top" src={productDetails.image} alt={productDetails.name}/>
                        </button>
                        <div className="card-body">
                          <h4 className="card-title">
                            <Link to={`products/${productDetails.name}`}>
                              {productDetails.name}
                            </Link>

                          </h4>
                          <h5>${productDetails.price}</h5>
                          <p className="card-text">{productDetails.description}</p>
                        </div>
                        <div className="card-footer">
                          <div className="btn-ground text-center">
                            <button type="button" className="btn btn-danger add-to-cart" onClick={ ()=> addToCart(productDetails)}><i className="fa fa-shopping-cart"></i> Add To Cart</button>
                            <Link type="button" className="btn btn-success quick-view" to={`products/${productDetails.name}`}>
                          <i className="fa fa-eye"> Quick View</i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </div>

          </div>
        </div>

      </div>
    </div>
 
  )


}

export default Home;