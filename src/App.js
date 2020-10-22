import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    // Wrap the app in the Router
    // <Something>
    <Router>
      <div className="App">
        <h1 className="text-center pt-5">My first React site!! It's will be a webshop, i hope :) </h1>
        <Switch>
          <Route path="/products">
            <ProductsPage></ProductsPage>
          </Route>
          <Route path="/404">
            <h1>404</h1>
          </Route>
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </div>
    </Router>
    //</Something>
  );
}

export default App;
