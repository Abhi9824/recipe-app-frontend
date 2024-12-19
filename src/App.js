import "./App.css";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import Recipes from "./pages/Recipes/Recipes";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/recipe/add" element={<AddRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
