import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "./Recipe.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipeAsync, fetchAllRecipes } from "../../feature/recipeSlice";
import { Link } from "react-router-dom";

const Recipes = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { recipes } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, [dispatch]);

  // Filterering recipes based on search input
  const filteredRecipes = recipes?.recipe?.filter((reci) =>
    reci.title.toLowerCase().includes(search.toLowerCase())
  );

  const deleteRecipeHandler = (recipeId) => {
    dispatch(deleteRecipeAsync(recipeId)).then(() => {
      dispatch(fetchAllRecipes());
    });
  };

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <div className="py-2">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control py-2 my-2"
            style={{ width: "50%" }}
            placeholder="Search by recipe name..."
          />
        </div>
        <div className="py-2">
          <h1>All Recipes:</h1>
        </div>
        {/* Cards section */}
        <div className="row g-4">
          {filteredRecipes?.map((reci) => (
            <div key={reci._id} className="col-md-3">
              <div className="card h-100">
                <img
                  src={reci.imageUrl}
                  alt={reci.title}
                  style={{ height: "300px", objectFit: "cover" }}
                  className="img-fluid card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <h2>{reci.title}</h2>
                  <p>
                    <strong>Cuisine Type: </strong>
                    {reci.cuisine}
                  </p>
                  <p>
                    <strong>Ingredients: </strong>
                    <Link to={`/recipe/${reci._id}`} className="fw-bold">
                      See Recipe >
                    </Link>
                  </p>
                  <p>
                    <strong>Instructions: </strong>
                    <Link to={`/recipe/${reci._id}`} className="fw-bold">
                      See Recipe >
                    </Link>
                  </p>
                  <button
                    className="btn btn-danger p-2 deleteBtn"
                    style={{ padding: "0.5rem 1rem" }}
                    onClick={() => deleteRecipeHandler(reci._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recipes;
