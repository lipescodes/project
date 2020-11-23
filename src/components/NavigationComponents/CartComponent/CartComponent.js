import React from 'react';
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartComponent.css";

export default function CartComponent() {
    return (
        <div className="cart-conatiner">
            <a href="#"><FontAwesomeIcon icon={faCartArrowDown} size={'2x'}/></a><span id="cart-badge"></span>
        </div>
    )
}
