import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/Ingredient';
import { ingredientsData } from '../src/data/ingredients';
import { recipeData } from '../src/data/recipes';
import { recipeTestData } from '../src/data/recipe-test-data'; 
import Recipe from '../src/classes/Recipe';

describe('RecipeRepository', () => {
  let recipeRepository, recipe1, recipe2, recipe3;

  beforeEach(() => {
    recipeRepository = new RecipeRepository();
    recipe1 = new Recipe(recipeData[0]);
    recipe2 = new Recipe(recipeData[1]);
    recipe3 = new Recipe(recipeData[2]);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should have a parameter of recipe data', () => {

  })

})