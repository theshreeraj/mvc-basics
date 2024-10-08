import React, { useEffect, useState } from 'react';

const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8000/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <h2>{product.productName}</h2>
                        <p>{product.productDescription}</p>
                        <p>Price: ${product.productPrice}</p>
                        <p>Category: {product.productCategory}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GetProducts;
