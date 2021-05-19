import Ingredient from './Ingredient';
import { ingredientsData } from "../data/ingredients";
class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
  }

  getIngredients() {
    const matchedIngredients = this.ingredients.map(ingredient => {
      const foundIngredient = ingredientsData.find(ingredientData => ingredientData.id === ingredient.id)
      const newObj = Object.assign(foundIngredient, ingredient)
      const ingredient1 = new Ingredient(newObj)
      return ingredient1
    })
    return matchedIngredients
  }

  getRecipeCost() {
    const ingredients = this.getIngredients();
    const total = ingredients.reduce((acc, item) =>{
      acc += item.amount * item.estimatedCostInCents;
      return acc
    }, 0)
    return `$${total/100}`
  }

  getRecipeInstructions(){
    return this.instructions;
  }
}

export default Recipe