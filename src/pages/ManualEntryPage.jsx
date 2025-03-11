import React, { useState } from "react";
import "../styles/ManualEntryPage.css";
import { useNavigate } from "react-router-dom";

const ManualEntryPage = () => {
    const navigate = useNavigate();

    // Form state
    const [product, setProduct] = useState({
        name: "",
        weight: "",
        price: "",
        barcode: "",
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSaveToDatabase = () => {
        alert("Product saved to the database!");
        setProduct({ name: "", weight: "", price: "", barcode: "" }); // Clear form
    };

    const handleSaveToMyProducts = () => {
        alert("Product saved to My Products!");
        setProduct({ name: "", weight: "", price: "", barcode: "" }); // Clear form
    };

    return (
        <div className="manual-entry-page">
            <h1>Manual Entry</h1>

            {/* Product Input Fields */}
            <div className="input-container">
                <label>Product Name</label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Enter product name"
                />

                <label>Product Weight</label>
                <input
                    type="text"
                    name="weight"
                    value={product.weight}
                    onChange={handleChange}
                    placeholder="Enter product weight"
                />

                <label>Price per Piece</label>
                <input
                    type="text"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Enter price per piece"
                />

                <label>Barcode</label>
                <input
                    type="text"
                    name="barcode"
                    value={product.barcode}
                    onChange={handleChange}
                    placeholder="Enter barcode"
                />
            </div>

            {/* Buttons */}
            <div className="button-container">
                <button className="save-button" onClick={handleSaveToDatabase}>Save to database</button>
                <button className="save-button" onClick={handleSaveToMyProducts}>Save to My Products</button>
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

export default ManualEntryPage;
