// import React

import React,{useState} from "react";
import {Link} from "react-router-dom";
import InprogressPageComponent from "../../components/InprogressPageComponent/InprogressPageComponent";
import "./HomePage.css";

// make a function component

function HomePage () {

    return <div>
                <InprogressPageComponent
                    title="Welcome"
                    description="Welcom to the welcome page"
                ></InprogressPageComponent> 
                    
            </div>


  


  /*   return <div>
                <h1 className="pb-3">Homepage is this page! :D</h1>
                    
                <br/>
                
                <HomePageHelper/>

                <Link to="/products">
                        <button className="btn def-button goto_button"> {`>> Products`}</button>
                </Link>
            </div> */
       
}

// export function component
export default HomePage;