import "./ProductCard.css";
import { useRef } from "react";

function ProductCard({ title, price }) {
    let priceRef = useRef();

    function togglePrice() {
        let currentState = priceRef.current.style.display === "none";
        priceRef.current.style.display = currentState ? "block" : "none";
    }

    return (
        <div className="product-card">
            <h2 onClick={togglePrice}>
                {title}
            </h2>
            <p ref={priceRef} style={{ display: "none" }}>
                {price.currency} {price.value}
            </p>
        </div>
    );
}

export default ProductCard;

/* 
    cart = {
        "id1": {
            id: "...",
            qty: "..."
        },
        "id2": {
            id: "...",
            qty: "..."
        },
        "id3": {
            id: "...",
            qty: "..."
        },
        ...
    }
 */
