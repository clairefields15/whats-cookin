import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import { recipeTestData } from '../src/data/recipe-test-data'; 
import Recipe from '../src/classes/Recipe';

describe('RecipeRepository', () => {
  let recipeRepository, recipe1, recipe2;

  beforeEach(() => {
    recipe1 = new Recipe(recipeTestData[0]);
    recipe2 = new Recipe(recipeTestData[1]);
    const data = [recipe1, recipe2];
    recipeRepository = new RecipeRepository(data);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should have a property to hold recipe data', () => {
    expect(recipeRepository.recipesData).to.equal(recipeTestData);
  })

  it('should have a way to store different lists of filtered recipes', () => {
    expect(recipeRepository).to.have.property('filteredByTag');
    expect(recipeRepository).to.have.property('filteredByNameOrIngredient');
    expect(recipeRepository.filteredByTag).to.deep.equal([]);
    expect(recipeRepository.filteredByNameOrIngredient).to.deep.equal([]);

  });

  it('Should have a method that retrieves recipes by a tag', () => {
    recipeRepository.filterByTag(['lunch']);
    expect(recipeRepository.filteredByTag).to.deep.equal([recipe2])
  })

  it('Should have a method that retrieves recipes by multiple tags', () => {
    recipeRepository.filterByTag(['lunch', 'snack']);
    expect(recipeRepository.filteredByTag).to.deep.equal([recipe2, recipe1])
  })

  it('Should be able to filter recipes by any ingredient', () => {
    recipeRepository.filterByNameOrIngredient(['wheat flour']);
    expect(recipeRepository.filteredByNameOrIngredient).to.deep.equal([
      recipe1
    ]);
  })

  it('Should be able to filter recipes by any name', () => {
    recipeRepository.filterByNameOrIngredient([
      'loaded chocolate chip pudding cookie cups'
    ]);
    expect(recipeRepository.filteredByNameOrIngredient).to.deep.equal([
      recipe1
    ]);
  })

})
