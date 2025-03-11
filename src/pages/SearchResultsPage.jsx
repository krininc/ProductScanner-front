import React, { useState } from "react";
import "../styles/SearchResultsPage.css";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// Sample Coca-Cola data from different stores
const cocaColaResults = [
    { store: "Lidl", price: "2 EUR", image: "/lidl.png" },
    { store: "Konzum", price: "2 EUR", image: "/konzum.png" },
    { store: "EuroSpin", price: "2 EUR", image: "/eurospin.png" },
    { store: "Spar", price: "2 EUR", image: "/spar.png" },
];

const SearchResultsPage = () => {
    const [query, setQuery] = useState("Coca - Cola");
    const navigate = useNavigate();

    return (
        <div className="search-results-page">
            {/* Search Bar */}
            <div className="search-bar">
                <button className="clear-search" onClick={() => navigate("/search-input")}>
                    <IoClose />
                </button>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                />
                <button className="search-icon">
                    <FaSearch />
                </button>
            </div>

            {/* Search Results - Only for Coca-Cola */}
            {query.toLowerCase() === "coca - cola" && (
                <div className="results-list">
                    {cocaColaResults.map((item, index) => (
                        <div key={index} className="result-card">
                            <img src={item.image} alt={item.store} className="store-image" />
                            <div className="result-info">
                                <strong>Coca - Cola</strong>
                                <p>store: {item.store}</p>
                                <p>price: {item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Bottom Navigation */}
            <div className="navbar">
                <button onClick={() => navigate("/search")}>Search</button>
                <button>MyProducts</button>
            </div>
        </div>
    );
};

export default SearchResultsPage;
