const divide = function(x, y){
return x/y;

// indexTest.js
const divide = require('../index'); // Adjust the path based on your file structure
const { expect } = require('chai'); // Assuming you are using the Chai assertion library

// Test case for dividing 2000 by 100
describe('Testing divide function', () => {
    it('should divide 2000 by 100', () => {
        const result = divide(2000, 100);
        expect(result).to.equal(20); // Asserting the result should be 20
    });
});

    };
const square =(P)=> {
    return P * P;
};

const add = (x, y) =>{
    return x + y;

};
module.exports= {square ,divide,  add};