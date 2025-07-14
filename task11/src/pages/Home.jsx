import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Sample product data for initial seeding
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 59.99,
    description: "High-quality wireless headphones with noise cancellation.",
    thumbnail: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
    isNew: true
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 129.99,
    description: "Track your fitness and notifications with this smart watch.",
    thumbnail: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80",
    discount: 10
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    price: 39.99,
    description: "Portable Bluetooth speaker with deep bass.",
    thumbnail: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    title: "E-reader",
    price: 89.99,
    description: "Read your favorite books on this lightweight e-reader.",
    thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
  }
];

// Card for each product
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product.isNew && <span className="product-badge">New</span>}
      {product.discount && <span className="product-badge discount">-{product.discount}%</span>}
      <div className="product-image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            filter: isHovered ? 'brightness(1.05)' : 'brightness(1)'
          }}
        />
        <div className="quick-view" style={{ opacity: isHovered ? 1 : 0 }}>
          Quick View
        </div>
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-price">
          ${product.price.toFixed(2)}
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <button
          className="btn btn-primary btn-sm"
          onClick={(e) => {
            e.preventDefault();
            // Add to cart logic (not implemented)
          }}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

// Home page: shows product grid
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (!stored) {
      localStorage.setItem("products", JSON.stringify(SAMPLE_PRODUCTS));
      setProducts(SAMPLE_PRODUCTS);
    } else {
      setProducts(JSON.parse(stored));
    }
  }, []);
  return (
    <div className="grid-responsive">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
