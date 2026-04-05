import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products"); // go to Products page
  };

  return (
    <div className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Shop Latest Products</h1>
          <p>Best Deals Available</p>
          <button onClick={handleShopNow}>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;