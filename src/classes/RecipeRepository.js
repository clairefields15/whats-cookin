import Recipe from './Recipe';
import Ingredient from './Ingredient';
import { ingredientsData } from "../data/ingredients";
import { recipeData } from "../data/recipes";
import { recipeTestData } from '../data/recipe-test-data'
class RecipeRepository {
  constructor(recipes) {
    this.recipesData = recipes;
  }

  filterByTag(tag) {
    let results = this.recipesData.filter(recipe => recipe.tags.includes(tag))
    return results
  }
}

export default RecipeRepository;
