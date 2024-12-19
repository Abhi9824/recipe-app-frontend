import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "../feature/recipeSlice";

export default configureStore({
  reducer: {
    recipe: recipeSlice,
  },
});
