var range = require("./");

it('Returns an array of nums from start to end', function(){

  expect(range(10, 15)).to.deep.equal([10, 11, 12, 13, 14]);
  expect(range(5)).to.deep.equal([0, 1, 2, 3, 4]);

});
