class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.favsByTag = [];
    this.favsByNameOrIngredient = []
  }

  addRecipeToCookList(recipe) {
    this.recipesToCook.push(recipe);
  }

  addToFavorites(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeFromFavorites(id) {
    this.favoriteRecipes.forEach((item, index) => {
      if (item.id === parseInt(id)) {
        this.favoriteRecipes.splice(index, 1);
      }
    });
  }

  filterByTag(tags) {
    const filteredFavoriteRecipes = tags.reduce((acc, tag) => {
      this.favoriteRecipes.forEach(recipe => {
        if (recipe.tags.includes(tag) && !acc.includes(recipe)) {
          acc.push(recipe);
        }
      });
      return acc;
    }, []);
    this.favsByTag = filteredFavoriteRecipes;
  }

  filterFavsByNameOrIngredient(inputs) {
    const filteredRecipes = inputs.reduce((acc, item) => {
      this.favoriteRecipes.forEach(recipe => {
        const recipeNames = recipe.name.toLowerCase();
        if (recipeNames.includes(item) && !acc.includes(recipe)) {
          acc.push(recipe);
        }
      });
      
      this.favoriteRecipes.forEach(recipe => {
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

    this.favsByNameOrIngredient = filteredRecipes
  }

}

export default User