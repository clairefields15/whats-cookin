import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe'
import { recipeTestData } from '../src/data/recipe-test-data'; 
import { recipeData } from '../src/data/recipes';


describe('User', () => {
  let user, recipeRepository, recipe1, recipe2, data;

  beforeEach(() => {
    user = new User("Saige O'Kon", 1)
    recipe1 = new Recipe(recipeTestData[0]);
    recipe2 = new Recipe(recipeTestData[1]);
    data = [recipe1, recipe2]
    recipeRepository = new RecipeRepository(data);
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
    expect(user.favoriteRecipes).to.deep.equal([])
  })

  it('should have a list of recipes to cook', () => {
    expect(user).to.have.property('recipesToCook');
    expect(user.recipesToCook).to.deep.equal([]);
  })

  it('should have a way to store filtered recipes', () => {
    expect(user).to.have.property('filteredFavs');
    expect(user.filteredFavs).to.deep.equal([]);
  });

  it('should be able to add recipes to a list of recipes to cook', () => {
    user.addRecipeToCookList(recipe1)
    expect(user.recipesToCook).to.deep.equal([recipe1])
  })

  it('should be able to add recipes to a list of favorites', () => {
    user.addToFavorites(recipe2)
    expect(user.favoriteRecipes).to.deep.equal([recipe2])
  })

  it('should be able to remove recipes from a list of recipes to cook', () => {
    user.addRecipeToCookList(recipe2);
    user.addRecipeToCookList(recipe1);
    user.removeFromCookList(recipe2.id);
    expect(user.recipesToCook).to.deep.equal([recipe1]);
  })

  it('should be able to remove recipes from a list of favorite recipes', () => {
    user.addToFavorites(recipe2);
    user.addToFavorites(recipe1);
    user.removeFromFavorites(recipe2.id);
    expect(user.favoriteRecipes).to.deep.equal([recipe1]);
  });

  it('should be able to filter favorite recipes by tag', () => {
    user.addToFavorites(recipe2);
    user.addToFavorites(recipe1);
    const favoritesByTag = user.filterByTag(['lunch']);
    expect(user.filteredFavs).to.deep.equal([recipe2])
  })

  it('Should be able to filter favorite recipes by any name', () => {
    user.addToFavorites(recipe2);
    user.addToFavorites(recipe1);
    const recipesByName = user.filterFavsByName([
      'Loaded Chocolate Chip Pudding Cookie Cups'
    ]);

    expect(user.filteredFavs).to.deep.equal([recipe1]);
  });

});