import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer } from "./cart";
import { filterReducer } from "./filter";
import { thunk } from "redux-thunk";

const store = createStore(combineReducers({
    cart: cartReducer,
    filter: filterReducer
}), applyMiddleware(thunk));

export default store;

