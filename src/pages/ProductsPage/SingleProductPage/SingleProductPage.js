import React from 'react';
import products from '../../../database';
import BuyButton from '../../../components/ProductsPageComponents/BuyButton';
import {
    Link,
    useParams,
  } from "react-router-dom";

export default function SingleProductPage(props) {

  const {id} = useParams();
  const product = products.find((prod) => {
      return prod.productId === id;
  });

  const {productName,productImageUrl,productId} = product;

    return (
    <div>
      <h1>{productName}</h1>
      <img src={productImageUrl} height="300px"  width="300px"></img>
      <BuyButton boughtProduct={product}></BuyButton>
    </div>
   
  );
}


