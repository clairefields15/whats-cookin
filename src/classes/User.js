class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.filteredFavs = [];
  }

  addRecipeToCookList(recipe) {
    this.recipesToCook.push(recipe);
  }

  addToFavorites(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeFromCookList(id) {
    this.recipesToCook.forEach((item, index) => {
      if (item.id === id) {
        this.recipesToCook.splice(index, 1);
      }
    });
  }

  removeFromFavorites(id) {
    this.favoriteRecipes.forEach((item, index) => {
      if (item.id === id) {
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
    this.filteredFavs = filteredFavoriteRecipes;
  }

  filterFavsByName(names) {
    const filteredRecipes = names.reduce((acc, name) => {
      this.favoriteRecipes.forEach(recipe => {
        const recipeNames = recipe.name;
        if (recipeNames.includes(name) && !acc.includes(name)) {
          acc.push(recipe);
        }
      });
      return acc;
    }, []);
    this.filteredFavs = filteredRecipes;
  }

  filterByIngredients(ingredients) {
    const filteredRecipes = ingredients.reduce((acc, ingredient) => {
      this.favoriteRecipes.forEach(recipe => {
        const recipeIngredients = recipe.getIngredientNames();
        if (
          recipeIngredients.includes(ingredient) &&
          !acc.includes(ingredient)
        ) {
          acc.push(recipe);
        }
      });
      return acc;
    }, []);
    this.filteredFavs = filteredRecipes;
  }

}

export default User