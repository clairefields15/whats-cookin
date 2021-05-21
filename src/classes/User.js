class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addRecipeToCookList(recipe) {
    this.recipesToCook.push(recipe)
  }

  addToFavorites(recipe) {
    this.favoriteRecipes.push(recipe)
  }

}

export default User