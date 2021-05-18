const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/classes/Recipe')

describe('Recipe', () => {
  
  it('should instantiate a new Recipe', () => {
    const recipe = new Recipe()
    expect(recipe).to.be.an.instanceOf(Recipe)
  })




});
