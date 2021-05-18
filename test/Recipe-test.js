const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/classes/Recipe')

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

    recipe = new Recipe(recipeData);
    ingredient = new Ingredient()
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

  it('should have a way to determine the names of ingredients needed', () => {
    const ingredients = recipe.ingredientsNeeded();
    expect(ingredients).to.equal()

  })

  it.skip('should be able to get the cost of the ingredients', () => {

  })

  it.skip('should return it/s instructions', () => {

  })

});
