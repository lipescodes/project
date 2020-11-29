import React from 'react';
import "./ProductsListComponent.css";
import ProductElementComponent from "./ProductElementComponent";
import products from '../../../database';

export default function ProductsListComponent(props) {
    const { setShoppingCart, shoppingCart } = props;

    return (
        <div className="product-container pt-5 row">
            {products && products.map(prod=><ProductElementComponent 
                    key={prod.productId} 
                    productId={prod.productId} 
                    productName={prod.productName} 
                    productShortDescription={prod.productShortDescription} 
                    productImageUrl={prod.productImageUrl}
                    productPrice={prod.price} 
                    setShoppingCart={setShoppingCart}
                    shoppingCart={shoppingCart}
            ></ProductElementComponent>) }
        </div>
    )
}
