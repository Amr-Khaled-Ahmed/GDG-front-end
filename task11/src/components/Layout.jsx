import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// Layout component: wraps all pages, shows Navbar except on login
const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hideNavbar = location.pathname === "/login";
  const [user, setUser] = useState(null);

  // Update user info on route change
  useEffect(() => {
    const stored = localStorage.getItem("user");
    setUser(stored ? JSON.parse(stored) : null);
  }, [location]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      {/* Navbar (hidden on login) */}
      {!hideNavbar && <Navbar user={user} onLogout={handleLogout} />}
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
