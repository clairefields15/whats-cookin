import Ingredient from './Ingredient';
class Recipe {
  constructor(recipeData, ingData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
    this.ingredientData = ingData.ingredientsData.filter(ingredient => ingredient.name && ingredient.id);
  }

  getIngredients() {
    const matchedIngredients = this.ingredients.map(ingredient => {
      const foundIngredient = this.ingredientData.find(
        data => data.id === ingredient.id
      );
      const newObj = Object.assign(foundIngredient, ingredient);
      const ingredient1 = new Ingredient(newObj);
      return ingredient1;
    });
    return matchedIngredients;
  }

  getIngredientNames() {
    const matchedIngredients = this.ingredients.map(ingredient => {
      const foundIngredient = this.ingredientData.find(
        data => data.id === ingredient.id
      );
      const newObj = Object.assign(foundIngredient, ingredient);
      const ingredient1 = new Ingredient(newObj);
      return ingredient1.name;
    });
    return matchedIngredients;
  }

  getRecipeCost() {
    const ingredients = this.getIngredients();
    const total = ingredients.reduce((acc, item) => {
      acc += item.amount * item.estimatedCostInCents;
      return acc;
    }, 0);
    const costInDollars = (total / 100).toFixed(2);
    return `$${costInDollars}`;
  }

  getRecipeInstructions() {
    return this.instructions;
  }
}

export default Recipe;
