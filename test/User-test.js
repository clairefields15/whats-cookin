import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import User from '../src/classes/User';
import { userData } from '../src/data/users';

describe('User', () => {
  let user, pantry;

  beforeEach(() => {
    pantry = [
      {
        "ingredient": 11297,
        "amount": 4
      },
      {
        "ingredient": 1082047,
        "amount": 10
      },
      {
        "ingredient": 20081,
        "amount": 5
      },
      {
        "ingredient": 11215,
        "amount": 5
      },
      {
        "ingredient": 2047,
        "amount": 6
      }
    ]
    user = new User("Saige O'Kon", 1, pantry)
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

  it('should have a pantry of ingredients', () => {
    expect(user.pantry).to.deep.equal(pantry)
  })

  it('should have favorite recipes', () => {
    expect(user.favoriteRecipes).to.deep.equal()
  })

  it('should have a list of recipes to cook', () => {
    expect(user.recipesToCook).to.deep.equal()
  })


});