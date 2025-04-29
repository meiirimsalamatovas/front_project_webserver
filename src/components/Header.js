import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";

const Header = ({ filterBySearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const user = useAuth();

  const updateSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    filterBySearch(searchQuery);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
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
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>

        <ul className="nav">
          <li>
            <Link to="/" title="This is the main page">
              Home
            </Link>
          </li>

          {user ? (
            <>
              <li className="user-email">👤 {user.email}</li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </li>
              <Link to="/cart" title="Basket for storing goods">
                <GiShoppingCart className="cart-btn" />
              </Link>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
