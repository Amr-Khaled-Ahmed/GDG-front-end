import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const search = searchParams.get("search") || "";

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      const allProducts = JSON.parse(stored);
      if (search) {
        const filtered = allProducts.filter((p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase())
        );
        setProducts(filtered);
      } else {
        setProducts([]);
      }
    }
  }, [search]);

  const handleChange = (e) => {
    setSearchParams({ search: e.target.value });
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h2 style={{ textAlign: "center" }}>Search Products</h2>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search..."
        style={{ width: "100%", marginBottom: 20 }}
      />
      <ul style={{ padding: 0 }}>
        {products.map((p) => (
          <li key={p.id} style={{ background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: 16, marginBottom: 18, display: "flex", alignItems: "center", gap: 16 }}>
            <img src={p.thumbnail} alt={p.title} style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 8 }} />
            <div style={{ flex: 1 }}>
              <Link to={`/products/${p.id}`} style={{ textDecoration: "none", color: "#2563eb", fontWeight: 600, fontSize: 18 }}>
                {p.title}
              </Link>
              <div style={{ color: "#555", fontSize: 14 }}>{p.description.slice(0, 50)}...</div>
            </div>
            <span style={{ fontWeight: 700, color: "#2563eb", fontSize: 18 }}>${p.price}</span>
          </li>
        ))}
      </ul>
      {search && products.length === 0 && (
        <div style={{ textAlign: "center", color: "#888", marginTop: 32 }}>No products found.</div>
      )}
    </div>
  );
};

export default Search;
