import React from 'react'
import {Link} from "react-router-dom";
import BuyButton from '../BuyButton';

export default function ProductElementComponent(props) {
    const product = {...props};
   
    return (
        <div className="product col-4">
            <div className="sides">
                <div className="front"> <img src={product.productImageUrl}></img></div>
                <div className="back">
                    <h2>{product.productName}</h2>
                    <p>{product.productShortDescription}</p>
                    <div className="row">
                        <BuyButton productId={product.productId}></BuyButton>
                            <p className="product-price">{product.productPrice + ' $'}</p>
                        <Link to={`products/${product.productId}`}>View</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
