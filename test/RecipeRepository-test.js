import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/Ingredient';
import { ingredientsData } from '../src/data/ingredients';
import { recipeData } from '../src/data/recipes';
import { recipeTestData } from '../src/data/recipe-test-data'; 
import Recipe from '../src/classes/Recipe';

describe('RecipeRepository', () => {
  let recipeRepository, recipe1, recipe2, recipeData1;

  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeTestData);
    //recipe1 = new Recipe(recipeData[0]);
    //recipe2 = new Recipe(recipeData[1]);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should have a property to hold recipe data', () => {
    expect(recipeRepository.recipesData).to.equal(recipeTestData);
  })

})