import { CART_ACTIONS } from "../types";

function addToCart(product) {
    return {
        type: CART_ACTIONS.ADD_TO_CART,
        payload: product
    };
}

function removeFromCart(product) {
    return {
        type: CART_ACTIONS.REMOVE_FROM_CART,
        payload: product
    }
}

export { addToCart, removeFromCart };

