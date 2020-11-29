import React from 'react'

export default function BuyButton(props/* {boughtProduct:{...product}} */) {
    const {boughtProduct, setShoppingCart, shoppingCart} = props;
 

    const clickHandler = () => {
        console.log(boughtProduct)
        /* Badge thing */
        const cart = document.getElementById("cart-badge");
        cart.parentElement.style.display = "block";
        if (cart.textContent.length > 0) {
            cart.textContent = parseInt(cart.textContent) + 1;
        }else{
            cart.textContent = 1;
        }  
        /* Badge thing END */

        setShoppingCart([...shoppingCart, boughtProduct]); 

    }

    return (
        <button className="buy-button" onClick={clickHandler}>Buy It!</button>
    )
}

/*
    const [state,setState] = useState();

    return (<BlaBla state={state} setState={setState}>)


    function BlaBla(props) {
        const {state,setState} = props;

    }

*/
