const isStartNumberSmallThanEndNumber = require('../main');
const isInRangeOfOneToThousand= require('../main');
const createMuiltiplicationResult= require('../main');
const printMuiltplicationTable= require('../main');
it ('should return true when startnumber smaller than endnumber', () => {
    expect( isStartNumberSmallThanEndNumber(2, 3)).toBe(true);
});
it ('should return true when startnumber is equal to endnumber', () => {
    expect( isStartNumberSmallThanEndNumber(3, 3)).toBe(true);
});
it ('should return true when startnumber and endnumber can be any number in a range of 1 to 1000 ', () => {
    expect(isInRangeOfOneToThousand(4, 5)).toBe(true);
});
it ('should return equal when startnumber is 2 and endnumber is 4,the output should be something like 2*2...', () => {
          expect(createMuiltiplicationResult(2, 4)).toBe("2*2=4\r\n2*3=6  3*3=9\r\n2*4=8  3*4=12  4*4=16");
   });
it ('should return string when startnumber is 2 and endnumber is 4,the output should be something like 2*2...', () => {
          expect(printMuiltplicationTable(2, 4)).toBe("2*2=4\r\n2*3=6  3*3=9\r\n2*4=8  3*4=12  4*4=16");
   });
 it ('should return null when startnumber is 5 and endnumber is 4', () => {
            expect(printMuiltplicationTable(5, 4)).toBe(null);
     });
  it ('should return null when startnumber is 0 and endnumber is 1001', () => {
              expect(printMuiltplicationTable(0, 1001)).toBe(null);
       });