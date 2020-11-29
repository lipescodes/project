import React from 'react'
import {Link} from "react-router-dom";
import BuyButton from '../BuyButton';

export default function ProductElementComponent(props) {
    const { shoppingCart, setShoppingCart, productImageUrl, productName, productShortDescription, productId , productPrice} = props;

    return (
        <div className="product col-4">
            <div className="sides">
                <div className="front"> <img src={productImageUrl}></img></div>
                <div className="back">
                    <h2>{productName}</h2>
                    <p>{productShortDescription}</p>
                    <div className="row">
                        <BuyButton 
                            boughtProduct={{productId,productImageUrl,productPrice,productName,productShortDescription}} 
                            setShoppingCart={setShoppingCart} 
                            shoppingCart={shoppingCart}>
                        </BuyButton>
                            <p className="product-price">{productPrice + ' $'}</p>
                        <Link to={`products/${productId}`}>View</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
