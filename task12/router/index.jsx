import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import ProtectedRouter from '../compnents/ProtectedRouter';
import Layout from '../pages/Layout';
import ProductDetails from '../pages/productDetails';
import Product from '../pages/product';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/home" element={<h1>Home</h1>} />
                    <Route path="about" element={<h1>About</h1>} />
                    <Route
                        path="private"
                        element={
                            <ProtectedRouter
                                RedirectPath="/login"
                                isAllowed={() => Boolean(localStorage.getItem("Username"))}
                            >
                                <h1>Private</h1>
                            </ProtectedRouter>
                        }
                    />
                    <Route path="/products" element={<ProductDetails />} />
                    <Route path="/products/:id" element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
