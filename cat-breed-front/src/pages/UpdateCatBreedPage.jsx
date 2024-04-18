// UpdateCatBreedPage.js
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import { validateInputs } from "../helpers/ValidationInputs";

function UpdateCatBreedPage() {
  const { id } = useParams();
  const token = useSelector((state) => state.token.accessToken);
  const [catBreed, setCatBreed] = useState({
    id: "",
    name: "",
    description: "",
    temperament: "",
    origin: "",
    life_span: "",
    adaptability: 0,
    affection_level: 0,
    child_friendly: 0,
    grooming: 0,
    intelligence: 0,
    health_issues: 0,
    social_needs: 0,
    stranger_friendly: 0,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCatBreed = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/cat-breeds/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        setCatBreed(data);
      } catch (error) {
        console.error("Error fetching cat breed:", error);
      }
    };
    fetchCatBreed();
  }, [id]);

  const   handleChange = (e) => {
    const { name, value } = e.target;
    setCatBreed({ ...catBreed, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateInputs({setErrors,catBreed})) {
      try {
        const response = await axios.put(
          `http://localhost:8000/api/cat-breeds/${id}`,
          catBreed,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Cat breed updated successfully:", response.data);
        window.alert("Cat breed updated successfully!");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error updating cat breed:", error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Cat Breed</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="id" className="form-label">Id:</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={catBreed.id}
            // onChange={handleChange}
            required
            readOnly
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
        <button type="submit" className="btn btn-primary mb-3">Update</button>
      </form>
    </div>
  );
}

export default UpdateCatBreedPage;
