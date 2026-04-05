import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) {
    return <h2 className="empty-cart">Your cart is empty</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />

          <div className="cart-details">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h3 className="total">Total: ₹{totalAmount}</h3>

        {/* ⭐ IMPORTANT PART */}
        <button
          className="checkout-btn"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;