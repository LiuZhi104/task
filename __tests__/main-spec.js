const isStartNumberSmallThanEndNumber = require('../main');
const isInRangeOfOneToThousand= require('../main');
const createMuiltiplicationResult= require('../main');

it ('should return true when startnumber smaller than endnumber', () => {
    expect( isStartNumberSmallThanEndNumber(2, 3)).toBe(true);
});
it ('should return true when startnumber is equal to endnumber', () => {
    expect( isStartNumberSmallThanEndNumber(3, 3)).toBe(true);
});
it ('should return true when startnumber and endnumber can be any number in a range of 1 to 1000 ', () => {
    expect(isInRangeOfOneToThousand(4, 5)).toBe(true);
});
it ('should return string when startnumber is 2 and endnumber is 4,the output should be something like 2*2...', () => {
          expect(createMuiltiplicationResult(2, 4)).toBe({"2*2","2*3","2*4","3*3","3*4","4*4"});
   });