import "./Navbar.css";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";

export default function Navbar() {
  const { cart } = useCart();
  const { search, setSearch } = useSearch();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <>
      <div className="topbar">
        🚚 Free Shipping on Orders Above ₹999
      </div>

      <nav className="navbar">
        <Link to="/" className="logo">
          <h2>Poojan Paradise</h2>
        </Link>

        <div className="search">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>
            <FaSearch />
          </button>
        </div>

        <div className="icons">
          <FaHeart />

          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />

            {totalItems > 0 && (
              <span className="cart-count">
                {totalItems}
              </span>
            )}
          </Link>

          <FaUser />
        </div>
      </nav>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
}