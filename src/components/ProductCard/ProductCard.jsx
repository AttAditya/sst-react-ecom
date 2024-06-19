import AddToCart from "../AddToCart/AddToCart";
import "./ProductCard.css";

function ProductCard({ productData, incrementProductQty, decrementProductQty}) {
    return (
        <div className="product-card">
            <div className="product-details">
                <h2>
                    {productData.title}
                </h2>

                <div className="product-image">
                    <img src={productData.images[0]} alt={productData.title} />
                </div>
            </div>

            <p>
                {productData.price.currency} {productData.price.value}
            </p>

            <AddToCart
                product={productData}
                incrementProductQty={incrementProductQty}
                decrementProductQty={decrementProductQty}
            />
        </div>
    );
}

export default ProductCard;