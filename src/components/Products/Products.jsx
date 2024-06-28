import "./Products.css";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";

function Products() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        let URL = "https://run.mocky.io/v3/7fd3c225-0e41-4ba3-bc2d-a9f00f4ab1b8";

        fetch(URL).then((response) => response.json()).then((data) => {
            setProducts(data);
        }).catch((err) => {
            setProducts([
                {
                    "id": "1",
                    "title": "Wireless Bluetooth Headphones",
                    "price": {
                        "currency": "USD",
                        "value": 99.99,
                        "discount": 10
                    },
                    "description": "High-quality wireless Bluetooth headphones with noise-cancellation and long battery life.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.5,
                    "category": "Electronics",
                    "stock": 150
                },
                {
                    "id": "2",
                    "title": "Stainless Steel Water Bottle",
                    "price": {
                        "currency": "USD",
                        "value": 25.00,
                        "discount": 5
                    },
                    "description": "Eco-friendly stainless steel water bottle, 1 liter capacity with a leak-proof cap.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.8,
                    "category": "Home & Kitchen",
                    "stock": 300
                },
                {
                    "id": "3",
                    "title": "Smart Watch",
                    "price": {
                        "currency": "USD",
                        "value": 199.99,
                        "discount": 15
                    },
                    "description": "Feature-rich smart watch with heart rate monitor, GPS, and customizable watch faces.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.3,
                    "category": "Electronics",
                    "stock": 100
                },
                {
                    "id": "4",
                    "title": "Organic Cotton T-Shirt",
                    "price": {
                        "currency": "USD",
                        "value": 19.99,
                        "discount": 0
                    },
                    "description": "Soft and comfortable organic cotton t-shirt available in various sizes and colors.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.7,
                    "category": "Apparel",
                    "stock": 500
                },
                {
                    "id": "5",
                    "title": "Ceramic Coffee Mug",
                    "price": {
                        "currency": "USD",
                        "value": 12.99,
                        "discount": 2
                    },
                    "description": "Durable ceramic coffee mug, dishwasher and microwave safe with a 12-ounce capacity.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.6,
                    "category": "Home & Kitchen",
                    "stock": 250
                },
                {
                    "id": "6",
                    "title": "Gaming Mouse",
                    "price": {
                        "currency": "USD",
                        "value": 49.99,
                        "discount": 20
                    },
                    "description": "High precision gaming mouse with customizable buttons and RGB lighting.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.4,
                    "category": "Electronics",
                    "stock": 75
                },
                {
                    "id": "7",
                    "title": "Yoga Mat",
                    "price": {
                        "currency": "USD",
                        "value": 30.00,
                        "discount": 5
                    },
                    "description": "Non-slip yoga mat with extra cushioning for comfort during workouts.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.7,
                    "category": "Sports & Outdoors",
                    "stock": 200
                },
                {
                    "id": "8",
                    "title": "Electric Toothbrush",
                    "price": {
                        "currency": "USD",
                        "value": 39.99,
                        "discount": 10
                    },
                    "description": "Rechargeable electric toothbrush with multiple brushing modes and a travel case.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.6,
                    "category": "Health & Personal Care",
                    "stock": 120
                },
                {
                    "id": "9",
                    "title": "Running Shoes",
                    "price": {
                        "currency": "USD",
                        "value": 75.00,
                        "discount": 15
                    },
                    "description": "Lightweight running shoes with breathable mesh and cushioned sole for comfort.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.5,
                    "category": "Sports & Outdoors",
                    "stock": 180
                },
                {
                    "id": "10",
                    "title": "Laptop Backpack",
                    "price": {
                        "currency": "USD",
                        "value": 45.99,
                        "discount": 10
                    },
                    "description": "Water-resistant laptop backpack with multiple compartments and USB charging port.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.7,
                    "category": "Electronics",
                    "stock": 150
                },
                {
                    "id": "11",
                    "title": "Portable Bluetooth Speaker",
                    "price": {
                        "currency": "USD",
                        "value": 60.00,
                        "discount": 10
                    },
                    "description": "Compact portable Bluetooth speaker with deep bass and long battery life.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.6,
                    "category": "Electronics",
                    "stock": 200
                },
                {
                    "id": "12",
                    "title": "LED Desk Lamp",
                    "price": {
                        "currency": "USD",
                        "value": 35.00,
                        "discount": 5
                    },
                    "description": "Adjustable LED desk lamp with multiple brightness levels and USB charging port.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.5,
                    "category": "Home & Office",
                    "stock": 250
                },
                {
                    "id": "13",
                    "title": "Instant Pot Pressure Cooker",
                    "price": {
                        "currency": "USD",
                        "value": 89.99,
                        "discount": 15
                    },
                    "description": "Versatile 7-in-1 electric pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, and warmer.",
                    "images": [
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`,
                        `https://picsum.photos/id/${Math.floor(100 * Math.random())}/1280/720`
                    ],
                    "rating": 4.8,
                    "category": "Home & Kitchen",
                    "stock": 100
                }
            ]);
        });
    }, []);
    
    return (
        <div>
            <h1>
                Products
            </h1>

            <ul className="products-list">
                {
                    products.map((product, index) => (
                        <li key={index}>
                            <ProductCard
                                productData={product}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default React.memo(Products);