import React from "react";
import "../index.css"; // Import global CSS

const HomePage = () => {
    const openCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                // Open the camera in a new video element or handle it as needed
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
                    <button className="button">Manual Entry</button>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="navbar">
                <button>Search</button>
                <button>MyProducts</button>
            </div>
        </div>
    );
};

export default HomePage;
