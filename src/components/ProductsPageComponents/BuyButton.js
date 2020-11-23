import React from 'react'

export default function BuyButton(props) {
    const prodId = {...props};

    const clickHandler = () => {
        
        const cart = document.getElementById("cart-badge");
        cart.parentElement.style.display = "block";
        if (cart.textContent.length > 0) {
            cart.textContent = parseInt(cart.textContent) + 1;
        }else{
            cart.textContent = 1;
        }  
    }

    return (
        <button className="buy-button" onClick={clickHandler}>Buy It!</button>
    )
}
