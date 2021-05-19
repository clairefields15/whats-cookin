const chai = require('chai');
const expect = chai.expect;

import Ingredient from '../src/classes/Ingredient'

describe('Ingredient', () => {
  let ingredient;

  beforeEach(() => {
    ingredient = new Ingredient({id: 20081, name: "wheat flour", estimatedCostInCents: 142, amount: 1.5, unit:'c'})
      
  })
  
  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  })
  
  it('should be an instance of Ingredient', () => {
    expect(ingredient).to.be.an.instanceOf(Ingredient);
  });

  it('should have an id', () => {
    expect(ingredient.id).to.equal(20081)
  })
  
  it('should have a name', () => {
    expect(ingredient.name).to.equal('wheat flour')
  })

  it('should have a cost in cents', () => {
    expect(ingredient.estimatedCostInCents).to.equal(142)
  })

  it('should have an amount', () => {
    expect(ingredient.amount).to.equal(1.5)
  })

  it('should have an unit', () => {
    expect(ingredient.unit).to.equal('c')
  })

  
});