import React from 'react';
import './NavigationMenu.css';
import {Link} from "react-router-dom";
import SearchBarComponent from "../SearchBarComponent/SerachBarComponent";
import CartComponent from "../CartComponent/CartComponent";

export default function NavigationMenu() {
    return (
           <div className="main pt-2">
               <CartComponent></CartComponent>
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
