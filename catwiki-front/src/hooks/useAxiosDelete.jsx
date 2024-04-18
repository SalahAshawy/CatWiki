import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAccessToken, clearUserInfo, setLoginState } from "../redux/action";
import { useNavigate } from "react-router-dom";

const useDeleteCatBreed = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state) => state.token.accessToken);
  const navigate = useNavigate();

  const deleteCatBreed = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/cat-breeds/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      console.log(response.data); // Log the response for debugging
      // Handle success
      setIsLoading(false);
    } catch (error) {
      // Handle error
      setError(error.message);
      setIsLoading(false);
    }
  };

  return { error, isLoading, deleteCatBreed };
};

export default useDeleteCatBreed;
