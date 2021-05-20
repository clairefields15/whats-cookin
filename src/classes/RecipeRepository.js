import Recipe from './Recipe';
import Ingredient from './Ingredient';
import { ingredientsData } from "../data/ingredients";
import { recipeData } from "../data/recipes";
import { recipeTestData } from '../data/recipe-test-data'
class RecipeRepository {
  constructor(recipes, ingredients) {
    this.recipesData = recipes;
    this.ingredientsData = ingredients;
  }

  filterByTag(tags) {
    const filteredRecipes = tags.reduce((acc, tag) => {
      this.recipesData.forEach(recipe => {
        if(recipe.tags.includes(tag) && !acc.includes(recipe)) {
          acc.push(recipe)
        }
      });
      return acc
    }, [])
    return filteredRecipes;
  }

  filterByIngredients(ingredients) {
    const filteredRecipes = ingredients.reduce((acc, ingredient) => {
      this.recipesData.forEach(recipe => {
        const recipeIngredients = recipe.getIngredientNames();
        if(recipeIngredients.includes(ingredient) && !acc.includes(ingredient)) {
          acc.push(recipe)
        }
      });
      return acc
    }, []);
    return filteredRecipes;
  }
  

};

export default RecipeRepository;