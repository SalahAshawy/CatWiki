import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../App.css";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";
import CatBreedCards from "./CatBreedCards";

function Hero() {

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [noDrops, setNoDrops] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      setSuggestions([]);
      setNoDrops(true);
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:8000/api/cat-breeds-search?name=${value}`
      );
      const searchData = await response.json();
      if (response.status === 404) {
        setNoResults(true);
      } else {
        setNoDrops(false);
        setNoResults(false);
        setSuggestions(searchData);
      }
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="container custom-bg">
        <div className="row round-custom">
          <div className="col-md-6 mt-5 m-custom">
        
            <img  src={`${process.env.PUBLIC_URL}/assests/catWikiLogoWhite.svg`} className="logo-text d-none d-md-block"  alt="" />
         
            <img src={`${process.env.PUBLIC_URL}/assests/catWikiMobileLogo.svg`} width="100" height="30" className="logo-text mt-0 mb-2 d-md-none"  alt="" />
     
            <p className="hero-image-text-secondary">
              Get to know more about your <br />
              cat breed
            </p>
            <div className="d-flex form-inputs">
              <input
                className="form-control round-customl d-none d-md-block"
                type="text"
                placeholder="Enter your breed"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <input
                className="form-control round-customs  d-md-none"
                type="text"
                placeholder="search"
                onClick={toggleModal} 
              />
              <i className="fa fa-search"></i>
            </div>
            <div className="search-suggestions">
              {noResults && <p className="suggestion">No results found</p>}
              {!noResults &&
                suggestions.map((suggestion, index) => (
                  <Link
                    to={`cat-breed/${suggestion.id}`}
                    className="suggestion-link"
                  >
                    <div key={index} className="suggestion">
                      {suggestion.name}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-3 m-custom">
            <Link to={'./popular-cats'} className="suggestion-link" >
            <p className={noDrops ? "most-text " : "most-text-hide"}>
              Most Searched Breeds
            </p>
            </Link>
            <hr className={noDrops ? "line-most" : "line-most-hide"}></hr>
          </div>
        </div>
        <div className="row mt-3 custom-buttom">
          <div className="col-md-6 m-custom custom-font d-flex align-items-center">
            <h1 className="h1-custom">66+ Breeds For you to discover</h1>
          </div>
          <div className="col-md-3 d-flex align-items-center custom-ml justify-content-end">
            <Link className="suggestion-link" to={'./popular-cats'}>
            <span className="see-more">See More <span>&rarr;</span></span>
            </Link>
          </div>
        </div>
      
       <CatBreedCards   showModal={showModal}/>
      </div>
     
      {showModal && (
        <SearchModal
          searchTerm={searchTerm}
          noResults={noResults}
          handleInputChange={handleInputChange}
          suggestions={suggestions}
          onClose={toggleModal}
        />
      )}
    </>
  );
}

export default Hero;
