import React from 'react'

export default function BuyButton(props/* {boughtProduct:{...product}} */) {
    const {boughtProduct, setShoppingCart, shoppingCart} = props;
 

    const clickHandler = () => {
        console.log(boughtProduct);
       // console.log(shoppingCart.length);
        
       
        boughtProduct.count = 1;
        let diferetProducts = shoppingCart.filter(element => {
            return element.productId !== boughtProduct.productId;
        })

        if(diferetProducts.length <= 0){
            shoppingCart.map(el => {
                if (el.productId !== boughtProduct.productId) {
                    diferetProducts.push(el);
                }
            })
        }
        
        const countedProduct = shoppingCart.filter(el =>{
            return el.productId === boughtProduct.productId;
        })

        if (countedProduct.length > 0) {
            countedProduct[0].count++;
            setShoppingCart([...diferetProducts, countedProduct[0]]); 
        }else{
  
            setShoppingCart([...diferetProducts, boughtProduct]); 
        }

    }

    return (
        <button className="buy-button" onClick={clickHandler}>Buy It!</button>
    )
}

