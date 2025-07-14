import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      const products = JSON.parse(stored);
      const found = products.find((p) => String(p.id) === String(id));
      setProduct(found || null);
    }
  }, [id]);

  if (!product) return <div style={{ textAlign: "center", marginTop: 40 }}>Product not found</div>;

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", background: "#f9f9f9", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", padding: 28, textAlign: "center" }}>
      <img src={product.thumbnail} alt={product.title} style={{ width: "100%", borderRadius: 8, marginBottom: 18 }} />
      <h2 style={{ marginBottom: 8 }}>{product.title}</h2>
      <div style={{ fontWeight: 700, color: "#2563eb", fontSize: 20, marginBottom: 8 }}>${product.price}</div>
      <p style={{ color: "#444", fontSize: 16 }}>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
