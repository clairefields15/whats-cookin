class Ingredient {
  constructor(ingredientData) {
    this.id = ingredientData.id;
    this.name = ingredientData.name;
    this.estimatedCostInCents = ingredientData.estimatedCostInCents;
    this.amount = ingredientData.quantity.amount;
    this.unit = ingredientData.quantity.unit;
  }
}

export default Ingredient;