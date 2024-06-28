import "./Products.css";
import React, { useEffect } from "react";
import { ProductCard } from "../ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../store";

function Products() {
    let products = useSelector(state => state.data.products);
    let filters = useSelector(state => state.filter);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);

    function isValidProduct(product) {
        if (!filters?.categories?.length) {
            return true;
        }

        return filters.categories.includes(product.category);
    }
    
    return (
        <div>
            <h1>
                Products
            </h1>

            <ul className="products-list">
                {
                    products.map((product, index) => (isValidProduct(product) ? (
                        <li key={index}>
                            <ProductCard
                                productData={product}
                            />
                        </li>
                    ) : ""))
                }
            </ul>
        </div>
    )
}

export default React.memo(Products);