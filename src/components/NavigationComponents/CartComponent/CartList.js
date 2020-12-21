import React from 'react';
import CartListElement from './CartListElement';
import {Link} from "react-router-dom";

export default function CartList(props) {
    const {shoppingCart, setShoppingCart} = props;
    //const cartList = shoppingCart.map((el) => {
        //let sameProd = shoppingCart.filter(elem => elem.id === el.id);
       // el.counnt = sameProd.length;
   // });
   let sum = 0;

   shoppingCart.map(element=>sum+=(parseFloat(element.productPrice) * element.count));
  

    return (
        <div>
           {shoppingCart.map(element =><CartListElement
                key={element.productId}
                productId={element.productId}
                count={element.count}
                productName={element.productName}
                productPrice={element.productPrice}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
           ></CartListElement>) }
         
           <p className="total-price">Total price:  <b>{sum.toFixed(2)} $</b>
           <br/>
           <Link id="lets-buy" to={`cart`}>Go to Buy!</Link>
           </p>
          
           

        </div>
    )
}
