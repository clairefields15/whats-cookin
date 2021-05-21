import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe'
import { recipeTestData } from '../src/data/recipe-test-data'; 
import { recipeData } from '../src/data/recipes';


describe('User', () => {
  let user, recipeRepository, recipe1, recipe2;

  beforeEach(() => {
    user = new User("Saige O'Kon", 1)
    recipeRepository = new RecipeRepository(recipeTestData);
    recipe1 = new Recipe(recipeData[0]);
    recipe2 = new Recipe(recipeData[1]);
  })

  it('should instantiate a new User', () => {
    expect(user).to.be.an.instanceOf(User)
  })

  it('should have a name', () => {
    expect(user.name).to.equal("Saige O'Kon")
  })

  it('should have an id', () => {
    expect(user.id).to.equal(1)
  })

  it('should have a list of favorite recipes', () => {
    expect(user).to.have.property('favoriteRecipes')
  })

  it('should have a list of recipes to cook', () => {
    expect(user).to.have.property('recipesToCook');
  })


});