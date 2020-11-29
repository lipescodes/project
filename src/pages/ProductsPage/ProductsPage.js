import React from 'react';
import "./ProductsPage.css";
import CategoriesList from "../../components/ProductsPageComponents/CategoriesComponent/CategoriesList";
import ProductsListComponent from "../../components/ProductsPageComponents/ProductsListComponent/ProductsListComponent";

const ProductsPage = (props) => {

    const { setShoppingCart, shoppingCart } = props;

    return  <div className="container-fluid row products-content">
               

                {/* Product category and filters */}
                <div className="col-3 categories">
                    <CategoriesList></CategoriesList>
                </div>
                <div className="col-9 justify-content-center">
                    <ProductsListComponent setShoppingCart={setShoppingCart} shoppingCart={shoppingCart}></ProductsListComponent>
                </div>
                
                {/* Product list */}
                            
                
            </div>
}

export default ProductsPage;