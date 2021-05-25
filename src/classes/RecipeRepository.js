class RecipeRepository {
  constructor(recipes) {
    this.recipesData = recipes;
    this.filteredByTag = [];
    this.filteredByNameOrIngredient = [];
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
    this.filteredByTag = filteredRecipes;
  }
 
  filterByNameOrIngredient(inputs) {
    const filteredRecipes = inputs.reduce((acc, item) => {
      
      this.recipesData.forEach(recipe => {
        const recipeNames = recipe.name.toLowerCase();
        if (recipeNames.includes(item) && !acc.includes(recipe)) {
          acc.push(recipe)
        }
      });
      
      this.recipesData.forEach(recipe => {
        const recipeIngredients = recipe.getIngredientNames();
        const splitIngredients = recipeIngredients
          .map(ingredient => ingredient.split(' '))
          .flat();
        if (
          splitIngredients.includes(item) &&
          !acc.includes(recipe)
        ) {
          acc.push(recipe);
        }
      });

      return acc;
    }, []);

    this.filteredByNameOrIngredient = filteredRecipes;
  }

};

export default RecipeRepository;