import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";

// const products = [
//     {
//         id: 1,
//         title: "Apple iPhone 14",
//         price: "Rs. 1,00,000"
//     },
//     {
//         id: 2,
//         title: "Apple iPhone 13",
//         price: "Rs. 70,000"
//     },
//     {
//         id: 3,
//         title: "Google Pixel 7",
//         price: "Rs. 50,000"
//     },
//     {
//         id: 4,
//         title: "Nokia 1100",
//         price: "Rs. 2,000"
//     },
//     {
//         id: 5,
//         title: "Samsung Galaxy S10",
//         price: "Rs. 1,00,000"
//     },
//     {
//         id: 6,
//         title: "Sony Xperia S10",
//         price: "Rs. 1,00,000"
//     }
// ];

function Products() {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        let URL = "https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products";
        fetch(URL).then((response) => response.json()).then((data) => {
            setProducts(data);
        });
    }, []);
    
    return (
        <div>
            <h1>
                Products
            </h1>

            <div className="container">
                {
                    products.map((product, index) => {
                        return <ProductCard title={product.title} price={product.price} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Products;