import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import User from '../src/classes/User';
import { userData } from '../src/data/users';

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User("Saige O'Kon",1)
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


//id, pantry, favoriteRecipes, recipesToCook, ...more?
});