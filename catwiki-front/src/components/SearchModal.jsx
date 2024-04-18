import React from "react";
import { Link } from "react-router-dom";

function SearchModal({ searchTerm, suggestions, onClose, handleInputChange, noResults }) {
  return (
    <div className="search-modal-overlay">
      <div className="search-modal">
        <div className="modal-content">
          <div className="row text-end">
            <span className="close" onClick={onClose}>&times;</span>
          </div>
          <input
            className="form-control round-customs custom-modal "
            type="text"
            value={searchTerm}
            placeholder="Search"
            onChange={handleInputChange}
            autoFocus
          />
          <div className="search-suggestions-s">
            {noResults && <p className="suggestion">No results found</p>}
            {!noResults && suggestions.map((suggestion, index) => (
             <Link to={`cat-breed/${suggestion.id}`} className="suggestion-link">
             <div key={index} className="suggestion">
             {suggestion.name}
             </div>
             </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
