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

  removeFromCookList(id) {
    this.recipesToCook.forEach((item, index) => {
      if (item.id === id) {
        this.recipesToCook.splice(index, 1);
      }
    })
  }

  removeFromFavorites(id) {
    this.favoriteRecipes.forEach((item, index) => {
      if (item.id === id) {
        this.favoriteRecipes.splice(index, 1)
      }
    })
  }

}

export default User