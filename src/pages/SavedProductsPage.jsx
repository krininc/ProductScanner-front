import React, { useState } from "react";
import "../styles/SavedProductsPage.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Placeholder saved products
const savedProducts = [
    { name: "Coca - Cola", store: "Konzum", price: "2 EUR", image: "/colaimg.jpeg" },
    { name: "Nutella", store: "Konzum", price: "2 EUR", image: "/nutella.jpg" },
    { name: "Milka", store: "Konzum", price: "2 EUR", image: "/milka.jpg" },
    { name: "Dorina", store: "Konzum", price: "2 EUR", image: "/dorina.png" },
    { name: "Bananas", store: "Konzum", price: "2 EUR", image: "/banana.png" },
];

const SavedProductsPage = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    // Filter saved products based on search query
    const filteredProducts = savedProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="saved-products-page">
            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search my products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search-icon">
                    <FaSearch />
                </button>
            </div>

            {/* Saved Products List */}
            <div className="saved-products-list">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="saved-product-card">
                        <img src={product.image} alt={product.name} className="saved-product-image" />
                        <div className="saved-product-info">
                            <strong>{product.name}</strong>
                            <p>store: {product.store}</p>
                            <p>price: {product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Navigation */}
            <div className="navbar">
                <button onClick={() => navigate("/search")}>Search</button>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/saved-products")}>MyProducts</button>
            </div>
        </div>
    );
};

export default SavedProductsPage;
