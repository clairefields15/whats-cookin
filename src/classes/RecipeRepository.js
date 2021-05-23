class RecipeRepository {
  constructor(recipes) {
    this.recipesData = recipes;
    this.filteredByTag = [];
    this.filteredNyName = [];
    this.filteredByIngredient= [];
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
    this.filteredByIngredient = filteredRecipes;
  }

  filterByName(names) {
    const filteredRecipes = names.reduce((acc, name) => {
      this.recipesData.forEach(recipe => {
        const recipeNames = recipe.name;
        if(recipeNames.includes(name) && !acc.includes(name)) {
          acc.push(recipe)
        }
      });
      return acc
    }, []);
    this.filteredNyName = filteredRecipes;
  }
  

};

export default RecipeRepository;