
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const Header = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <header>
      <div className="header-content">
        <span className="logo">Jewelry Store</span>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for jewelry..."
            value={searchQuery}
            onChange={handleChange}
            className="search-input"
          />
          <button type="submit">Search</button>
        </form>

        <ul className="nav">
          <li>
            <Link to="/" title="This is the main page">
              all jewelry / home page
            </Link>
          </li>
        </ul>

        <Link to="/cart" title="Basket for storing goods">
          <GiShoppingCart className="cart-btn" />
        </Link>
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
