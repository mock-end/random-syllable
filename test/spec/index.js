var expect = require('chai').expect;

describe('random-syllable: ', function () {

  var randomSyllable = require('../../');

  it('randomSyllable()', function () {
    expect(randomSyllable()).to.be.a('string');

    for (var i = 0; i < 1000; i++) {
      expect(randomSyllable()).to.be.have.length.within(2, 3);
    }
  });

  it('randomSyllable({ length: 2})', function () {
    for (var i = 0; i < 1000; i++) {
      expect(randomSyllable({ length: 2 })).to.be.have.length(2);
    }
  });
});
