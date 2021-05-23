import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/Ingredient';
import { ingredientsData } from '../src/data/ingredients';
import { recipeData } from '../src/data/recipes';
import { recipeTestData } from '../src/data/recipe-test-data'; 
import Recipe from '../src/classes/Recipe';

describe('RecipeRepository', () => {
  let recipeRepository, recipe1, recipe2;

  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeTestData);
    recipe1 = new Recipe(recipeData[0]);
    recipe2 = new Recipe(recipeData[1]);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should have a property to hold recipe data', () => {
    expect(recipeRepository.recipesData).to.equal(recipeTestData);
  })

  it('should have a way to store different lists of filtered recipes', () => {
    expect(recipeRepository).to.have.property('filteredByTag');
    expect(recipeRepository).to.have.property('filteredByName');
    expect(recipeRepository).to.have.property('filteredByIngredient');
    expect(recipeRepository.filteredByTag).to.deep.equal([]);
    expect(recipeRepository.filteredByName).to.deep.equal([]);
    expect(recipeRepository.filteredByIngredient).to.deep.equal([]);

  });

  it('Should have a method that retrieves recipes by a tag', () => {
    const recipesByTag = recipeRepository.filterByTag(['lunch']);
    expect(recipeRepository.filteredByTag).to.deep.equal([recipe2])
  })

  it('Should have a method that retrieves recipes by multiple tags', () => {
    const recipesByTag = recipeRepository.filterByTag(['lunch', 'snack']);

    expect(recipeRepository.filteredByTag).to.deep.equal([recipe2, recipe1])
  })

  it('Should be able to filter recipes by any ingredient', () => {
    recipe1 = new Recipe(recipeData[0]);
    recipe2 = new Recipe(recipeData[1]);
    const data = [recipe1, recipe2]
    recipeRepository = new RecipeRepository(data);

    const recipesByIngredient = recipeRepository.filterByIngredients(['wheat flour']);

    expect(recipeRepository.filteredByIngredient).to.deep.equal([recipe1]);
  })

  it('Should be able to filter recipes by any name', () => {
    recipe1 = new Recipe(recipeData[0]);
    recipe2 = new Recipe(recipeData[1]);
    const data = [recipe1, recipe2]
    recipeRepository = new RecipeRepository(data);

    const recipesByName = recipeRepository.filterByName(['loaded chocolate chip pudding cookie cups']);

    expect(recipeRepository.filteredByName).to.deep.equal([recipe1]);
  })

})

// edge case scenarios for search bar:
// (double spaces like "wheat  flour")
// random characters (%$&)
