import Recipe from './Recipe';
import Ingredient from './Ingredient';
import { ingredientsData } from "../data/ingredients";
import { recipeData } from "../data/recipes";
import { recipeTestData } from '../data/recipe-test-data'
class RecipeRepository {
  constructor(recipes) {
    this.recipesData = recipes;
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

};

export default RecipeRepository;

