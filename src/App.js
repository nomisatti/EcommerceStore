import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AppRoutes from './Components/AppRoutes'
import {CartProvider} from './context/CartContext'
import ProductsData from './Data/Product.json'

function App() {

  const [productList, setProductList] = useState([]);




  useEffect(() => {
    const FetchedData = async () => {
      const data = await ProductsData;
      const resultData = data.map((productsData) => ({
        sku: productsData.sku,
        price: productsData.price,
        name: productsData.name,
        image: productsData.image,
        description: productsData.description,
        model: productsData.model,
        categories: productsData.category.map((productsCategories) => ({
          category: productsCategories.name,
          categoryId: productsCategories.id
        }))
      }))
      setProductList(resultData);
    }
    FetchedData();
  }, [])



  return (
    productList ? (
    <CartProvider>

      <AppRoutes />
  
     </CartProvider>
    ) : "Loading ...."
  )


}

export default App;


/*

       {list.map(() => (
         <Products key={list.sku} list={list}/>
       ))}
*/