import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import "./Products.css"
import { Link } from 'react-router-dom'

function ControlledCarousel({Products}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    let  productList = Products.slice(200,206)
    
    return (
        productList ? (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" >
                        
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                        {productList.map(item => (
                            <Carousel.Item key={item.sku}>
                                <Link to={`products/${item.name}`}>
                                <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <Carousel.Caption>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </Carousel.Caption>
                                </Link>
                            </Carousel.Item>
                            
                             ))}
                        </Carousel>
                 
                    </div>
                </div>
            </div>
        ) : "Loading ....."
    );

}

export default ControlledCarousel;


