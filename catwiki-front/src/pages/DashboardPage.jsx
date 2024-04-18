// DashboardPage.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth, useAdmin } from "../hooks/useAuth";
import { useSelector } from "react-redux";
import Navbar from "../components/NavBar"; 
import RatingBar from "../components/RatingBar";
import "../styles/Dashboard.css"
import axios  from "axios";
import useDeleteCatBreed from "../hooks/useAxiosDelete";

function DashboardPage() {
  const [catBreeds, setCatBreeds] = useState([]);
  const token = useSelector((state)=>state.token.accessToken);
  const isLoggedIn = useAuth();
  const isAdmin = useAdmin();
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
    // Fetch all cat breeds data
    const fetchCatBreeds = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/cat-breeds",{
            headers:{
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            }});
        const data = await response.data;
        setCatBreeds(data);
      } catch (error) {
        console.error("Error fetching cat breeds:", error);
      }
    };
    fetchCatBreeds();
  }, [catBreeds ]);
  const { error, isLoading, deleteCatBreed } = useDeleteCatBreed();

  const handleDelete = async (id) => {
    // Display confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this cat breed?");
    
    // If user confirms deletion
    if (confirmDelete) {
      try {
        // Call the deleteCatBreed function with the ID of the catbreed to be deleted
        await deleteCatBreed(id);
        console.log("Cat breed deleted successfully");
      } catch (error) {
        console.error("Error deleting cat breed:", error);
        // Handle error here, such as displaying an error message to the user
      }
    }
  };
    

  return (<>
      <Navbar />
    <div className="dashboard-container">
      <div className="main-content">
        <h2 className="mt-4">All Cat Breeds</h2>
        <div className="row">
          {catBreeds.map((breed) => (
            <div className="col-md-4 mb-4" key={breed.id}>
              <div className="card card-custom d-flex flex-column">
                {breed.image && Array.isArray(breed.image) && breed.image.length > 0 && breed.image[0].image && (
                  <img src={breed.image[0].image} className="cat-image" alt={breed.name} />
                )}
                <div className="details">
                  <h3 className="cat-name">{breed.name.trim()}</h3>
                  <p className="cat-desc-main" >{breed.description}</p>
                  {items.map((item, index) => (
                    <div className="row" key={index}>
                      <p className="cat-desc  bold">{item.name}</p>
                      <div className="col-md-6 ">
                        <RatingBar rating={4} total={5} />
                      </div>
                    </div>
                  ))}
                </div>
                {isAdmin && (
                    <div className="buttons mt-3 d-flex justify-content-center">
                      <button onClick={() => handleDelete(breed.id)} className=" mx-2 btn btn-danger">Delete</button>
                      <Link to={`/dashboard/update/${breed.id}`}>
                        <button className="btn btn-primary">Update</button>
                      </Link>
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          </>
  );
}

export default DashboardPage;
