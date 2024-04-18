import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CatBreedCards({showModal,more}) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    

    useEffect(() => {
        const getCatBreeds = async () => {
          setLoading(true);
          const response = await fetch("http://localhost:8000/api/popular-cat-breeds-summary", {
            headers: {
              Accept: "application/json",
            },
          });
          const catBreedsData = await response.json();
          setData(catBreedsData);
          setLoading(false);
        };
    
        getCatBreeds();
      }, []);
  return (
    <div className="row cards-custom">
        {data.length>0&& data.map((cat) => (
            <div className="col-6 col-md-3" key={cat.id}>
              <Link to={`./cat-breed/${cat.id}`}>
                {cat.image && Array.isArray(cat.image) && cat.image.length > 0 && cat.image[0].image && (

                  <img src={cat.image[0].image} alt=""  className="card-image" />
                )
                
                }
              </Link>
              <p className={!showModal ? "most-text mt-2" : "most-text-hide"}>
                {cat.name}
              </p>
            </div>
          ))}
    </div>
  )
}

export default CatBreedCards
