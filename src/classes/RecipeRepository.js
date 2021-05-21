class RecipeRepository {
  constructor(recipes) {
    this.recipesData = recipes;
    this.filteredRecipes = null;
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
    this.filteredRecipes = filteredRecipes;
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
    return filteredRecipes;
  }
  

};

export default RecipeRepository;