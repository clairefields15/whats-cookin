import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import User from '../src/classes/User';
import { userData } from '../src/data/users';

describe('User', () => {
  
  it('should instantiate a new User', () => {
    const user = new User()
    expect(user).to.be.an.instanceOf(User)
  })



});