import React from 'react';
import "./ProductsListComponent.css";
import ProductElementComponent from "./ProductElementComponent";

export default function ProductsListComponent() {

    const products = [
        {
            productId: 'prod_001',
            productName: 'Bike RGB Wtf?', 
            productShortDescription: "This is an RGB led thing. Does nothing but seems like COOL",
            productImageUrl: "https://thegadgetflow.com/wp-content/uploads/2019/06/SmartHalo-2-Smart-Biking-Device-01.jpg",
            price: '11.99'
        },
        {
            productId: 'prod_002',
            productName: 'WWI mini Bag!', 
            productShortDescription: "Retro mini bag under your seat. Orginal tapir skin. Rearly and elegant gaget!",
            productImageUrl: "https://mk0travelawayrru2xew.kinstacdn.com/wp-content/uploads/2017/09/bicycle-saddle-bag.jpg",
            price: '99.99'
        },
        {
            productId: 'prod_003',
            productName: 'Drunk drive!', 
            productShortDescription: "Safe is not equalt the fun. Drink and go bike just for fun. But no drive car just bike :)",
            productImageUrl: "https://coresites-cdn-adm.imgix.net/twc/wp-content/uploads/2014/11/the-coolest-cool-bike-gadgets-cycling.jpg?fit=crop",
            price: '27.05'
        },
        {
            productId: 'prod_004',
            productName: 'Universal Tool', 
            productShortDescription: "Universal tool to fix your bike or grab someone else bike :D ",
            productImageUrl: "https://assets.hongkiat.com/uploads/gadgets-for-cyclists/Crankbrothers-M19-Multi-Tool.jpg",
            price: '9.99'
        },
        {
            productId: 'prod_005',
            productName: 'Banana Bag!', 
            productShortDescription: "Always keep safe your banana. ALWAYS!!!",
            productImageUrl: "https://cdn.shopify.com/s/files/1/0847/1950/articles/3_1024x1024_7cdb83bf-12bb-46fb-8dd0-a7a81e9e000d_1400x.jpg?v=1571145513",
            price: '13.13'
        },
        {
            productId: 'prod_006',
            productName: 'Bike handle maybe', 
            productShortDescription: "I have no idea what a fuck is this but seems like cool!",
            productImageUrl: "https://road.cc/sites/default/files/cropped/preview_500/images/10%20cycling%20gadgets/hammerhead.png",
            price: '74.11'
        },
    ]

    const items = [];

    for( const prod of products){
        items.push(
                <ProductElementComponent 
                    key={prod.productId} 
                    productId={prod.productId} 
                    productName={prod.productName} 
                    productShortDescription={prod.productShortDescription} 
                    productImageUrl={prod.productImageUrl}
                    productPrice={prod.price} 
                ></ProductElementComponent> 
        )
    }

    return (
        <div className="product-container pt-5 row">
            {items}
        </div>
    )
}
