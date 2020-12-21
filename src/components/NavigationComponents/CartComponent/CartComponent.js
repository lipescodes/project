import React, {useState} from 'react';
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartComponent.css";
import CartList from "./CartList";

export default function CartComponent(props) {
    const {shoppingCart, setShoppingCart, showList, setShowList} = props; 
    const clickHandler = () => {
        console.log('cart click');
        setShowList(!showList);
    }
  

  /* I am a fucking idiot.... i not use the jsx preference....
    i want a function which fund the badge and set the value....like a lame...
    becouse i can simply wrinte in to the combonent...
  */
      
    return (
        <div className="cart-container">
            <p className="cart-icon" onClick={clickHandler}><FontAwesomeIcon icon={faCartArrowDown} size={'2x'}/></p><span id="cart-badge">{shoppingCart.length > 0 ? shoppingCart.length : ''}</span>
            <div className={showList ? 'cart-list-container' : 'd-none cart-list-container'}>
                <CartList shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}></CartList>
            </div>
        </div>
    )
}
