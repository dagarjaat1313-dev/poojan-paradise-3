import "./Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h2>Poojan Paradise</h2>
          <p>
            Premium Pooja Items for Every Home.
            Pure. Authentic. Divine.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>
          <p>📍 India</p>
          <p>📞 +91 XXXXXXXXXX</p>
          <p>✉ support@poojanparadise.com</p>
        </div>

        <div className="footer-box">
          <h3>Follow Us</h3>

          <div className="socials">
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>

      </div>

      <div className="copyright">
        © 2026 Poojan Paradise. All Rights Reserved.
      </div>
    </footer>
  );
}