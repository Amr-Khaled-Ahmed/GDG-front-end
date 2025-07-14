import React from "react";
import { Link } from "react-router-dom";

// Navbar component: shows brand, search, user greeting, and logout
const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      {/* Brand/Logo */}
      <Link to="/" className="nav-brand">
        <h2 style={{ margin: 0 }}>ShopEase</h2>
      </Link>
      {/* User actions: only show if logged in */}
      {user && (
        <div className="nav-actions">
          <Link to="/search">
            <button className="btn btn-outline">🔍 Search</button>
          </Link>
          <span style={{ fontWeight: 500 }}>Welcome, {user.name}</span>
          <button onClick={onLogout} className="btn btn-primary">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
