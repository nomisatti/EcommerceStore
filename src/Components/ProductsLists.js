import React, { useState,  useContext } from 'react';
import ProductsData from '../Data/Product.json'
import "./Products.css"
import Pagination from "./Pagination";
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'



function ProductsLists() {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(36);
    const [cart , setCart] = useContext(CartContext)
    const [quantity , setQuantity] = useState(0)


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = ProductsData.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
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
        ProductsData ? (

            <div className="container-fluid">
                <div className="row">
              
                    <div className="col-lg-12" >
                        <div className="container-fluid productsContainer">
                        <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={ProductsData.length}
                                paginate={paginate} />
                            <div className="row">

                                {Object.keys(currentPosts).map(item => {
                                    const productDetails = currentPosts[item];
                                    return (
                                        <li className="itemList" key={productDetails.sku} >

                                            <div className="col-lg-3 col-md-6 mb-3">
                                                <div className="card h-100">
                                                    <button ><img className="card-img-top" src={productDetails.image} alt={productDetails.name} />
                                                    </button>
                                                    <div className="card-body">
                                                        <h4 className="card-title">
                                                            <Link to={`${productDetails.name}`}>
                                                                {productDetails.name}
                                                            </Link>

                                                        </h4>
                                                        <h5>${productDetails.price}</h5>
                                                        <p className="card-text">{productDetails.description}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <div className="btn-ground text-center">
                                                            <button type="button" className="btn btn-danger add-to-cart" onClick={() => addToCart(productDetails)}><i className="fa fa-shopping-cart"></i> Add To Cart</button>
                                                            <Link type="button" className="btn btn-success quick-view" to={`${productDetails.name}`}>
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
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={ProductsData.length}
                                paginate={paginate} />
                        </div>
                    </div>

                </div>

            </div>



        ) : 'Loading ...'
    )
}
/*
productList ? (
< div classNameName="App" >
                        {
                            console.log(ProductsLists),
                            productList.map(item => (
                                <li key={item.sku}>
                                    <h2>{item.name}</h2>
                                    <p>{item.price}</p>
                                    <img src={item.image} alt={item.name} />

                                </li>
                                // <Categories name={item.name} categories={item.categories} price={item.price} key={item.sku} />
                            ))
                        }



                    </div >)  */





export default ProductsLists;

/*<div>
                        In List
            <ul>
                            {Object.entries(ProductsData).map(([description, image, name]) => (


                ))}
                        </ul>
                    </div>

        */