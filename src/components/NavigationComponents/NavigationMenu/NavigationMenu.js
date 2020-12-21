import React from 'react';
import './NavigationMenu.css';
import {Link} from "react-router-dom";
import SearchBarComponent from "../SearchBarComponent/SerachBarComponent";
import CartComponent from "../CartComponent/CartComponent";

export default function NavigationMenu(props) {

    const {shoppingCart, setShoppingCart, showList, setShowList} = props; 

    return (
           <div className="main pt-2">
                {shoppingCart.length > 0 && <CartComponent shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} showList={showList} setShowList={setShowList}></CartComponent> }
                <header className="justify-content-center text-center"> 
                    <input type="checkbox" name="" id=""></input>
                    <Link to="/">HOME</Link>
                    <Link to="/products">PRODUCTS</Link>
                    <Link to="/service">SERVICE</Link>
                    <Link to="/about">ABOUT</Link>
                </header>
                    <SearchBarComponent></SearchBarComponent>
               
           </div>
    )

}

{/* REDUX THE BEGINS 
// Action
const dispatch = useDispatch();

const emptyCart = () => {
    return {
        type:"EMPTY_CART"
    }
}

const addToCart = (cartElement) => {
    return {
    type: "ADD_SHOPPING_CART",
    payload: cartElement
    }
}

const removeFromCart = (cartElement) => {
    return {
        type: "REMOVE_FROM_CART",
        payload:cartElement,
    }
}
<>
<button onClick={()=>{dispatch(addToCart)}}>ADD</button>
<button onClick={()=>{dispatch(removeFromCart)}}>REMOVE</button>
</>

// Reducer

const initialShoppingCart = {
    
}

export default (state = initialShoppingCart, action) => {
    switch (action.type) {

    case "EMPTY_CART": {
        return initialShoppingCart;
    }

    case "ADD_SHOPPING_CART":{
        return { ...state, ...action.payload }
    }

    case "REMOVE_FROM_CART": {
        const newCart = state.filter(element=>element.id === action.payload.id);
        return newCart;
    }

    default:
        return state
    }
}

// Selector 

const selectCart = (state) => {return state};

const selectShoppingCart = useSelector(selectCart);
// selectShoppingCart = initialShoppingCart; */}