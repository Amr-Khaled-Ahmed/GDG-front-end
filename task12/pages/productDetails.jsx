import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function ProductDetails() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    useEffect(() => {
        async function fetchProducts() {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        } finally {
            setLoading(false);
        }
        }
        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (products.length === 0) return <p>No products found</p>;
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <>
        <form>
            <input
            type="text"
            value={query}
            onChange={e => setSearchParams({ q: e.target.value })}
            placeholder="Search products..."
            />
        </form>
        <div>
            <h1>All Products</h1>
            {filteredProducts.length === 0 ? (
            <p>No matching products found</p>
            ) : (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {filteredProducts.map(product => (
                <li key={product.id} style={{ marginBottom: 20, border: '1px solid #ccc', padding: 10 }}>
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <img src={product.thumbnail} alt={product.title} width={150} />
                </li>
                ))}
            </ul>
            )}
        </div>
        </>
    );
}
