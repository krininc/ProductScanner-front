import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../index.css"; // Import global CSS

const HomePage = () => {
    const navigate = useNavigate(); // Initialize navigation

    const openCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                alert("Camera access granted");
            })
            .catch((error) => {
                alert("Camera access denied: " + error.message);
            });
    };

    return (
        <div className="container">
            {/* Blurred Background Overlay */}
            <div className="overlay"></div>

            {/* Content that should be in front */}
            <div className="content">
                {/* Scan Product Title */}
                <h1>Scan Product</h1>

                {/* Clickable Scan Box */}
                <div className="scan-box" onClick={openCamera} style={{ cursor: "pointer", width: "90%", maxWidth: "500px", height: "250px" }}>
                    <p style={{ textAlign: "center", marginTop: "100px", color: "white" }}>Click to Open Camera</p>
                </div>

                {/* Ensure button is above the blur */}
                <div className="button-container">
                    <button className="button" onClick={() => navigate("/manual-entry")}>Manual Entry</button>
                </div>
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

export default HomePage;
