
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h3>{product.name}</h3>

      <p className="price">
        ₹{product.price}
      </p>

      <div className="product-actions">

        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >
          <FaShoppingCart />
          Add Cart
        </button>

        <button
          className={`wishlist-btn ${
            isWishlisted ? "active" : ""
          }`}
          onClick={() => toggleWishlist(product)}
        >
          <FaHeart />
        </button>

      </div>

    </div>
  );
}