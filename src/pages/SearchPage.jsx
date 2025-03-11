import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchPage.css";
import { FaSearch } from "react-icons/fa";

const categories = [
    { name: "Fruits", image: "/fruits.jpg" },
    { name: "Vegetables", image: "/vegetables.png" },
    { name: "Meat", image: "/meat.png" },
    { name: "Drinks", image: "/drinks.jpg" },
    { name: "Bread", image: "/bread.JPG" },
    { name: "Dairy", image: "/dairy.jpg" },
];

const SearchPage = () => {
    const navigate = useNavigate();

    return (
        <div className="search-page">
            {/* Search Bar */}
            <div className="search-bar" onClick={() => navigate("/search-input")}>
                <input type="text" placeholder="Search products..." readOnly />
                <button className="search-icon">
                    <FaSearch />
                </button>
            </div>

            {/* Category Grid */}
            <div className="category-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <img src={category.image} alt={category.name} />
                        <div className="category-label">{category.name}</div>
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

export default SearchPage;
