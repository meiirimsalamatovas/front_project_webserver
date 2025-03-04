import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <span className="logo">Jewelry Store</span>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
        </ul>
        <Link to="/cart">
          <GiShoppingCart className="cart-btn" />
        </Link>
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
