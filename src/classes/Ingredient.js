class Ingredient {
  constructor(ingredientData) {
    this.id = ingredientData.id;
    this.name = ingredientData.name;
    this.cost = ingredientData.cost;
  }
}

module.exports = Ingredient;