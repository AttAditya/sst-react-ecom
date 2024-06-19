import "./AddToCart.css";

function AddToCart({ product, incrementProductQty, decrementProductQty }) {
    return (
        <div className="product-controls">
            <button onClick={() => incrementProductQty(product)}>
                +
            </button>

            <button onClick={() => decrementProductQty(product)}>
                -
            </button>
        </div>
    );
}

export default AddToCart;