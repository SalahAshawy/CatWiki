import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingBar from "../components/RatingBar"; // Import the RatingBar component
import "../styles/catBreedDetails.css";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { CatBreedPageSkeleton } from "../components/Skeletons";

const CatBreedPage = () => {
  const { id } = useParams();
  const [catBreed, setCatBreed] = useState(null);
  const items = [
    { name: "Adaptability:", index: 1 },
    { name: "Affection level:", index: 2 },
    { name: "Child Friendly:", index: 3 },
    { name: "Grooming:", index: 4 },
    { name: "Intelligence:", index: 5 },
    { name: "Health issues:", index: 6 },
    { name: "Social needs:", index: 7 },
    { name: "Stranger friendly:", index: 8 },
  ];

  useEffect(() => {
    const fetchCatBreed = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/searched-cat/${id}`
        );
        const data = await response.json();
        setCatBreed(data);
      } catch (error) {
        console.error("Error fetching cat breed:", error);
      }
    };

    fetchCatBreed();
  }, [id]);

 

  return (
    <>
      <Logo className="logo" />
{!catBreed? <CatBreedPageSkeleton/>  :
      <div className="container custom">
        <div className="row">
          <div className="col-md-4">
            <img src={catBreed.image[0].image} className="cat-image" alt="" />
          </div>
          <div className="col-md-8">
            <h1 className="cat-name md-mt-0 mt-2">{catBreed.name}</h1>
            <p className="cat-desc mb-3">{catBreed.description}</p>
            <p className="cat-desc mb-3">
              <span className="details-main">Temperament: </span>
              {catBreed.temperament}
            </p>
            <p className="cat-desc mb-3">
              <span className="details-main">Origin: </span>
              {catBreed.origin}
            </p>
            <p className="cat-desc mb-3">
              <span className="details-main">Life Span: </span>
              {catBreed.life_span} years
            </p>
            {items.map((item, index) => (
              <div className="row" key={index}>
                <p className="cat-desc bold">{item.name}</p>

                <div className="col-md-6 ">
                  <RatingBar rating={4} total={5} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row other-images mt-4 ">
          <div className="row mb-3">
            <h1 className="cat-name">Other Photos </h1>
          </div>
          <div className="row mb-2 p-2">
          {catBreed.image.slice(0,8).map((image) => (
            <div className="col-md-3 col-6  mb-3">
               <img src={image.image} className="cat-other-image" />
             </div>
          ))
        }

        </div>
        </div>
      </div>
        }
      <Footer/>
    </>
  );
};

export default CatBreedPage;
