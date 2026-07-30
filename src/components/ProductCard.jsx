import "./ProductCard.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      <span className="badge">Best Seller</span>

      <button className="wishlist">
        <FaHeart />
      </button>

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p className="price">₹{product.price}</p>

      <button className="cart-btn">
        <FaShoppingCart /> Add to Cart
      </button>

    </div>
  );
}