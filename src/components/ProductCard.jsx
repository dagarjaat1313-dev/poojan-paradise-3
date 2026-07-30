import "./ProductCard.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { ... } from "../context/WishlistContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <div className="product-card">

      <span className="badge">Best Seller</span>

      <button
        className={`wishlist ${isWishlisted ? "active" : ""}`}
        onClick={() => toggleWishlist(product)}
      >
        <FaHeart />
      </button>

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p className="price">₹{product.price}</p>

      <button
        className="cart-btn"
        onClick={() => addToCart(product)}
      >
        <FaShoppingCart />
        Add to Cart
      </button>

    </div>
  );
}