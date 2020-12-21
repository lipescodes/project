import React from 'react';


export default function CartPage(props) {
    const {shoppingCart, setShoppingCart, setShowList} = props;
    //setShowList(false);
    //const cartContainer = document.getElementsByClassName('cart-container');
    

    return (
        <div className="pt-5">
            <h1>This is the cart Page!!!</h1>
            <h3>You can buy your selected products</h3>
            <p>The process in progress....(1-2 day :) )</p>
        </div>
    )
}
