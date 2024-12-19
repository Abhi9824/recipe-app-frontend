import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const { recipe } = useSelector((state) => state.recipe.recipes);
  const recipeData = recipe?.find((reci) => reci._id === recipeId);

  return (
    <div>
      <Navbar />
      <div className="container py-4">
        <h1>{recipeData.title}</h1>
        <div className="col-md-12 py-3">
          <div className="card mb-3">
            <div className="d-flex">
              <div className="col-md-5">
                <img
                  src={recipeData.imageUrl}
                  alt={recipeData.title}
                  className="card-img-top"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="card-body mx-2 py-3 col-md-7 mt-2">
                <h2>Cuisine: {recipeData.cuisine}</h2>
                <h3>Ingredients:</h3>
                <p className="fs-5 fw-normal">
                  {recipeData.ingredients.join(", ")}
                </p>

                <h3>Ingredients:</h3>
                <ol className="fw-normal">
                  {recipeData.instructions.map((inst, index) => (
                    <li className="fs-5 fw-normal" key={index}>
                      {inst}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
