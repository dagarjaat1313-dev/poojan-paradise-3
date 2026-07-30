import "./Navbar.css";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="topbar">
        🚚 Free Shipping on Orders Above ₹999
      </div>

      <nav className="navbar">
        <div className="logo">
          <h2>Poojan Paradise</h2>
        </div>

        <div className="search">
          <input type="text" placeholder="Search products..." />
          <button>
            <FaSearch />
          </button>
        </div>

        <div className="icons">
          <FaHeart />
          <FaShoppingCart />
          <FaUser />
        </div>
      </nav>

      <div className="menu">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Categories</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
}