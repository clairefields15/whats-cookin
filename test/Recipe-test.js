const chai = require('chai');
const expect = chai.expect;

import Recipe from '../src/classes/Recipe'
import Ingredient from '../src/classes/Ingredient'

describe('Recipe', () => {
  let recipe, ingredient;

  beforeEach(() => {
    const recipeData = {
      id: 123456,
      image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
      ingredients: [{
        id: 20081,
        quantity: {
          amount: 1.5,
          unit: 'c'
        }
      },
      {
        id: 18372,
        quantity: {
          amount: 0.5,
          unit: 'tsp'
        }
      }],
      instructions: [
        {
          "instruction": "In a large bowl, whisk together the dry ingredients.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        }
      ],
      name: "Chocolate Chip Cookies",
      tags: ["starter", "snack", "appetizer"]
    };

    const ingredientData = {id: 20081, name: "wheat flour", cost: 142}

    recipe = new Recipe(recipeData);
  });

  it('should instantiate a new Recipe', () => {
    expect(recipe).to.be.an.instanceOf(Recipe)
  })

  it('should have an id', () => {
    expect(recipe.id).to.equal(123456);
  });

  it('should have image', () => {
    expect(recipe.image).to.equal(
      'https://spoonacular.com/recipeImages/595736-556x370.jpg'
    );
  });

  it('should have an array of ingredients', () => {
    const ingredients = [
      {
        id: 20081,
        quantity: {
          amount: 1.5,
          unit: 'c'
        }
      },
      {
        id: 18372,
        quantity: {
          amount: 0.5,
          unit: 'tsp'
        }
      }
    ];
    expect(recipe.ingredients).to.deep.equal(ingredients)
  });

  it('should have an array of instructions', () => {
    const instructions = [
      {
        instruction: 'In a large bowl, whisk together the dry ingredients.',
        number: 1
      },
      {
        instruction: 'Add egg and vanilla and mix until combined.',
        number: 2
      }
    ];
    expect(recipe.instructions).to.deep.equal(instructions)
  });
  
  it('should have a name', () => {
    expect(recipe.name).to.equal('Chocolate Chip Cookies');
  });

  it('should have an array of tags', () => {
    const tags = ['starter', 'snack', 'appetizer'];
    expect(recipe.tags).to.deep.equal(tags)
  });

  it('should have a way to return the names of ingredients needed', () => {
    const ingredients = recipe.getIngredients();
    const answer = [
      {
        id: 20081,
        name: 'wheat flour',
        estimatedCostInCents: 142,
        amount: 1.5,
        unit: 'c'
      },
      {
        id: 18372,
        name: 'bicarbonate of soda',
        estimatedCostInCents: 582,
        amount: 0.5,
        unit: 'tsp'
      }
    ]
    expect(ingredients).to.deep.equal(answer)
  })

  it('should be able to get the cost of the ingredients', () => {
    const cost = recipe.getRecipeCost();
    const answer = "$5.04"
    
    expect(cost).to.equal(answer)
  })

  it.skip('should return it/s instructions', () => {

  })

});
