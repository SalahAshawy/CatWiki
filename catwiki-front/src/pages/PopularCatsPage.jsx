import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Import the Footer component
import { PopularCatsPageSkeleton } from '../components/Skeletons';

function PopularCatsPage() {
  const [popularCats, setPopularCats] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const fetchPopularCats = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/popular-cat-breeds');
        if (response.ok) {
          const data = await response.json();
          setPopularCats(data);
          setLoading(false);
        } else {
          console.error('Failed to fetch popular cat breeds:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching popular cat breeds:', error);
        setLoading(true);
      }
    };

    fetchPopularCats();
  }, []);


  return (
    <>
      <Logo />
      <div className="container popular-container mb-5">
        <div className="row">
          <h1 className='top-text'>Top 10 most searched breeds</h1>
        </div>
        {loading ? (

          Array.from({ length: 10 }).map((_, index) => <PopularCatsPageSkeleton key={index} />)
        ) : (
 
          popularCats.map((cat, index) => (
            <Link to={`/cat-breed/${cat.id}`} className="suggestion-link">
            <div className="row" key={index}>
              <div className="row">
                <div className="col-md-3">
                  <img src={cat.image[0].image} className='popular-cat-image' alt="" />
                </div>
                <div className="col-md-8">
                  <div className="row mt-2">
                    <h2>{index + 1}. {cat.name}</h2>
                  </div>
                  <div className="row">
                    <p className='popular-cat-desc'>{cat.description}</p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          ))
        )}
      </div>
      <Footer /> 
    </>
  );
}

export default PopularCatsPage;
