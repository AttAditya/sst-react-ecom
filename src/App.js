import logo from './assets/logo.svg'
import './App.css';

import {
    SearchBar,
    Products,
    Cart,
    Categories
} from "./components";

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                React ECOM Market
            </h1>
            <h2>
                Get cheap and fake products here! (I'll be rich!)
            </h2>

            <Cart />
            
            <SearchBar />
            <Categories />

            <Products />
        </div>
    );
}

export default App;
