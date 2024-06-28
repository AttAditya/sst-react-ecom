import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer } from "./cart";
import { filterReducer } from "./filter";
import { dataReducer } from "./data";
import { thunk } from "redux-thunk";

const store = createStore(combineReducers({
    data: dataReducer,
    cart: cartReducer,
    filter: filterReducer
}), applyMiddleware(thunk));

export default store;

