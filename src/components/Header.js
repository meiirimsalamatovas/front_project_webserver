
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const Header = ({ filterBySearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const updateSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    filterBySearch(searchQuery);
  };

  return (
    <header>
      <div className="header-content">
        <span className="logo">Jewelry Store</span>

        <form onSubmit={submitSearch}>
          <input
            type="text"
            placeholder="Search for jewelry..."
            value={searchQuery}
            onChange={updateSearchQuery}
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
