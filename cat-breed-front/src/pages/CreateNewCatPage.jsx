// CreateCatBreedPage.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { validateInputs } from "../helpers/ValidationInputs";

function CreateNewCatPage() {
  const token = useSelector((state) => state.token.accessToken);
  const [catBreed, setCatBreed] = useState({
    id:'testID2',
    name: "test",
    description: "tttttt",
    temperament: "akdhsld",
    origin: "sjdhaskdj",
    life_span: "asdlkjasdk",
    adaptability: 1,
    affection_level: 1,
    child_friendly: 1,
    grooming: 1,
    intelligence: 1,
    health_issues: 1,
    social_needs: 1,
    stranger_friendly: 1,
    image:null
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatBreed({ ...catBreed, [name]: value });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setCatBreed({ ...catBreed, image :file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateInputs({setErrors,catBreed})) {
      try {
        const formData = new FormData();
        Object.keys(catBreed).forEach((key) => {
          formData.append(key, catBreed[key]);
        });
        console.log(catBreed);
        const response = await axios.post(
          "http://localhost:8000/api/cat-breeds",

          catBreed,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Cat breed created successfully:", response.data);
        window.alert("Cat breed created successfully!");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error creating cat breed:", error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Cat Breed</h2>
      <form onSubmit={handleSubmit} action="/upload" method="POST" enctype="multipart/form-data">
      <div className="mb-3">
          <label htmlFor="id" className="form-label">Id:</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={catBreed.id}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={catBreed.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={catBreed.description}
            onChange={handleChange}
            required
          />
          {errors.description && <div className="text-danger">{errors.description}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="temperament" className="form-label">Temperament:</label>
          <textarea
            className="form-control"
            id="temperament"
            name="temperament"
            value={catBreed.temperament}
            onChange={handleChange}
            required
          />
          {errors.temperament && <div className="text-danger">{errors.temperament}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="origin" className="form-label">Origin:</label>
          <textarea
            className="form-control"
            id="origin"
            name="origin"
            value={catBreed.origin}
            onChange={handleChange}
            required
          />
          {errors.origin && <div className="text-danger">{errors.origin}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="life_span" className="form-label">Life Span:</label>
          <textarea
            className="form-control"
            id="lif_span"
            name="life_span"
            value={catBreed.life_span}
            onChange={handleChange}
            required
          />
          {errors.life_span && <div className="text-danger">{errors.life_span}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="adaptability" className="form-label">Adaptability:</label>
          <input
            type="number"
            className="form-control"
            id="adaptability"
            name="adaptability"
            value={catBreed.adaptability}
            onChange={handleChange}
            required
          />
          {errors.adaptability && <div className="text-danger">{errors.adaptability}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="affection_level" className="form-label">Affection Level:</label>
          <input
            type="number"
            className="form-control"
            id="affection_level"
            name="affection_level"
            value={catBreed.affection_level}
            onChange={handleChange}
            required
          />
          {errors.affection_level && <div className="text-danger">{errors.affection_level}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="child_friendly" className="form-label">Child Friendly:</label>
          <input
            type="number"
            className="form-control"
            id="child_friendly"
            name="child_friendly"
            value={catBreed.child_friendly}
            onChange={handleChange}
            required
          />
          {errors.child_friendly && <div className="text-danger">{errors.child_friendly}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="grooming" className="form-label">Grooming:</label>
          <input
            type="number"
            className="form-control"
            id="grooming"
            name="grooming"
            value={catBreed.grooming}
            onChange={handleChange}
            required
          />
          {errors.grooming && <div className="text-danger">{errors.grooming}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="intelligence" className="form-label">Intelligence:</label>
          <input
            type="number"
            className="form-control"
            id="intelligence"
            name="intelligence"
            value={catBreed.intelligence}
            onChange={handleChange}
            required
          />
          {errors.intelligence && <div className="text-danger">{errors.intelligence}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="health_issues" className="form-label">Health Issues:</label>
          <input
            type="number"
            className="form-control"
            id="health_issues"
            name="health_issues"
            value={catBreed.health_issues}
            onChange={handleChange}
            required
          />
          {errors.health_issues && <div className="text-danger">{errors.health_issues}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="social_needs" className="form-label">Social Needs:</label>
          <input
            type="number"
            className="form-control"
            id="social_needs"
            name="social_needs"
            value={catBreed.social_needs}
            onChange={handleChange}
            required
          />
          {errors.social_needs && <div className="text-danger">{errors.social_needs}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="stranger_friendly" className="form-label">Stranger Friendly:</label>
          <input
            type="number"
            className="form-control"
            id="stranger_friendly"
            name="stranger_friendly"
            value={catBreed.stranger_friendly}
            onChange={handleChange}
            required
          />
          {errors.stranger_friendly && <div className="text-danger">{errors.stranger_friendly}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image:</label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleFileChange}
            required
          />
          {errors.image && <div className="text-danger">{errors.image}</div>}
        </div>
        <button type="submit" className="btn btn-primary mb-3">Create</button>
      </form>
    </div>
  );
}

export default CreateNewCatPage;
