// import React

import React from "react";
import {Link} from "react-router-dom";

// make a function component

function HomePage () {
    return <div>
        <h1>Homepage is this page! :D</h1>
        <Link to="/products">
            <button>Products</button>
        </Link>
     
        </div>
}

// export function component
export default HomePage;