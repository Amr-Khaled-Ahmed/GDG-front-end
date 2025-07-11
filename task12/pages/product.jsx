import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.error('Failed to fetch product:', err))
        .finally(() => setLoading(false));
    }, [id]);
    if (loading) return <p>Loading...</p>;
    if (!product) return <p>No product found</p>;
    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} width={200} />
        </div>
    );
}
