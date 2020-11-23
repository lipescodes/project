import React from 'react';
import "./SerachBarComponent.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SerachBarComponent() {
    return (
        <div className="search-container">
            <input type="text" name="search" placeholder="Search..." className="search-input" />
            <a href="#" className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
            </a>
        </div>
    )
}
