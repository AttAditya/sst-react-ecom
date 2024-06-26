import "./Products.css";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";

function Products() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        let URL = "https://run.mocky.io/v3/7fd3c225-0e41-4ba3-bc2d-a9f00f4ab1b8";

        fetch(URL).then((response) => response.json()).then((data) => {
            setProducts(data);
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