const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

// data in memory
const catBreeds = {
  'Balinese': "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.",
  'Bombay': "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
};

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {

    let expectedDescription = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    let actual = breedDetails('Bombay');
    assert.equal(actual, expectedDescription);
  });

  it("should return breed details for the Balinese breed", () => {
    let expected = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
    let actual = breedDetails('Balinese');
    assert.equal(actual, expected);
  });

  it("should returned undefined when passed a breed that doesn't exist", () => {
    assert.isUndefined(breedDetails('Crocodile'));
  })
});

