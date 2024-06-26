import { CART_ACTIONS } from "../types";

function cartReducer(state={ cart: {} }, action) {
    switch (action.type) {
        case CART_ACTIONS.ADD_TO_CART: {
            let cart = state.cart;

            let product = action.payload;
            let productId = product.id;
            let currentQty = 0;

            if (cart[productId]) {
                currentQty = cart[productId].qty;
            }

            currentQty++;
            product.qty = currentQty;

            let updatedEntry = {}
            updatedEntry[productId] = product;

            cart = {
                ...cart,
                ...updatedEntry
            }

            return {
                ...state,
                cart: cart
            };
        }
        case CART_ACTIONS.REMOVE_FROM_CART: {
            let cart = state.cart;

            let product = action.payload;
            let productId = product.id;
            let currentQty = 0;

            if (!cart[productId]) {
                return state;
            }

            currentQty = cart[productId].qty;
            currentQty--;
            product.qty = currentQty;

            let updatedEntry = {}
            updatedEntry[productId] = product;

            cart = {
                ...cart,
                ...updatedEntry
            }

            if (currentQty === 0) {
                delete cart[productId];
            }

            return {
                ...state,
                cart: cart
            };
        }
        default: return state;
    }
}

export { cartReducer };

