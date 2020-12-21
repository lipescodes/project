import React from 'react'

export default function CartListElement(props) {
    
    const {productId, count, productName, productPrice, shoppingCart, setShoppingCart} = props;

    const removeItem = () => {    
        const newShoppingCart = shoppingCart.filter((element) => {
            return element.productId !== productId;
        });

        if (count > 1) {         
            let cartElement = shoppingCart.find(element => {
                return element.productId == productId; 
            })
            cartElement.count--;
            setShoppingCart([...newShoppingCart,cartElement]);   
        }else{
            setShoppingCart(newShoppingCart);
        }
    }

    return (
        <div className="row col-12">
            <div className="col-6 text-left">{productName}</div>
             <div className="col-4"><p>{count} * {productPrice}</p></div>
            <p className="col-1 cancel-item" onClick={removeItem}>X</p>
        </div>
    )
}
