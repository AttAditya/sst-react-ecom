import "./ReduxAddToCart.css";

import { useDispatch, useSelector } from "react-redux";
import { BsCartDash, BsCartPlus } from "react-icons/bs";
import { addToCart, removeFromCart } from "../../store";

function ReduxAddToCart({ product }) {
    let prodQty = useSelector(state => state.cart[product.id]?.qty ?? 0);
    let dispatch = useDispatch();

    function increase() {
        dispatch(addToCart(product));
    }

    function decrease() {
        dispatch(removeFromCart(product));
    }

    return (
        <div className="add-to-cart">
            {prodQty ? (
                <div className="product-controls">
                    <button onClick={decrease} className="control-button">
                        <BsCartDash />
                    </button>

                    <span>
                        {prodQty}
                    </span>

                    <button onClick={increase} className="control-button">
                        <BsCartPlus />
                    </button>
                </div>
            ) : (
                <div className="product-controls">
                    <button onClick={increase}>
                        <BsCartPlus />
                        Add to Cart
                    </button>
                </div>
            )}
        </div>
    );
}

export default ReduxAddToCart;