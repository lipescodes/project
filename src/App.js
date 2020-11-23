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
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import SingleProductPage from './pages/ProductsPage/SingleProductPage/SingleProductPage';
import NavigationMenu from './components/NavigationComponents/NavigationMenu/NavigationMenu';

function App() {
  return (
    // Wrap the app in the Router
    // <Something>
    <Router>
      <div className="App">
        <NavigationMenu></NavigationMenu>
        <Switch>
          <Route path="/products">
            <ProductsPage></ProductsPage>
          </Route>
          <Route path="/products/:id">
            <SingleProductPage></SingleProductPage>
          </Route>
          <Route path="/service">
            <ServicesPage></ServicesPage>
          </Route>
          <Route path="/about">
            <AboutPage></AboutPage>
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
