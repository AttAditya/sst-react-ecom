import "./Cart.css";

import { useSelector } from "react-redux";
import { ProductCard } from "../ProductCard";

function Cart() {
    let cartData = useSelector(state => state.cart.cart);

    return (
        <div className="cart">
            <h1>Cart</h1>

            <ul className="cart-list">
                {
                    Object.values(cartData).map(product => (
                        <li key={product.id} className="cart-item">
                            <ProductCard productData={product} />
                            {/* <p>
                                Name: {product.title}
                            </p>

                            <p>
                                Price: {product.price.currency} {product.price.value}
                            </p>

                            <p>
                                Quantity: {product.qty}
                            </p> */}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Cart;