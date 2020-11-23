import React from 'react';
import "./InprogressPageComponent.css";

export default function InprogressPageComponent(props) {


    return (
        <div className="jumbotron in-proggres-jum">
            <div className="container">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">{props.description}</p>
            </div>
        </div>
    )
}
