import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <nav style={{ marginBottom: 20 }}>
                <Link to="/hello" style={{ marginRight: 10 }}>Home</Link>
                <Link to="/about" style={{ marginRight: 10 }}>About</Link>
                <Link to="/private" style={{ marginRight: 10 }}>Private</Link>
                <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
                <Link to = "/products" style={{ marginRight: 10 }}> Products</Link>
            </nav>

            <Outlet />
        </div>
    );
}
