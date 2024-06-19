import logo from './assets/logo.svg'
import './App.css';

import {
    WindowDetail,
    Effect,
    SearchBar,
    Products
} from "./components";

import { useState } from 'react';
import { Cart } from './components/Cart';

function App() {
    let [cartData, setCartData] = useState({});

    function addProductToCart(productData) {
        cartData[productData.id] = productData;
        cartData[productData.id].qty = 1;

        setCartData({
            ...cartData
        });
    }

    function removeProductFromCart(productData) {
        let productId = productData.id;
        delete cartData[productId];

        setCartData({
            ...cartData
        });
    }

    function incrementProductQty(productData) {
        let productId = productData.id;

        if (!cartData[productId]) {
            addProductToCart(productData);
            return;
        }

        cartData[productId].qty++;
        setCartData({
            ...cartData
        });
    }

    function decrementProductQty(productData) {
        let productId = productData.id;

        if (!cartData[productId]) {
            return;
        }

        if (cartData[productId].qty === 1) {
            removeProductFromCart(productData);
            return;
        }

        cartData[productId].qty--;
        setCartData({
            ...cartData
        });
    }

    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />

            <WindowDetail />
            <Effect />

            <Cart cartData={cartData} />
            
            <SearchBar />
            <Products
                incrementProductQty={incrementProductQty}
                decrementProductQty={decrementProductQty}
            />
        </div>
    );
}

export default App;
