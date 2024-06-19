import logo from './assets/logo.svg'
import './App.css';

import {
    WindowDetail,
    Effect,
    SearchBar,
    Products
} from "./components";

import { useState } from 'react';

function App() {
    let [qty, setQty] = useState(0);

    function increment() {
        setQty(qty + 1);
    }

    function decrement() {
        setQty(qty - 1);
    }
    
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <WindowDetail />
            <Effect />
            <SearchBar />
            <Products />
        </div>
    );
}

export default App;
