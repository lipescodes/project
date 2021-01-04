import React, {useState} from 'react';
import HomePage from "./pages/HomePage/HomePage";
//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductsPage from './pages/ProductsPage/ProductsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import SingleProductPage from './pages/ProductsPage/SingleProductPage/SingleProductPage';
import NavigationMenu from './components/NavigationComponents/NavigationMenu/NavigationMenu';
import CartPage from './pages/CartPage/CartPage';
import ReduxTest from './components/ReduxTest';
import ReduxHomework from './components/ReduxHomework';

function App() {

  const [shoppingCart,setShoppingCart] = useState([]);
  const [showList, setShowList] = useState(false);

  
  return (
    // Wrap the app in the Router
    // <Something>
    <Router>
      <div className="App">
        <NavigationMenu shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} showList={showList} setShowList={setShowList}></NavigationMenu>
        <Switch>
        <Route path="/products/:id">
            <SingleProductPage></SingleProductPage>
          </Route>
          <Route path="/products">
            <ProductsPage setShoppingCart={setShoppingCart} shoppingCart={shoppingCart}></ProductsPage> 
          </Route>
          <Route path="/cart">
            <CartPage shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} setShowList={setShowList} ></CartPage>
          </Route>
          <Route path="/service">
            <ServicesPage></ServicesPage>
          </Route>
          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
          <Route path="/redux-test">
            <ReduxTest></ReduxTest>
          </Route>
          <Route path="/redux-homework">
            <ReduxHomework></ReduxHomework>
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
