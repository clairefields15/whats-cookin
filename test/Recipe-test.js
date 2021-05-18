const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/classes/Recipe')

describe('Recipe', () => {
  let recipe;

  beforeEach(() => {
    recipe = new Recipe(
      123456,
      'https://spoonacular.com/recipeImages/595736-556x370.jpg',
      [{
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
      [
        {
          "instruction": "In a large bowl, whisk together the dry ingredients.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        }
      ],
      "Chocolate Chip Cookies",
      ["starter", "snack", "appetizer"]
    );
  });

  it('should instantiate a new Recipe', () => {
    const recipe = new Recipe()
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

  it.skip('should have an array of ingredients', () => {
    //expect
  });

  it.skip('should have an array of instructions', () => {
    //expect
  });
  
  it.skip('should have a name', () => {
    //expect
  });

  it.skip('should have an array of tags', () => {
    //expect
  });

});
