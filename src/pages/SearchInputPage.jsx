import React, { useState } from "react";
import "../styles/SearchInputPage.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const suggestions = ["Coca-Cola", "Cedevita", "Pepsi", "Fanta", "Sprite", "Red Bull"];

const SearchInputPage = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        if (query.toLowerCase().trim() === "coca-cola") {
            navigate("/search-results");
        }
    };

    return (
        <div className="search-input-page">
            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleInputChange}
                    autoFocus
                />
                <button className="search-icon" onClick={handleSearch}>
                    <FaSearch />
                </button>
            </div>

            {/* Suggested Products */}
            <div className="suggestions-container">
                {suggestions
                    .filter((s) => s.toLowerCase().includes(query.toLowerCase()))
                    .map((suggestion, index) => (
                        <div key={index} className="suggestion-tag" onClick={() => {
                            setQuery(suggestion);
                            if (suggestion === "Coca-Cola") {
                                navigate("/search-results");
                            }
                        }}>
                            <span>+ {suggestion}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SearchInputPage;
