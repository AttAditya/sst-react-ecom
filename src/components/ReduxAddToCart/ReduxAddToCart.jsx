import "./ReduxAddToCart.css";
import { useDispatch, useSelector } from "react-redux";

function ReduxAddToCart({ product }) {
    let cart = useSelector(state => state.cart);
    let dispatch = useDispatch();

    function increase() {
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        });
    }

    function decrease() {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: product
        });
    }

    return (
        <div className="add-to-cart">
            <div className="product-controls">
                <button onClick={decrease}>
                    -
                </button>

                <span>
                    {cart[product.id] ? cart[product.id].qty : 0}
                </span>

                <button onClick={increase}>
                    +
                </button>
            </div>
        </div>
    );
}

export default ReduxAddToCart;