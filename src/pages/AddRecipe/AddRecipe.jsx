import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useDispatch } from "react-redux";
import { addRecipeAsync } from "../../feature/recipeSlice"; // Ensure correct import path
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    cuisine: "",
    imageUrl: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      ingredients: formData.ingredients.split(",").map((item) => item.trim()),
      instructions: formData.instructions.split(".").map((step) => step.trim()),
    };

    await dispatch(addRecipeAsync(formattedData));
    toast.success("Recipe Added");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="container py-4">
        <h1>Add Recipe</h1>
        <div>
          <form onSubmit={submitHandler}>
            <div className="py-2">
              <label htmlFor="title" className="fs-4">
                Title:
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                id="title"
                className="form-control py-2 w-50 fs-5"
              />
            </div>

            <div className="py-2">
              <label htmlFor="cuisine" className="fs-4">
                Cuisine Type:
              </label>
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                id="cuisine"
                className="form-control py-2 w-50 fs-5"
              />
            </div>

            <div className="py-2">
              <label htmlFor="imageUrl" className="fs-4">
                Image Link:
              </label>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                id="imageUrl"
                className="form-control py-2 w-50 fs-5"
              />
            </div>

            <div className="py-2">
              <label htmlFor="ingredients" className="fs-4">
                Ingredients:
              </label>
              <textarea
                name="ingredients"
                id="ingredients"
                rows="3"
                cols="4"
                value={formData.ingredients}
                onChange={handleChange}
                className="form-control w-50 py-2 fs-5"
              ></textarea>
            </div>

            <div className="py-2">
              <label htmlFor="instructions" className="fs-4">
                Instructions:
              </label>
              <textarea
                name="instructions"
                id="instructions"
                rows="3"
                cols="4"
                value={formData.instructions}
                onChange={handleChange}
                className="form-control w-50 py-2 fs-5"
              ></textarea>
            </div>

            <div>
              <button type="submit" className="btn btn-primary py-2 mt-4 fs-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
