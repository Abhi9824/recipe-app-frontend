import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/baseUrl";

export const fetchAllRecipes = createAsyncThunk(
  "recipe/allRecipes",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/recipe/allrecipes`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const addRecipeAsync = createAsyncThunk(
  "recipe/addRecipe",
  async (recipeData) => {
    try {
      const response = await axios.post(`${BASE_URL}/recipe/add`, recipeData);
      if (response.status === 200) {
        const data = response.data;
        console.log("dataform", data);
        return data.recipe;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const deleteRecipeAsync = createAsyncThunk(
  "recipe/deleteRecipe",
  async (recipeId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/recipe/${recipeId}`);
      if (response.status === 200) {
        const data = response.data;
        return data.deleteRecipe;
      }
    } catch (error) {
      throw error;
    }
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(fetchAllRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addRecipeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addRecipeAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.recipes.recipe = [...state.recipes.recipe, action.payload];
      })
      .addCase(addRecipeAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteRecipeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteRecipeAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.recipes.recipe = state.recipes.recipe.filter(
          (recipe) => recipe._id !== action.payload
        );
      })
      .addCase(deleteRecipeAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;
