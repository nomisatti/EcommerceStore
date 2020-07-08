import React, { useEffect, useState } from 'react';

function Products({list}) {
    console.log(list)
 return (
      list ? (
      <div className="App">
        <li> {list.price}</li>,
        <li> {list.name}</li>

      </div> ) : 'Loading'
    )
  
  
  }
  
  export default Products;