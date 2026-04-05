import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa"; // ⭐ cart icon
import "./Navbar.css";

function Navbar() {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="navbar">
      <h2>E-Shop</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li className="cart-icon">
          <Link to="/cart">
            <FaShoppingCart /> {/* icon */}
            <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;