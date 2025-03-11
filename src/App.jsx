import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SearchInputPage from "./pages/SearchInputPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SavedProductsPage from "./pages/SavedProductsPage";
import ManualEntryPage from "./pages/ManualEntryPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search-input" element={<SearchInputPage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/saved-products" element={<SavedProductsPage />} />
        <Route path="/manual-entry" element={<ManualEntryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
